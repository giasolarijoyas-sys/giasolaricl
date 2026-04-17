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
import joyaHaloFloralTanzanita from "@/assets/joya-halo-floral-tanzanita.png";
import joyaEternityEsmeralda from "@/assets/joya-eternity-esmeralda.png";
import joyaHaloMarquise from "@/assets/joya-halo-marquise.png";
import joyaSolitarioEmeraldPlatino from "@/assets/joya-solitario-emerald-platino.png";
import joyaHaloCushionPlatino from "@/assets/joya-halo-cushion-platino.png";

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
    slug: "halo-floral-tanzanita",
    nombre: "Halo Floral Tanzanita",
    material: "Oro 18k amarillo · Tanzanita oval · Diamantes",
    descripcion:
      "Tanzanita oval rodeada por un halo de diamantes en forma de flor. Hecha a mano en oro 18k amarillo.",
    categoria: "Anillo de compromiso",
    imagenes: [joyaHaloFloralTanzanita],
    isPlaceholder: false,
  },
  {
    slug: "eternity-esmeralda-diamante",
    nombre: "Eternity Esmeralda & Diamante",
    material: "Oro 18k blanco · Esmeraldas · Diamantes",
    descripcion:
      "Banda eternity con esmeraldas alternadas con diamantes brillantes. Bezel setting, diseño minimalista.",
    categoria: "Anillo",
    imagenes: [joyaEternityEsmeralda],
    isPlaceholder: false,
  },
  {
    slug: "halo-marquise-diamante",
    nombre: "Halo Marquise Diamante",
    material: "Oro 18k · Diamante marquise · Diamantes",
    descripcion:
      "Diamante corte marquise con halo de diamantes y banda en pavé. Hecha a mano por encargo.",
    categoria: "Anillo de compromiso",
    imagenes: [joyaHaloMarquise],
    isPlaceholder: false,
  },
  {
    slug: "solitario-emerald-cut-platino",
    nombre: "Solitario Emerald Cut Platino",
    material: "Platino · Diamante emerald cut",
    descripcion:
      "Diamante corte esmeralda en platino con cathedral setting de inspiración art deco.",
    categoria: "Anillo de compromiso",
    imagenes: [joyaSolitarioEmeraldPlatino],
    isPlaceholder: false,
  },
  {
    slug: "halo-cushion-pave-platino",
    nombre: "Halo Cushion Pavé Platino",
    material: "Platino · Diamante cushion · Diamantes",
    descripcion:
      "Diamante cushion cut con halo de diamantes, banda pavé y detalle milgrain. Pieza hecha a mano en platino.",
    categoria: "Anillo de compromiso",
    imagenes: [joyaHaloCushionPlatino],
    isPlaceholder: false,
  },
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
    slug: "anillo-lady-di",
    nombre: "Anillo Lady Di",
    material: "Oro 18k blanco · Zafiro azul · Diamantes",
    descripcion: "Anillo inspirado en el icónico Lady Di: zafiro azul central rodeado de un halo de diamantes.",
    categoria: "Anillo de compromiso",
    imagenes: [galZafiro, galHaloZafiro, galZafirosBanda],
    isPlaceholder: true,
  },
  {
    slug: "esclava-oro",
    nombre: "Esclava Oro",
    material: "Oro 18k amarillo",
    descripcion: "Esclava en oro pulido. Pieza versátil y elegante para uso diario.",
    categoria: "Pulsera",
    imagenes: [galBrazaleteOro, galBrazaleteOro, galBrazaleteOro],
    isPlaceholder: true,
  },
];
