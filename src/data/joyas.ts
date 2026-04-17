import galZafiro from "@/assets/gal-zafiro.jpeg";
import galArgolla from "@/assets/gal-argolla.jpeg";
import galTricillo from "@/assets/gal-tricillo.jpeg";
import galTricillo2 from "@/assets/gal-tricillo2.jpeg";
import galPrincesa from "@/assets/gal-princesa.jpeg";
import galHaloZafiro from "@/assets/gal-halo-zafiro.jpeg";
import galEsmeraldaHalo from "@/assets/gal-esmeralda-halo.png";
import galZafirosBanda from "@/assets/gal-zafiros-banda.png";
import galArtDeco from "@/assets/gal-art-deco.png";
import galOvalPave from "@/assets/gal-oval-pave.jpg";
import galSolitarioChevron from "@/assets/gal-solitario-chevron.jpg";
import galCincoPiedras from "@/assets/gal-cinco-piedras.jpeg";
import galBrazaleteOro from "@/assets/gal-brazalete-oro.png";
import galHaloOvalCaja from "@/assets/gal-halo-oval-caja.jpg";
import galSolitarioCaja from "@/assets/gal-solitario-caja.jpg";

export type Joya = {
  slug: string;
  nombre: string;
  material: string;
  descripcion: string;
  categoria: string;
  imagenes: string[];
  /**
   * Marca la pieza como ejemplo/placeholder.
   * Cuando es true, la ficha /joyas/:slug se sirve con
   * <meta name="robots" content="noindex, nofollow"> y se omite del sitemap.
   * Al reemplazar la pieza por contenido real, cambiar a false.
   */
  isPlaceholder?: boolean;
};

export const JOYAS: Joya[] = [
  {
    slug: "halo-zafiro-azul",
    nombre: "Anillo Halo Zafiro Azul",
    material: "Oro 18k blanco · Zafiro azul · Diamantes",
    descripcion:
      "Halo de diamantes pequeños rodeando un zafiro azul central. Pieza hecha a mano en Santiago.",
    categoria: "Anillo de compromiso",
    imagenes: [galHaloZafiro, galZafiro, galZafirosBanda],
    isPlaceholder: true,
  },
  {
    slug: "solitario-oval-pave",
    nombre: "Solitario Oval Pavé",
    material: "Platino · Diamante natural certificado",
    descripcion:
      "Diamante oval con banda en pavé de diamantes. Diseño contemporáneo y luminoso.",
    categoria: "Anillo de compromiso",
    imagenes: [galOvalPave, galHaloOvalCaja, galSolitarioChevron],
    isPlaceholder: true,
  },
  {
    slug: "esmeralda-halo",
    nombre: "Esmeralda con Halo",
    material: "Oro 18k amarillo · Esmeralda · Diamantes",
    descripcion:
      "Esmeralda corte esmeralda rodeada de halo de diamantes. Para quien busca color y carácter.",
    categoria: "Anillo de compromiso",
    imagenes: [galEsmeraldaHalo, galArtDeco, galCincoPiedras],
    isPlaceholder: true,
  },
  {
    slug: "tricillo",
    nombre: "Tricillo",
    material: "Oro 18k · Diamantes",
    descripcion:
      "Tres cintillos entrelazados con detalles de diamantes. Un clásico moderno de Gia Solari.",
    categoria: "Anillo de compromiso",
    imagenes: [galTricillo, galTricillo2, galPrincesa],
    isPlaceholder: true,
  },
  {
    slug: "solitario-clasico",
    nombre: "Solitario Clásico",
    material: "Oro 18k · Diamante",
    descripcion:
      "Diamante central con caja Gia Solari. La elegancia atemporal del solitario.",
    categoria: "Anillo de compromiso",
    imagenes: [galSolitarioCaja, galHaloOvalCaja, galPrincesa],
    isPlaceholder: true,
  },
  {
    slug: "argolla-clasica",
    nombre: "Argolla Clásica",
    material: "Oro 18k amarillo",
    descripcion:
      "Argolla pulida tradicional, ancho personalizable. Hecha a medida para los dos.",
    categoria: "Argolla de matrimonio",
    imagenes: [galArgolla, galArgolla, galArgolla],
    isPlaceholder: true,
  },
  {
    slug: "aros-zafiro",
    nombre: "Aros con Zafiro",
    material: "Oro 18k blanco · Zafiros",
    descripcion: "Aros pequeños con zafiros azules para uso diario.",
    categoria: "Aros",
    imagenes: [galZafiro, galHaloZafiro, galZafirosBanda],
    isPlaceholder: true,
  },
  {
    slug: "brazalete-oro",
    nombre: "Brazalete Oro",
    material: "Oro 18k amarillo",
    descripcion: "Brazalete tipo esclava en oro pulido. Pieza versátil y elegante.",
    categoria: "Pulsera",
    imagenes: [galBrazaleteOro, galBrazaleteOro, galBrazaleteOro],
    isPlaceholder: true,
  },
];
