// app/components/security.js
const API_SECRET = process.env.NEXT_PUBLIC_API_SECRET_KEY || "7a8f6d2e1b9c4a3d5f2e8b7c6d5a4f3e2b1c9a8d7f6e5b4c3a2d1f9e8b7c6d5";

export async function generateRequestSignature(data) {
  try {
    const timestamp = Date.now();
    const payload = JSON.stringify({ ...data, timestamp });
    
    // Create a signature using the API secret
    const encoder = new TextEncoder();
    const keyData = encoder.encode(API_SECRET);
    
    // Import the key with proper parameters
    const key = await crypto.subtle.importKey(
      'raw',
      keyData,
      { 
        name: 'HMAC', 
        hash: { name: 'SHA-256' }
      },
      false,
      ['sign']
    );
    
    // Generate the signature
    const signature = await crypto.subtle.sign(
      'HMAC',
      key,
      encoder.encode(payload)
    );
    
    // Convert to hex string
    const signatureHex = Array.from(new Uint8Array(signature))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
    
    // Return both the payload and signature
    return {
      payload,
      signature: signatureHex
    };
  } catch (error) {
    console.error('Signature generation error:', error);
    throw error;
  }
}

export async function postToElo(data) {
  try {
    // Generate a unique key for this specific comparison
    const comparisonKey = `${data.topic}:${data.leftId}:${data.rightId}:${data.outcome}`;
    let transactionId;
    
    try {
      transactionId = localStorage.getItem(comparisonKey) || 
                      (crypto.randomUUID ? crypto.randomUUID() : Date.now().toString());
      // Store the key in localStorage to make it persistent
      localStorage.setItem(comparisonKey, transactionId);
    } catch (e) {
      // Handle localStorage not available (e.g., in incognito mode)
      transactionId = crypto.randomUUID ? crypto.randomUUID() : Date.now().toString();
    }
    
    // Generate a signature for the request
    const { payload, signature } = await generateRequestSignature({
      ...data,
      transactionId
    });
    
    const response = await fetch('/api/elo', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'X-Request-Signature': signature
      },
      body: payload
    });
    
    // Handle response as before
    if (response.status === 429) {
      const errorData = await response.json();
      const retryAfter = errorData.retryAfter || 10;
      throw new Error(`Rate limit exceeded. Please try again in ${retryAfter} seconds.`);
    }
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `HTTP error! Status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error in postToElo:", error);
    throw error;
  }
}

export async function ensureTable(topic) {
  try {
    let transactionId;
    
    try {
      transactionId = localStorage.getItem(`ensure-table:${topic}`) || 
                      (crypto.randomUUID ? crypto.randomUUID() : Date.now().toString());
      localStorage.setItem(`ensure-table:${topic}`, transactionId);
    } catch (e) {
      // Handle localStorage not available
      transactionId = crypto.randomUUID ? crypto.randomUUID() : Date.now().toString();
    }
    
    // Generate a signature for the request
    const { payload, signature } = await generateRequestSignature({
      topic,
      transactionId
    });
    
    const response = await fetch('/api/ensure-table', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'X-Request-Signature': signature
      },
      body: payload
    });
    
    if (response.status === 429) {
      const errorData = await response.json();
      const retryAfter = errorData.retryAfter || 10;
      throw new Error(`Rate limit exceeded. Please try again in ${retryAfter} seconds.`);
    }
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `HTTP error! Status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error in ensureTable:", error);
    throw error;
  }
}
