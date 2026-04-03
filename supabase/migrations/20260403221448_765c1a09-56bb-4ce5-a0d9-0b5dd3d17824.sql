
ALTER TABLE public.quotes
  ADD COLUMN IF NOT EXISTS quiz_answers jsonb DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS recommendation jsonb DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS confidence_score numeric DEFAULT NULL;
