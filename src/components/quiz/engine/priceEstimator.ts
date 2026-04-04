// Price estimator — configurable constants for CLP ranges
// TODO: These should be synced with the base_prices DB table for admin updates

// All values in CLP (Chilean Pesos)
export const PRICE_CONSTANTS = {
  // Base setting/craftsmanship
  baseSetting: { min: 300000, max: 500000 },

  // Center stone premiums (added to base)
  stoneType: {
    natural_diamond: { min: 1000000, max: 1500000 },
    lab_diamond: { min: 300000, max: 600000 },
    
    sapphire: { min: 400000, max: 900000 },
    emerald: { min: 500000, max: 1200000 },
    ruby: { min: 600000, max: 1300000 },
  } as Record<string, { min: number; max: number }>,

  // Metal multiplier (applied to base)
  metalMultiplier: {
    gold_yellow: 1.0,
    gold_white: 1.0,
    
    platinum: 1.1,
  } as Record<string, number>,

  // Style complexity add-on
  styleAddon: {
    solitaire: { min: 0, max: 50000 },
    halo: { min: 150000, max: 300000 },
    three_stone: { min: 200000, max: 400000 },
    vintage: { min: 150000, max: 350000 },
    nature_inspired: { min: 200000, max: 400000 },
    modern: { min: 50000, max: 150000 },
    cathedral: { min: 50000, max: 150000 },
    pave: { min: 150000, max: 300000 },
    bezel: { min: 50000, max: 150000 },
    toi_et_moi: { min: 300000, max: 600000 },
  } as Record<string, { min: number; max: number }>,

  // Size multiplier
  sizeMultiplier: {
    discrete: 0.8,
    balanced: 1.0,
    statement: 1.4,
  } as Record<string, number>,
};

interface PriceInput {
  stoneType: string;
  ringStyle: string;
  metal: string;
  sizePreference: string;
}

export function estimatePrice(input: PriceInput): { min: number; max: number } {
  const base = PRICE_CONSTANTS.baseSetting;
  const stone = PRICE_CONSTANTS.stoneType[input.stoneType] || { min: 300000, max: 600000 };
  const metalMult = PRICE_CONSTANTS.metalMultiplier[input.metal] || 1.0;
  const style = PRICE_CONSTANTS.styleAddon[input.ringStyle] || { min: 0, max: 100000 };
  const sizeMult = PRICE_CONSTANTS.sizeMultiplier[input.sizePreference] || 1.0;

  const rawMin = (base.min * metalMult + stone.min + style.min) * sizeMult;
  const rawMax = (base.max * metalMult + stone.max + style.max) * sizeMult;

  // Round to nearest 50k
  const round50k = (n: number) => Math.round(n / 50000) * 50000;

  return {
    min: round50k(rawMin),
    max: round50k(rawMax),
  };
}

export function formatCLP(amount: number): string {
  return `$${amount.toLocaleString('es-CL')}`;
}
