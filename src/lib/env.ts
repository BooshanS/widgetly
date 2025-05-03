export const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
export const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!SUPABASE_URL) console.error('Missing VITE_SUPABASE_URL');
if (!SUPABASE_ANON_KEY) console.error('Missing VITE_SUPABASE_ANON_KEY'); 