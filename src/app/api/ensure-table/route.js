// app/api/ensure-table/route.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request) {
  try {
    const { topic } = await request.json();
    
    // Call server-side function
    const { error } = await supabase.rpc('ensure_topic_table', { 
      p_topic: topic 
    });
    
    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }
    
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
