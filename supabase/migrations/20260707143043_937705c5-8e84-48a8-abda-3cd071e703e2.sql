CREATE POLICY "Anyone can upload cotizador references"
ON storage.objects FOR INSERT
TO anon, authenticated
WITH CHECK (bucket_id = 'cotizador-referencias');