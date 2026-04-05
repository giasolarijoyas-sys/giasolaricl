// Maps recommendation attributes to gallery images
import galSolitarioCaja from "@/assets/gal-solitario-caja.jpg";
import galHaloOvalCaja from "@/assets/gal-halo-oval-caja.jpg";
import galZafiro from "@/assets/gal-zafiro.jpeg";
import galEsmeraldaHalo from "@/assets/gal-esmeralda-halo.png";
import galTricillo from "@/assets/gal-tricillo.jpeg";
import galVintageFiligrana from "@/assets/gal-vintage-filigrana.jpg";
import galArtDeco from "@/assets/gal-art-deco.png";
import galOvalPave from "@/assets/gal-oval-pave.jpg";
import galSolitarioChevron from "@/assets/gal-solitario-chevron.jpg";
import galHaloZafiro from "@/assets/gal-halo-zafiro.jpeg";
import galZafiroFloral from "@/assets/gal-zafiro-floral.png";
import galHaloZafiroRedondo from "@/assets/gal-halo-zafiro-redondo.png";
import galProd2096 from "@/assets/gal-prod-img_2096.jpg";
import galProd2117 from "@/assets/gal-prod-img_2117.jpg";
import galProd2109 from "@/assets/gal-prod-img_2109.jpg";
import galSesion5881 from "@/assets/gal-sesion-dsc_5881.jpg";
import galSesion5927 from "@/assets/gal-sesion-dsc_5927.jpg";
import galSesion5923 from "@/assets/gal-sesion-dsc_5923.jpg";
import galPrincesaMarco from "@/assets/gal-princesa-marco.jpeg";

interface MatchCriteria {
  ringStyle: string;
  stoneType: string;
  stoneShape: string;
  metal: string;
}

interface ImageMatch {
  criteria: Partial<MatchCriteria>;
  image: string;
  score: number; // base relevance
}

const imageDatabase: ImageMatch[] = [
  // Solitarios
  { criteria: { ringStyle: 'solitaire', stoneShape: 'round' }, image: galSolitarioCaja, score: 3 },
  { criteria: { ringStyle: 'solitaire', stoneShape: 'oval' }, image: galSolitarioChevron, score: 3 },
  { criteria: { ringStyle: 'solitaire' }, image: galSesion5927, score: 2 },
  { criteria: { ringStyle: 'solitaire', stoneShape: 'emerald_cut' }, image: galSesion5923, score: 3 },

  // Halos
  { criteria: { ringStyle: 'halo', stoneShape: 'oval' }, image: galHaloOvalCaja, score: 3 },
  { criteria: { ringStyle: 'halo', stoneType: 'sapphire' }, image: galZafiro, score: 4 },
  { criteria: { ringStyle: 'halo', stoneType: 'sapphire', stoneShape: 'round' }, image: galHaloZafiroRedondo, score: 5 },
  { criteria: { ringStyle: 'halo', stoneType: 'sapphire', stoneShape: 'oval' }, image: galProd2117, score: 5 },
  { criteria: { ringStyle: 'halo', stoneShape: 'emerald_cut' }, image: galEsmeraldaHalo, score: 3 },
  { criteria: { ringStyle: 'halo', stoneShape: 'cushion' }, image: galProd2109, score: 3 },
  { criteria: { ringStyle: 'halo', stoneType: 'aquamarine' }, image: galProd2096, score: 4 },
  { criteria: { ringStyle: 'halo' }, image: galSesion5881, score: 1 },

  // Tricillos
  { criteria: { ringStyle: 'three_stone' }, image: galTricillo, score: 2 },
  { criteria: { ringStyle: 'three_stone', stoneShape: 'round' }, image: galPrincesaMarco, score: 3 },

  // Vintage
  { criteria: { ringStyle: 'vintage', stoneType: 'aquamarine' }, image: galVintageFiligrana, score: 4 },
  { criteria: { ringStyle: 'vintage' }, image: galArtDeco, score: 2 },

  // Nature / floral
  { criteria: { ringStyle: 'nature_inspired', stoneType: 'sapphire' }, image: galZafiroFloral, score: 3 },

  // Modern / bezel
  { criteria: { ringStyle: 'modern' }, image: galSolitarioChevron, score: 2 },
  { criteria: { ringStyle: 'bezel' }, image: galSolitarioChevron, score: 2 },

  // Pavé
  { criteria: { ringStyle: 'pave' }, image: galOvalPave, score: 2 },

  // Generic sapphire fallbacks
  { criteria: { stoneType: 'sapphire' }, image: galHaloZafiro, score: 1 },
  { criteria: { stoneType: 'aquamarine' }, image: galVintageFiligrana, score: 1 },
];

export function findMatchingImage(rec: MatchCriteria): string | undefined {
  let bestImage: string | undefined;
  let bestScore = 0;

  for (const match of imageDatabase) {
    let score = match.score;
    let matches = true;

    for (const [key, value] of Object.entries(match.criteria)) {
      if (rec[key as keyof MatchCriteria] !== value) {
        matches = false;
        break;
      }
    }

    if (matches && score > bestScore) {
      bestScore = score;
      bestImage = match.image;
    }
  }

  return bestImage;
}
