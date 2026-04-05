// Quiz types — shared across all quiz components and engine

export type KnowledgeLevel = 'expert' | 'intermediate' | 'beginner';

export interface QuizAnswers {
  // Knowledge level (determines path)
  knowledgeLevel: KnowledgeLevel | '';

  // Personality (beginner path)
  partnerName: string;
  dressStyle: string;
  wearsJewelry: string;
  favoriteColor: string;
  personalityNotes: string;

  // Style (beginner + intermediate)
  aestheticPreference: string[];
  jewelryColorPreference: string;

  // Stone (all paths)
  stoneType: string;
  stoneShape: string;
  sizePreference: string;

  // Metal (all paths)
  metalPreference: string;

  // Budget (all paths)
  budgetRange: string;
  deadline: string;

  // Inspiration (all paths)
  referenceUrls: string;
  images: File[];

  // Legacy
  hobbies: string;
  sport: string;
  job: string;
  priorities: string[];
  hasGivenHints: string;
  hintsDescription: string;
  certaintyScores: Record<string, string>;
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
  confidenceScore: number;
  explanation: string;
  aestheticKeywords: string[];
  matchingImage?: string;
}

export interface QuizState {
  currentStep: number;
  answers: QuizAnswers;
  recommendations: Recommendation[];
  selectedRecommendation: Recommendation | null;
  isComplete: boolean;
}

export const INITIAL_ANSWERS: QuizAnswers = {
  knowledgeLevel: '',
  partnerName: '',
  dressStyle: '',
  wearsJewelry: '',
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
  referenceUrls: '',
  images: [],
  hobbies: '',
  sport: '',
  job: '',
  priorities: [],
  hasGivenHints: '',
  hintsDescription: '',
  certaintyScores: {},
};

// Steps per path
export const STEPS_EXPERT = ['welcome', 'stone_metal', 'budget', 'inspiration', 'result', 'lead'] as const;
export const STEPS_INTERMEDIATE = ['welcome', 'style', 'stone_metal', 'budget', 'inspiration', 'result', 'lead'] as const;
export const STEPS_BEGINNER = ['welcome', 'personality', 'style', 'stone_metal', 'budget', 'inspiration', 'result', 'lead'] as const;

export type StepProps = {
  answers: QuizAnswers;
  onUpdate: (partial: Partial<QuizAnswers>) => void;
  onNext: () => void;
  onSkip: () => void;
};
