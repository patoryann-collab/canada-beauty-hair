import { createClient } from '@supabase/supabase-js'

// Configuration Dolls-Store
const supabaseUrl = 'https://aefpeztckvaflxmqznnm.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlZnBlenRja3ZhZmx4bXF6bm5tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2ODI3ODksImV4cCI6MjA4NTI1ODc4OX0.GCNTDi1D652A6sekayjXyli1Wfy6mMcr9a3jhFfnecI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)