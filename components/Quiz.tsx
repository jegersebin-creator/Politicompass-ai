import React, { useState } from 'react';
import { Question, LanguageCode, Translation } from '../types';

interface QuizProps {
  questions: Question[];
  language: LanguageCode;
  translations: Translation;
  onComplete: (answers: Record<number, number>) => void;
  onBack: () => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, language, translations, onComplete, onBack }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');

  const handleAnswer = (score: number) => {
    const newAnswers = { ...answers, [questions[currentIndex].id]: score };
    setAnswers(newAnswers);

    if (currentIndex < questions.length - 1) {
      setDirection('forward');
      setCurrentIndex(prev => prev + 1);
    } else {
      onComplete(newAnswers);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setDirection('backward');
      setCurrentIndex(prev => prev - 1);
    } else {
      onBack();
    }
  };

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex) / questions.length) * 100;

  const options = [
    { label: translations.agreeStrongly, score: 2, color: 'bg-green-600' },
    { label: translations.agree, score: 1, color: 'bg-green-400' },
    { label: translations.neutral, score: 0, color: 'bg-gray-400' },
    { label: translations.disagree, score: -1, color: 'bg-red-400' },
    { label: translations.disagreeStrongly, score: -2, color: 'bg-red-600' },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">
          <span>{translations.questionCount} {currentIndex + 1} / {questions.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
          <div 
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 min-h-[400px] flex flex-col justify-center items-center text-center transition-all duration-500 transform relative overflow-hidden">
        
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-tight animate-fade-in-up">
          {currentQuestion.text[language]}
        </h2>

        <div className="flex flex-col w-full space-y-3">
          {options.map((option) => (
            <button
              key={option.score}
              onClick={() => handleAnswer(option.score)}
              className="group relative w-full py-4 px-6 rounded-xl border border-gray-200 bg-gray-50 hover:bg-white hover:border-blue-500 hover:shadow-md transition-all duration-200 ease-in-out flex items-center justify-between"
            >
              <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                {option.label}
              </span>
              <div className={`w-4 h-4 rounded-full ${option.color} opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all`}></div>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-start">
        <button
          onClick={handlePrevious}
          className="text-gray-500 hover:text-gray-800 font-medium text-sm flex items-center transition-colors"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {translations.back}
        </button>
      </div>
    </div>
  );
};

export default Quiz;
