const API_SECRET = process.env.API_SECRET_KEY || "7a8f6d2e1b9c4a3d5f2e8b7c6d5a4f3e2b1c9a8d7f6e5b4c3a2d1f9e8b7c6d5";

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
    const { topic, transactionId, timestamp } = data;
    
    // Check if request is too old (prevent replay attacks)
    const now = Date.now();
    if (timestamp && (now - timestamp > 300000)) { // 5 minutes
      return Response.json({ error: 'Request expired' }, { status: 400 });
    }
    
    // Check rate limiting
    const clientKey = `ensure-table:${ip}`;
    const clientData = rateLimits.get(clientKey) || { count: 0, resetAt: now + RATE_WINDOW };
    
    // Reset counter if window expired
    if (now > clientData.resetAt) {
      clientData.count = 0;
      clientData.resetAt = now + RATE_WINDOW;
    }
    
    // Check if rate limit exceeded
    if (clientData.count >= RATE_LIMIT) {
      return Response.json({ 
        error: 'Too many requests. Please try again later.',
        retryAfter: Math.ceil((clientData.resetAt - now) / 1000)
      }, { 
        status: 429,
        headers: {
          'Retry-After': Math.ceil((clientData.resetAt - now) / 1000)
        }
      });
    }
    
    // Check for duplicate transaction
    if (transactionId) {
      const { data: existingTx, error: txError } = await supabase
        .from('api_transactions')
        .select('data')
        .eq('transaction_id', transactionId)
        .single();
      
      if (!txError && existingTx) {
        // Return the cached result for this transaction
        return Response.json(existingTx.data);
      }
    }
    
    // Increment counter
    clientData.count++;
    rateLimits.set(clientKey, clientData);
    
    // Call server-side function
    const { error } = await supabase.rpc('ensure_topic_table', { 
      p_topic: topic 
    });
    
    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }
    
    const result = { success: true };
    
    // Store the transaction result
    if (transactionId) {
      await supabase.from('api_transactions').insert({
        transaction_id: transactionId,
        topic,
        data: result
      });
    }
    
    return Response.json(result);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
