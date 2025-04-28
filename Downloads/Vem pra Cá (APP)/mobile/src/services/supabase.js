
import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL || "https://ihxpffdwcwjnsmbpkvgb.supabase.co",
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImloeHBmZmR3Y3dqbnNtYnBrdmdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4MjY0MDcsImV4cCI6MjA2MDQwMjQwN30.1kkz8v_rw5go2rj09mr8ynKNAe46mV0ogxKh4n3QLxk",
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  })
        