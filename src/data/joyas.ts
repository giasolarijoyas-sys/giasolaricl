/* =====================================================================
 * CATÁLOGO DE PIEZAS — Gia Solari Joyas
 * ---------------------------------------------------------------------
 * Cómo cargar una pieza REAL (copy-paste de la plantilla de abajo):
 *
 * 1. Importá las imágenes arriba con `import imgX from "@/assets/..."`.
 *    - Foto principal: la que se ve en la grilla y en el hero de la ficha.
 *    - Galería: 3 a 5 fotos adicionales.
 * 2. Copiá la PLANTILLA y pegala dentro del array JOYAS.
 * 3. Completá los campos. Slug en kebab-case y único.
 * 4. Poné `isPlaceholder: false` para que se indexe y aparezca en sitemap.
 * 5. (Opcional) Si la pieza tiene precio "desde", llená `precioDesde`.
 * 6. (Opcional) Si tiene historia detrás, llená `historia`.
 *
 * Reglas:
 * - Si TODAS las piezas tienen `isPlaceholder: true`, /joyas muestra el
 *   mensaje "Estamos preparando las fotos…". Apenas hay 1 real, se oculta.
 * - El sitemap se regenera con `npm run build:sitemap` (script en package.json),
 *   leyendo este archivo y añadiendo cada slug con isPlaceholder:false.
 * ===================================================================== */

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
import anilloCupula01 from "@/assets/joyas/anillo-cupula-01.png";
import anilloCupula02 from "@/assets/joyas/anillo-cupula-02.png";
import anilloLadyDiZafiro01 from "@/assets/joyas/anillo-lady-di-zafiro-01.png";
import anilloLadyDiZafiro02 from "@/assets/joyas/anillo-lady-di-zafiro-02.png";
import haloCushionPavePlatino01 from "@/assets/joyas/halo-cushion-pave-platino-01.png";
import haloCushionPavePlatino02 from "@/assets/joyas/halo-cushion-pave-platino-02.png";
import solitarioAguamarinaOval01 from "@/assets/joyas/solitario-aguamarina-oval-01.jpg";
import solitarioAguamarinaOval02 from "@/assets/joyas/solitario-aguamarina-oval-02.jpg";
import solitarioAguamarinaOval03 from "@/assets/joyas/solitario-aguamarina-oval-03.jpg";
import zafiroHaloClusterVintage01 from "@/assets/joyas/zafiro-halo-cluster-vintage-01.jpeg";
import haloAguamarinaCushion01 from "@/assets/joyas/halo-aguamarina-cushion-01.jpg";
import haloAguamarinaCushion02 from "@/assets/joyas/halo-aguamarina-cushion-02.png";
import aguamarinaRectangularAtelier01 from "@/assets/joyas/aguamarina-rectangular-atelier-01.png";
import aguamarinaRectangularAtelier02 from "@/assets/joyas/aguamarina-rectangular-atelier-02.png";
import mandalaVintageFlorDeLuz01 from "@/assets/joyas/mandala-vintage-flor-de-luz-01.png";
import mandalaVintageFlorDeLuz02 from "@/assets/joyas/mandala-vintage-flor-de-luz-02.png";
import onixHalo01 from "@/assets/joyas/onix-halo-01.png";
import onixHalo02 from "@/assets/joyas/onix-halo-02.png";
import brumaDorada01 from "@/assets/joyas/bruma-dorada-01.jpg";
import solitarioBezelOroAmarillo01 from "@/assets/joyas/solitario-bezel-oro-amarillo-01.jpg";
import bandaCincoDiamantes01 from "@/assets/joyas/banda-cinco-diamantes-01.jpg";
import cincoPiedrasPlatino01 from "@/assets/joyas/cinco-piedras-platino-01.jpg";
import argollaEternityDiamantes01 from "@/assets/joyas/argolla-eternity-diamantes-01.jpg";
import esclavaOro01 from "@/assets/joyas/esclava-oro-01.jpg";
import pulseraOroBroche01 from "@/assets/joyas/pulsera-oro-con-broche-01.jpg";

