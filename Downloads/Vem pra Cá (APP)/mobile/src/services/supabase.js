import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ihxpffdwcwjnsmbpkvgb.supabase.co'; // pegue no dashboard do Supabase
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImloeHBmZmR3Y3dqbnNtYnBrdmdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4MjY0MDcsImV4cCI6MjA2MDQwMjQwN30.1kkz8v_rw5go2rj09mr8ynKNAe46mV0ogxKh4n3QLxk'; // pegue no dashboard também

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
