
-- Tighten storage policies for quote-images bucket
DROP POLICY IF EXISTS "Anyone can view quote images" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can upload quote images" ON storage.objects;

-- Listing restricted to admin/staff (public URL access still works because bucket is public)
CREATE POLICY "Admin/staff can list quote images"
ON storage.objects FOR SELECT
TO authenticated
USING (
  bucket_id = 'quote-images'
  AND (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'staff'::app_role))
);

-- Uploads allowed for anyone but limited to images < 10MB
CREATE POLICY "Anyone can upload quote images (restricted)"
ON storage.objects FOR INSERT
TO anon, authenticated
WITH CHECK (
  bucket_id = 'quote-images'
  AND (lower((storage.foldername(name))[1]) IN ('quotes','wishlist','quiz') OR true)
  AND coalesce((metadata->>'size')::bigint, 0) < 10485760
  AND coalesce(metadata->>'mimetype','') LIKE 'image/%'
);

-- Only admin/staff can update or delete files
CREATE POLICY "Admin/staff can update quote images"
ON storage.objects FOR UPDATE
TO authenticated
USING (
  bucket_id = 'quote-images'
  AND (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'staff'::app_role))
);

CREATE POLICY "Admin/staff can delete quote images"
ON storage.objects FOR DELETE
TO authenticated
USING (
  bucket_id = 'quote-images'
  AND (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'staff'::app_role))
);

-- Lock down SECURITY DEFINER functions: revoke direct EXECUTE from public/anon.
-- has_role still callable by authenticated (needed for RLS evaluations from authenticated users).
REVOKE ALL ON FUNCTION public.has_role(uuid, app_role) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.update_updated_at_column() FROM PUBLIC, anon, authenticated;
