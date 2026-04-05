// Jewelry taxonomies — catalogs with labels and scoring keys

export const RING_STYLES = [
  { key: 'solitaire', label: 'Solitario', desc: 'Una piedra central protagonista, elegancia pura' },
  { key: 'halo', label: 'Halo', desc: 'Piedra central rodeada de piedras pequeñas' },
  { key: 'three_stone', label: 'Tricillo', desc: 'Tres piedras que simbolizan pasado, presente y futuro' },
  { key: 'vintage', label: 'Vintage', desc: 'Detalles milgrain, filigrana y aire clásico' },
  { key: 'nature_inspired', label: 'Inspirado en la naturaleza', desc: 'Formas orgánicas, hojas, flores' },
  { key: 'modern', label: 'Moderno', desc: 'Líneas limpias y diseño contemporáneo' },
  { key: 'cathedral', label: 'Cathedral', desc: 'Arcos elegantes que elevan la piedra' },
  { key: 'pave', label: 'Pavé', desc: 'Banda cubierta de pequeños diamantes' },
  { key: 'bezel', label: 'Bisel', desc: 'Metal rodea la piedra, máxima protección' },
  { key: 'toi_et_moi', label: 'Toi et Moi', desc: 'Dos piedras que se encuentran' },
] as const;

export const CENTER_STONE_TYPES = [
  { key: 'natural_diamond', label: 'Diamante Natural', desc: 'El clásico eterno, máximo brillo' },
  { key: 'lab_diamond', label: 'Diamante Lab', desc: 'Mismo diamante, creado en laboratorio' },
  { key: 'sapphire', label: 'Zafiro', desc: 'Piedra de color, elegancia real' },
  { key: 'emerald', label: 'Esmeralda', desc: 'Verde profundo, único y especial' },
  { key: 'ruby', label: 'Rubí', desc: 'Rojo pasión, piedra de amor' },
  { key: 'aquamarine', label: 'Aguamarina', desc: 'Azul celeste, delicada y luminosa' },
] as const;

export const STONE_SHAPES = [
  { key: 'round', label: 'Redonda', desc: 'La más clásica, máximo brillo' },
  { key: 'oval', label: 'Oval', desc: 'Alarga el dedo, muy elegante' },
  { key: 'emerald_cut', label: 'Esmeralda', desc: 'Rectángulo con esquinas cortadas, art deco' },
  { key: 'pear', label: 'Pera', desc: 'Forma de gota, única y femenina' },
  { key: 'cushion', label: 'Cushion', desc: 'Cuadrado con bordes suaves, romántica' },
  { key: 'marquise', label: 'Marquesa', desc: 'Alargada y puntiaguda, maximiza tamaño' },
  { key: 'princess', label: 'Princesa', desc: 'Cuadrada con brillo intenso' },
  { key: 'asscher', label: 'Asscher', desc: 'Cuadrado con efecto espejo, vintage' },
  { key: 'radiant', label: 'Radiante', desc: 'Combina brillo de redonda con forma rectangular' },
] as const;

export const METALS = [
  { key: 'gold_yellow', label: 'Oro 18k Amarillo', desc: 'Cálido y clásico' },
  { key: 'platinum', label: 'Platino', desc: 'El más resistente y puro' },
  { key: 'gold_white', label: 'Oro 18k Blanco', desc: 'Elegancia plateada' },
] as const;

export const SIZE_PREFERENCES = [
  { key: 'discrete', label: 'Discreto', desc: 'Elegante y sutil, perfecto para el día a día' },
  { key: 'balanced', label: 'Balanceado', desc: 'Visible pero no exagerado' },
  { key: 'statement', label: 'Impactante', desc: 'Que se note, que brille' },
] as const;

export const AESTHETIC_KEYWORDS = [
  { key: 'delicate', label: 'Delicado' },
  { key: 'elegant', label: 'Elegante' },
  { key: 'bold', label: 'Llamativo' },
  { key: 'bohemian', label: 'Bohemio' },
  { key: 'minimalist', label: 'Minimalista' },
  { key: 'ornate', label: 'Ornamentado' },
  { key: 'romantic', label: 'Romántico' },
  { key: 'contemporary', label: 'Contemporáneo' },
] as const;

export const ACCENT_STONE_OPTIONS = [
  { key: 'none', label: 'Sin piedras laterales' },
  { key: 'pave', label: 'Pavé (pequeños diamantes en la banda)' },
  { key: 'side_stones', label: 'Piedras laterales' },
  { key: 'halo', label: 'Halo alrededor de la piedra central' },
] as const;

export const BUDGET_RANGES = [
  { key: 'under_500k', label: 'Hasta $500.000', min: 0, max: 500000 },
  { key: '500k_1m', label: '$500.000 – $1.000.000', min: 500000, max: 1000000 },
  { key: '1m_2m', label: '$1.000.000 – $2.000.000', min: 1000000, max: 2000000 },
  { key: '2m_4m', label: '$2.000.000 – $4.000.000', min: 2000000, max: 4000000 },
  { key: 'over_4m', label: 'Más de $4.000.000', min: 4000000, max: 10000000 },
  { key: 'flexible', label: 'Prefiero no indicarlo', min: 0, max: 10000000 },
] as const;

export const PRIORITY_OPTIONS = [
  { key: 'brilliance', label: 'Brillo' },
  { key: 'size', label: 'Tamaño de piedra' },
  { key: 'durability', label: 'Durabilidad' },
  { key: 'price', label: 'Mejor precio' },
  { key: 'sustainability', label: 'Sostenibilidad' },
  { key: 'rarity', label: 'Rareza' },
  { key: 'symbolism', label: 'Simbolismo' },
] as const;

export const DRESS_STYLES = [
  { key: 'classic', label: 'Clásico / elegante' },
  { key: 'modern', label: 'Moderno / minimalista' },
  { key: 'bohemian', label: 'Bohemio / relajado' },
  { key: 'glamorous', label: 'Glamoroso / llamativo' },
  { key: 'sporty', label: 'Deportivo / casual' },
  { key: 'unknown', label: 'No sabría describirlo' },
] as const;

export const JEWELRY_USAGE = [
  { key: 'daily', label: 'Sí, todos los días' },
  { key: 'sometimes', label: 'A veces, en ocasiones especiales' },
  { key: 'rarely', label: 'Casi nunca' },
  { key: 'unknown', label: 'No lo sé' },
] as const;

export const JEWELRY_COLORS = [
  { key: 'gold', label: 'Dorado' },
  { key: 'silver', label: 'Plateado' },
  { key: 'mixed', label: 'Mezcla de todo' },
  { key: 'unknown', label: 'No lo sé' },
] as const;

export const RELATIONSHIP_LENGTHS = [
  { key: 'under_1', label: 'Menos de 1 año' },
  { key: '1_3', label: '1–3 años' },
  { key: '3_5', label: '3–5 años' },
  { key: '5_plus', label: 'Más de 5 años' },
] as const;

export const HINT_OPTIONS = [
  { key: 'yes_specific', label: 'Sí, ha dado pistas claras' },
  { key: 'yes_vague', label: 'Sí, pero vagas' },
  { key: 'no', label: 'No ha dicho nada' },
  { key: 'surprise', label: 'Es una sorpresa total' },
] as const;
