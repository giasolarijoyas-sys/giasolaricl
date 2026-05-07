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

// (no shared gal-* assets in use after catalog cleanup)
import anilloCupula01 from "@/assets/joyas/anillo-cupula-01.png";
import anilloCupula02 from "@/assets/joyas/anillo-cupula-02.png";
import anilloLadyDiZafiro01 from "@/assets/joyas/anillo-lady-di-01.png";
import anilloLadyDiZafiro02 from "@/assets/joyas/anillo-lady-di-02.png";
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
import mandalaVintageFlorDeLuz01 from "@/assets/joyas/mandala-flor-de-luz-01.png";
import mandalaVintageFlorDeLuz02 from "@/assets/joyas/mandala-flor-de-luz-02.png";
import onixHalo01 from "@/assets/joyas/onix-halo-01.png";
import onixHalo02 from "@/assets/joyas/onix-halo-02.png";
import brumaDorada01 from "@/assets/joyas/bruma-dorada-01.jpg";

import bandaCincoDiamantes01 from "@/assets/joyas/banda-cinco-diamantes-01.jpg";

import argollaEternityDiamantes01 from "@/assets/joyas/argolla-eternity-diamantes-01.jpg";
import esclavaOro01 from "@/assets/joyas/esclava-oro-01.jpg";
import pulseraOroBroche01 from "@/assets/joyas/pulsera-oro-broche-01.jpg";
import anilloFelisa01 from "@/assets/joyas/anillo-felisa-01.png";
import anilloFelisa02 from "@/assets/joyas/anillo-felisa-02.jpg";
import anilloIsabel01 from "@/assets/joyas/anillo-isabel-01.png";
import anilloIsabel02 from "@/assets/joyas/anillo-isabel-02.png";
import artDecoBaguette01 from "@/assets/joyas/art-deco-baguette-01.jpg";

import eternityDiamantesPlatino01 from "@/assets/joyas/eternity-diamantes-platino-01.jpg";
import haloBrillantePlatino01 from "@/assets/joyas/halo-brillante-platino-01.jpg";
import haloCushionClasico01 from "@/assets/joyas/halo-cushion-clasico-01.jpg";
import haloMarquise01 from "@/assets/joyas/halo-marquise-01.jpg";
import haloPera01 from "@/assets/joyas/halo-pera-01.jpg";

import solitarioEmeraldCutPlatino01 from "@/assets/joyas/solitario-emerald-cut-platino-01.jpg";
import solitarioOvalPlatino01 from "@/assets/joyas/solitario-oval-platino-01.jpg";
import trilogiaColorOro01 from "@/assets/joyas/trilogia-color-oro-01.jpg";
import trilogiaVintagePlatino01 from "@/assets/joyas/trilogia-vintage-platino-01.jpg";

