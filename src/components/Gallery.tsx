import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { JOYAS } from "@/data/joyas";

// Existing gallery images
import galZafiro from "@/assets/gal-zafiro.jpeg";
import galArgolla from "@/assets/gal-argolla.jpeg";
import galTricillo from "@/assets/gal-tricillo.jpeg";
import galTricillo2 from "@/assets/gal-tricillo2.jpeg";
import galPrincesa from "@/assets/gal-princesa.jpeg";
import galHaloZafiro from "@/assets/gal-halo-zafiro.jpeg";
import galEsmeraldaHalo from "@/assets/gal-esmeralda-halo.png";
import galZafirosBanda from "@/assets/gal-zafiros-banda.png";
import galArtDeco from "@/assets/gal-art-deco.png";
import galVintageFiligrana from "@/assets/gal-vintage-filigrana.jpg";
import galOvalPave from "@/assets/gal-oval-pave.jpg";
import galSolitarioChevron from "@/assets/gal-solitario-chevron.jpg";

import galBrazaleteOro from "@/assets/gal-brazalete-oro.png";
import galSolitarioCaja from "@/assets/gal-solitario-caja.jpg";
import galPrincesaMarco from "@/assets/gal-princesa-marco.jpeg";
import galHaloOvalCaja from "@/assets/gal-halo-oval-caja.jpg";
import galZafiroFloral from "@/assets/gal-zafiro-floral.png";
import galSolitarioMarco from "@/assets/gal-solitario-marco.png";
import galHaloZafiroRedondo from "@/assets/gal-halo-zafiro-redondo.png";

// Session photos
import galSesion5646 from "@/assets/gal-sesion-dsc_5646.jpg";
import galSesion5690 from "@/assets/gal-sesion-dsc_5690.jpg";
import galSesion5708 from "@/assets/gal-sesion-dsc_5708.jpg";
import galSesion5722 from "@/assets/gal-sesion-dsc_5722.jpg";
import galSesion5729 from "@/assets/gal-sesion-dsc_5729.jpg";
import galSesion5734 from "@/assets/gal-sesion-dsc_5734.jpg";
import galSesion5770 from "@/assets/gal-sesion-dsc_5770.jpg";
import galSesion5775 from "@/assets/gal-sesion-dsc_5775.jpg";
import galSesion5777 from "@/assets/gal-sesion-dsc_5777.jpg";
import galSesion5803 from "@/assets/gal-sesion-dsc_5803.jpg";
import galSesion5813 from "@/assets/gal-sesion-dsc_5813.jpg";
import galSesion5822 from "@/assets/gal-sesion-dsc_5822.jpg";
import galSesion5835 from "@/assets/gal-sesion-dsc_5835.jpg";
import galSesion5848 from "@/assets/gal-sesion-dsc_5848.jpg";
import galSesion5863 from "@/assets/gal-sesion-dsc_5863.jpg";
import galSesion5881 from "@/assets/gal-sesion-dsc_5881.jpg";
import galSesion5913 from "@/assets/gal-sesion-dsc_5913.jpg";
import galSesion5915 from "@/assets/gal-sesion-dsc_5915.jpg";
import galSesion5923 from "@/assets/gal-sesion-dsc_5923.jpg";
import galSesion5927 from "@/assets/gal-sesion-dsc_5927.jpg";
import galSesion5936 from "@/assets/gal-sesion-dsc_5936.jpg";
import galSesion5938 from "@/assets/gal-sesion-dsc_5938.jpg";
import galSesion5962 from "@/assets/gal-sesion-dsc_5962.jpg";
import galSesion5970 from "@/assets/gal-sesion-dsc_5970.jpg";
import galSesion5977 from "@/assets/gal-sesion-dsc_5977.jpg";

