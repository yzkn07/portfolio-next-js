"use client"
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cooakmqsybltysqlnmlr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvb2FrbXFzeWJsdHlzcWxubWxyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUwMjAzNDAsImV4cCI6MjAzMDU5NjM0MH0.5lzDqJD1Gm1U_CBRP6qg8b7HQnPqGPdyqXY1hDs6alw';

export const supabase = createClient(supabaseUrl, supabaseKey);
