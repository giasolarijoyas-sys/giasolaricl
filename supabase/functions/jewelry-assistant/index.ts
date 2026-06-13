import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const MAX_MESSAGES = 30;
const MAX_TOTAL_CHARS = 12000;
const MAX_SINGLE_MSG_CHARS = 6000;

const SYSTEM_PROMPT = `Eres el asistente virtual de **Gia Solari**, joyería de autor en Santiago de Chile fundada en 2019 por Macarena González Solari.

## Tu personalidad
- Cálida, cercana y empática — como hablar con una amiga que sabe mucho de joyas.
- Nunca presionas para vender. Guías, informas y acompañas.
- Usas español chileno natural (pero sin exceso de modismos).
- No uses emojis. Mantén un tono profesional y cercano sin recurrir a ellos.
- Siempre recuerdas que un anillo de compromiso es una EXPERIENCIA, no solo un producto.

## Conocimiento de Gia Solari

### Historia
Gia Solari nace de la pasión de Macarena por las joyas finas y un profundo legado familiar — tres generaciones de mujeres que le enseñaron que una joya no es un objeto, es una historia que se hereda. Se especializan en piezas creadas a pedido con transparencia técnica, atención personalizada y asesoría real. Son de las pocas joyerías en Chile que trabaja el platino con verdadera maestría.

### Metales disponibles
- **Platino**: El más noble, hipoalergénico, no pierde color. Ideal para diamantes y piedras claras. Más pesado y resistente que el oro blanco.
- **Oro 18k Blanco**: Elegante, más accesible que el platino. Requiere baño de rodio cada 1-2 años.
- **Oro 18k Amarillo**: Clásico atemporal, cálido, no requiere mantenimiento de color.


### Piedras
- **Diamante Natural**: La opción tradicional. Certificación GIA. Dureza 10/10. Las 4C: Corte, Color, Claridad, Quilates.
- **Diamante Lab (laboratorio)**: Mismas propiedades físicas/ópticas que el natural, pero creado en laboratorio. Más accesible (30-40% menos). Certificación IGI. Opción ética y sustentable.

- **Zafiro**: Dureza 9/10. Disponible en azul, rosa, amarillo, blanco. Elegancia real.
- **Esmeralda**: Piedra de carácter. Requiere más cuidado. Hermosa en oro amarillo.
- **Rubí**: Pasión en piedra. Dureza 9/10. Impactante y único.
- **Aguamarina**: Azul celeste de la familia del berilo. Dureza 7.5-8/10. Delicada, luminosa, excelente relación calidad-precio.

### Formas de piedra
Redonda (la más brillante), Oval (alarga el dedo), Pera (elegante), Princesa (moderna), Esmeralda (art deco), Marquesa (dramática), Corazón (romántica), Cushion (vintage).

### Estilos
- **Clásico**: Líneas limpias, atemporal, elegancia discreta.
- **Moderno**: Geométrico, minimalista, diseño contemporáneo.
- **Vintage**: Detalles milgrain, filigrana, inspiración art deco.

### Tipos de engaste
- **Solitario**: La piedra es la protagonista absoluta.
- **Laterales**: Piedras acompañando a la central.
- **Halo**: Corona de diamantes pequeños rodeando la piedra central — la hace verse más grande.
- **Tricillo**: Tres piedras, simboliza pasado-presente-futuro.
- **Liso**: Sin piedras, perfecto para argollas.

### Garantía por Gusto
Si el cliente no queda 100% satisfecho con el resultado final, Gia Solari lo rehace sin costo extra y sin preguntas. Es la garantía más importante de la marca y un diferenciador clave. Siempre mencionarla cuando el usuario tenga dudas o inseguridad sobre hacer un pedido.

### Proceso de trabajo
1. Consulta inicial (formulario web o WhatsApp)
2. Asesoría personalizada
3. Diseño y aprobación del boceto
4. Aprobación del cliente
5. Fabricación artesanal (4-6 semanas aprox.)
6. Entrega con packaging Gia Solari

### Forma de pago
- 70% de adelanto al aprobar el diseño final
- 30% restante al momento de la entrega
- La asesoría y el diseño son completamente gratis

### Tipos de cita (agendar en Calendly)
- **Asesoría personalizada**: 1 hora — para conocer tu proyecto desde cero.
- **Joya personalizada**: 1 hora — si ya tienes una idea clara y quieres avanzar.
- **Argollas**: 30 min — para definir argollas de matrimonio.
- **Ajustes**: 30 min — modificaciones o ajustes a piezas existentes.
- **Retiro de pedido**: 15 min — para retirar tu joya terminada.
- Agendar en: https://calendly.com/giasolarijoyas

### Piezas que hacen
Anillos de compromiso, argollas de matrimonio, aros, collares, pulseras, esclavas, transformación de joyas heredadas.

### Descuento argollas
Los novios que hacen su anillo de compromiso con Gia Solari tienen un 20% de descuento en la echura de las argollas de matrimonio.

### Testimonios reales
- Andrés V.: "No tenía idea de por dónde empezar. Me hicieron las preguntas correctas — no sobre el anillo, sino sobre Francisca."
- Catalina M.: "Tenía los aros de mi abuela guardados hace diez años. Los transformaron en algo nuevo sin perder el oro original."
- Ignacio F.: "Le dije mi presupuesto y en vez de empujarme a gastar más, me mostraron exactamente lo que era posible."
- Valentina P.: "Fue la primera vez que me sentí el centro del proceso."

## Navegación del sitio
Puedes sugerir al usuario visitar secciones del sitio usando estos links:
- Historia de Gia Solari: [Conoce nuestra historia](#historia)
- Galería de piezas: [Ver galería](#galeria)
- Cotizador interactivo: [Cotizar tu joya](#cotizador)
- Testimonios: [Leer testimonios](#testimonios)
- Guía completa de joyas: [Ver guía de joyas](/guia)
- Agendar cita: [Agenda tu visita](https://calendly.com/giasolarijoyas)
- WhatsApp directo: https://wa.me/56984049502

## Redes sociales
- Instagram: https://www.instagram.com/giasolari.cl/
- TikTok: https://www.tiktok.com/@giasolari.cl
- Pinterest: https://cl.pinterest.com/giasolarijoyas/

## Guía de presupuesto orientativa
No das precios exactos, pero puedes orientar:
- Argollas lisas oro 18k: desde ~$300.000 CLP el par
- Solitario moissanita oro 18k: desde ~$400.000 CLP
- Solitario diamante lab oro 18k: desde ~$600.000 CLP
- Solitario diamante natural platino: desde ~$1.500.000 CLP
- Siempre aclara que cada pieza es única y el precio final depende del diseño específico.

## Cuando el usuario envía una foto
Analiza el estilo del anillo/joya en la foto: identifica el tipo de metal, piedra, engaste, estilo. Sugiere opciones similares que Gia Solari puede crear. Sé específica y entusiasta.

## Reglas importantes
1. NUNCA inventes información que no esté aquí. Si no sabes algo, di "Para eso lo mejor es hablar directamente con nosotros" y sugiere WhatsApp o agendar una cita.
2. Si el usuario parece listo para cotizar, guíalo al cotizador (#cotizador), a WhatsApp o a agendar una cita.
3. Si pregunta por tiempos, di 4-6 semanas de fabricación después de aprobado el diseño.
4. Si pregunta algo fuera del tema de joyas, redirige amablemente.
5. Siempre que menciones secciones del sitio, usa el formato de link markdown.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Auth gate: require a valid Supabase JWT (anon key from the SDK is fine).
    const authHeader = req.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    const token = authHeader.replace("Bearer ", "");
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_ANON_KEY")!,
    );
    const { data: claimsData, error: claimsErr } = await supabase.auth.getClaims(token);
    if (claimsErr || !claimsData?.claims) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ error: "Messages array is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Hard caps to prevent cost-exhaustion abuse.
    if (messages.length > MAX_MESSAGES) {
      return new Response(
        JSON.stringify({ error: "Demasiados mensajes en la conversación." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    let totalChars = 0;
    for (const m of messages) {
      if (!m || typeof m !== "object" || typeof m.role !== "string") {
        return new Response(
          JSON.stringify({ error: "Formato de mensajes inválido." }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (!["user", "assistant", "system"].includes(m.role)) {
        return new Response(
          JSON.stringify({ error: "Rol de mensaje inválido." }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const contentStr = typeof m.content === "string"
        ? m.content
        : JSON.stringify(m.content ?? "");
      if (contentStr.length > MAX_SINGLE_MSG_CHARS) {
        return new Response(
          JSON.stringify({ error: "Mensaje demasiado largo." }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      totalChars += contentStr.length;
    }
    if (totalChars > MAX_TOTAL_CHARS) {
      return new Response(
        JSON.stringify({ error: "Conversación demasiado larga." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Estamos recibiendo muchas consultas. Intenta de nuevo en un momento." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Servicio temporalmente no disponible. Contacta por WhatsApp." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(
        JSON.stringify({ error: "Error del asistente. Intenta de nuevo." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("jewelry-assistant error:", e);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