// Product photos
import galProd2059 from "@/assets/gal-prod-img_2059.jpg";
import galProd2072 from "@/assets/gal-prod-img_2072.jpg";
import galProd2081 from "@/assets/gal-prod-img_2081.jpg";
import galProd2083 from "@/assets/gal-prod-img_2083.jpg";
import galProd2091 from "@/assets/gal-prod-img_2091.jpg";
import galProd2096 from "@/assets/gal-prod-img_2096.jpg";
import galProd2103 from "@/assets/gal-prod-img_2103.jpg";
import galProd2104 from "@/assets/gal-prod-img_2104.jpg";
import galProd2109 from "@/assets/gal-prod-img_2109.jpg";
import galProd2110 from "@/assets/gal-prod-img_2110.jpg";
import galProd2113 from "@/assets/gal-prod-img_2113.jpg";
import galProd2116 from "@/assets/gal-prod-img_2116.jpg";
import galProd2117 from "@/assets/gal-prod-img_2117.jpg";
import galProd2121 from "@/assets/gal-prod-img_2121.jpg";
import galProd2123 from "@/assets/gal-prod-img_2123.jpg";
import galProd2126 from "@/assets/gal-prod-img_2126.jpg";
import galProd2133 from "@/assets/gal-prod-img_2133.jpg";
import galProd2135 from "@/assets/gal-prod-img_2135.jpg";
import galProd2141 from "@/assets/gal-prod-img_2141.jpg";
import galProd2143 from "@/assets/gal-prod-img_2143.jpg";
import galProd2147 from "@/assets/gal-prod-img_2147.jpg";
import galProd2151 from "@/assets/gal-prod-img_2151.jpg";
import galProd2156 from "@/assets/gal-prod-img_2156.jpg";
import galProd2159 from "@/assets/gal-prod-img_2159.jpg";
import galProd2168 from "@/assets/gal-prod-img_2168.jpg";
import galProd2172 from "@/assets/gal-prod-img_2172.jpg";
import galProd2195 from "@/assets/gal-prod-img_2195.jpg";
import galProd2197 from "@/assets/gal-prod-img_2197.jpg";
import galProd2214 from "@/assets/gal-prod-img_2214.jpg";

// Individual uploads
import galNusaDetail from "@/assets/gal-nusa-detail.jpg";
import galVintageDetail from "@/assets/gal-vintage-detail.jpg";
import galHaloOlivo from "@/assets/gal-halo-olivo.png";
import galHaloEucalipto from "@/assets/gal-halo-eucalipto.png";

// Fotos nuevas 2026
import galAlianzasOroGrabado from "@/assets/gal-alianzas-oro-grabado.png";
import galAlianzasPlatino from "@/assets/gal-alianzas-platino.png";
import galAguamarinaHaloArtDeco2 from "@/assets/gal-aguamarina-halo-artdeco-2.png";
import galAguamarinaOvalSutil from "@/assets/gal-aguamarina-oval-sutil.png";
import galOroAmarilloColor from "@/assets/gal-oro-amarillo-piedras-color.png";
import galAnilloPerlaOro from "@/assets/gal-anillo-perla-oro.png";
import galBandaEternidadPlatino from "@/assets/gal-banda-eternidad-platino.png";
import galCollarAguamarinaPlatino from "@/assets/gal-collar-aguamarina-platino.png";
import galEternidadDiamantesPlatino from "@/assets/gal-eternidad-diamantes-platino.png";
import galEternidadOroBlanco from "@/assets/gal-eternidad-oro-blanco.png";
import galHaloCushionAguamarina from "@/assets/gal-halo-cushion-aguamarina.png";
import galHaloCushionAmatista from "@/assets/gal-halo-cushion-amatista.png";
import galHaloCushionDiamante from "@/assets/gal-halo-cushion-diamante.png";
import galHaloCushionPave2 from "@/assets/gal-halo-cushion-pave-2.png";
import galHaloEmeraldVintagePlatino from "@/assets/gal-halo-emerald-vintage-platino.jpg";
import galHaloMarquisePlatino2 from "@/assets/gal-halo-marquise-platino-2.png";
import galHaloOvalDiamante from "@/assets/gal-halo-oval-diamante.png";
import galHaloOvalEsmeralda from "@/assets/gal-halo-oval-esmeralda.png";
import galHaloOvalRubi from "@/assets/gal-halo-oval-rubi.png";
import galHaloOvalVintage from "@/assets/gal-halo-oval-vintage.png";
import galHaloOvalZafiroDiana from "@/assets/gal-halo-oval-zafiro-diana.png";
import galHaloOvalZafiro from "@/assets/gal-halo-oval-zafiro.png";
import galHaloPeraDiamante from "@/assets/gal-halo-pera-diamante.png";
import galHaloPeraPave from "@/assets/gal-halo-pera-pave.png";
import galHaloRedondoBrillante from "@/assets/gal-halo-redondo-brillante.png";
import galHaloRedondoDiamante from "@/assets/gal-halo-redondo-diamante.png";
import galLifestyleManos from "@/assets/gal-lifestyle-manos.png";
import galMediaEternidadPlatino from "@/assets/gal-media-eternidad-platino.png";
import galSolitarioEmeraldPave from "@/assets/gal-solitario-emerald-pave.png";
import galSolitarioHaloCushion from "@/assets/gal-solitario-halo-cushion.png";
import galSolitarioMarquisePlatino from "@/assets/gal-solitario-marquise-platino.png";
import galSolitarioOvalMinimalista from "@/assets/gal-solitario-oval-minimalista.png";
import galSolitarioOvalLaterales from "@/assets/gal-solitario-oval-laterales.png";
import galSolitarioPlatinaMacro from "@/assets/gal-solitario-platino-macro.png";
import galSolitarioRedondoCaja from "@/assets/gal-solitario-redondo-caja.png";
import galSolitarioRedondoPiedra from "@/assets/gal-solitario-redondo-piedra.png";
import galTrilogiaDiamantePlatino from "@/assets/gal-trilogia-diamante-platino.png";
import galTrilogiaEsmeraldaBaguette from "@/assets/gal-trilogia-esmeralda-baguette.png";
import galTrilogiaHaloDiamante from "@/assets/gal-trilogia-halo-diamante.png";
import galTrilogiaOroAmarillo from "@/assets/gal-trilogia-oro-amarillo.png";
import galTrilogiaOvalDiamante from "@/assets/gal-trilogia-oval-diamante.png";
import galTrilogiaOvalRubi from "@/assets/gal-trilogia-oval-rubi.png";
import galTrilogiaRedondaDiamante from "@/assets/gal-trilogia-redonda-diamante.png";
import galArtDecoBaguettePlatino from "@/assets/gal-art-deco-baguette-platino.png";

