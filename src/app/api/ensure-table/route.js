// app/api/ensure-table/route.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Simple in-memory rate limiter storage
const requestStore = new Map();
const RATE_LIMIT = 5; // Lower limit for table creation
const WINDOW_MS = 60 * 1000; // 1 minute

export async function POST(request) {
  try {
    // Generate a request identifier from headers that doesn't use IP
    const requestId = request.headers.get('user-agent') || 'unknown';
    
    // Check if rate limited
    const now = Date.now();
    const requestHistory = requestStore.get(requestId) || [];
    const recentRequests = requestHistory.filter(time => time > now - WINDOW_MS);
    
    if (recentRequests.length >= RATE_LIMIT) {
      return Response.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers: { 'Retry-After': '60' } }
      );
    }
    
    // Update request history
    recentRequests.push(now);
    requestStore.set(requestId, recentRequests);
    
    const { topic } = await request.json();
    
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
