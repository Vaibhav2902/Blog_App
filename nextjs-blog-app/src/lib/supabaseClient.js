// src/lib/supabaseClient.js

import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://smezisosdptidkjswamu.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtZXppc29zZHB0aWRranN3YW11Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI1OTY1NjgsImV4cCI6MjA0ODE3MjU2OH0.yagTuM8sUOqpJIDiRfEQW45T17L4BOX8aN28ziIVYQQ');

// Default export
export default supabase;