// Grabados Simbólicos — Serie Exclusiva
import galGrabadoMontana from "@/assets/gal-solitario-oval-grabado-montana.png";
import galGrabadoCoordenadas from "@/assets/gal-tresillo-platino-grabado-coordenadas.png";
import galGrabadoLatido from "@/assets/gal-solitario-redondo-grabado-latido.png";
import galGrabadoConstelacion from "@/assets/gal-quintillo-platino-grabado-constelacion.png";
import galGrabadoLunaSol from "@/assets/gal-halo-pera-grabado-luna-sol.png";
import galGrabadoHuella from "@/assets/gal-marquise-grabado-huella.png";
import galVintageAguamarinaOlas from "@/assets/gal-vintage-artdeco-aguamarina-olas.png";
import galAguamarinaHaloArtDeco from "@/assets/gal-aguamarina-oval-halo-artdeco.png";
import galAguamarinaOvalGrabado from "@/assets/gal-aguamarina-oval-grabado.png";

type Category =
  | "todas"
  | "anillos"
  | "collares"
  | "aros"
  | "pulseras";

type Material = "todos" | "oro18k" | "platino";
type Estilo = "todos" | "solitario" | "pave" | "halo" | "tres-piedras" | "minimalista" | "grabado";

interface Piece {
  img: string;
  name: string;
  desc: string;
  category: Category;
  material?: Material;
  estilo?: Estilo;
  priceFrom?: number;
}

const categories: { key: Category; label: string }[] = [
  { key: "todas", label: "Todos" },
  { key: "anillos", label: "Anillos de compromiso" },
  { key: "collares", label: "Collares" },
  { key: "aros", label: "Aros" },
  { key: "pulseras", label: "Pulseras" },
];

const materials: { key: Material; label: string }[] = [
  { key: "todos", label: "Todos" },
  { key: "oro18k", label: "Oro 18k" },
  { key: "platino", label: "Platino" },
];

const estilos: { key: Estilo; label: string }[] = [
  { key: "todos", label: "Todos" },
  { key: "solitario", label: "Solitario" },
  { key: "pave", label: "Pavé" },
  { key: "halo", label: "Halo" },
  { key: "tres-piedras", label: "Tres piedras" },
  { key: "minimalista", label: "Minimalista" },
  { key: "grabado", label: "✦ Grabados" },
];

const formatPrice = (n: number) =>
  "$" + n.toLocaleString("es-CL") + " CLP";