import pendiente001 from "@/assets/joyas/pendiente-001.jpg";
import pendiente002 from "@/assets/joyas/pendiente-002.jpg";
import pendiente003 from "@/assets/joyas/pendiente-003.jpg";
import pendiente004 from "@/assets/joyas/pendiente-004.jpg";
import pendiente005 from "@/assets/joyas/pendiente-005.jpg";
import pendiente006 from "@/assets/joyas/pendiente-006.jpg";
import pendiente007 from "@/assets/joyas/pendiente-007.jpg";
import pendiente008 from "@/assets/joyas/pendiente-008.jpg";
import pendiente009 from "@/assets/joyas/pendiente-009.jpg";
import pendiente010 from "@/assets/joyas/pendiente-010.jpg";
import pendiente011 from "@/assets/joyas/pendiente-011.jpg";
import pendiente012 from "@/assets/joyas/pendiente-012.jpg";
import pendiente013 from "@/assets/joyas/pendiente-013.jpg";
import pendiente014 from "@/assets/joyas/pendiente-014.jpg";
import pendiente015 from "@/assets/joyas/pendiente-015.jpg";
import pendiente016 from "@/assets/joyas/pendiente-016.jpg";
import pendiente017 from "@/assets/joyas/pendiente-017.jpg";
import pendiente018 from "@/assets/joyas/pendiente-018.jpg";
import pendiente019 from "@/assets/joyas/pendiente-019.jpg";
import pendiente020 from "@/assets/joyas/pendiente-020.jpg";
import pendiente021 from "@/assets/joyas/pendiente-021.jpg";
import pendiente022 from "@/assets/joyas/pendiente-022.jpg";
import pendiente023 from "@/assets/joyas/pendiente-023.jpg";
import pendiente024 from "@/assets/joyas/pendiente-024.jpg";
import pendiente025 from "@/assets/joyas/pendiente-025.jpg";
import pendiente026 from "@/assets/joyas/pendiente-026.jpg";
import pendiente027 from "@/assets/joyas/pendiente-027.jpg";
import pendiente028 from "@/assets/joyas/pendiente-028.jpg";
import pendiente029 from "@/assets/joyas/pendiente-029.jpg";
import pendiente030 from "@/assets/joyas/pendiente-030.jpg";
import pendiente031 from "@/assets/joyas/pendiente-031.jpg";
import pendiente032 from "@/assets/joyas/pendiente-032.jpg";
import pendiente033 from "@/assets/joyas/pendiente-033.jpg";
import pendiente034 from "@/assets/joyas/pendiente-034.jpg";
import pendiente035 from "@/assets/joyas/pendiente-035.jpg";
import pendiente036 from "@/assets/joyas/pendiente-036.jpg";
import pendiente037 from "@/assets/joyas/pendiente-037.jpg";
import pendiente038 from "@/assets/joyas/pendiente-038.jpg";
import pendiente039 from "@/assets/joyas/pendiente-039.jpg";
import pendiente049 from "@/assets/joyas/pendiente-049.jpg";
import pendiente050 from "@/assets/joyas/pendiente-050.jpg";
import pendiente051 from "@/assets/joyas/pendiente-051.jpg";
import pendiente052 from "@/assets/joyas/pendiente-052.jpg";
import pendiente053 from "@/assets/joyas/pendiente-053.jpg";
import pendiente054 from "@/assets/joyas/pendiente-054.jpg";
import pendiente055 from "@/assets/joyas/pendiente-055.jpg";
import pendiente056 from "@/assets/joyas/pendiente-056.jpg";
import pendiente057 from "@/assets/joyas/pendiente-057.jpg";
import pendiente058 from "@/assets/joyas/pendiente-058.jpg";
import pendiente059 from "@/assets/joyas/pendiente-059.jpg";
import pendiente060 from "@/assets/joyas/pendiente-060.jpg";
import pendiente061 from "@/assets/joyas/pendiente-061.jpg";
import pendiente062 from "@/assets/joyas/pendiente-062.jpg";
import pendiente063 from "@/assets/joyas/pendiente-063.jpg";
import pendiente064 from "@/assets/joyas/pendiente-064.jpg";
import pendiente065 from "@/assets/joyas/pendiente-065.jpg";
import pendiente066 from "@/assets/joyas/pendiente-066.jpg";
import pendiente067 from "@/assets/joyas/pendiente-067.jpg";
import pendiente068 from "@/assets/joyas/pendiente-068.jpg";
import pendiente069 from "@/assets/joyas/pendiente-069.jpg";
import pendiente070 from "@/assets/joyas/pendiente-070.jpg";
import pendiente071 from "@/assets/joyas/pendiente-071.jpg";
import pendiente072 from "@/assets/joyas/pendiente-072.jpg";
import pendiente073 from "@/assets/joyas/pendiente-073.jpg";
import pendiente074 from "@/assets/joyas/pendiente-074.jpg";
import pendiente075 from "@/assets/joyas/pendiente-075.jpg";
import pendiente076 from "@/assets/joyas/pendiente-076.jpg";
import pendiente077 from "@/assets/joyas/pendiente-077.jpg";
import pendiente078 from "@/assets/joyas/pendiente-078.jpg";
import pendiente079 from "@/assets/joyas/pendiente-079.jpg";
import pendiente080 from "@/assets/joyas/pendiente-080.jpg";
import pendiente081 from "@/assets/joyas/pendiente-081.jpg";
import pendiente085 from "@/assets/joyas/pendiente-085.jpg";
import pendiente086 from "@/assets/joyas/pendiente-086.jpg";
import pendiente090 from "@/assets/joyas/pendiente-090.jpg";
import pendiente091 from "@/assets/joyas/pendiente-091.jpg";
import pendiente092 from "@/assets/joyas/pendiente-092.jpg";
import pendiente093 from "@/assets/joyas/pendiente-093.jpg";
import pendiente094 from "@/assets/joyas/pendiente-094.jpg";
import pendiente095 from "@/assets/joyas/pendiente-095.jpg";
import pendiente096 from "@/assets/joyas/pendiente-096.jpg";
import pendiente097 from "@/assets/joyas/pendiente-097.jpg";

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
  /** Piedra central, opcional. */
  piedraCentral?: string;
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
    nombre: "Bruma Dorada · Esmeralda",
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
    slug: "argolla-eternity-diamantes",
    nombre: "Argolla Eternity · Oro Blanco",
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
      "Zafiro azul oval central rodeado por un halo de diamantes, oro 18k blanco. Presentación sobre cofre verde oliva.",
    descripcionLarga:
      "Un zafiro azul oval al centro, rodeado por un halo cluster que no se cierra: los diamantes se abren como rayos desde la piedra, formando un starburst asimétrico de inspiración art déco. Presentado sobre cofre de terciopelo verde oliva — firma visual de la casa. Cada anillo incluye Certificado Gia Solari.",
    categoria: "Anillo de compromiso",
    imagenes: [zafiroHaloClusterVintage01],
    isPlaceholder: false,
  },
  {
    slug: "halo-aguamarina-cushion",
    nombre: "Aguamarina · Halo Cushion",
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
    nombre: "Aguamarina · Atelier Rectangular",
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
    nombre: "Mandala · Flor de Luz",
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
    nombre: "Ónix · Halo",
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
    slug: "halo-cushion-pave-platino",
    nombre: "Halo Cushion Pavé",
    material: "Platino · Diamante natural corte emerald · Halo de diamantes + banda pavé + milgrain · Certificación GIA",
    metalPrincipal: "Platino",
    estilo: "Editorial",
    descripcion:
      "Diamante emerald cut con halo de diamantes, banda pavé y detalle milgrain. Platino.",
    descripcionLarga:
      "Diamante cushion con certificación GIA, rodeado por un halo de brillantes y una banda en pavé con detalle milgrain. El platino aporta temperatura fría y la milgrain suma un guiño vintage. Editorial sin perder uso diario. Cada anillo incluye Certificado Gia Solari, además del certificado GIA del diamante.",
    categoria: "Anillo de compromiso",
    imagenes: [haloCushionPavePlatino01, haloCushionPavePlatino02],
    isPlaceholder: false,
  },
  {
    slug: "solitario-aguamarina-oval",
    nombre: "Aguamarina · Solitario Oval",
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
    nombre: "Cúpula",
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
    slug: "anillo-lady-di",
    nombre: "Lady Di · Zafiro",
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
    slug: "anillo-felisa",
    nombre: "Felisa",
    material: "Oro 18k blanco · 3 diamantes brillantes redondos en disposición vertical · Bezel + halo de diamantes pequeños",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Editorial",
    descripcion:
      "Anillo art-déco con tres diamantes redondos en disposición vertical, rodeados de halo de diamantes pequeños. Estilo escalonado vintage.",
    descripcionLarga:
      "Tres diamantes brillantes redondos en composición vertical centrada, enmarcados por un halo escalonado de diamantes pavé pequeños. Detalle milgrain y arquitectura art-deco. Oro 18k blanco. Pieza con presencia y línea editorial vintage.",
    categoria: "Anillo de compromiso",
    imagenes: [anilloFelisa01, anilloFelisa02],
    isPlaceholder: false,
  },
  {
    slug: "anillo-isabel",
    nombre: "Isabel",
    material: "Oro 18k blanco · Zafiro azul corte Emerald · Halo de diamantes · Detalles vintage",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Color",
    descripcion:
      "Zafiro azul corte emerald cut con halo de diamantes, oro 18k blanco. Detalles vintage.",
    descripcionLarga:
      "Zafiro azul natural corte emerald cut como protagonista, rodeado por un halo de diamantes brillantes en oro 18k blanco. Banda fina con detalles pavé y aire vintage refinado. Profundidad de color y elegancia atemporal.",
    categoria: "Anillo de compromiso",
    imagenes: [anilloIsabel01, anilloIsabel02],
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
  {
    slug: "solitario-oval-platino",
    nombre: "Solitario Oval · Platino",
    material: "Platino · Diamante natural corte oval · Grifas",
    metalPrincipal: "Platino",
    estilo: "Atemporal",
    descripcion: "Diamante oval a grifas sobre banda lisa de platino. Solitario clásico y luminoso.",
    descripcionLarga:
      "Diamante natural corte oval elevado sobre grifas finas, banda lisa en platino. La pureza del solitario clásico, en la versión más atemporal. Cada anillo incluye Certificado Gia Solari.",
    categoria: "Anillo de compromiso",
    imagenes: [solitarioOvalPlatino01],
    isPlaceholder: false,
  },
  {
    slug: "solitario-emerald-cut-platino",
    nombre: "Solitario Emerald Cut · Platino",
    material: "Platino · Diamante natural corte emerald · Grifas",
    metalPrincipal: "Platino",
    estilo: "Editorial",
    descripcion: "Diamante corte emerald a grifas sobre banda fina de platino. Líneas limpias, brillo de paso largo.",
    descripcionLarga:
      "Diamante corte emerald — escalonado, geométrico, con destellos largos — montado a grifas sobre banda lisa de platino. Una pieza arquitectónica que conserva la sobriedad del solitario. Cada anillo incluye Certificado Gia Solari.",
    categoria: "Anillo de compromiso",
    imagenes: [solitarioEmeraldCutPlatino01],
    isPlaceholder: false,
  },
  {
    slug: "halo-brillante-platino",
    nombre: "Halo Brillante · Platino",
    material: "Platino · Diamante natural brillante redondo · Halo de diamantes",
    metalPrincipal: "Platino",
    estilo: "Atemporal",
    descripcion: "Diamante redondo central rodeado por un halo de diamantes, sobre banda fina de platino.",
    descripcionLarga:
      "Diamante brillante redondo al centro, rodeado por un halo de pequeños diamantes que multiplica la luz. Banda fina en platino. El halo clásico — luminoso, atemporal, infalible. Cada anillo incluye Certificado Gia Solari.",
    categoria: "Anillo de compromiso",
    imagenes: [haloBrillantePlatino01],
    isPlaceholder: false,
  },
  {
    slug: "halo-cushion-clasico",
    nombre: "Halo Cushion · Clásico",
    material: "Oro 18k blanco · Diamante natural corte cushion · Halo de diamantes",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Atemporal",
    descripcion: "Diamante corte cushion con halo de brillantes, oro 18k blanco. Brillo cálido y forma suave.",
    descripcionLarga:
      "Diamante natural corte cushion — la suavidad del cuadrado con esquinas redondeadas — rodeado por un halo de brillantes. Oro 18k blanco. La versión cálida del halo clásico. Cada anillo incluye Certificado Gia Solari.",
    categoria: "Anillo de compromiso",
    imagenes: [haloCushionClasico01],
    isPlaceholder: false,
  },
  {
    slug: "halo-pera",
    nombre: "Halo Pera · Diamantes",
    material: "Oro 18k blanco · Diamante natural corte pera · Halo de diamantes",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Editorial",
    descripcion: "Diamante corte pera con halo de brillantes, oro 18k blanco. Forma alargada y femenina.",
    descripcionLarga:
      "Diamante corte pera al centro, rodeado por un halo que sigue su contorno alargado. Oro 18k blanco. Una pieza con movimiento, que estiliza la mano y aporta un aire editorial. Cada anillo incluye Certificado Gia Solari.",
    categoria: "Anillo de compromiso",
    imagenes: [haloPera01],
    isPlaceholder: false,
  },
  {
    slug: "halo-marquise",
    nombre: "Halo Marquise · Diamantes",
    material: "Oro 18k blanco · Diamante natural corte marquise · Halo de diamantes",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Editorial",
    descripcion: "Diamante corte marquise con halo de brillantes, oro 18k blanco. Forma navette afilada.",
    descripcionLarga:
      "Diamante corte marquise — la elipse afilada en sus dos extremos — rodeado por un halo que dibuja su contorno. Oro 18k blanco. Pieza alargada, dramática y femenina, perfecta para quien busca una forma menos vista. Cada anillo incluye Certificado Gia Solari.",
    categoria: "Anillo de compromiso",
    imagenes: [haloMarquise01],
    isPlaceholder: false,
  },
  {
    slug: "trilogia-vintage-platino",
    nombre: "Trilogía Vintage · Platino",
    material: "Platino · 3 diamantes naturales · Detalles vintage con milgrain",
    metalPrincipal: "Platino",
    estilo: "Editorial",
    descripcion: "Tres diamantes alineados con detalles vintage en milgrain. Platino.",
    descripcionLarga:
      "Tres diamantes naturales alineados — pasado, presente y futuro — sobre banda de platino con detalles milgrain en los bordes. Una trilogía con aire de joya heredada. Cada anillo incluye Certificado Gia Solari.",
    categoria: "Anillo de compromiso",
    imagenes: [trilogiaVintagePlatino01],
    isPlaceholder: false,
  },
  {
    slug: "trilogia-color-oro",
    nombre: "Trilogía Color · Oro Amarillo",
    material: "Oro 18k · Diamante central + dos piedras de color laterales",
    metalPrincipal: "Oro 18k",
    estilo: "Color",
    descripcion: "Trilogía con diamante central y dos piedras de color a los costados. Oro 18k.",
    descripcionLarga:
      "Diamante natural al centro, acompañado por dos piedras de color a los costados — zafiros, esmeraldas o la piedra que elijas. Oro 18k. Una trilogía con personalidad, color y un guiño a la joyería antigua. Cada anillo incluye Certificado Gia Solari.",
    categoria: "Anillo de compromiso",
    imagenes: [trilogiaColorOro01],
    isPlaceholder: false,
  },
  {
    slug: "art-deco-baguette",
    nombre: "Art Decó Baguette · Platino",
    material: "Platino · Diamante central · Diamantes baguette laterales · Líneas geométricas art déco",
    metalPrincipal: "Platino",
    estilo: "Editorial",
    descripcion: "Diamante central con baguettes laterales en composición art déco. Platino.",
    descripcionLarga:
      "Diamante central con diamantes baguette a los costados, en una composición geométrica de inspiración art déco. Platino, líneas limpias y simetría perfecta. Una pieza para quienes aman el diseño de los años 20. Cada anillo incluye Certificado Gia Solari.",
    categoria: "Anillo de compromiso",
    imagenes: [artDecoBaguette01],
    isPlaceholder: false,
  },
  {
    slug: "eternity-diamantes-platino",
    nombre: "Eternity · Platino",
    material: "Platino · Diamantes brillantes · Eternity completa en microgrifa",
    metalPrincipal: "Platino",
    estilo: "Atemporal",
    descripcion: "Eternity completa con diamantes redondos engastados en microgrifa. Platino.",
    descripcionLarga:
      "Diamantes brillantes engastados en microgrifa rodeando toda la circunferencia de la banda — una eternity completa en platino. Pieza versátil: argolla de matrimonio, banda de aniversario o anillo de uso diario que multiplica la luz. Incluye Certificado Gia Solari.",
    categoria: "Argolla",
    imagenes: [eternityDiamantesPlatino01],
    isPlaceholder: false,
  },
  {
    slug: "vintage-001",
    nombre: "Zafiro Beatrice",
    categoria: "Argolla",
    material: "Oro 18k blanco · Zafiro",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Vintage",
    piedraCentral: "Zafiro",
    descripcion: "Banda alternada con zafiros y diamantes en oro 18k blanco.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente001],
    isPlaceholder: false,
  },
  {
    slug: "vintage-002",
    nombre: "Trillion Camilla",
    categoria: "Anillo de compromiso",
    material: "Oro 18k blanco · Diamante",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Vintage",
    piedraCentral: "Diamante",
    descripcion: "Solitario diamante corte trillion en oro 18k blanco.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente002],
    isPlaceholder: false,
  },
  {
    slug: "vintage-003",
    nombre: "Halo Vintage · Eleonora",
    categoria: "Anillo de compromiso",
    material: "Oro 18k amarillo · Diamante",
    metalPrincipal: "Oro 18k amarillo",
    estilo: "Vintage",
    piedraCentral: "Diamante",
    descripcion: "Diamante redondo central con halo art decó en oro 18k amarillo.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente003],
    isPlaceholder: false,
  },
  {
    slug: "vintage-004",
    nombre: "Trillion Chiara",
    categoria: "Anillo de compromiso",
    material: "Oro 18k blanco · Diamante",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Vintage",
    piedraCentral: "Diamante",
    descripcion: "Diamante trillion central con halo art decó escalonado, oro 18k blanco.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente004],
    isPlaceholder: false,
  },
  {
    slug: "vintage-005",
    nombre: "Chevron Federica",
    categoria: "Argolla",
    material: "Oro 18k blanco · Diamante",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Vintage",
    piedraCentral: "Diamante",
    descripcion: "Banda chevron en V con diamantes brillantes, oro 18k blanco.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente005],
    isPlaceholder: false,
  },
  {
    slug: "vintage-006",
    nombre: "Princess · Francesca",
    categoria: "Anillo de compromiso",
    material: "Oro 18k blanco · Diamante",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Vintage",
    piedraCentral: "Diamante",
    descripcion: "Diamante princess con dos piedras laterales, oro 18k blanco.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente006],
    isPlaceholder: false,
  },
  {
    slug: "vintage-007",
    nombre: "Banda Gaia",
    categoria: "Argolla",
    material: "Oro 18k blanco · Diamante",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Vintage",
    piedraCentral: "Diamante",
    descripcion: "Banda con cinco diamantes redondos en arco, oro 18k blanco.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente007],
    isPlaceholder: false,
  },
  {
    slug: "vintage-008",
    nombre: "Banda Giada",
    categoria: "Argolla",
    material: "Oro 18k blanco · Diamante",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Vintage",
    piedraCentral: "Diamante",
    descripcion: "Banda con cinco diamantes redondos en pavé, oro 18k blanco.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente008],
    isPlaceholder: false,
  },
  {
    slug: "vintage-009",
    nombre: "Morganita Giorgia",
    categoria: "Anillo de compromiso",
    material: "Oro 18k blanco · Morganita",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Vintage",
    piedraCentral: "Morganita",
    descripcion: "Trilogía con tres morganitas redondas en oro 18k blanco.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente009],
    isPlaceholder: false,
  },
  {
    slug: "vintage-010",
    nombre: "Eternity Ginevra",
    categoria: "Argolla",
    material: "Oro 18k blanco · Diamante",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Vintage",
    piedraCentral: "Diamante",
    descripcion: "Banda eternity con diamantes baguette en oro 18k blanco.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente010],
    isPlaceholder: false,
  },
  {
    slug: "vintage-011",
    nombre: "Dúo Giulia",
    categoria: "Anillo de compromiso",
    material: "Oro 18k blanco · Diamante",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Vintage",
    piedraCentral: "Diamante",
    descripcion: "Set de dos anillos: trilogía y halo cushion en oro 18k blanco.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente011],
    isPlaceholder: false,
  },
  {
    slug: "vintage-012",
    nombre: "Solitario · Lavinia",
    categoria: "Anillo de compromiso",
    material: "Oro 18k blanco · Diamante",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Vintage",
    piedraCentral: "Diamante",
    descripcion: "Solitario diamante a grifas con banda pavé, oro 18k blanco.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente012],
    isPlaceholder: false,
  },
  {
    slug: "vintage-013",
    nombre: "Trilogía Letizia",
    categoria: "Anillo de compromiso",
    material: "Oro 18k blanco · Diamante",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Vintage",
    piedraCentral: "Diamante",
    descripcion: "Trilogía con diamante central y dos laterales pequeños, oro 18k blanco.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente013],
    isPlaceholder: false,
  },
  {
    slug: "vintage-014",
    nombre: "Zafiro Livia",
    categoria: "Anillo de compromiso",
    material: "Oro 18k blanco · Zafiro",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Vintage",
    piedraCentral: "Zafiro",
    descripcion: "Zafiro azul oval grande con halo de diamantes estilo Lady Di, oro 18k blanco.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente014],
    isPlaceholder: false,
  },
  {
    slug: "vintage-015",
    nombre: "Oval Loredana",
    categoria: "Anillo de compromiso",
    material: "Oro 18k blanco · Diamante",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Vintage",
    piedraCentral: "Diamante",
    descripcion: "Solitario diamante oval grande a grifas en banda fina, oro 18k blanco.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente015],
    isPlaceholder: false,
  },
  {
    slug: "vintage-016",
    nombre: "Zafiro Marcella",
    categoria: "Anillo de compromiso",
    material: "Oro 18k blanco · Zafiro",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Vintage",
    piedraCentral: "Zafiro",
    descripcion: "Zafiro corte emerald rectangular con halo de diamantes art decó, oro 18k blanco.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente016],
    isPlaceholder: false,
  },
  {
    slug: "vintage-018",
    nombre: "Marquise Maddalena",
    categoria: "Anillo de compromiso",
    material: "Oro 18k blanco · Diamante",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Vintage",
    piedraCentral: "Diamante",
    descripcion: "Diamante corte marquise con halo de diamantes, oro 18k blanco.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente018],
    isPlaceholder: false,
  },
  {
    slug: "vintage-019",
    nombre: "Aguamarina Margherita",
    categoria: "Anillo de compromiso",
    material: "Oro 18k blanco · Aguamarina",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Vintage",
    piedraCentral: "Aguamarina",
    descripcion: "Aguamarina oval con piedras laterales pequeñas, oro 18k blanco.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente019],
    isPlaceholder: false,
  },
  {
    slug: "vintage-020",
    nombre: "Argollas Matilde",
    categoria: "Argolla",
    material: "Oro 18k amarillo · Diamante",
    metalPrincipal: "Oro 18k amarillo",
    estilo: "Vintage",
    piedraCentral: "Diamante",
    descripcion: "Par de argollas en oro 18k amarillo con diamantes alternados.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente020],
    isPlaceholder: false,
  },
  {
    slug: "vintage-021",
    nombre: "Trío Michela",
    categoria: "Anillo de compromiso",
    material: "Oro 18k blanco · Diamante",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Vintage",
    piedraCentral: "Diamante",
    descripcion: "Set de tres anillos vintage en oro 18k blanco.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente021],
    isPlaceholder: false,
  },
  {
    slug: "vintage-022",
    nombre: "Esmeralda Miranda",
    categoria: "Anillo de compromiso",
    material: "Oro 18k blanco · Esmeralda",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Vintage",
    piedraCentral: "Esmeralda",
    descripcion: "Anillo art decó navette con diamante central y baguettes esmeraldas, oro 18k blanco.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente022],
    isPlaceholder: false,
  },
  {
    slug: "vintage-023",
    nombre: "Solitario · Nicoletta",
    categoria: "Anillo de compromiso",
    material: "Oro 18k blanco · Diamante",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Vintage",
    piedraCentral: "Diamante",
    descripcion: "Solitario diamante redondo grande a grifas, oro 18k blanco.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente023],
    isPlaceholder: false,
  },
  {
    slug: "vintage-024",
    nombre: "Collar Norma",
    categoria: "Collar",
    material: "Oro 18k amarillo",
    metalPrincipal: "Oro 18k amarillo",
    estilo: "Vintage",
    piedraCentral: "Ninguna",
    descripcion: "Collar figaro en oro 18k amarillo, eslabones alternados.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente024],
    isPlaceholder: false,
  },
  {
    slug: "vintage-026",
    nombre: "Aros Ornella",
    categoria: "Aros",
    material: "Oro 18k amarillo · Diamante",
    metalPrincipal: "Oro 18k amarillo",
    estilo: "Vintage",
    piedraCentral: "Diamante",
    descripcion: "Aros pequeños cuadrados con diamantes en oro 18k amarillo.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente026],
    isPlaceholder: false,
  },
  {
    slug: "vintage-027",
    nombre: "Solitario · Paola",
    categoria: "Anillo de compromiso",
    material: "Oro 18k blanco · Diamante",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Vintage",
    piedraCentral: "Diamante",
    descripcion: "Solitario diamante redondo a grifas, oro 18k blanco.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente027],
    isPlaceholder: false,
  },
  {
    slug: "vintage-029",
    nombre: "Trilogía Patrizia",
    categoria: "Anillo de compromiso",
    material: "Oro 18k blanco · Diamante",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Vintage",
    piedraCentral: "Diamante",
    descripcion: "Trilogía con tres diamantes redondos en oro 18k blanco.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente029],
    isPlaceholder: false,
  },
  {
    slug: "vintage-030",
    nombre: "Zafiro Raffaella",
    categoria: "Anillo de compromiso",
    material: "Oro 18k blanco · Zafiro",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Vintage",
    piedraCentral: "Zafiro",
    descripcion: "Zafiro azul oval pequeño con halo de diamantes estilo Lady Di, oro 18k blanco.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente030],
    isPlaceholder: false,
  },
  {
    slug: "vintage-031",
    nombre: "Zafiro Roberta",
    categoria: "Anillo de compromiso",
    material: "Oro 18k blanco · Zafiro",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Vintage",
    piedraCentral: "Zafiro",
    descripcion: "Set zafiro con halo de diamantes y banda eternity, oro 18k blanco.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente031],
    isPlaceholder: false,
  },
  {
    slug: "vintage-032",
    nombre: "Dúo Romina",
    categoria: "Anillo de compromiso",
    material: "Oro 18k blanco · Diamante",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Vintage",
    piedraCentral: "Diamante",
    descripcion: "Set solitario diamante con banda eternity, oro 18k blanco.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente032],
    isPlaceholder: false,
  },
  {
    slug: "vintage-033",
    nombre: "Aguamarina Rossana",
    categoria: "Anillo de compromiso",
    material: "Oro 18k blanco · Aguamarina",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Vintage",
    piedraCentral: "Aguamarina",
    descripcion: "Aguamarina pequeña oval con piedras laterales, oro 18k blanco.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente033],
    isPlaceholder: false,
  },
  {
    slug: "vintage-034",
    nombre: "Zafiro Sabrina",
    categoria: "Anillo de compromiso",
    material: "Oro 18k blanco · Zafiro",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Vintage",
    piedraCentral: "Zafiro",
    descripcion: "Zafiro azul redondo con dos baguettes laterales, oro 18k blanco.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente034],
    isPlaceholder: false,
  },
  {
    slug: "vintage-035",
    nombre: "Trilogía Serena",
    categoria: "Anillo de compromiso",
    material: "Oro 18k blanco · Diamante",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Vintage",
    piedraCentral: "Diamante",
    descripcion: "Trilogía con tres diamantes art decó con halo, oro 18k blanco.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente035],
    isPlaceholder: false,
  },
  {
    slug: "vintage-036",
    nombre: "Halo Silvia",
    categoria: "Anillo de compromiso",
    material: "Oro 18k blanco · Diamante",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Vintage",
    piedraCentral: "Diamante",
    descripcion: "Diamante oval con halo de zafiros pequeños alrededor, oro 18k blanco.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente036],
    isPlaceholder: false,
  },
  {
    slug: "vintage-037",
    nombre: "Solitario · Simonetta",
    categoria: "Anillo de compromiso",
    material: "Oro 18k blanco · Diamante",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Vintage",
    piedraCentral: "Diamante",
    descripcion: "Solitario diamante pequeño a grifas, oro 18k blanco.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente037],
    isPlaceholder: false,
  },
  {
    slug: "vintage-038",
    nombre: "Trilogía Stella",
    categoria: "Anillo de compromiso",
    material: "Oro 18k blanco · Diamante",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Vintage",
    piedraCentral: "Diamante",
    descripcion: "Trilogía con tres diamantes redondos en banda fina, oro 18k blanco.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente038],
    isPlaceholder: false,
  },
  {
    slug: "vintage-039",
    nombre: "Aguamarina Susanna",
    categoria: "Anillo de compromiso",
    material: "Oro 18k blanco · Aguamarina",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Vintage",
    piedraCentral: "Aguamarina",
    descripcion: "Aguamarina pequeña corte cuadrado con piedras laterales, oro 18k blanco.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente039],
    isPlaceholder: false,
  },
  {
    slug: "vintage-049",
    nombre: "Trilogía Tiziana",
    categoria: "Anillo de compromiso",
    material: "Oro 18k amarillo · Diamante",
    metalPrincipal: "Oro 18k amarillo",
    estilo: "Vintage",
    piedraCentral: "Diamante",
    descripcion: "Trilogía con tres diamantes redondos en oro 18k amarillo.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente049],
    isPlaceholder: false,
  },
  {
    slug: "vintage-050",
    nombre: "Art Decó · Valeria",
    categoria: "Anillo de compromiso",
    material: "Oro 18k blanco · Diamante",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Vintage",
    piedraCentral: "Diamante",
    descripcion: "Anillo art decó con cuatro princess centrales y halo octogonal, oro 18k blanco.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente050],
    isPlaceholder: false,
  },
  {
    slug: "vintage-051",
    nombre: "Morganita Vittoria",
    categoria: "Anillo de compromiso",
    material: "Oro 18k blanco · Morganita",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Vintage",
    piedraCentral: "Morganita",
    descripcion: "Morganita pequeña oval con piedras laterales, oro 18k blanco.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente051],
    isPlaceholder: false,
  },
  {
    slug: "vintage-052",
    nombre: "Argollas Zita",
    categoria: "Argolla",
    material: "Oro 18k amarillo",
    metalPrincipal: "Oro 18k amarillo",
    estilo: "Vintage",
    piedraCentral: "Ninguna",
    descripcion: "Par de argollas finas en oro 18k amarillo.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente052],
    isPlaceholder: false,
  },
  {
    slug: "vintage-053",
    nombre: "Pulsera Almudena",
    categoria: "Pulsera",
    material: "Oro 18k amarillo",
    metalPrincipal: "Oro 18k amarillo",
    estilo: "Vintage",
    piedraCentral: "Ninguna",
    descripcion: "Pulsera bangle fina en oro 18k amarillo.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente053],
    isPlaceholder: false,
  },
  {
    slug: "vintage-055",
    nombre: "Morganita Begoña",
    categoria: "Anillo de compromiso",
    material: "Oro 18k amarillo · Morganita",
    metalPrincipal: "Oro 18k amarillo",
    estilo: "Vintage",
    piedraCentral: "Morganita",
    descripcion: "Anillo art decó con tres morganitas y diamantes, oro 18k amarillo.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente055],
    isPlaceholder: false,
  },
  {
    slug: "vintage-056",
    nombre: "Mandala Carmen",
    categoria: "Anillo de compromiso",
    material: "Oro 18k amarillo · Diamante",
    metalPrincipal: "Oro 18k amarillo",
    estilo: "Vintage",
    piedraCentral: "Diamante",
    descripcion: "Diamante central con halo mandala flor de luz, oro 18k amarillo.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente056],
    isPlaceholder: false,
  },
  {
    slug: "vintage-057",
    nombre: "Aguamarina Casilda",
    categoria: "Anillo de compromiso",
    material: "Oro 18k amarillo · Aguamarina",
    metalPrincipal: "Oro 18k amarillo",
    estilo: "Vintage",
    piedraCentral: "Aguamarina",
    descripcion: "Aguamarina oval con halo de diamantes, oro 18k amarillo.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente057],
    isPlaceholder: false,
  },
  {
    slug: "vintage-058",
    nombre: "Argollas Concha",
    categoria: "Argolla",
    material: "Oro 18k amarillo · Diamante",
    metalPrincipal: "Oro 18k amarillo",
    estilo: "Vintage",
    piedraCentral: "Diamante",
    descripcion: "Argollas grabadas con diamantes en oro 18k amarillo, par.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente058],
    isPlaceholder: false,
  },
  {
    slug: "vintage-061",
    nombre: "Emerald Covadonga",
    categoria: "Anillo de compromiso",
    material: "Oro 18k blanco · Diamante",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Vintage",
    piedraCentral: "Diamante",
    descripcion: "Diamante corte emerald con piedras laterales, oro 18k blanco.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente061],
    isPlaceholder: false,
  },
  {
    slug: "vintage-063",
    nombre: "Mandala Encarna",
    categoria: "Anillo de compromiso",
    material: "Oro 18k amarillo · Diamante",
    metalPrincipal: "Oro 18k amarillo",
    estilo: "Vintage",
    piedraCentral: "Diamante",
    descripcion: "Halo flor de luz con diamante central en oro 18k amarillo.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente063],
    isPlaceholder: false,
  },
  {
    slug: "vintage-069",
    nombre: "Trilogía Eulalia",
    categoria: "Anillo de compromiso",
    material: "Oro 18k blanco · Diamante",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Vintage",
    piedraCentral: "Diamante",
    descripcion: "Trilogía con tres diamantes redondos con halo, oro 18k blanco.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente069],
    isPlaceholder: false,
  },
  {
    slug: "vintage-070",
    nombre: "Eternity Florinda",
    categoria: "Argolla",
    material: "Oro 18k blanco · Diamante",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Vintage",
    piedraCentral: "Diamante",
    descripcion: "Eternity con diamantes redondos en oro 18k blanco.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente070],
    isPlaceholder: false,
  },
  {
    slug: "vintage-072",
    nombre: "Trilogía Imelda",
    categoria: "Anillo de compromiso",
    material: "Oro 18k blanco · Diamante",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Vintage",
    piedraCentral: "Diamante",
    descripcion: "Trilogía con tres diamantes redondos en oro 18k blanco.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente072],
    isPlaceholder: false,
  },
  {
    slug: "vintage-073",
    nombre: "Esmeralda Macarena",
    categoria: "Anillo de compromiso",
    material: "Oro 18k blanco · Esmeralda",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Vintage",
    piedraCentral: "Esmeralda",
    descripcion: "Esmeralda emerald cut con halo art decó navette, oro 18k blanco.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente073],
    isPlaceholder: false,
  },
  {
    slug: "vintage-076",
    nombre: "Navette · Mireia",
    categoria: "Anillo de compromiso",
    material: "Oro 18k blanco · Diamante",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Vintage",
    piedraCentral: "Diamante",
    descripcion: "Diamante navette cluster art decó, oro 18k blanco.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente076],
    isPlaceholder: false,
  },
  {
    slug: "vintage-077",
    nombre: "Solitario Baguettes · Montserrat",
    categoria: "Anillo de compromiso",
    material: "Oro 18k blanco · Diamante",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Vintage",
    piedraCentral: "Diamante",
    descripcion: "Solitario diamante con baguettes laterales, oro 18k blanco.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente077],
    isPlaceholder: false,
  },
  {
    slug: "vintage-078",
    nombre: "Trilogía Pia",
    categoria: "Anillo de compromiso",
    material: "Oro 18k blanco · Diamante",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Vintage",
    piedraCentral: "Diamante",
    descripcion: "Trilogía oval con dos diamantes redondos, oro 18k blanco.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente078],
    isPlaceholder: false,
  },
  {
    slug: "vintage-085",
    nombre: "Solitario Vintage · Remedios",
    categoria: "Anillo de compromiso",
    material: "Oro 18k blanco · Diamante",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Vintage",
    piedraCentral: "Diamante",
    descripcion: "Solitario diamante con detalles vintage en banda, oro 18k blanco.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente085],
    isPlaceholder: false,
  },
  {
    slug: "vintage-086",
    nombre: "Amatista Adriana",
    categoria: "Argolla",
    material: "Oro 18k amarillo · Amatista",
    metalPrincipal: "Oro 18k amarillo",
    estilo: "Vintage",
    piedraCentral: "Amatista",
    descripcion: "Banda con amatistas y diamantes alternados, oro 18k amarillo.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente086],
    isPlaceholder: false,
  },
  {
    slug: "vintage-090",
    nombre: "Solitario Pavé · Ambra",
    categoria: "Anillo de compromiso",
    material: "Oro 18k blanco · Diamante",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Vintage",
    piedraCentral: "Diamante",
    descripcion: "Solitario diamante con banda pavé, oro 18k blanco.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente090],
    isPlaceholder: false,
  },
  {
    slug: "vintage-091",
    nombre: "Zafiro Cosima",
    categoria: "Anillo de compromiso",
    material: "Oro 18k blanco · Zafiro",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Vintage",
    piedraCentral: "Zafiro",
    descripcion: "Zafiro azul oval grande con halo de diamantes estilo Lady Di, oro 18k blanco.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente091],
    isPlaceholder: false,
  },
  {
    slug: "vintage-092",
    nombre: "Solitario · Donatella",
    categoria: "Anillo de compromiso",
    material: "Oro 18k blanco · Diamante",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Vintage",
    piedraCentral: "Diamante",
    descripcion: "Solitario diamante redondo con detalles vintage en banda, oro 18k blanco.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente092],
    isPlaceholder: false,
  },
  {
    slug: "vintage-093",
    nombre: "Solitario Art Decó · Fiammetta",
    categoria: "Anillo de compromiso",
    material: "Oro 18k blanco · Diamante",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Vintage",
    piedraCentral: "Diamante",
    descripcion: "Solitario diamante con banda art decó escalonada, oro 18k blanco.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente093],
    isPlaceholder: false,
  },
  {
    slug: "vintage-095",
    nombre: "Aguamarina Renata",
    categoria: "Anillo de compromiso",
    material: "Oro 18k blanco · Aguamarina",
    metalPrincipal: "Oro 18k blanco",
    estilo: "Vintage",
    piedraCentral: "Aguamarina",
    descripcion: "Aguamarina oval grande con halo de diamantes, oro 18k blanco.",
    descripcionLarga:
      "Pieza única hecha a mano. La piedra, el metal y los detalles se conversan a medida según disponibilidad. Cada anillo incluye Certificado Gia Solari.",
    imagenes: [pendiente095],
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
