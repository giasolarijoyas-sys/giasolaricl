
ALTER TABLE public.wish_list
ADD COLUMN referencias text,
ADD COLUMN image_urls text[] DEFAULT '{}'::text[];
