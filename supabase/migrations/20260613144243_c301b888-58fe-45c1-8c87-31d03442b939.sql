DROP POLICY IF EXISTS "Anyone can upload quote images (restricted)" ON storage.objects;

CREATE POLICY "Anyone can upload quote images (restricted)"
ON storage.objects
FOR INSERT
WITH CHECK (
  bucket_id = 'quote-images'
  AND lower((storage.foldername(name))[1]) = ANY (ARRAY['quotes','wishlist','quiz'])
  AND COALESCE((metadata->>'size')::bigint, 0) < 10485760
  AND COALESCE(metadata->>'mimetype', '') LIKE 'image/%'
);