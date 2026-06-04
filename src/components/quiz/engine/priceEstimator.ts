// Price estimator, based on real workshop costs (CLP)
// Labor: $350k | Gold: ~7-11g × $100k/g | Platinum: ~8-14g × $100k/g
// Lab diamonds: $10k/point | Natural: $20k/point | Precious stones: ~$500k/ct

export const PRICE_CONSTANTS = {
  // Base labor/craftsmanship
  labor: 350000,

  // Metal cost (includes 10% merma)
  // Gold: small 7g, large 11g @ $100k/g | Platinum: small 8g, large 14g @ $100k/g
  metal: {
    gold_yellow: { min: 700000, max: 1100000 },
    gold_white: { min: 700000, max: 1100000 },
    platinum: { min: 800000, max: 1400000 },
  } as Record<string, { min: number; max: number }>,

  // Center stone (assuming 0.5–1ct range for estimate)
  // Lab diamond: 50pts=$500k, 100pts=$1M | Natural: double
  // Precious stones: ~$500k–$1M per ct
  stoneType: {
    natural_diamond: { min: 1000000, max: 2000000 },
    lab_diamond: { min: 500000, max: 1000000 },
    sapphire: { min: 500000, max: 1000000 },
    emerald: { min: 500000, max: 1200000 },
    ruby: { min: 600000, max: 1500000 },
    aquamarine: { min: 300000, max: 600000 },
  } as Record<string, { min: number; max: number }>,

  // Style complexity (accent stones + extra metalwork)
  styleAddon: {
    solitaire: { min: 0, max: 100000 },
    halo: { min: 200000, max: 500000 },
    three_stone: { min: 300000, max: 600000 },
    vintage: { min: 200000, max: 500000 },
    nature_inspired: { min: 250000, max: 500000 },
    modern: { min: 50000, max: 200000 },
    cathedral: { min: 100000, max: 250000 },
    pave: { min: 200000, max: 500000 },
    bezel: { min: 50000, max: 200000 },
    toi_et_moi: { min: 400000, max: 800000 },
  } as Record<string, { min: number; max: number }>,

  // Size multiplier
  sizeMultiplier: {
    discrete: 0.85,
    balanced: 1.0,
    statement: 1.3,
  } as Record<string, number>,
};

interface PriceInput {
  stoneType: string;
  ringStyle: string;
  metal: string;
  sizePreference: string;
}

export function estimatePrice(input: PriceInput): { min: number; max: number } {
  const labor = PRICE_CONSTANTS.labor;
  const metal = PRICE_CONSTANTS.metal[input.metal] || { min: 700000, max: 1100000 };
  const stone = PRICE_CONSTANTS.stoneType[input.stoneType] || { min: 500000, max: 1000000 };
  const style = PRICE_CONSTANTS.styleAddon[input.ringStyle] || { min: 0, max: 200000 };
  const sizeMult = PRICE_CONSTANTS.sizeMultiplier[input.sizePreference] || 1.0;

  const rawMin = (labor + metal.min + stone.min + style.min) * sizeMult;
  const rawMax = (labor + metal.max + stone.max + style.max) * sizeMult;

  // Round to nearest 50k, enforce $1.8M floor
  const round50k = (n: number) => Math.round(n / 50000) * 50000;

  return {
    min: Math.max(1800000, round50k(rawMin)),
    max: Math.max(2000000, round50k(rawMax)),
  };
}

export function formatCLP(amount: number): string {
  return `$${amount.toLocaleString('es-CL')}`;
}
