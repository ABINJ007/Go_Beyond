import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://tiyfzezotaufchplqtbm.supabase.co'; // Replace with your Supabase URL
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpeWZ6ZXpvdGF1ZmNocGxxdGJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQyNjYwNDksImV4cCI6MjA1OTg0MjA0OX0.Yp1RcAXcVSZKtDze8PPnwJtrvFiFXBnZWcFKKeZp5FA'; // Replace with your Supabase Anon Key

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
