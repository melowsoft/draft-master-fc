import { createClient, SupabaseClient } from '@supabase/supabase-js';
import Constants from 'expo-constants';

console.log('🔧 Checking Supabase configuration...');

// Check environment variables
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

console.log('Supabase URL exists:', !!supabaseUrl);
console.log('Supabase Key exists:', !!supabaseAnonKey);

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('❌ Supabase credentials not configured in environment variables');
  console.warn('Check your .env file for EXPO_PUBLIC_SUPABASE_URL and EXPO_PUBLIC_SUPABASE_ANON_KEY');
}

const isConfigured = Boolean(supabaseUrl && supabaseAnonKey);

let supabaseClient: SupabaseClient | null = null;

if (isConfigured) {
  console.log('✅ Supabase configured, creating client...');
  supabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  });
} else {
  console.warn('⚠️ Supabase not configured. Some features will be unavailable.');
}

export const supabase = supabaseClient;

export function isSupabaseConfigured(): boolean {
  return isConfigured;
}