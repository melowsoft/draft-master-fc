require('dotenv').config();

console.log('🔧 Testing Supabase configuration...\n');

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

console.log('Supabase URL:', supabaseUrl ? '✓ Set' : '✗ Missing');
console.log('Supabase Anon Key:', supabaseAnonKey ? '✓ Set' : '✗ Missing');

if (supabaseUrl && supabaseAnonKey) {
  console.log('\n✅ Environment variables are set');
  console.log('📋 Make sure:');
  console.log('   1. Your Supabase project is active');
  console.log('   2. Email auth is enabled in Supabase Auth settings');
  console.log('   3. You have created a "profiles" table');
} else {
  console.log('\n❌ Missing environment variables');
  console.log('Create a .env file with:');
  console.log('EXPO_PUBLIC_SUPABASE_URL=https://your-project.supabase.co');
  console.log('EXPO_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here');
}