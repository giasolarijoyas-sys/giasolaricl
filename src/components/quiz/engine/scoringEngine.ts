// Scoring engine — transforms quiz answers into ring recommendations
import type { QuizAnswers, Recommendation, ScoreMap } from '../types';
import { RING_STYLES, CENTER_STONE_TYPES, STONE_SHAPES, METALS, SIZE_PREFERENCES } from '../taxonomies';
import { estimatePrice } from './priceEstimator';

function createEmptyScoreMap(): ScoreMap {
  const map: ScoreMap = {
    ringStyle: {},
    stoneType: {},
    stoneShape: {},
    metal: {},
    sizePreference: {},
    accentStones: {},
    aestheticKeywords: {},
  };
  RING_STYLES.forEach(s => map.ringStyle[s.key] = 0);
  CENTER_STONE_TYPES.forEach(s => map.stoneType[s.key] = 0);
  STONE_SHAPES.forEach(s => map.stoneShape[s.key] = 0);
  METALS.forEach(m => map.metal[m.key] = 0);
  SIZE_PREFERENCES.forEach(s => map.sizePreference[s.key] = 0);
  map.accentStones = { none: 0, pave: 0, side_stones: 0, halo: 0 };
  return map;
}

function add(map: Record<string, number>, keys: string[], weight: number) {
  keys.forEach(k => { map[k] = (map[k] || 0) + weight; });
}

