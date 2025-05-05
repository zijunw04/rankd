// app/rankd/utils/api.js
export async function postToElo(data) {
  try {
    // Generate a unique transaction ID
    const transactionId = crypto.randomUUID ? crypto.randomUUID() : Date.now().toString();
    
    const response = await fetch('/api/elo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...data,
        transactionId
      })
    });
    
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
    const transactionId = crypto.randomUUID ? crypto.randomUUID() : Date.now().toString();
    
    const response = await fetch('/api/ensure-table', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        topic,
        transactionId
      })
    });
    
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
