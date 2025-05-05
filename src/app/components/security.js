// app/components/security.js
const API_SECRET = process.env.NEXT_PUBLIC_API_SECRET_KEY || "7a8f6d2e1b9c4a3d5f2e8b7c6d5a4f3e2b1c9a8d7f6e5b4c3a2d1f9e8b7c6d5";

// Generate a server-verifiable nonce
export async function generateNonce(data) {
  const encoder = new TextEncoder();
  const keyData = encoder.encode(API_SECRET);
  
  const key = await crypto.subtle.importKey(
    'raw',
    keyData,
    { name: 'HMAC', hash: { name: 'SHA-256' } },
    false,
    ['sign']
  );
  
  // Create a unique string from the data that identifies this comparison
  const comparisonString = data.action === 'ensure_table' 
    ? `table:${data.topic}` 
    : `elo:${data.topic}:${data.leftId}:${data.rightId}`;
  
  const signature = await crypto.subtle.sign(
    'HMAC',
    key,
    encoder.encode(comparisonString)
  );
  
  // Return a short hash as the nonce
  return Array.from(new Uint8Array(signature.slice(0, 8)))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

export async function generateRequestSignature(data) {
  try {
    const timestamp = Date.now();
    const payload = JSON.stringify({ ...data, timestamp });
    
    const encoder = new TextEncoder();
    const keyData = encoder.encode(API_SECRET);
    
    const key = await crypto.subtle.importKey(
      'raw',
      keyData,
      { name: 'HMAC', hash: { name: 'SHA-256' } },
      false,
      ['sign']
    );
    
    const signature = await crypto.subtle.sign(
      'HMAC',
      key,
      encoder.encode(payload)
    );
    
    const signatureHex = Array.from(new Uint8Array(signature))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
    
    return {
      payload,
      signature: signatureHex
    };
  } catch (error) {
    console.error('Signature generation error:', error);
    throw error;
  }
}

export async function rankdApi(action, data) {
  try {
    // Generate a unique transaction ID for each request
    const transactionId = crypto.randomUUID ? crypto.randomUUID() : Date.now().toString();
    
    // Generate a nonce that's tied to the specific comparison
    const nonce = await generateNonce({ action, ...data });
    
    // Generate signature
    const { payload, signature } = await generateRequestSignature({
      action,
      ...data,
      transactionId,
      nonce
    });
    
    const response = await fetch('/api/rankd', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'X-Request-Signature': signature
      },
      body: payload
    });
    
    if (response.status === 429) {
      const errorData = await response.json();
      throw new Error(`Rate limit exceeded. Please try again in ${errorData.retryAfter || 10} seconds.`);
    }
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `HTTP error! Status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error in rankdApi (${action}):`, error);
    throw error;
  }
}

// Helper functions that use the unified API
export async function ensureTable(topic) {
  return rankdApi('ensure_table', { topic });
}

export async function postToElo(data) {
  return rankdApi('calculate_elo', data);
}
