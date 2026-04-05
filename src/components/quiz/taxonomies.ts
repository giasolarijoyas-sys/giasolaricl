// Jewelry taxonomies — max 4 options per category to keep it simple

export const RING_STYLES = [
  { key: 'solitaire', label: 'Solitario', desc: 'Una piedra central protagonista' },
  { key: 'halo', label: 'Halo', desc: 'Piedra central rodeada de diamantes' },
  { key: 'three_stone', label: 'Tricillo', desc: 'Tres piedras: pasado, presente y futuro' },
  { key: 'vintage', label: 'Vintage', desc: 'Detalles clásicos y filigrana' },
  { key: 'nature_inspired', label: 'Inspirado en la naturaleza', desc: 'Formas orgánicas' },
  { key: 'modern', label: 'Moderno', desc: 'Líneas limpias y contemporáneo' },
  { key: 'cathedral', label: 'Cathedral', desc: 'Arcos elegantes' },
  { key: 'pave', label: 'Pavé', desc: 'Banda cubierta de diamantes' },
  { key: 'bezel', label: 'Bisel', desc: 'Metal rodea la piedra' },
  { key: 'toi_et_moi', label: 'Toi et Moi', desc: 'Dos piedras que se encuentran' },
] as const;

export const CENTER_STONE_TYPES = [
  { key: 'natural_diamond', label: 'Diamante Natural', desc: 'El clásico eterno' },
  { key: 'lab_diamond', label: 'Diamante Lab', desc: 'Mismo brillo, creado en laboratorio' },
  { key: 'sapphire', label: 'Zafiro', desc: 'Azul intenso, elegancia real' },
  { key: 'aquamarine', label: 'Aguamarina', desc: 'Azul celeste, delicada' },
] as const;

export const STONE_SHAPES = [
  { key: 'round', label: 'Redonda', desc: 'La más clásica' },
  { key: 'oval', label: 'Oval', desc: 'Elegante, alarga el dedo' },
  { key: 'emerald_cut', label: 'Esmeralda', desc: 'Rectángulo art deco' },
  { key: 'cushion', label: 'Cushion', desc: 'Cuadrado suave, romántica' },
] as const;

export const METALS = [
  { key: 'gold_yellow', label: 'Oro 18k Amarillo', desc: 'Cálido y clásico' },
  { key: 'platinum', label: 'Platino', desc: 'El más resistente' },
  { key: 'gold_white', label: 'Oro 18k Blanco', desc: 'Elegancia plateada' },
] as const;

export const SIZE_PREFERENCES = [
  { key: 'discrete', label: 'Discreto', desc: 'Sutil, para el día a día' },
  { key: 'balanced', label: 'Balanceado', desc: 'Visible pero no exagerado' },
  { key: 'statement', label: 'Impactante', desc: 'Que se note, que brille' },
] as const;

export const AESTHETIC_KEYWORDS = [
  { key: 'delicate', label: 'Delicado' },
  { key: 'elegant', label: 'Elegante' },
  { key: 'bold', label: 'Llamativo' },
  { key: 'minimalist', label: 'Minimalista' },
] as const;

export const BUDGET_RANGES = [
  { key: '1m_2m', label: '$1.000.000 – $2.000.000', min: 1000000, max: 2000000 },
  { key: '2m_3m', label: '$2.000.000 – $3.000.000', min: 2000000, max: 3000000 },
  { key: '3m_4m', label: '$3.000.000 – $4.000.000', min: 3000000, max: 4000000 },
  { key: 'over_4m', label: 'Más de $4.000.000', min: 4000000, max: 10000000 },
] as const;

export const DRESS_STYLES = [
  { key: 'classic', label: 'Clásica / elegante' },
  { key: 'modern', label: 'Moderna / minimalista' },
  { key: 'bohemian', label: 'Bohemia / relajada' },
  { key: 'glamorous', label: 'Glamorosa / llamativa' },
] as const;

export const JEWELRY_USAGE = [
  { key: 'daily', label: 'Sí, todos los días' },
  { key: 'sometimes', label: 'A veces' },
  { key: 'rarely', label: 'Casi nunca' },
  { key: 'unknown', label: 'No lo sé' },
] as const;

export const JEWELRY_COLORS = [
  { key: 'gold', label: 'Dorado' },
  { key: 'silver', label: 'Plateado' },
  { key: 'mixed', label: 'Mezcla' },
  { key: 'unknown', label: 'No lo sé' },
] as const;

export const ACCENT_STONE_OPTIONS = [
  { key: 'none', label: 'Sin piedras laterales' },
  { key: 'pave', label: 'Pavé' },
  { key: 'side_stones', label: 'Piedras laterales' },
  { key: 'halo', label: 'Halo' },
] as const;

export const PRIORITY_OPTIONS = [
  { key: 'brilliance', label: 'Brillo' },
  { key: 'size', label: 'Tamaño' },
  { key: 'durability', label: 'Durabilidad' },
  { key: 'price', label: 'Mejor precio' },
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