export type Joya = {
  /** URL slug, kebab-case, único. Ej: "halo-zafiro-azul" */
  slug: string;
  /** Nombre visible. Ej: "Anillo Halo Zafiro Azul" */
  nombre: string;
  /** Categoría. Ej: "Anillo de compromiso", "Argolla", "Pulsera" */
  categoria: string;
  /** Materiales: metal + piedras. Ej: "Oro 18k blanco · Zafiro · Diamantes" */
  material: string;
  /** Metal principal para filtros del catálogo. */
  metalPrincipal?: string;
  /** Estilo/colección para filtros del catálogo. */
  estilo?: string;
  /** Descripción corta (1-2 líneas) para grilla y meta description */
  descripcion: string;
  /** Descripción larga (opcional) para la ficha. Si falta, usa `descripcion`. */
  descripcionLarga?: string;
  /** Foto principal (primer item) + galería (3 a 5 fotos). */
  imagenes: string[];
  /** Precio "desde" en CLP, opcional. Ej: 1800000 */
  precioDesde?: number;
  /** Historia detrás de la pieza, opcional. Renderiza un bloque aparte. */
  historia?: string;
  /**
   * Marca la pieza como ejemplo/placeholder.
   * Cuando es true, la ficha /joyas/:slug se sirve con
   * <meta name="robots" content="noindex, nofollow"> y se omite del sitemap.
   * Al reemplazar la pieza por contenido real, cambiar a false.
   */
  isPlaceholder?: boolean;
};

/* =====================================================================
 * PLANTILLA — copiá este bloque para crear una pieza nueva:
 * ---------------------------------------------------------------------
 * {
 *   slug: "nombre-de-la-pieza",
 *   nombre: "Nombre de la Pieza",
 *   categoria: "Anillo de compromiso",
 *   material: "Oro 18k blanco · Diamante natural",
 *   descripcion: "Una línea breve para la grilla.",
 *   descripcionLarga:
 *     "Párrafo más extenso para la ficha. Hablá del diseño, la inspiración, los detalles técnicos.",
 *   imagenes: [fotoPrincipal, foto2, foto3, foto4],
 *   precioDesde: 2400000,
 *   historia: "Diseñada para Camila, que quería algo que le recordara a su abuela.",
 *   isPlaceholder: false,
 * },
 * ===================================================================== */