const pieces: Piece[] = [
  // ── Original ring collection ──
  { img: galSolitarioCaja, name: "Solitario Clásico", desc: "Diamante, Caja Gia Solari", category: "anillos", material: "oro18k", estilo: "solitario", priceFrom: 1200000 },
  { img: galPrincesaMarco, name: "Anillo Tres Piedras", desc: "Corte Princesa, Platino", category: "anillos", material: "platino", estilo: "tres-piedras", priceFrom: 2500000 },
  { img: galZafiro, name: "Anillo Diana", desc: "Zafiro Azul, Halo Diamantes", category: "anillos", material: "oro18k", estilo: "halo", priceFrom: 1800000 },
  { img: galEsmeraldaHalo, name: "Anillo Celeste", desc: "Corte Esmeralda, Halo Pavé", category: "anillos", material: "oro18k", estilo: "halo", priceFrom: 2200000 },
  { img: galOvalPave, name: "Anillo Paraíba", desc: "Turmalina Oval, Pavé Diamantes", category: "anillos", material: "oro18k", estilo: "pave", priceFrom: 1900000 },
  { img: galHaloZafiro, name: "Anillo Royal", desc: "Zafiro Oval, Halo Clásico", category: "anillos" },
  { img: galTricillo, name: "Anillo Reina", desc: "Tricillo Diamantes, Platino", category: "anillos" },
  { img: galArtDeco, name: "Anillo Gatsby", desc: "Corte Princesa, Art Déco", category: "anillos" },
  { img: galSolitarioChevron, name: "Anillo Etéreo", desc: "Solitario Chevrón, Oro Blanco", category: "anillos" },
  { img: galTricillo2, name: "Anillo Legado", desc: "Tricillo, Vista Detalle", category: "anillos" },
  
  { img: galPrincesa, name: "Anillo Princesa", desc: "Corte Princesa, Oro 18k", category: "anillos" },
  { img: galZafirosBanda, name: "Anillo Corona", desc: "Zafiros, Banda Diamantes", category: "anillos" },
  { img: galVintageFiligrana, name: "Anillo Heritage", desc: "Aguamarina, Filigrana Vintage", category: "anillos" },
  { img: galHaloOvalCaja, name: "Anillo Nusa", desc: "Halo Oval, Caja Terciopelo", category: "anillos" },
  { img: galZafiroFloral, name: "Anillo Flora", desc: "Zafiro, Halo Floral, Oro", category: "anillos" },
  { img: galSolitarioMarco, name: "Anillo Atelier", desc: "Solitario Redondo, Oro Blanco", category: "anillos" },
  { img: galHaloZafiroRedondo, name: "Anillo Índigo", desc: "Zafiro Redondo, Halo Pavé", category: "anillos" },
  { img: galArgolla, name: "Argolla Eterna", desc: "Platino, Diseño Clásico", category: "anillos" },

  // ── Session - Ring product shots ──
  { img: galSesion5646, name: "Cintillo Pavé", desc: "Diamantes, Doble Fila", category: "anillos" },
  { img: galSesion5690, name: "Solitario Caja Gris", desc: "Diamante, Caja Gia Solari", category: "anillos" },
  { img: galSesion5708, name: "Cinco Piedras Verde", desc: "Diamantes, Caja Terciopelo", category: "anillos" },
  { img: galSesion5775, name: "Tricillo en Mano", desc: "Diamantes, Vista Detalle", category: "anillos" },
  { img: galSesion5777, name: "Argolla Channel", desc: "Diamantes Corte Princesa", category: "anillos" },
  { img: galSesion5803, name: "Tricillo Terciopelo", desc: "Tres Piedras, Caja Azul", category: "anillos" },
  { img: galSesion5822, name: "Halo & Tricillo", desc: "Par de Anillos, Caja Verde", category: "anillos" },
  { img: galSesion5835, name: "Solitario Pavé Menta", desc: "Diamante, Caja Terciopelo", category: "anillos" },
  { img: galSesion5848, name: "Solitario Rosé", desc: "Diamante, Bandeja Dorada", category: "anillos" },
  { img: galSesion5863, name: "Solitario Gris", desc: "Diamante, Caja Terciopelo", category: "anillos" },
  { img: galSesion5881, name: "Zafiro Diana", desc: "Halo Diamantes, Bandeja", category: "anillos" },
  { img: galSesion5813, name: "Anillo Dorado Editorial", desc: "Oro 18k, Estilo Editorial", category: "anillos" },

  // ── Product photos (styled) ──
  { img: galProd2059, name: "Display Vintage", desc: "Anillos, Cofre & Marco Dorado", category: "anillos" },
  { img: galProd2072, name: "Tricillo Satén", desc: "Tres Piedras, Lazo Verde", category: "anillos" },
  { img: galProd2081, name: "Art Déco Carta", desc: "Anillo Navette, Caja Esmeralda", category: "anillos" },
  { img: galProd2083, name: "Halo Oval Carta", desc: "Diamante, Sobre Carta Vintage", category: "anillos" },
  { img: galProd2091, name: "Solitario Baguette Seda", desc: "Diamante, Fondo Dorado", category: "anillos" },
  { img: galProd2096, name: "Halo Aguamarina", desc: "Oro 18k, Cofre de Vidrio", category: "anillos" },
  { img: galProd2103, name: "Halo Aqua Vitrina", desc: "Piedra Azul, Cofre Dorado", category: "anillos" },
  { img: galProd2104, name: "Cintillo Channel Seda", desc: "Diamantes, Sobre Seda Rosa", category: "anillos" },
  { img: galProd2109, name: "Halo Esmeralda", desc: "Corte Esmeralda, Mármol", category: "anillos" },
  { img: galProd2110, name: "Halo Pera Mármol", desc: "Corte Pera, Halo Pavé", category: "anillos" },
  { img: galProd2113, name: "Solitario Oval Espejo", desc: "Diamante, Pavé Lateral", category: "anillos" },
  { img: galProd2116, name: "Halo Cushion", desc: "Diamante, Caja Terciopelo", category: "anillos" },
  { img: galProd2117, name: "Marquesa Doble Halo", desc: "Diamante Marquesa, Doble Halo", category: "anillos" },
  { img: galProd2121, name: "Halo Marquesa Oliva", desc: "Diamante, Caja Terciopelo", category: "anillos" },
  { img: galProd2123, name: "Halo Oval Celeste", desc: "Piedra Oval Celeste, Halo Pavé", category: "anillos" },
  { img: galProd2126, name: "Solitario Satén Rosa", desc: "Diamante, Sobre Satén", category: "anillos" },
  { img: galProd2133, name: "Tricillo Lino", desc: "Tres Piedras, Tela Natural", category: "anillos" },
  { img: galProd2135, name: "Navette Pavé", desc: "Diamantes, Filigrana Platino", category: "anillos" },
  { img: galProd2141, name: "Trío de Anillos", desc: "Diamantes, Fondo Textil", category: "anillos" },
  { img: galProd2143, name: "Art Déco Navette", desc: "Diamante, Esmeraldas", category: "anillos" },
  { img: galProd2147, name: "Solitario Textura", desc: "Diamante, Fondo Textil", category: "anillos" },
  { img: galProd2151, name: "Halo Redondo Eucalipto", desc: "Diamante, Decoración Natural", category: "anillos" },
  { img: galProd2168, name: "Cintillo Brillantes", desc: "Diamantes, Sobre Terciopelo", category: "anillos" },
  { img: galProd2172, name: "Solitario con Baguettes", desc: "Diamante, Baguettes Laterales", category: "anillos" },
  { img: galProd2195, name: "Collar Halo Floral", desc: "Colgante con diamante, Cadena oro 18k", category: "collares" },
  { img: galProd2197, name: "Cluster Diamantes", desc: "Pavé, Sobre Lino Natural", category: "anillos" },

  // ── Individual uploads ──
  { img: galNusaDetail, name: "Anillo Nusa Detalle", desc: "Zafiro Azul, Vista Macro", category: "anillos" },
  { img: galVintageDetail, name: "Vintage Filigrana", desc: "Diamante, Vista Macro", category: "anillos" },
  { img: galHaloOlivo, name: "Halo Olivo", desc: "Diamante, Halo Pavé", category: "anillos", material: "platino", estilo: "halo" },
  { img: galHaloEucalipto, name: "Halo Eucalipto", desc: "Diamante, Halo Milgrain", category: "anillos", material: "platino", estilo: "halo" },

  // ── Fotos nuevas 2026 ──
  { img: galAlianzasOroGrabado, name: "Alianzas Oro Grabado", desc: "Par de alianzas, Grabado interior, Oro 18k", category: "anillos", material: "oro18k", estilo: "grabado" },
  { img: galAlianzasPlatino, name: "Alianzas Platino", desc: "Par de alianzas, Platino", category: "anillos", material: "platino", estilo: "minimalista" },
  { img: galAguamarinaHaloArtDeco2, name: "Halo Aguamarina Art Déco", desc: "Aguamarina oval, Halo filigrana, Platino", category: "anillos", material: "platino", estilo: "halo" },
  { img: galAguamarinaOvalSutil, name: "Solitario Aguamarina Oval", desc: "Aguamarina oval, Solitario minimalista, Platino", category: "anillos", material: "platino", estilo: "solitario" },
  { img: galOroAmarilloColor, name: "Anillo Color Oro Amarillo", desc: "Piedra central con color, Oro amarillo 18k", category: "anillos", material: "oro18k", estilo: "halo" },
  { img: galAnilloPerlaOro, name: "Anillo Perla Oro", desc: "Perla central, Oro 18k", category: "anillos", material: "oro18k" },
  { img: galBandaEternidadPlatino, name: "Banda Eternidad Diamantes", desc: "Diamantes, Banda completa, Platino", category: "anillos", material: "platino", estilo: "pave" },
  { img: galCollarAguamarinaPlatino, name: "Collar Aguamarina Platino", desc: "Aguamarina colgante, Platino", category: "collares", material: "platino" },
  { img: galEternidadDiamantesPlatino, name: "Media Eternidad Diamantes", desc: "Diamantes, Platino", category: "anillos", material: "platino", estilo: "pave" },
  { img: galEternidadOroBlanco, name: "Eternidad Oro Blanco", desc: "Diamantes, Oro blanco 18k", category: "anillos", material: "oro18k", estilo: "pave" },
  { img: galHaloCushionAguamarina, name: "Halo Cushion Aguamarina", desc: "Aguamarina cushion, Halo pavé, Platino", category: "anillos", material: "platino", estilo: "halo" },
  { img: galHaloCushionAmatista, name: "Halo Cushion Amatista", desc: "Amatista cushion, Halo pavé, Platino", category: "anillos", material: "platino", estilo: "halo" },
  { img: galHaloCushionDiamante, name: "Halo Cushion Diamante", desc: "Diamante cushion, Halo pavé, Platino", category: "anillos", material: "platino", estilo: "halo" },
  { img: galHaloCushionPave2, name: "Halo Cushion Pavé Platino", desc: "Diamante cushion, Doble halo pavé, Platino", category: "anillos", material: "platino", estilo: "halo" },
  { img: galHaloEmeraldVintagePlatino, name: "Halo Esmeralda Vintage Platino", desc: "Corte esmeralda, Halo vintage, Platino", category: "anillos", material: "platino", estilo: "halo" },
  { img: galHaloMarquisePlatino2, name: "Halo Marquise Platino", desc: "Marquise, Halo pavé, Platino", category: "anillos", material: "platino", estilo: "halo" },
  { img: galHaloOvalDiamante, name: "Halo Oval Diamante Platino", desc: "Diamante oval, Halo pavé, Platino", category: "anillos", material: "platino", estilo: "halo" },
  { img: galHaloOvalEsmeralda, name: "Halo Oval Esmeralda Oro", desc: "Esmeralda oval, Halo diamantes, Oro 18k", category: "anillos", material: "oro18k", estilo: "halo" },
  { img: galHaloOvalRubi, name: "Halo Oval Rubí Oro", desc: "Rubí oval, Halo diamantes, Oro 18k", category: "anillos", material: "oro18k", estilo: "halo" },
  { img: galHaloOvalVintage, name: "Halo Oval Vintage Platino", desc: "Diamante oval, Halo vintage milgrain, Platino", category: "anillos", material: "platino", estilo: "halo" },
  { img: galHaloOvalZafiroDiana, name: "Halo Oval Zafiro Diana", desc: "Zafiro azul oval, Halo diamantes, Platino", category: "anillos", material: "platino", estilo: "halo" },
  { img: galHaloOvalZafiro, name: "Halo Oval Zafiro Platino", desc: "Zafiro azul oval, Halo pavé, Platino", category: "anillos", material: "platino", estilo: "halo" },
  { img: galHaloPeraDiamante, name: "Halo Pera Diamante Platino", desc: "Diamante pera, Halo pavé, Platino", category: "anillos", material: "platino", estilo: "halo" },
  { img: galHaloPeraPave, name: "Halo Pera Pavé Platino", desc: "Diamante pera, Halo pavé total, Platino", category: "anillos", material: "platino", estilo: "halo" },
  { img: galHaloRedondoBrillante, name: "Halo Redondo Brillante Platino", desc: "Diamante brillante redondo, Halo pavé, Platino", category: "anillos", material: "platino", estilo: "halo" },
  { img: galHaloRedondoDiamante, name: "Halo Redondo Diamante Platino", desc: "Diamante redondo, Halo clásico, Platino", category: "anillos", material: "platino", estilo: "halo" },
  { img: galLifestyleManos, name: "Lifestyle Anillos en Mano", desc: "Anillos a medida, Vista lifestyle", category: "anillos" },
  { img: galMediaEternidadPlatino, name: "Media Eternidad Platino", desc: "Diamantes, Media eternidad, Platino", category: "anillos", material: "platino", estilo: "pave" },
  { img: galSolitarioEmeraldPave, name: "Solitario Esmeralda Pavé Platino", desc: "Corte esmeralda, Banda pavé, Platino", category: "anillos", material: "platino", estilo: "solitario" },
  { img: galSolitarioHaloCushion, name: "Solitario Halo Cushion Platino", desc: "Diamante cushion, Halo sutil, Platino", category: "anillos", material: "platino", estilo: "halo" },
  { img: galSolitarioMarquisePlatino, name: "Solitario Marquise Platino", desc: "Diamante marquise, Solitario clásico, Platino", category: "anillos", material: "platino", estilo: "solitario" },
  { img: galSolitarioOvalMinimalista, name: "Solitario Oval Minimalista Platino", desc: "Diamante oval, Banda fina, Platino", category: "anillos", material: "platino", estilo: "solitario" },
  { img: galSolitarioOvalLaterales, name: "Solitario Oval con Peras Laterales", desc: "Diamante oval, Peras laterales, Platino", category: "anillos", material: "platino", estilo: "solitario" },
  { img: galSolitarioPlatinaMacro, name: "Solitario Platino Macro", desc: "Diamante, Vista macro, Platino", category: "anillos", material: "platino", estilo: "solitario" },
  { img: galSolitarioRedondoCaja, name: "Solitario Redondo Caja Terciopelo", desc: "Diamante redondo, Caja terciopelo Gia Solari", category: "anillos", material: "platino", estilo: "solitario" },
  { img: galSolitarioRedondoPiedra, name: "Solitario Redondo Diamante", desc: "Diamante redondo brillante, Platino", category: "anillos", material: "platino", estilo: "solitario" },
  { img: galTrilogiaDiamantePlatino, name: "Trilogía Diamante Platino", desc: "Tres diamantes, Platino", category: "anillos", material: "platino", estilo: "tres-piedras" },
  { img: galTrilogiaEsmeraldaBaguette, name: "Trilogía Esmeralda Baguette Platino", desc: "Esmeralda central, Baguettes laterales, Platino", category: "anillos", material: "platino", estilo: "tres-piedras" },
  { img: galTrilogiaHaloDiamante, name: "Trilogía Halo Diamante Platino", desc: "Tres diamantes con halo, Platino", category: "anillos", material: "platino", estilo: "tres-piedras" },
  { img: galTrilogiaOroAmarillo, name: "Trilogía Oro Amarillo", desc: "Tres piedras, Oro amarillo 18k", category: "anillos", material: "oro18k", estilo: "tres-piedras" },
  { img: galTrilogiaOvalDiamante, name: "Trilogía Oval Diamante Platino", desc: "Diamante oval central, Redondos laterales, Platino", category: "anillos", material: "platino", estilo: "tres-piedras" },
  { img: galTrilogiaOvalRubi, name: "Trilogía Oval Rubí Platino", desc: "Rubí oval, Diamantes laterales, Platino", category: "anillos", material: "platino", estilo: "tres-piedras" },
  { img: galTrilogiaRedondaDiamante, name: "Trilogía Redonda Diamante Platino", desc: "Tres diamantes redondos, Platino", category: "anillos", material: "platino", estilo: "tres-piedras" },
  { img: galArtDecoBaguettePlatino, name: "Art Déco Baguette Platino", desc: "Diamante central, Baguettes Art Déco, Platino", category: "anillos", material: "platino" },

  // ── Grabados Simbólicos ──
  { img: galGrabadoMontana, name: "Solitario Oval · Grabado Montaña", desc: "Grabado interior de cordillera, Oro 18k amarillo", category: "anillos", material: "oro18k", estilo: "grabado" },
  { img: galGrabadoCoordenadas, name: "Tresillo · Grabado Coordenadas", desc: "Grabado interior de coordenadas GPS, Platino", category: "anillos", material: "platino", estilo: "grabado" },
  { img: galGrabadoLatido, name: "Solitario Redondo · Grabado Latido", desc: "Grabado interior de latido cardíaco, Platino", category: "anillos", material: "platino", estilo: "grabado" },
  { img: galGrabadoConstelacion, name: "Quintillo · Grabado Constelación", desc: "Grabado interior de constelación, Platino", category: "anillos", material: "platino", estilo: "grabado" },
  { img: galGrabadoLunaSol, name: "Halo Pera · Luna y Sol", desc: "Grabado interior luna y sol, Platino", category: "anillos", material: "platino", estilo: "grabado" },
  { img: galGrabadoHuella, name: "Marquise · Grabado Huella", desc: "Grabado interior de huella dactilar, Platino", category: "anillos", material: "platino", estilo: "grabado" },
  { img: galVintageAguamarinaOlas, name: "Vintage Art Déco · Aguamarina y Olas", desc: "Grabado interior de olas, Aguamarina, Platino", category: "anillos", material: "platino", estilo: "grabado" },
  { img: galAguamarinaHaloArtDeco, name: "Aguamarina Oval · Halo Art Déco", desc: "Aguamarina oval, Halo filigrana Art Déco, Platino", category: "anillos", material: "platino", estilo: "halo" },
  { img: galAguamarinaOvalGrabado, name: "Aguamarina Oval · Grabado Interior", desc: "Grabado interior personalizado, Aguamarina, Platino", category: "anillos", material: "platino", estilo: "grabado" },

  // ── Collares ──
  { img: galProd2214, name: "Cadena Eslabones", desc: "Oro 18k, Aros Diamante", category: "collares" },

  // ── Pulseras ──
  { img: galBrazaleteOro, name: "Brazalete Clásico", desc: "Oro 18k, Diseño Atemporal", category: "pulseras" },

];

