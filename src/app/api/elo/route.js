// app/api/elo/route.js
import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from 'uuid'; // You'll need to install this package

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request) {
  try {
    const { topic, leftId, rightId, leftName, rightName, outcome, transactionId } = await request.json();
    
    // Generate a transaction ID if not provided
    const txId = transactionId || uuidv4();
    
    // Check if this transaction has already been processed
    const { data: existingTx, error: txError } = await supabase
      .from('api_transactions')
      .select('transaction_id')
      .eq('transaction_id', txId)
      .single();
    
    if (txError && txError.code !== 'PGRST116') { // PGRST116 is "not found" error
      return Response.json({ error: 'Error checking transaction status' }, { status: 500 });
    }
    
    // If transaction already exists, return the stored result
    if (existingTx) {
      return Response.json({ 
        message: 'This request has already been processed',
        alreadyProcessed: true
      });
    }
    
    // Process the ELO calculation
    const { data, error } = await supabase.rpc('calculate_elo', { 
      p_topic: topic,
      p_left_id: leftId,
      p_right_id: rightId,
      p_left_name: leftName,
      p_right_name: rightName,
      p_outcome: outcome,
      p_ip: null,
      p_user_agent: null
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
        data: {
          leftId,
          rightId,
          outcome,
          result: data
        }
      });
    
    return Response.json(data);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
