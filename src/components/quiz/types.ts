// Quiz types — shared across all quiz components and engine

export type CertaintyLevel = 'sure' | 'maybe' | 'no_idea';

export interface QuizAnswers {
  // Step 1: Welcome (no data, just intro)
  
  // Step 2: Personality
  partnerName: string;
  hobbies: string;
  sport: string;
  job: string;
  wearsJewelry: string;
  dressStyle: string;
  favoriteColor: string;
  personalityNotes: string;
  
  // Step 3: Style exploration
  aestheticPreference: string[];
  jewelryColorPreference: string;
  
  // Step 4: Stone preference
  stoneType: string;
  stoneShape: string;
  sizePreference: string;
  
  // Step 5: Metal
  metalPreference: string;
  
  // Step 6: Budget & timeline
  budgetRange: string;
  deadline: string;
  priorities: string[];
  
  // Step 7: Inspiration
  referenceUrls: string;
  images: File[];
  
  // Legacy/optional — kept for hints context
  hasGivenHints: string;
  hintsDescription: string;
  
  // Certainty tracking
  certaintyScores: Record<string, CertaintyLevel>;
}

export interface ScoreMap {
  ringStyle: Record<string, number>;
  stoneType: Record<string, number>;
  stoneShape: Record<string, number>;
  metal: Record<string, number>;
  sizePreference: Record<string, number>;
  accentStones: Record<string, number>;
  aestheticKeywords: Record<string, number>;
}

export interface Recommendation {
  id: string;
  ringStyle: string;
  ringStyleLabel: string;
  stoneType: string;
  stoneTypeLabel: string;
  stoneShape: string;
  stoneShapeLabel: string;
  metal: string;
  metalLabel: string;
  sizePreference: string;
  accentStones: string;
  estimatedPriceRange: { min: number; max: number };
  confidenceScore: number; // 0–100
  explanation: string;
  aestheticKeywords: string[];
}

export interface QuizState {
  currentStep: number;
  answers: QuizAnswers;
  recommendations: Recommendation[];
  selectedRecommendation: Recommendation | null;
  isComplete: boolean;
}

export const INITIAL_ANSWERS: QuizAnswers = {
  partnerName: '',
  hobbies: '',
  sport: '',
  job: '',
  wearsJewelry: '',
  dressStyle: '',
  favoriteColor: '',
  personalityNotes: '',
  aestheticPreference: [],
  jewelryColorPreference: '',
  stoneType: '',
  stoneShape: '',
  sizePreference: '',
  metalPreference: '',
  budgetRange: '',
  deadline: '',
  priorities: [],
  referenceUrls: '',
  images: [],
  hasGivenHints: '',
  hintsDescription: '',
  certaintyScores: {},
};

export const QUIZ_STEPS = [
  { num: 0, label: 'Inicio', key: 'welcome' },
  { num: 1, label: 'Personalidad', key: 'personality' },
  { num: 2, label: 'Estilo', key: 'style' },
  { num: 3, label: 'Piedra', key: 'stone' },
  { num: 4, label: 'Metal', key: 'metal' },
  { num: 5, label: 'Presupuesto', key: 'budget' },
  { num: 6, label: 'Inspiración', key: 'inspiration' },
  { num: 7, label: 'Resultado', key: 'result' },
  { num: 8, label: 'Contacto', key: 'lead' },
] as const;

export type StepProps = {
  answers: QuizAnswers;
  onUpdate: (partial: Partial<QuizAnswers>) => void;
  onNext: () => void;
  onSkip: () => void;
};
