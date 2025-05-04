// app/api/ensure-table/route.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request) {
  try {
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
    
    // Call server-side function with rate limiting parameters
    const { error } = await supabase.rpc('ensure_topic_table_with_rate_limit', { 
      p_topic: topic,
      p_client_id: clientId.substring(0, 20),
      p_user_agent: userAgent.substring(0, 100)
    });
    
    if (error) {
      if (error.message.includes('Rate limit exceeded')) {
        return Response.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
      }
      return Response.json({ error: error.message }, { status: 500 });
    }
    
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
