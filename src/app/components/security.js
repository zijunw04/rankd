// Make sure API_SECRET is properly defined
const API_SECRET = process.env.API_SECRET_KEY || "7a8f6d2e1b9c4a3d5f2e8b7c6d5a4f3e2b1c9a8d7f6e5b4c3a2d1f9e8b7c6d5";

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
        hash: { name: 'SHA-256' } // Use object notation for hash
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


// Verify a request signature
export async function verifyRequestSignature(request) {
  try {
    const signature = request.headers.get('x-signature');
    if (!signature) return false;
    
    // Clone the request to read the body
    const clonedRequest = request.clone();
    const body = await clonedRequest.json();
    const { timestamp } = body;
    
    // Check if timestamp is valid (within 30 seconds)
    const now = Date.now();
    if (!timestamp || Math.abs(now - timestamp) > 30000) {
      return false;
    }
    
    // Recreate the signature for verification
    const payload = JSON.stringify(body);
    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
      'raw',
      encoder.encode(API_SECRET),
      { name: 'HMAC', hash: 'SHA-256' },
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
