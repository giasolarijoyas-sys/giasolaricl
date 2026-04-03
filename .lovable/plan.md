

# Plan: Usar fotos reales + agregar Garantia por Gusto

## Resumen

Reemplazar todas las imagenes generadas/placeholder por las fotos reales que subiste, y agregar prominentemente la "Garantia por Gusto" como diferenciador principal en la seccion "Que nos hace unicas".

## Fotos y donde usarlas

Las 8 fotos subidas se distribuyen asi:

| Foto | Uso |
|---|---|
| `WhatsApp_Image..._6.jpeg` (Maca close-up con joyas, vestido negro) | **Hero** - imagen principal del sitio |
| `WhatsApp_Image..._5.jpeg` (Maca cuerpo completo, vestido azul) | **Historia** - foto de la fundadora |
| `WhatsApp_Image...14.jpeg` (Gianna y Maca juntas) | **Historia** - segunda foto, legado madre-hija |
| `WhatsApp_Image..._4.jpeg` (anillo zafiro azul en caja) | **Galeria** |
| `WhatsApp_Image..._3.jpeg` (argolla platino con carta) | **Galeria** |
| `WhatsApp_Image..._2.jpeg` (tricillo diamantes, marco dorado) | **Galeria** |
| `WhatsApp_Image..._1.jpeg` (tricillo diamantes, marco dorado vista 2) | **Galeria** |
| `WhatsApp_Image...43.jpeg` (anillo princesa en marco dorado) | **Galeria** |

## Cambios por archivo

### 1. Copiar las 8 fotos a `src/assets/`

Copiar todas las imagenes subidas al proyecto para usarlas como imports ES6.

### 2. `src/components/Hero.tsx`

Reemplazar `hero-ring.jpg` (imagen generada) por la foto de Maca con joyas (close-up vestido negro).

### 3. `src/components/Historia.tsx`

- Reemplazar `fundadora.jpg` (imagen generada) por la foto de Maca cuerpo completo (vestido azul)
- Agregar segunda foto de Gianna y Maca juntas para reforzar el legado madre-hija

### 4. `src/components/Gallery.tsx`

Reemplazar las URLs externas de Netlify por las 5 fotos reales de producto (anillos). Reducir la galeria a las piezas reales disponibles. Eliminar imagenes placeholder.

### 5. `src/components/WhyUs.tsx` - Garantia por Gusto

Agregar como **primer item** (el mas destacado) la "Garantia por Gusto":
- Titulo: "Garantia por Gusto"
- Descripcion: "Si no te encanta el resultado, lo rehacemos. Sin preguntas, sin costo extra. Tu satisfaccion es nuestra prioridad absoluta."
- Darle un estilo visual destacado (borde dorado, tamanio mayor) para que sea lo primero que se vea

Los demas items se mantienen.

### 6. System prompt del chatbot

Agregar la garantia por gusto al conocimiento del asistente IA para que pueda mencionarla cuando corresponda.

## Archivos a modificar

| Archivo | Cambio |
|---|---|
| `src/assets/` | Copiar 8 fotos reales |
| `src/components/Hero.tsx` | Cambiar imagen hero |
| `src/components/Historia.tsx` | Cambiar foto fundadora + agregar foto madre-hija |
| `src/components/Gallery.tsx` | Reemplazar galeria con fotos reales |
| `src/components/WhyUs.tsx` | Agregar Garantia por Gusto destacada |
| `supabase/functions/jewelry-assistant/index.ts` | Agregar garantia por gusto al system prompt |

