// app/api/elo/route.js
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client with server-side env variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY; // Use service key on server
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request) {
  try {
    const { topic, leftId, rightId, leftName, rightName, outcome } = await request.json();
    const userAgent = request.headers.get('user-agent') || 'unknown';
    // Use a hash of user-agent instead of IP for privacy
    const clientId = await crypto.subtle.digest(
      'SHA-256',
      new TextEncoder().encode(userAgent)
    ).then(hash => Array.from(new Uint8Array(hash))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('')
    );
    
    // Call server-side function to update ELO ratings with rate limiting
    const { data, error } = await supabase.rpc('calculate_elo', { 
      p_topic: topic,
      p_left_id: leftId,
      p_right_id: rightId,
      p_left_name: leftName,
      p_right_name: rightName,
      p_outcome: outcome,
      p_ip: clientId.substring(0, 20), // Use first 20 chars of hash
      p_user_agent: userAgent.substring(0, 100) // Limit length
    });
    
    if (error) {
      if (error.message.includes('Rate limit exceeded')) {
        return Response.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
      }
      return Response.json({ error: error.message }, { status: 500 });
    }
    
    return Response.json(data);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
