

# Plan: Cotización por email + base de datos de precios + más testimonios

## Resumen

Tres cambios principales: (1) el formulario de cotización deja de enviar por WhatsApp y en su lugar guarda en base de datos + envía email a Macarena, (2) se crea una tabla de precios base para generar cotizaciones rápidas, y (3) se expanden los testimonios a 12 clientes.

## 1. Base de datos: tablas de cotizaciones y precios

### Tabla `quotes` (cotizaciones recibidas)
Guarda cada cotización con todos los campos del formulario actual (pieza, metal, piedra, forma, quilates, estilo, engaste, grabado, referencias, nombre, whatsapp, email, presupuesto, fecha_limite, nombre_pareja, fecha_aniversario, fecha_cumple_pareja, notas_pareja). Más un campo `status` (nueva, en_proceso, cotizada, cerrada) y `quoted_price` (precio cotizado). Sin RLS restrictivo ya que no hay auth de clientes — se usa `anon` insert + service role para lectura admin.

### Tabla `base_prices` (lista de precios actualizables)
Columnas: `id`, `category` (metal, piedra, mano_de_obra, etc.), `item` (ej: "Platino", "Diamante Natural 0.5ct"), `price_clp`, `notes`, `updated_at`. Macarena puede actualizar precios y el sistema los usa para generar cotizaciones orientativas rápidas.

### Storage bucket `quote-images`
Para guardar las imágenes de referencia que sube el cliente en el formulario.

## 2. Edge function: `process-quote`

Recibe la cotización, guarda en `quotes`, sube imágenes a storage, y envía un email a Macarena con todos los detalles formateados. Usa el Lovable AI Gateway para NO necesitar API key de email externo — en su lugar, el email se envía vía la infraestructura de Lovable Cloud (se necesita configurar dominio de email).

**Alternativa sin dominio de email:** Como configurar un dominio de email requiere DNS, en una primera versión la edge function puede guardar todo en la base de datos y notificar por WhatsApp API o simplemente Macarena revisa un panel admin. El email al cliente se implementa cuando se configure el dominio.

## 3. Cambios en `QuoteForm.tsx`

- Reemplazar `handleSubmit` para que use `supabase.functions.invoke('process-quote')` en lugar de abrir WhatsApp.
- Subir imágenes a storage bucket antes de enviar.
- Mostrar confirmación bonita al usuario después de enviar ("Tu cotización fue recibida, te contactamos en menos de 24 horas").
- El botón cambia de "Enviar por WhatsApp" a "Enviar cotización".

## 4. Testimonios expandidos (12 clientes)

Actualizar `Testimonials.tsx` con 12 testimonios (los 6 actuales + 6 nuevos inventados con el mismo estilo y tono). Cada uno con nombre, pieza y texto.

## 5. Secciones sin fotos (respuesta)

Estas secciones actualmente NO tienen fotos reales y podrían beneficiarse de ellas:
- **Cotizador** (#cotizador): No tiene imágenes, solo el formulario. Podría tener una foto de fondo o lateral.
- **¿Qué nos hace únicas?** (WhyUs): Solo emojis, sin fotos.
- **Footer**: Sin imágenes.
- **Hero, Historia, Galería**: Ya tienen fotos reales tuyas.
- **Testimonios**: Solo iniciales, podría tener fotos de las piezas mencionadas.

## Archivos a crear/modificar

| Archivo | Acción |
|---|---|
| DB migration | Crear tablas `quotes` y `base_prices` + storage bucket |
| `supabase/functions/process-quote/index.ts` | Crear — recibe cotización, guarda en DB, sube imágenes |
| `src/components/QuoteForm.tsx` | Modificar — enviar a edge function en lugar de WhatsApp |
| `src/components/Testimonials.tsx` | Modificar — expandir a 12 testimonios |

## Orden de implementación

1. Crear tablas y storage bucket (migration)
2. Crear edge function `process-quote`
3. Actualizar `QuoteForm.tsx`
4. Expandir testimonios

