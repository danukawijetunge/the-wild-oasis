import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://rvtmlbkqctzwsqbmijdy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2dG1sYmtxY3R6d3NxYm1pamR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUxNTc1MjIsImV4cCI6MjA0MDczMzUyMn0.B3m61adTctdIctfLlQKN8nza7YxtAq0-qe77qb0iTnc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
