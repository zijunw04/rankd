// app/api/elo/route.js
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client with server-side env variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY; // Use service key on server
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request) {
  try {
    const { topic, leftId, rightId, leftName, rightName, outcome } = await request.json();
    
    // Call server-side function to update ELO ratings
    const { data, error } = await supabase.rpc('calculate_elo', { 
      p_topic: topic,
      p_left_id: leftId,
      p_right_id: rightId,
      p_left_name: leftName,
      p_right_name: rightName,
      p_outcome: outcome
    });
    
    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }
    
    return Response.json(data);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
