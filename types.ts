export type LanguageCode = 'en' | 'es' | 'fr' | 'ko' | 'ja';

export interface Translation {
  title: string;
  start: string;
  next: string;
  back: string;
  analyzing: string;
  resultsTitle: string;
  economicAxis: string;
  socialAxis: string;
  left: string;
  right: string;
  libertarian: string;
  authoritarian: string;
  geminiAnalysis: string; // Keeping key for compatibility, but will use as "Analysis" header
  restart: string;
  agreeStrongly: string;
  agree: string;
  neutral: string;
  disagree: string;
  disagreeStrongly: string;
  questionCount: string;
  download: string;
  share: string;
  copied: string;
  ideologies: string;
  close: string;
}

export interface Question {
  id: number;
  text: Record<LanguageCode, string>;
  category: 'economic' | 'social';
  // Positive multiplier means Agreement moves towards Right (Econ) or Auth (Social)
  // Negative means Agreement moves towards Left (Econ) or Lib (Social)
  multiplier: number; 
}

export interface QuizResult {
  economicScore: number; // -10 (Left) to 10 (Right)
  socialScore: number;   // -10 (Libertarian) to 10 (Authoritarian)
  answers: Record<number, number>; // questionId -> score (-2 to 2)
}

// Deprecated but kept for type compatibility if needed, though we use IdeologyDetail now
export interface GeminiAnalysis {
  ideology: string;
  description: string;
  keyFactors: string[];
}

export interface IdeologyDetail {
  name: string;
  definition: string;
  explanation: string;
  figures: string;
  keywords: string;
  coords: { x: number; y: number }; // Target coordinates on the compass (-10 to 10)
}

export interface PoliticalFigure {
  name: string;
  x: number; // Scale -10 to +10
  y: number; // Scale -10 to +10
  description: string;
}

export interface QuadrantInfo {
  name: string;
  description: string;
  items: IdeologyDetail[];
}