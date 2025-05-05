// app/api/rankd/route.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
const API_SECRET = process.env.API_SECRET_KEY || "7a8f6d2e1b9c4a3d5f2e8b7c6d5a4f3e2b1c9a8d7f6e5b4c3a2d1f9e8b7c6d5";

// In-memory cache for processed transactions
const processedTransactions = new Map();
// In-memory cache for request timestamps to prevent replay attacks
const recentRequests = new Map();
// Cleanup old entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [key, timestamp] of recentRequests.entries()) {
    if (now - timestamp > 300000) { // 5 minutes
      recentRequests.delete(key);
    }
  }
}, 60000); // Clean up every minute

async function verifySignature(payload, signature) {
  try {
    const encoder = new TextEncoder();
    const keyData = encoder.encode(API_SECRET);
    
    const key = await crypto.subtle.importKey(
      'raw', keyData, { name: 'HMAC', hash: { name: 'SHA-256' }}, false, ['verify']
    );
    
    const signatureBytes = new Uint8Array(
      signature.match(/.{1,2}/g).map(byte => parseInt(byte, 16))
    );
    
    return await crypto.subtle.verify('HMAC', key, signatureBytes, encoder.encode(payload));
  } catch (error) {
    console.error('Signature verification error:', error);
    return false;
  }
}

async function verifyNonce(data) {
  try {
    const { action, topic, leftId, rightId, nonce } = data;
    
    // Create the same comparison string as on the client
    const comparisonString = action === 'ensure_table' 
      ? `table:${topic}` 
      : `elo:${topic}:${leftId}:${rightId}`;
    
    const encoder = new TextEncoder();
    const keyData = encoder.encode(API_SECRET);
    
    const key = await crypto.subtle.importKey(
      'raw', keyData, { name: 'HMAC', hash: { name: 'SHA-256' }}, false, ['sign']
    );
    
    const signature = await crypto.subtle.sign(
      'HMAC',
      key,
      encoder.encode(comparisonString)
    );
    
    const expectedNonce = Array.from(new Uint8Array(signature.slice(0, 8)))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
    
    return nonce === expectedNonce;
  } catch (error) {
    console.error('Nonce verification error:', error);
    return false;
  }
}

export async function POST(request) {
  try {
    const signature = request.headers.get('X-Request-Signature');
    const payload = await request.text();
    
    // Verify signature
    if (signature && !(await verifySignature(payload, signature))) {
      return Response.json({ error: 'Invalid signature' }, { status: 403 });
    }
    
    const data = JSON.parse(payload);
    const { action, topic, transactionId, timestamp, nonce, leftId, rightId, leftName, rightName, outcome } = data;
    
    // Verify the nonce is correct for this specific comparison
    if (!await verifyNonce(data)) {
      return Response.json({ error: 'Invalid request' }, { status: 403 });
    }
    
    // Prevent replay attacks with timestamp
    const now = Date.now();
    if (timestamp && (now - timestamp > 300000)) { // 5 minutes
      return Response.json({ error: 'Request expired' }, { status: 400 });
    }
    
    // Check if we've seen this exact request payload recently (prevents network tab resending)
    const requestKey = payload;
    if (recentRequests.has(requestKey)) {
      return Response.json({ error: 'Duplicate request' }, { status: 400 });
    }
    
    // Mark this exact request as processed
    recentRequests.set(requestKey, now);
    
    // Check for duplicate transaction in memory
    if (transactionId && processedTransactions.has(transactionId)) {
      return Response.json(processedTransactions.get(transactionId));
    }
    
    let result;
    
    // Process based on action type
    if (action === 'ensure_table') {
      const { error } = await supabase.rpc('ensure_topic_table', { p_topic: topic });
      
      if (error) {
        return Response.json({ error: error.message }, { status: 500 });
      }
      
      result = { success: true };
    } 
    else if (action === 'calculate_elo') {
      const { data: eloResult, error } = await supabase.rpc('calculate_elo', { 
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
      
      result = eloResult;
    }
    else {
      return Response.json({ error: 'Invalid action' }, { status: 400 });
    }
    
    // Store result in memory
    if (transactionId) {
      processedTransactions.set(transactionId, result);
    }
    
    return Response.json(result);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
