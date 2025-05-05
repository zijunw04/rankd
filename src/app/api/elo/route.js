// app/api/elo/route.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
const API_SECRET = process.env.API_SECRET_KEY || "7a8f6d2e1b9c4a3d5f2e8b7c6d5a4f3e2b1c9a8d7f6e5b4c3a2d1f9e8b7c6d5";

// In-memory cache for processed transactions
const processedTransactions = new Map();

// Verify signature function
async function verifySignature(payload, signature) {
  try {
    const encoder = new TextEncoder();
    const keyData = encoder.encode(API_SECRET);
    
    const key = await crypto.subtle.importKey(
      'raw',
      keyData,
      { 
        name: 'HMAC', 
        hash: { name: 'SHA-256' }
      },
      false,
      ['verify']
    );
    
    // Convert hex signature to ArrayBuffer
    const signatureBytes = new Uint8Array(
      signature.match(/.{1,2}/g).map(byte => parseInt(byte, 16))
    );
    
    // Verify the signature
    return await crypto.subtle.verify(
      'HMAC',
      key,
      signatureBytes,
      encoder.encode(payload)
    );
  } catch (error) {
    console.error('Signature verification error:', error);
    return false;
  }
}

export async function POST(request) {
  try {
    // Get the signature from headers
    const signature = request.headers.get('X-Request-Signature');
    
    // Parse the request body
    const payload = await request.text();
    
    // Verify the signature
    if (signature && !(await verifySignature(payload, signature))) {
      return Response.json({ error: 'Invalid signature' }, { status: 403 });
    }
    
    const data = JSON.parse(payload);
    const { topic, leftId, rightId, leftName, rightName, outcome, transactionId, timestamp } = data;
    
    // Check if request is too old (prevent replay attacks)
    const now = Date.now();
    if (timestamp && (now - timestamp > 300000)) { // 5 minutes
      return Response.json({ error: 'Request expired' }, { status: 400 });
    }
    
    // Check for duplicate transaction in memory first
    if (transactionId && processedTransactions.has(transactionId)) {
      return Response.json(processedTransactions.get(transactionId));
    }
    
    // Check for duplicate transaction in database
    if (transactionId) {
      try {
        const { data: existingTx, error: txError } = await supabase
          .from('api_transactions')
          .select('data')
          .eq('transaction_id', transactionId)
          .single();
        
        if (!txError && existingTx) {
          // Cache result in memory
          processedTransactions.set(transactionId, existingTx.data);
          // Return the cached result for this transaction
          return Response.json(existingTx.data);
        }
      } catch (err) {
        // Table might not exist yet, continue with processing
        console.log("Transaction check error:", err.message);
      }
    }
    
    // Call server-side function to update ELO ratings
    const { data: result, error } = await supabase.rpc('calculate_elo', { 
      p_topic: topic,
      p_left_id: leftId,
      p_right_id: rightId,
      p_left_name: leftName,
      p_right_name: rightName,
      p_outcome: outcome,
      p_ip: null, // Don't track IP
      p_user_agent: null, // Don't track user agent
      p_transaction_id: transactionId
    });
    
    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }
    
    // Store result in memory cache
    if (transactionId) {
      processedTransactions.set(transactionId, result);
    }
    
    return Response.json(result);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