export const JOYAS: Joya[] = [
  {
    slug: "bruma-dorada",
    nombre: "Bruma Dorada",
    material: "Oro 18k amarillo · Esmeralda oval · 2 diamantes laterales en bezel + halo de diamantes pequeños",
    metalPrincipal: "Oro 18k amarillo",
    estilo: "Color",
    descripcion:
      "Esmeralda oval central en bezel, dos diamantes laterales en bezel y halo de diamantes pequeños, oro 18k amarillo.",
    descripcionLarga:
      "Una esmeralda oval, verde profundo, enmarcada en un bezel dorado que la protege como un pequeño relicario. A los costados, dos diamantes en bezel acompañan como guardianes. El oro amarillo le aporta la calidez de una pieza vintage, recuperada. Cada anillo incluye Certificado Gia Solari.",
    categoria: "Anillo de compromiso",
    imagenes: [brumaDorada01],
    isPlaceholder: false,
  },
  {
    slug: "solitario-bezel-oro-amarillo",
    nombre: "Solitario Bezel · Oro Amarillo",
    material: "Oro 18k amarillo · Diamante brillante redondo · Bezel",
    metalPrincipal: "Oro 18k amarillo",
    estilo: "Atemporal",
    descripcion:
      "Solitario con diamante redondo en engaste bezel. Oro 18k amarillo, diseño minimalista.",
    descripcionLarga:
      "Solitario con diamante en engaste bezel — el aro de oro abraza completamente la piedra, dándole una silueta minimalista y moderna. Sobre oro 18k amarillo para un acabado cálido y editorial. Cada anillo incluye Certificado Gia Solari.",
    categoria: "Anillo de compromiso",
    imagenes: [solitarioBezelOroAmarillo01],
    isPlaceholder: false,
  },
  {
    slug: "banda-cinco-diamantes",
    nombre: "Banda Cinco Diamantes",
    material: "Oro 18k blanco · Diamante brillante redondo · 5 diamantes centrales",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Atemporal",
    descripcion: "Banda con cinco diamantes redondos en arco. Diseño clásico y luminoso en oro blanco.",
    descripcionLarga:
      "Cinco diamantes brillantes alineados en arco sobre una banda fina de oro 18k blanco. Una pieza limpia, luminosa y simétrica — perfecta como argolla de compromiso o banda de aniversario. Cada anillo incluye Certificado Gia Solari.",
    categoria: "Anillo de compromiso",
    imagenes: [bandaCincoDiamantes01],
    isPlaceholder: false,
  },
  {
    slug: "cinco-piedras-platino",
    nombre: "Cinco Piedras · Platino",
    material: "Platino · Diamante brillante redondo · 5 piedras alineadas",
    metalPrincipal: "Platino",
    estilo: "Atemporal",
    descripcion: "Anillo con cinco piedras en línea, montado en platino. Presentación sobre cofre verde oliva.",
    descripcionLarga:
      "Cinco piedras en línea sobre platino, presentadas en cofre de terciopelo verde oliva. La fuerza del platino y la simetría de las piedras le dan a la pieza un aire de joyería heredada. Cada anillo incluye Certificado Gia Solari.",
    categoria: "Anillo de compromiso",
    imagenes: [cincoPiedrasPlatino01],
    isPlaceholder: false,
  },
  {
    slug: "argolla-eternity-diamantes",
    nombre: "Argolla Eternity · Diamantes",
    material: "Oro 18k blanco · Diamantes brillantes · Media eternity en microgrifa",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Atemporal",
    descripcion: "Media eternity con diamantes redondos. Pieza versátil como argolla de matrimonio o banda de aniversario.",
    descripcionLarga:
      "Media eternity en oro 18k blanco, con diamantes brillantes engastados en microgrifa a lo largo de toda la cara visible. Pieza versátil: argolla de matrimonio, banda de aniversario o anillo de uso diario. Incluye Certificado Gia Solari.",
    categoria: "Argolla",
    imagenes: [argollaEternityDiamantes01],
    isPlaceholder: false,
  },
  {
    slug: "pulsera-oro-broche",
    nombre: "Pulsera · Oro con Broche",
    material: "Oro 18k amarillo · Broche central",
    metalPrincipal: "Oro 18k amarillo",
    estilo: "Atemporal",
    descripcion: "Pulsera rígida fina en oro 18k amarillo con broche central. Pieza versátil para uso diario.",
    descripcionLarga:
      "Una pulsera rígida, fina y pulida, con un broche discreto al medio que se mantiene siempre a la vista. En oro 18k amarillo, pensada para combinar con reloj, esclava o usarse sola. La pieza que se queda puesta.",
    categoria: "Pulsera",
    imagenes: [pulseraOroBroche01],
    isPlaceholder: false,
  },
  {
    slug: "zafiro-halo-cluster-vintage",
    nombre: "Zafiro Halo Cluster · Vintage",
    material: "Oro 18k blanco · Zafiro oval · Halo cluster asimétrico de diamantes (starburst)",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Editorial",
    descripcion:
      "Zafiro azul oval central rodeado por un halo cluster asimétrico de diamantes estilo starburst, oro 18k blanco sobre cofre verde oliva.",
    descripcionLarga:
      "Un zafiro azul oval al centro, rodeado por un halo cluster que no se cierra: los diamantes se abren como rayos desde la piedra, formando un starburst asimétrico de inspiración art déco. Presentado sobre cofre de terciopelo verde oliva — firma visual de la casa. Cada anillo incluye Certificado Gia Solari.",
    categoria: "Anillo de compromiso",
    imagenes: [zafiroHaloClusterVintage01],
    isPlaceholder: false,
  },
  {
    slug: "halo-aguamarina-cushion",
    nombre: "Halo Aguamarina · Cushion",
    material: "Oro 18k blanco · Aguamarina cushion · Halo de diamantes",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Color",
    descripcion:
      "Aguamarina cushion cut rodeada por un halo de diamantes. Oro 18k blanco sobre cofre de terciopelo azul.",
    descripcionLarga:
      "Aguamarina corte cushion en oro 18k blanco, rodeada por un halo de pequeños diamantes. Una pieza con la frescura del agua y la luz del cielo, presentada sobre cofre de terciopelo azul. Cada anillo incluye Certificado Gia Solari.",
    categoria: "Anillo de compromiso",
    imagenes: [haloAguamarinaCushion01, haloAguamarinaCushion02],
    isPlaceholder: false,
  },
  {
    slug: "aguamarina-rectangular-atelier",
    nombre: "Aguamarina Rectangular · Atelier",
    material: "Oro 18k blanco · Aguamarina corte emerald · Halo octogonal de diamantes con milgrain",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Color",
    descripcion:
      "Aguamarina corte emerald rectangular con halo octogonal de diamantes, milgrain y banda con diamantes, oro 18k blanco.",
    descripcionLarga:
      "Aguamarina corte emerald, rectangular y luminosa, enmarcada por un halo octogonal de diamantes con milgrain — un trabajo de atelier que se inclina al art déco. La banda acompaña con pequeños diamantes para continuar la línea de luz. Pieza estudiada al detalle. Cada anillo incluye Certificado Gia Solari.",
    categoria: "Anillo de compromiso",
    imagenes: [aguamarinaRectangularAtelier01, aguamarinaRectangularAtelier02],
    isPlaceholder: false,
  },
  {
    slug: "mandala-flor-de-luz",
    nombre: "Mandala Vintage · Flor de Luz",
    material: "Oro 18k blanco · Diamante brillante redondo · Rosetón/mandala de diamantes pavé con milgrain",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Editorial",
    descripcion:
      "Diamante redondo central con rosetón de diamantes pavé en forma de mandala, detalle milgrain, oro 18k blanco.",
    descripcionLarga:
      "Un mandala de luz hecho anillo. El brillante central se multiplica en un rosetón pavé de diamantes pequeños que dibujan una flor geométrica, terminada con milgrain que le da el toque antiguo. Una pieza editorial que convierte el dedo en una joya-objeto. Cada anillo incluye Certificado Gia Solari.",
    categoria: "Anillo de compromiso",
    imagenes: [mandalaVintageFlorDeLuz01, mandalaVintageFlorDeLuz02],
    isPlaceholder: false,
  },
  {
    slug: "onix-halo",
    nombre: "Onix · Halo",
    material: "Oro 18k blanco · Ónix oval · Halo de diamantes + banda pavé",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Color",
    descripcion:
      "Ónix oval central con halo de diamantes y banda en pavé, oro 18k blanco. Contraste profundo y elegante.",
    descripcionLarga:
      "El negro mate del ónix contra el destello blanco de los diamantes del halo: un juego de contrastes que transforma cualquier mano. La banda en pavé continúa la luz alrededor del dedo. Pieza perfecta para quien busca algo fuera del diamante clásico. Cada anillo incluye Certificado Gia Solari.",
    categoria: "Anillo de compromiso",
    imagenes: [onixHalo01, onixHalo02],
    isPlaceholder: false,
  },
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
    nombre: "Halo Cushion Pavé · Platino",
    material: "Platino · Diamante natural cojín · Halo de diamantes + banda pavé + milgrain · Certificación GIA",
    metalPrincipal: "Platino",
    estilo: "Editorial",
    descripcion:
      "Diamante cushion cut con halo de diamantes, banda pavé y detalle milgrain. Platino.",
    descripcionLarga:
      "Diamante cushion con certificación GIA, rodeado por un halo de brillantes y una banda en pavé con detalle milgrain. El platino aporta temperatura fría y la milgrain suma un guiño vintage. Editorial sin perder uso diario. Cada anillo incluye Certificado Gia Solari, además del certificado GIA del diamante.",
    categoria: "Anillo de compromiso",
    imagenes: [haloCushionPavePlatino01, haloCushionPavePlatino02],
    isPlaceholder: false,
  },
  {
    slug: "solitario-aguamarina-oval",
    nombre: "Solitario Aguamarina · Oval",
    material: "Oro 18k blanco · Aguamarina oval · Banda pavé de diamantes · Grifas",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Color",
    descripcion:
      "Aguamarina oval a grifas sobre banda en pavé de diamantes, oro 18k blanco. Luminoso y contemporáneo.",
    descripcionLarga:
      "Una aguamarina oval, clara como el mar, elevada sobre grifas que la dejan atrapar toda la luz. La banda en pavé de diamantes acompaña discretamente, sin robarle protagonismo. La versión en color del solitario clásico. Cada anillo incluye Certificado Gia Solari.",
    categoria: "Anillo de compromiso",
    imagenes: [solitarioAguamarinaOval01, solitarioAguamarinaOval02, solitarioAguamarinaOval03],
    isPlaceholder: false,
  },
  {
    slug: "anillo-cupula",
    nombre: "Anillo Cúpula",
    material: "Oro 18k blanco · Diamante natural brillante redondo · Halo de diamantes grandes + pavé lateral · Grifas",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Editorial",
    descripcion:
      "Diamante redondo central rodeado por un halo de diamantes grandes en forma de cúpula, sobre banda ancha con pavé lateral.",
    descripcionLarga:
      "Una cúpula de diamantes que se eleva sobre la mano: el brillante central queda contenido en una arquitectura de piedras que lo sostienen como una flor escultórica. La banda ancha con pavé y la filigrana calada en el perfil lateral le dan volumen y aire de joyería heredada. Cada anillo incluye Certificado Gia Solari.",
    categoria: "Anillo de compromiso",
    imagenes: [anilloCupula01, anilloCupula02],
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
    isPlaceholder: false,
  },
  {
    slug: "solitario-oval-pave",
    nombre: "Solitario Oval Pavé",
    material: "Platino · Diamante natural certificado",
    descripcion:
      "Diamante oval con banda en pavé de diamantes. Diseño contemporáneo y luminoso.",
    categoria: "Anillo de compromiso",
    imagenes: [galOvalPave, galHaloOvalCaja, galSolitarioChevron],
    isPlaceholder: false,
  },
  {
    slug: "esmeralda-halo",
    nombre: "Esmeralda con Halo",
    material: "Oro 18k amarillo · Esmeralda · Diamantes",
    descripcion:
      "Esmeralda corte esmeralda rodeada de halo de diamantes. Para quien busca color y carácter.",
    categoria: "Anillo de compromiso",
    imagenes: [galEsmeraldaHalo, galArtDeco, galCincoPiedras],
    isPlaceholder: false,
  },
  {
    slug: "tricillo",
    nombre: "Tricillo",
    material: "Oro 18k · Diamantes",
    descripcion:
      "Tres cintillos entrelazados con detalles de diamantes. Un clásico moderno de Gia Solari.",
    categoria: "Anillo de compromiso",
    imagenes: [galTricillo, galTricillo2, galPrincesa],
    isPlaceholder: false,
  },
  {
    slug: "solitario-clasico",
    nombre: "Solitario Clásico",
    material: "Oro 18k · Diamante",
    descripcion:
      "Diamante central con caja Gia Solari. La elegancia atemporal del solitario.",
    categoria: "Anillo de compromiso",
    imagenes: [galSolitarioCaja, galHaloOvalCaja, galPrincesa],
    isPlaceholder: false,
  },
  {
    slug: "argolla-clasica",
    nombre: "Argolla Clásica",
    material: "Oro 18k amarillo",
    descripcion:
      "Argolla pulida tradicional, ancho personalizable. Hecha a medida para los dos.",
    categoria: "Argolla de matrimonio",
    imagenes: [galArgolla, galArgolla, galArgolla],
    isPlaceholder: false,
  },
  {
    slug: "anillo-lady-di",
    nombre: "Anillo Lady Di · Zafiro",
    material: "Oro 18k blanco · Zafiro oval · Halo de diamantes · Bezel",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Color",
    descripcion:
      "Anillo inspirado en el icónico Lady Di: zafiro azul central rodeado de un halo de diamantes.",
    descripcionLarga:
      "Inspirado en uno de los anillos de compromiso más icónicos del siglo: zafiro azul oval central enmarcado en un engaste bezel y rodeado por un halo de diamantes brillantes, sobre oro 18k blanco. Una pieza con historia, ahora en versión Gia Solari. Cada anillo incluye Certificado Gia Solari.",
    categoria: "Anillo de compromiso",
    imagenes: [anilloLadyDiZafiro01, anilloLadyDiZafiro02],
    isPlaceholder: false,
  },
  {
    slug: "esclava-oro",
    nombre: "Esclava · Oro",
    material: "Oro 18k amarillo · Pulido",
    metalPrincipal: "Oro 18k amarillo",
    estilo: "Atemporal",
    descripcion:
      "Esclava en oro pulido. Pieza versátil y elegante para uso diario.",
    descripcionLarga:
      "Esclava en oro 18k amarillo pulido, fina y elegante. La pieza versátil que se queda puesta — combina con todo, dura toda la vida y se siente liviana al uso diario.",
    categoria: "Pulsera",
    imagenes: [esclavaOro01],
    isPlaceholder: false,
  },
];

/** True si hay al menos una pieza real cargada (no placeholder). */
export const HAS_REAL_JOYAS = JOYAS.some((j) => !j.isPlaceholder);

/** Formatea un precio CLP "desde". */
export const formatPrecioDesde = (clp?: number) =>
  typeof clp === "number"
    ? `Desde ${clp.toLocaleString("es-CL", {
        style: "currency",
        currency: "CLP",
        maximumFractionDigits: 0,
      })}`
    : null;
