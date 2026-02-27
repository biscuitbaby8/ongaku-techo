-- SQL definitions to execute in the Supabase SQL editor

-- 1. Create a table to store user data
CREATE TABLE public.user_data (
  user_id uuid PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  favorites jsonb DEFAULT '[]'::jsonb,
  mastered jsonb DEFAULT '[]'::jsonb,
  memos jsonb DEFAULT '{}'::jsonb,
  lessons jsonb DEFAULT '{}'::jsonb,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Turn on Row Level Security (RLS)
ALTER TABLE public.user_data ENABLE ROW LEVEL SECURITY;

-- 3. Policy: User can only select their own data
CREATE POLICY "Users can view their own user_data"
ON public.user_data
FOR SELECT
USING (auth.uid() = user_id);

-- 4. Policy: User can only insert/update their own data
CREATE POLICY "Users can insert their own user_data"
ON public.user_data
FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own user_data"
ON public.user_data
FOR UPDATE
USING (auth.uid() = user_id);

-- Optional: Automated trigger to update 'updated_at' on modify
CREATE EXTENSION IF NOT EXISTS moddatetime schema extensions;
CREATE TRIGGER handle_updated_at BEFORE UPDATE ON public.user_data
  FOR EACH ROW EXECUTE PROCEDURE moddatetime (updated_at);
