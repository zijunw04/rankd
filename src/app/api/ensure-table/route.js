// app/api/ensure-table/route.js
import { createClient } from "@supabase/supabase-js";
import { verifyRequestSignature } from "../../components/security";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request) {
  try {
    // Verify the request signature
    const isValidRequest = await verifyRequestSignature(request);
    if (!isValidRequest) {
      return Response.json({ error: 'Unauthorized request' }, { status: 403 });
    }
    
    // Check origin/referer
    const origin = request.headers.get('origin');
    const referer = request.headers.get('referer');
    const allowedOrigins = [
      process.env.NEXT_PUBLIC_SITE_URL,
      'http://localhost:3000' // For development
    ].filter(Boolean);
    
    if (!allowedOrigins.some(allowed => origin?.startsWith(allowed) || referer?.startsWith(allowed))) {
      return Response.json({ error: 'Unauthorized request origin' }, { status: 403 });
    }
    
    const { topic } = await request.json();
    const userAgent = request.headers.get('user-agent') || 'unknown';
    
    // Use a hash of user-agent instead of IP for privacy
    const clientId = await crypto.subtle.digest(
      'SHA-256',
      new TextEncoder().encode(userAgent)
    ).then(hash => Array.from(new Uint8Array(hash))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('')
    );
    
    // Call server-side function
    const { error } = await supabase.rpc('ensure_topic_table_with_rate_limit', { 
      p_topic: topic,
      p_client_id: clientId.substring(0, 20),
      p_user_agent: userAgent.substring(0, 100)
    });
    
    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }
    
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
