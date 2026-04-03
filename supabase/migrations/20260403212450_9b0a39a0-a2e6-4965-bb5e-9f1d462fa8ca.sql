
-- Create quotes table
CREATE TABLE public.quotes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  pieza TEXT NOT NULL,
  metal TEXT NOT NULL,
  piedra TEXT,
  forma TEXT,
  quilates TEXT,
  estilo TEXT,
  engaste TEXT,
  grabado TEXT,
  referencias TEXT,
  nombre TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  email TEXT NOT NULL,
  como_nos_conociste TEXT,
  presupuesto TEXT,
  fecha_limite DATE,
  nombre_pareja TEXT,
  fecha_aniversario DATE,
  fecha_cumple_pareja DATE,
  notas_pareja TEXT,
  image_urls TEXT[] DEFAULT '{}',
  status TEXT NOT NULL DEFAULT 'nueva',
  quoted_price INTEGER,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.quotes ENABLE ROW LEVEL SECURITY;

-- Anyone can insert a quote (public form)
CREATE POLICY "Anyone can create a quote"
ON public.quotes FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only service role can read/update/delete (admin via edge functions)
-- No select/update/delete policies for anon = they can't read back

-- Create base_prices table
CREATE TABLE public.base_prices (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  category TEXT NOT NULL,
  item TEXT NOT NULL,
  price_clp INTEGER NOT NULL,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.base_prices ENABLE ROW LEVEL SECURITY;

-- Anyone can read prices (for future price estimator)
CREATE POLICY "Anyone can view base prices"
ON public.base_prices FOR SELECT
TO anon, authenticated
USING (true);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_quotes_updated_at
BEFORE UPDATE ON public.quotes
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_base_prices_updated_at
BEFORE UPDATE ON public.base_prices
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Create storage bucket for quote reference images
INSERT INTO storage.buckets (id, name, public) VALUES ('quote-images', 'quote-images', true);

-- Anyone can upload to quote-images bucket
CREATE POLICY "Anyone can upload quote images"
ON storage.objects FOR INSERT
TO anon, authenticated
WITH CHECK (bucket_id = 'quote-images');

-- Anyone can view quote images
CREATE POLICY "Anyone can view quote images"
ON storage.objects FOR SELECT
TO anon, authenticated
USING (bucket_id = 'quote-images');
