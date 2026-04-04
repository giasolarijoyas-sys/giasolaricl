
CREATE TABLE public.wish_list (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre TEXT NOT NULL,
  email TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  nombre_pareja TEXT NOT NULL,
  fecha_cumple_pareja DATE,
  fecha_aniversario DATE,
  otras_fechas TEXT,
  preferencias TEXT NOT NULL,
  tipo_joya TEXT,
  metal_preferido TEXT,
  piedra_preferida TEXT,
  presupuesto_aproximado TEXT,
  notas TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.wish_list ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit wish list"
ON public.wish_list
FOR INSERT
TO anon, authenticated
WITH CHECK (true);
