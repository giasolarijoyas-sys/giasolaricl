# Reestructura completa Gia Solari Joyas — v1.0

Es un trabajo extenso (17 secciones, ~25-30 archivos tocados, 3 rutas nuevas). Antes de implementar quiero confirmar alcance y orden para no romper lo que ya funciona y para que el resultado se parezca a lo que tenés en la cabeza.

## Lo que voy a hacer

### Fase 1 — Cimientos (design system)
1. **`tailwind.config.ts`** — agregar tokens nuevos: `olive` (DEFAULT/deep/soft), `champagne`, `terracota`, `cream` (DEFAULT/warm), `ink`, `line`. Mantener tokens existentes para no romper el resto.
2. **`src/index.css`** — actualizar variables HSL: background → cream, primary → olive, accent → champagne. Eyebrow utility class. Quitar blanco puro como fondo en componentes globales.
3. **`index.html`** — `<title>` y `<meta>` por defecto + preconnect fonts.

### Fase 2 — Layout global
4. **`Navbar.tsx`** — top bar oliva profundo con sociales, navbar sticky con dropdown JOYAS de 3 columnas, links nuevos (NEW IN, VINTAGE, DIARIO, LOOKBOOK), CTAs Agendar/Cotizar, mobile overlay full-screen.
5. **`Footer.tsx`** — fondo ink, 4 columnas reorganizadas según copy entregado, tira inferior con sociales en champagne.
6. **`Newsletter.tsx`** — rediseño "Círculo Gia" fondo olive.deep + champagne (mantengo lógica Supabase existente).
7. **`WhatsAppButton.tsx`** — circular champagne 56px, aparece tras 600px de scroll, copy prefilled chileno.

### Fase 3 — Home (`Index.tsx`)
8. **`Hero.tsx`** — split 60/40, izquierda foto editorial (placeholder Unsplash hasta que suba real), derecha eyebrow + headline Bodoni con "tuya" italic + subheadline + 2 CTAs + tira confianza.
9. **`WhyUs.tsx`** — refactor a 4 columnas con copy nuevo y tono chileno cercano-formal.
10. **`ComoTeAyudo.tsx`** (nuevo) — 3 tarjetas WhatsApp / Agenda / Email.
11. **`VitrinaCategorias.tsx`** (nuevo) — 6 cards 4:5 con overlay oliva.
12. **`NewIn.tsx`** (nuevo) — carrusel de piezas creadas en últimos 60 días.
13. Reordenar `Index.tsx` con la nueva secuencia y remover bloques que no van.

### Fase 4 — Catálogo y ficha
14. **`Joyas.tsx`** — header con eyebrow/H1/subtítulo, sidebar de filtros (Tipo, Estilo cuando Tipo=Compromiso, Metal, Piedra, Precio), grid 3 cols con corazón flotante.
15. **`JoyaDetalle.tsx`** — galería izquierda (principal + miniaturas), columna derecha sticky con descripción narrativa (primer párrafo Bodoni italic), specs en acordeón, CTAs primario/secundario, sección "Piezas relacionadas" + "El proceso de Gia".

### Fase 5 — Páginas de marca
16. **`SobreGia.tsx`** — hero foto Macarena, copy en primera persona entregado, bloque "Detrás de cada pieza".
17. **`Proceso.tsx`** — stepper vertical 4 pasos con número Bodoni 80px champagne.
18. **`Aprende.tsx`** + 7 sub-páginas — solo rediseño envolvente (header eyebrow/H1, body Inter 17px max-w 680px, CTA final). **No toco el contenido textual** de las guías.

### Fase 6 — Rutas nuevas
19. **`/diario`** y **`/diario/[slug]`** — hub + 6 placeholders ("Catalina M.", "Trinidad V.", etc.) con foto, frase italic, link.
20. **`/lookbook`** — masonry de 12 fotos Unsplash con queries entregadas, 1 quote italic cada 5.
21. **`/new`** — reusa `Joyas.tsx` con filtro `created_at >= now() - 60 días`.
22. Registrar rutas en `App.tsx` y agregarlas al `sitemap.xml`.

### Fase 7 — SEO
23. `<SEO>` específico en cada ruta nueva con templates entregados. Schema `Product` ya existe en ficha; agregar `BlogPosting` en entradas de diario.

## Lo que NO voy a tocar
- Lógica de cotizar, wishlist, checkout, admin, auth, edge functions.
- Contenido textual de las 7 guías de `/aprende` (solo el envoltorio visual).
- `supabase/*`, `src/integrations/*`.

## Notas de tono y copy
- Tuteo chileno suave ("te mando", "cuéntame", "acá en Las Condes"). El brief incluye un par de vos ("contigo/contigo" mezclado con "vos contás") — voy a **uniformar a tuteo chileno** ("tú/contigo/cuéntame") salvo que me digas lo contrario, porque mezclar voseo argentino con chileno suena raro y la memoria del proyecto pide registro chileno.
- Cero emojis, cero 3D renders (usar "boceto" cuando aplique).

## Detalles técnicos
- Tokens nuevos en `tailwind.config.ts` extendiendo el theme — no rompo clases existentes.
- Imágenes placeholder via `https://images.unsplash.com/...` con queries del brief, marcadas con `TODO: reemplazar con foto real` en comentarios.
- "NEW IN" lee de `src/data/joyas.ts` (tu fuente actual). Si las piezas no tienen `createdAt`, agrego un campo opcional y por ahora muestro las primeras 6 — avisame si querés que agregue fecha real a cada pieza.
- Dropdown del navbar: usaré Radix `NavigationMenu` (ya está en shadcn) para accesibilidad y mobile.
- Schema markup: extiendo `ArticleSchema` existente para diario.

## Confirmaciones que necesito antes de arrancar

1. **Tuteo uniforme chileno** (tú/contigo/cuéntame) en lugar de mezclar con voseo del brief — ¿OK?
2. **Placeholders Unsplash** para todas las fotos editoriales que no tenés aún (Hero, Sobre Gia, Diario, Lookbook, Vitrina Categorías) — ¿OK arrancar así o preferís que deje los slots vacíos con un fondo neutro?
3. **Campo `createdAt` en piezas** para "NEW IN" — ¿agrego con fechas dummy escalonadas o muestro las 6 primeras del array como "recién salidas" hasta que vos definas?
4. **Screenshots finales** — voy a sacar las 6 que pediste (Home, /joyas, ficha, /diario, /lookbook, footer) al cierre.

Dame el visto bueno (o ajustes) sobre estos 4 puntos y arranco con la Fase 1.