export function computeScores(answers: QuizAnswers): ScoreMap {
  const s = createEmptyScoreMap();

  // --- Dress style inference ---
  switch (answers.dressStyle) {
    case 'classic':
      add(s.ringStyle, ['solitaire', 'cathedral', 'three_stone'], 3);
      add(s.stoneShape, ['round', 'oval'], 2);
      add(s.metal, ['platinum', 'gold_white'], 2);
      add(s.sizePreference, ['balanced'], 2);
      break;
    case 'modern':
      add(s.ringStyle, ['modern', 'bezel', 'solitaire'], 3);
      add(s.stoneShape, ['emerald_cut', 'radiant', 'asscher'], 2);
      add(s.metal, ['platinum', 'gold_white'], 2);
      add(s.sizePreference, ['discrete', 'balanced'], 1);
      break;
    case 'bohemian':
      add(s.ringStyle, ['nature_inspired', 'vintage', 'toi_et_moi'], 3);
      add(s.stoneShape, ['oval', 'pear', 'marquise'], 2);
      add(s.metal, ['gold_yellow'], 2);
      add(s.sizePreference, ['balanced'], 1);
      break;
    case 'glamorous':
      add(s.ringStyle, ['halo', 'pave', 'three_stone'], 3);
      add(s.stoneShape, ['cushion', 'oval', 'round'], 2);
      add(s.metal, ['platinum', 'gold_white'], 1);
      add(s.sizePreference, ['statement'], 3);
      break;
    case 'sporty':
      add(s.ringStyle, ['bezel', 'solitaire', 'modern'], 3);
      add(s.stoneShape, ['round'], 2);
      add(s.sizePreference, ['discrete'], 3);
      add(s.metal, ['platinum'], 2); // durability
      break;
  }

  // --- Jewelry usage ---
  switch (answers.wearsJewelry) {
    case 'daily':
      add(s.metal, ['platinum'], 2);
      add(s.ringStyle, ['bezel'], 1);
      break;
    case 'rarely':
      add(s.ringStyle, ['solitaire', 'bezel'], 2);
      add(s.sizePreference, ['discrete'], 2);
      break;
    case 'sometimes':
      add(s.sizePreference, ['balanced'], 1);
      break;
  }

  // --- Jewelry color → metal ---
  switch (answers.jewelryColorPreference) {
    case 'gold':
      add(s.metal, ['gold_yellow'], 4);
      break;
    case 'silver':
      add(s.metal, ['platinum', 'gold_white'], 3);
      break;
    case 'mixed':
      add(s.metal, ['gold_yellow', 'gold_white', 'platinum'], 1);
      break;
  }

  // --- Aesthetic preferences ---
  answers.aestheticPreference.forEach(pref => {
    switch (pref) {
      case 'delicate':
        add(s.ringStyle, ['solitaire', 'modern'], 2);
        add(s.sizePreference, ['discrete'], 2);
        break;
      case 'elegant':
        add(s.ringStyle, ['solitaire', 'cathedral', 'three_stone'], 2);
        add(s.stoneShape, ['round', 'oval'], 1);
        break;
      case 'bold':
        add(s.ringStyle, ['halo', 'pave', 'three_stone'], 2);
        add(s.sizePreference, ['statement'], 2);
        break;
      case 'bohemian':
        add(s.ringStyle, ['nature_inspired', 'vintage'], 2);
        add(s.stoneShape, ['pear', 'marquise'], 1);
        break;
      case 'minimalist':
        add(s.ringStyle, ['solitaire', 'bezel', 'modern'], 3);
        add(s.accentStones, ['none'], 2);
        add(s.sizePreference, ['discrete'], 1);
        break;
      case 'ornate':
        add(s.ringStyle, ['vintage', 'halo', 'pave'], 3);
        add(s.accentStones, ['halo', 'pave', 'side_stones'], 2);
        break;
      case 'romantic':
        add(s.ringStyle, ['halo', 'vintage', 'toi_et_moi'], 2);
        add(s.stoneShape, ['oval', 'pear', 'cushion'], 1);
        
        break;
      case 'contemporary':
        add(s.ringStyle, ['modern', 'bezel', 'toi_et_moi'], 2);
        add(s.stoneShape, ['emerald_cut', 'radiant', 'asscher'], 2);
        break;
    }
  });

  // --- Direct stone choice ---
  if (answers.stoneType && answers.stoneType !== 'unknown') {
    add(s.stoneType, [answers.stoneType], 10);
  }
  if (answers.stoneShape && answers.stoneShape !== 'unknown') {
    add(s.stoneShape, [answers.stoneShape], 10);
  }
  if (answers.metalPreference && answers.metalPreference !== 'unknown') {
    add(s.metal, [answers.metalPreference], 10);
  }
  if (answers.sizePreference && answers.sizePreference !== 'unknown') {
    add(s.sizePreference, [answers.sizePreference], 10);
  }

  // --- Budget inference ---
  switch (answers.budgetRange) {
    case 'under_500k':
      add(s.stoneType, ['moissanite'], 4);
      add(s.metal, ['gold_yellow', 'gold_white', 'gold_rose'], 1);
      add(s.sizePreference, ['discrete'], 1);
      break;
    case '500k_1m':
      add(s.stoneType, ['moissanite', 'lab_diamond'], 2);
      break;
    case '1m_2m':
      add(s.stoneType, ['lab_diamond', 'natural_diamond'], 2);
      break;
    case '2m_4m':
      add(s.stoneType, ['natural_diamond', 'lab_diamond'], 3);
      add(s.metal, ['platinum'], 1);
      break;
    case 'over_4m':
      add(s.stoneType, ['natural_diamond'], 4);
      add(s.metal, ['platinum'], 2);
      add(s.sizePreference, ['statement'], 1);
      break;
  }

  // --- Priority modifiers ---
  answers.priorities.forEach(p => {
    switch (p) {
      case 'brilliance':
        add(s.stoneType, ['natural_diamond', 'lab_diamond', 'moissanite'], 1);
        add(s.stoneShape, ['round'], 2);
        break;
      case 'size':
        add(s.stoneType, ['moissanite', 'lab_diamond'], 2);
        add(s.sizePreference, ['statement'], 1);
        break;
      case 'durability':
        add(s.metal, ['platinum'], 2);
        add(s.ringStyle, ['bezel'], 2);
        break;
      case 'price':
        add(s.stoneType, ['moissanite', 'lab_diamond'], 3);
        add(s.metal, ['gold_yellow', 'gold_white', 'gold_rose'], 1);
        break;
      case 'sustainability':
        add(s.stoneType, ['lab_diamond', 'moissanite'], 3);
        break;
      case 'rarity':
        add(s.stoneType, ['natural_diamond', 'sapphire', 'emerald', 'ruby'], 2);
        break;
      case 'symbolism':
        add(s.ringStyle, ['three_stone', 'toi_et_moi'], 2);
        break;
    }
  });

  // --- Sport / active lifestyle ---
  if (answers.sport && answers.sport.toLowerCase() !== 'no' && answers.sport.trim()) {
    add(s.ringStyle, ['bezel', 'solitaire'], 1);
    add(s.sizePreference, ['discrete', 'balanced'], 1);
    add(s.metal, ['platinum'], 1);
  }

  return s;
}

function topKey(map: Record<string, number>): string {
  let best = '';
  let max = -1;
  for (const [k, v] of Object.entries(map)) {
    if (v > max) { max = v; best = k; }
  }
  return best;
}

function topKeys(map: Record<string, number>, n: number): string[] {
  return Object.entries(map)
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map(([k]) => k);
}

function findLabel(items: readonly { key: string; label: string }[], key: string): string {
  return items.find(i => i.key === key)?.label || key;
}

