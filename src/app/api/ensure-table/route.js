// app/api/ensure-table/route.js
import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from 'uuid';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request) {
  try {
    const { topic, transactionId } = await request.json();
    
    // Generate a transaction ID if not provided
    const txId = transactionId || uuidv4();
    
    // Check if this transaction has already been processed
    const { data: existingTx, error: txError } = await supabase
      .from('api_transactions')
      .select('transaction_id')
      .eq('transaction_id', txId)
      .single();
    
    if (txError && txError.code !== 'PGRST116') {
      return Response.json({ error: 'Error checking transaction status' }, { status: 500 });
    }
    
    // If transaction already exists, return success
    if (existingTx) {
      return Response.json({ 
        success: true,
        message: 'This request has already been processed',
        alreadyProcessed: true
      });
    }
    
    // Call server-side function
    const { error } = await supabase.rpc('ensure_topic_table', { 
      p_topic: topic 
    });
    
    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }
    
    // Store the transaction
    await supabase
      .from('api_transactions')
      .insert({
        transaction_id: txId,
        topic,
        data: { operation: 'ensure_table' }
      });
    
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
