/**
 * Utility unificada para construir URLs de WhatsApp pre-armadas.
 * Todos los CTAs de WhatsApp del sitio deben pasar por aquí para mantener
 * número, saludo y tono consistentes.
 */

const PHONE = "56984049502";

export type WhatsAppContext =
  | "home_hero"
  | "anillo_compromiso"
  | "argollas"
  | "pieza_custom"
  | "pieza_especifica"
  | "sorpresa_pareja"
  | "regiones"
  | "refundicion"
  | "garantia"
  | "agenda"
  
  | "generico";

export type WhatsAppOptions = {
  /** Nombre de la pieza específica, requerido para context "pieza_especifica". */
  nombre?: string;
  /** Mensaje totalmente custom. Tiene prioridad sobre el contexto. */
  custom?: string;
};

const MESSAGES: Record<Exclude<WhatsAppContext, "pieza_especifica">, string> = {
  home_hero: "Hola Maca, vengo de Instagram y quiero cotizar una pieza",
  anillo_compromiso: "Hola Maca, me interesa un anillo de compromiso",
  argollas: "Hola Maca, me interesa cotizar argollas de matrimonio",
  pieza_custom: "Hola Maca, quiero diseñar una joya a medida",
  sorpresa_pareja: "Hola Maca, quiero sorprender a mi pareja 🤫",
  regiones: "Hola Maca, te escribo desde regiones, consulto por envío",
  refundicion: "Hola Maca, quiero refundir oro de herencia",
  garantia: "Hola Maca, quiero conversar sobre mi pieza y la Garantía por Gusto",
  agenda: "Hola Maca, quiero agendar una visita al showroom",
  
  generico: "Hola Maca, te escribo desde la web, me gustaría cotizar…",
};

/**
 * Construye una URL wa.me con número de Maca y mensaje pre-armado.
 *
 * @example
 *   buildWhatsAppUrl("home_hero")
 *   buildWhatsAppUrl("pieza_especifica", { nombre: "Anillo Halo Floral" })
 *   buildWhatsAppUrl("generico", { custom: "Hola Maca, soy Juan…" })
 */
export function buildWhatsAppUrl(
  context: WhatsAppContext = "generico",
  options: WhatsAppOptions = {}
): string {
  let text: string;
  if (options.custom) {
    text = options.custom;
  } else if (context === "pieza_especifica") {
    const nombre = options.nombre ?? "una pieza";
    text = `Hola Maca, me interesa la pieza ${nombre}`;
  } else {
    text = MESSAGES[context];
  }
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
}

export const WHATSAPP_PHONE = PHONE;
