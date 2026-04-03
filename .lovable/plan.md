

# Plan: Chatbot IA Experto en Joyas para Gia Solari

## Resumen

Crear un chatbot de IA flotante integrado en la página web que actue como asesor experto en joyas. El chatbot usa Lovable Cloud (Supabase edge function + Lovable AI Gateway) para responder preguntas, recomendar anillos, guiar al usuario por la web y recibir fotos de referencia. El tono es cercano, cálido y orientado a que el proceso de compra sea una experiencia.

## Arquitectura

```text
┌─────────────────┐     ┌──────────────────────┐     ┌──────────────┐
│  ChatBot Widget │────▶│  Edge Function        │────▶│ Lovable AI   │
│  (React)        │     │  /jewelry-assistant   │     │ Gateway      │
│  - texto        │     │  - system prompt con  │     │ gemini-3-    │
│  - fotos        │     │    info de Gia Solari │     │ flash-preview│
│  - audio→texto  │     │  - streaming SSE      │     └──────────────┘
└─────────────────┘     └──────────────────────┘
```

## Pasos de implementacion

### 1. Activar Lovable Cloud y crear edge function

Crear `supabase/functions/jewelry-assistant/index.ts` con:
- System prompt extenso con TODA la informacion de Gia Solari (historia, metales, piedras, estilos, precios orientativos, proceso de trabajo, testimonios, FAQ)
- Streaming SSE hacia el cliente
- Soporte para mensajes con imagenes (vision multimodal via Gemini)
- Manejo de errores 429/402

### 2. Crear componente `JewelryChat.tsx`

Widget flotante (boton en esquina inferior izquierda, al lado del WhatsApp que esta a la derecha):
- Chat expandible tipo drawer/modal
- Input de texto + boton para adjuntar fotos + boton de audio
- Streaming token-by-token con react-markdown para renderizar respuestas
- Historial de conversacion en estado local
- Sugerencias rapidas predefinidas ("Quiero un anillo de compromiso", "Cual es la diferencia entre diamante natural y lab?", "Tengo presupuesto de $X")
- Links internos: el bot puede sugerir "Mira nuestra galeria" con links a #galeria, #cotizador, etc.

### 3. Audio: Speech-to-Text via browser

Usar la Web Speech API nativa del navegador (`webkitSpeechRecognition`) para transcribir audio a texto en el cliente, sin necesidad de API externa. Sencillo y sin costo.

### 4. Fotos de referencia

El usuario puede subir fotos desde el chat. Se convierten a base64 y se envian al edge function, que las pasa al modelo multimodal (Gemini soporta imagenes). El bot puede comentar el estilo, sugerir metales/piedras similares, etc.

### 5. Integrar en Index.tsx

Agregar `<JewelryChat />` junto al `<WhatsAppButton />`.

## Detalle tecnico: System Prompt

El system prompt incluira:
- Identidad: "Soy el asistente virtual de Gia Solari, joyeria de autor en Santiago"
- Conocimiento: metales (platino, oro 18k blanco/amarillo/rosado), piedras (diamante natural/lab, moissanita, zafiro, esmeralda, rubi), estilos (clasico, moderno, vintage), engastes, proceso de creacion
- Historia de la marca y de Macarena
- Testimonios reales para dar confianza
- Guia de navegacion: puede recomendar ir al cotizador, ver la galeria, leer testimonios
- Tono: calido, cercano, como hablar con una amiga que sabe mucho de joyas
- Objetivo: que el usuario se sienta acompanado, no presionado; derivar a WhatsApp/cotizador cuando este listo

## Dependencias nuevas

- `react-markdown` - renderizar respuestas del bot
- `@supabase/supabase-js` - invocar edge function

## Archivos a crear/modificar

| Archivo | Accion |
|---|---|
| `supabase/functions/jewelry-assistant/index.ts` | Crear - edge function con streaming |
| `src/components/JewelryChat.tsx` | Crear - widget de chat completo |
| `src/pages/Index.tsx` | Modificar - agregar JewelryChat |
| `src/integrations/supabase/client.ts` | Crear - cliente Supabase |
| `package.json` | Agregar react-markdown, @supabase/supabase-js |