const AUTOPLAY_INTERVAL = 4500;

const Gallery = () => {
  const [active, setActive] = useState<Category>("todas");
  const [activeMaterial, setActiveMaterial] = useState<Material>("todos");
  const [activeEstilo, setActiveEstilo] = useState<Estilo>("todos");

  const filtered = pieces.filter((p) => {
    if (active !== "todas" && p.category !== active) return false;
    if (activeMaterial !== "todos" && p.material !== activeMaterial) return false;
    if (activeEstilo !== "todos" && p.estilo !== activeEstilo) return false;
    return true;
  });

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  // Autoplay con pausa en hover/focus y respeto a prefers-reduced-motion
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);
  useEffect(() => {
    if (!emblaApi || paused || prefersReducedMotion) return;
    const timer = setInterval(() => {
      emblaApi.scrollNext();
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [emblaApi, active, paused, prefersReducedMotion]);

  // Mapa nombre → slug para linkear cada tarjeta a su ficha
  const slugByName = useMemo(() => {
    const m = new Map<string, string>();
    for (const j of JOYAS) {
      if (!j.isPlaceholder && j.slug) m.set(j.nombre.toLowerCase().trim(), j.slug);
    }
    return m;
  }, []);
  const linkFor = (name: string) => {
    const s = slugByName.get(name.toLowerCase().trim());
    return s ? `/joyas/${s}` : "/joyas";
  };

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (emblaApi) emblaApi.reInit();
  }, [active, activeMaterial, activeEstilo, emblaApi]);

  const countFor = (cat: Category) =>
    cat === "todas" ? pieces.length : pieces.filter((p) => p.category === cat).length;

  return (
    <section id="galeria" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-12"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">
            Colección
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground">
            <a href="/joyas" className="hover:text-primary transition-colors">
              Joyas
            </a>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Cada pieza es única y se crea exclusivamente a pedido.
          </p>
          <a
            href="/joyas"
            className="inline-block mt-6 text-sm tracking-widest uppercase text-primary hover:underline underline-offset-4"
          >
            Ver todas las piezas →
          </a>
        </motion.div>

        {/* Filters */}
        <div className="space-y-4 mb-10">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`px-4 py-2 rounded-full text-sm transition-all border ${
                  active === cat.key
                    ? "bg-primary/15 text-foreground border-primary"
                    : "bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {materials.map((m) => (
              <button
                key={m.key}
                onClick={() => setActiveMaterial(m.key)}
                className={`px-3 py-1.5 rounded-full text-xs transition-all border ${
                  activeMaterial === m.key
                    ? "bg-primary/15 text-foreground border-primary"
                    : "bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {m.label}
              </button>
            ))}
            <span className="w-px h-6 bg-border self-center mx-1" />
            {estilos.map((e) => (
              <button
                key={e.key}
                onClick={() => setActiveEstilo(e.key)}
                className={`px-3 py-1.5 rounded-full text-xs transition-all border ${
                  activeEstilo === e.key
                    ? "bg-primary/15 text-foreground border-primary"
                    : "bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {e.label}
              </button>
            ))}
          </div>
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.div
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-muted-foreground text-lg mb-2">Próximamente</p>
            <p className="text-muted-foreground text-sm">
              Estamos preparando piezas increíbles para esta categoría. ¡Vuelve pronto!
            </p>
          </motion.div>
        )}

        {/* Carousel */}
        {filtered.length > 0 && (
          <div
            className="relative group/carousel"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
          >
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex -ml-3 md:-ml-4">
                {filtered.map((piece, i) => (
                  <div
                    key={piece.name + i}
                    className="flex-[0_0_50%] sm:flex-[0_0_33.333%] lg:flex-[0_0_25%] xl:flex-[0_0_20%] pl-3 md:pl-4 min-w-0"
                  >
                    <Link to={linkFor(piece.name)} aria-label={`Ver ${piece.name}`} className="block">
                      <div className="group relative overflow-hidden cursor-pointer">
                        <div className="aspect-square overflow-hidden">
                        <img
                            src={piece.img}
                            alt={piece.name}
                            loading={i === 0 ? "eager" : "lazy"}
                            decoding="async"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/60 transition-all duration-500 flex items-end p-4">
                          <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            <p className="text-cream font-display text-sm md:text-base">
                              {piece.name}
                            </p>
                            <p className="text-cream/60 text-xs">{piece.desc}</p>
                          </div>
                        </div>
                      </div>
                      {piece.priceFrom && (
                        <p className="mt-2 text-xs tracking-wide text-muted-foreground">
                          Desde {formatPrice(piece.priceFrom)}
                        </p>
                      )}
                    </Link>
                  </div>
                ))}
              </div>
            </div>


            {/* Navigation arrows */}
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity disabled:opacity-0 hover:bg-background"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canScrollNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity disabled:opacity-0 hover:bg-background"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
