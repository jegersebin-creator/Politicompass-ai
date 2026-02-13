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
  geminiAnalysis: string;
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
  // Board Translations
  boardTitle: string;
  newPost: string;
  createPost: string;
  postTitlePlaceholder: string;
  postContentPlaceholder: string;
  authorPlaceholder: string;
  submit: string;
  cancel: string;
  comments: string;
  addComment: string;
  noPosts: string;
  readMore: string;
  board: string;
  communityTab: string;
  guideTab: string;
  // Legal / AdSense Compliance
  privacyPolicy: string;
  termsOfService: string;
  ugcWarning: string; // User Generated Content warning
}

export interface Question {
  id: number;
  text: Record<LanguageCode, string>;
  category: 'economic' | 'social';
  multiplier: number; 
}

export interface QuizResult {
  economicScore: number;
  socialScore: number;
  answers: Record<number, number>;
}

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
  coords: { x: number; y: number };
}

export interface PoliticalFigure {
  name: string;
  x: number;
  y: number;
  description: string;
}

export interface QuadrantInfo {
  name: string;
  description: string;
  items: IdeologyDetail[];
}

// Board Types
export interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
}

export interface Post {
  id: string;
  title: string;
  author: string;
  content: string;
  date: string;
  comments: Comment[];
  likes: number;
}