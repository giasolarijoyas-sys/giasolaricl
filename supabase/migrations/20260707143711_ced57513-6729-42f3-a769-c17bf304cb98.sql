CREATE TABLE public.cotizaciones (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  pieza TEXT,
  metal TEXT,
  piedra TEXT,
  estilo TEXT,
  tamano TEXT,
  presupuesto TEXT,
  rango_min BIGINT,
  rango_max BIGINT,
  con_referencias BOOLEAN NOT NULL DEFAULT false,
  origen_pieza TEXT
);

GRANT INSERT ON public.cotizaciones TO anon, authenticated;
GRANT ALL ON public.cotizaciones TO service_role;

ALTER TABLE public.cotizaciones ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert cotizaciones"
ON public.cotizaciones
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Admins can read cotizaciones"
ON public.cotizaciones
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));