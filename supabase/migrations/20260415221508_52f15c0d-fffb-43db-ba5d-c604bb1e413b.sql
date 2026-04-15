DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE policyname = 'Anyone can view quote images' AND tablename = 'objects'
  ) THEN
    EXECUTE 'CREATE POLICY "Anyone can view quote images" ON storage.objects FOR SELECT USING (bucket_id = ''quote-images'')';
  END IF;
END $$;