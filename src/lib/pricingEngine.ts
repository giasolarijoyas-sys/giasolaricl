// Pricing engine for Gia Solari internal quotation tool
// All amounts in CLP

export interface MetalData {
  label: string;
  pricePerGram: number;
  wastePct: number; // e.g. 0.10
}

export const METALS: MetalData[] = [
  { label: "Oro Fino (24k)", pricePerGram: 131_000, wastePct: 0.10 },
  { label: "Oro 18k", pricePerGram: 97_000, wastePct: 0.10 },
  { label: "Paladio", pricePerGram: 65_000, wastePct: 0.10 },
  { label: "Platino", pricePerGram: 79_500, wastePct: 0.20 },
];

export const PIECE_TYPES = [
  "Anillo de compromiso",
  "Argolla",
  "Aros",
  "Collar",
  "Pulsera",
  "Otro",
] as const;
export type PieceType = typeof PIECE_TYPES[number];

export interface AccentStone {
  id: string;
  type: "lab" | "natural";
  quantity: number;
  points: number; // 1–100+
  manualCost: number; // used when points > 20
}

export interface QuoteInput {
  pieceName: string;
  pieceType: PieceType;
  metalIndex: number;
  pricePerGram: number; // editable override
  wastePct: number; // editable override
  grams: number;
  labor: number;
  centralStone: {
    enabled: boolean;
    type: "lab" | "natural";
    carats: number;
    color: string;
    cost: number;
  };
  accents: AccentStone[];
  advancedEngraving: boolean; // only for Argolla
  clientDidEngagement: boolean; // only for Argolla
  others: number;
  packaging: number;
  marginPct: number; // 0.30–0.70
}

export interface QuoteResult {
  costoMetal: number;
  costoLabor: number;
  costoCentral: number;
  costoAcentos: number;
  nPiedras: number;
  costoEngaste: number;
  grabadoAvanzado: number;
  costoOtros: number;
  costoEmpaque: number;
  costoTotal: number;
  precioBase: number;
  descuentoArgolla: number;
  precioCliente: number;
  adelanto70: number;
  saldo30: number;
  desde50k: number;
  desde100k: number;
  marginPct: number;
}

function ceilTo(value: number, step: number): number {
  return Math.ceil(value / step) * step;
}

function floorTo(value: number, step: number): number {
  return Math.floor(value / step) * step;
}

function roundTo(value: number, step: number): number {
  return Math.round(value / step) * step;
}

export function accentCostPerStone(type: "lab" | "natural", points: number): number | null {
  if (points <= 20) {
    return type === "lab" ? 1_000 : 10_000;
  }
  return null; // manual
}

export function calculateQuote(input: QuoteInput): QuoteResult {
  const costoMetal = input.grams * (1 + input.wastePct) * input.pricePerGram;
  const costoLabor = input.labor;

  const costoCentral = input.centralStone.enabled ? input.centralStone.cost : 0;

  let costoAcentos = 0;
  let totalAccentCount = 0;
  for (const a of input.accents) {
    totalAccentCount += a.quantity;
    const auto = accentCostPerStone(a.type, a.points);
    if (auto !== null) {
      costoAcentos += auto * a.quantity;
    } else {
      costoAcentos += a.manualCost;
    }
  }

  const nPiedras = (input.centralStone.enabled ? 1 : 0) + totalAccentCount;
  const costoEngaste = nPiedras * 5_000;

  const grabadoAvanzado =
    input.pieceType === "Argolla" && input.advancedEngraving ? 150_000 : 0;

  const costoTotal =
    costoMetal +
    costoLabor +
    costoCentral +
    costoAcentos +
    costoEngaste +
    grabadoAvanzado +
    input.others +
    input.packaging;

  const precioBase = ceilTo(costoTotal / (1 - input.marginPct), 5_000);

  const descuentoArgolla =
    input.pieceType === "Argolla" && input.clientDidEngagement
      ? precioBase * 0.20
      : 0;

  const precioCliente = ceilTo((precioBase - descuentoArgolla) / 5_000, 1) * 5_000;

  const adelanto70 = roundTo(precioCliente * 0.70, 5_000);
  const saldo30 = precioCliente - adelanto70;

  const desde50k = floorTo(precioCliente, 50_000);
  const desde100k = floorTo(precioCliente, 100_000);

  return {
    costoMetal,
    costoLabor,
    costoCentral,
    costoAcentos,
    nPiedras,
    costoEngaste,
    grabadoAvanzado,
    costoOtros: input.others,
    costoEmpaque: input.packaging,
    costoTotal,
    precioBase,
    descuentoArgolla,
    precioCliente,
    adelanto70,
    saldo30,
    desde50k,
    desde100k,
    marginPct: input.marginPct,
  };
}

export function calculateAtMargin(costoTotal: number, marginPct: number): number {
  return ceilTo(costoTotal / (1 - marginPct), 5_000);
}

export function formatCLP(n: number): string {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(n);
}
