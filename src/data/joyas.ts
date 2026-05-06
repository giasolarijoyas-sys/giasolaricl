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
import cincoPiedrasPlatino01 from "@/assets/joyas/cinco-piedras-platino-01.jpg";
import eternityDiamantesPlatino01 from "@/assets/joyas/eternity-diamantes-platino-01.jpg";
import haloBrillantePlatino01 from "@/assets/joyas/halo-brillante-platino-01.jpg";
import haloCushionClasico01 from "@/assets/joyas/halo-cushion-clasico-01.jpg";
import haloMarquise01 from "@/assets/joyas/halo-marquise-01.jpg";
import haloPera01 from "@/assets/joyas/halo-pera-01.jpg";
import solitarioBezelOroAmarillo01 from "@/assets/joyas/solitario-bezel-oro-amarillo-01.jpg";
import solitarioEmeraldCutPlatino01 from "@/assets/joyas/solitario-emerald-cut-platino-01.jpg";
import solitarioOvalPlatino01 from "@/assets/joyas/solitario-oval-platino-01.jpg";
import trilogiaColorOro01 from "@/assets/joyas/trilogia-color-oro-01.jpg";
import trilogiaVintagePlatino01 from "@/assets/joyas/trilogia-vintage-platino-01.jpg";

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
      "Zafiro azul oval central rodeado por un halo de diamantes, oro 18k blanco. Presentación sobre cofre verde oliva.",
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
    slug: "halo-cushion-pave-platino",
    nombre: "Halo Cushion Pavé · Platino",
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
    slug: "anillo-felisa",
    nombre: "Anillo Felisa",
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
    nombre: "Anillo Isabel",
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
    slug: "solitario-bezel-oro-amarillo",
    nombre: "Solitario Bezel · Oro Amarillo",
    material: "Oro 18k amarillo · Diamante natural brillante redondo · Engaste bezel",
    metalPrincipal: "Oro 18k amarillo",
    estilo: "Atemporal",
    descripcion: "Diamante redondo en bezel sobre banda lisa de oro amarillo. Pieza minimalista y cálida.",
    descripcionLarga:
      "Diamante brillante redondo enmarcado en bezel sobre banda lisa de oro 18k amarillo. Una pieza minimalista, cálida y de uso diario — el solitario para quienes prefieren la línea limpia y el oro amarillo. Cada anillo incluye Certificado Gia Solari.",
    categoria: "Anillo de compromiso",
    imagenes: [solitarioBezelOroAmarillo01],
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
    nombre: "Eternity Diamantes · Platino",
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
    slug: "cinco-piedras-platino",
    nombre: "Cinco Piedras · Platino",
    material: "Platino · 5 diamantes naturales redondos a grifas",
    metalPrincipal: "Platino",
    estilo: "Atemporal",
    descripcion: "Banda con cinco diamantes redondos en línea sobre platino. Pieza luminosa y simétrica.",
    descripcionLarga:
      "Cinco diamantes brillantes redondos alineados a grifas sobre banda fina de platino. Una pieza limpia y simétrica que funciona como argolla de compromiso, banda de aniversario o acompañamiento de un solitario. Cada anillo incluye Certificado Gia Solari.",
    categoria: "Anillo de compromiso",
    imagenes: [cincoPiedrasPlatino01],
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