function computeConfidence(answers: QuizAnswers): number {
  let answered = 0;
  let total = 10;
  if (answers.dressStyle) answered++;
  if (answers.wearsJewelry) answered++;
  if (answers.jewelryColorPreference) answered++;
  if (answers.aestheticPreference.length > 0) answered++;
  if (answers.stoneType) answered++;
  if (answers.stoneShape) answered++;
  if (answers.metalPreference) answered++;
  if (answers.sizePreference) answered++;
  if (answers.budgetRange) answered++;
  if (answers.priorities.length > 0) answered++;
  return Math.round((answered / total) * 100);
}

function buildExplanation(answers: QuizAnswers, rec: { style: string; stone: string; metal: string; shape: string }): string {
  const parts: string[] = [];
  
  if (answers.dressStyle === 'classic') {
    parts.push('su estilo elegante');
  } else if (answers.dressStyle === 'modern') {
    parts.push('su gusto por lo moderno');
  } else if (answers.dressStyle === 'bohemian') {
    parts.push('su espíritu bohemio');
  } else if (answers.dressStyle === 'glamorous') {
    parts.push('su personalidad glamorosa');
  } else if (answers.dressStyle === 'sporty') {
    parts.push('su estilo de vida activo');
  }
  
  if (answers.jewelryColorPreference === 'gold') {
    parts.push('su preferencia por joyería dorada');
  } else if (answers.jewelryColorPreference === 'silver') {
    parts.push('su preferencia por tonos plateados');
  } else if (answers.jewelryColorPreference === 'rose_gold') {
    parts.push('su gusto por lo rosado');
  }

  if (answers.wearsJewelry === 'daily') {
    parts.push('que usa joyas a diario');
  } else if (answers.wearsJewelry === 'rarely') {
    parts.push('que prefiere piezas discretas');
  }

  if (parts.length === 0) {
    return `Te recomendamos un anillo ${findLabel(RING_STYLES, rec.style)} con ${findLabel(CENTER_STONE_TYPES, rec.stone)} ${findLabel(STONE_SHAPES, rec.shape)} en ${findLabel(METALS, rec.metal)}. Esta es una elección versátil y atemporal.`;
  }

  const joined = parts.length > 1 
    ? parts.slice(0, -1).join(', ') + ' y ' + parts[parts.length - 1]
    : parts[0];

  return `Basándonos en ${joined}, te recomendamos un anillo ${findLabel(RING_STYLES, rec.style)} con ${findLabel(CENTER_STONE_TYPES, rec.stone)} ${findLabel(STONE_SHAPES, rec.shape)} en ${findLabel(METALS, rec.metal)}.`;
}

export function generateRecommendations(answers: QuizAnswers): Recommendation[] {
  const scores = computeScores(answers);
  const confidence = computeConfidence(answers);

  // Default conservative if very few answers
  if (confidence < 20) {
    scores.ringStyle['solitaire'] += 5;
    scores.stoneType['lab_diamond'] += 3;
    scores.stoneShape['oval'] += 3;
    scores.metal['gold_white'] += 3;
    scores.sizePreference['balanced'] += 3;
  }

  // Generate primary + 2 alternatives by varying the top attributes
  const topStyles = topKeys(scores.ringStyle, 3);
  const topStones = topKeys(scores.stoneType, 2);
  const topShapes = topKeys(scores.stoneShape, 2);
  const topMetals = topKeys(scores.metal, 2);
  const bestSize = topKey(scores.sizePreference) || 'balanced';
  const bestAccent = topKey(scores.accentStones) || 'none';
  const topAesthetics = topKeys(scores.aestheticKeywords, 3);

  const combinations = [
    { style: topStyles[0], stone: topStones[0], shape: topShapes[0], metal: topMetals[0] },
    { style: topStyles[1] || topStyles[0], stone: topStones[0], shape: topShapes[1] || topShapes[0], metal: topMetals[0] },
    { style: topStyles[0], stone: topStones[1] || topStones[0], shape: topShapes[0], metal: topMetals[1] || topMetals[0] },
  ];

  return combinations.map((combo, i) => {
    const priceRange = estimatePrice({
      stoneType: combo.stone,
      ringStyle: combo.style,
      metal: combo.metal,
      sizePreference: bestSize,
    });

    return {
      id: `rec-${i}`,
      ringStyle: combo.style,
      ringStyleLabel: findLabel(RING_STYLES, combo.style),
      stoneType: combo.stone,
      stoneTypeLabel: findLabel(CENTER_STONE_TYPES, combo.stone),
      stoneShape: combo.shape,
      stoneShapeLabel: findLabel(STONE_SHAPES, combo.shape),
      metal: combo.metal,
      metalLabel: findLabel(METALS, combo.metal),
      sizePreference: bestSize,
      accentStones: bestAccent,
      estimatedPriceRange: priceRange,
      confidenceScore: Math.max(10, confidence - i * 10),
      explanation: buildExplanation(answers, combo),
      aestheticKeywords: topAesthetics,
    };
  });
}
