// app/api/elo/route.js
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client with server-side env variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY; // Use service key on server
const supabase = createClient(supabaseUrl, supabaseKey);

// Simple in-memory rate limiter storage
const requestStore = new Map();
const RATE_LIMIT = 20; // requests per minute
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
    
    const { topic, leftId, rightId, leftName, rightName, outcome } = await request.json();
    
    // Call server-side function to update ELO ratings
    const { data, error } = await supabase.rpc('calculate_elo', { 
      p_topic: topic,
      p_left_id: leftId,
      p_right_id: rightId,
      p_left_name: leftName,
      p_right_name: rightName,
      p_outcome: outcome
    });
    
    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }
    
    return Response.json(data);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
