import React, { useState } from 'react';
import { LanguageCode } from './types';
import { TRANSLATIONS, QUESTIONS, IDEOLOGIES } from './constants';
import LanguageSelector from './components/LanguageSelector';
import Quiz from './components/Quiz';
import Result from './components/Result';
import IdeologySidebar from './components/IdeologySidebar';
import Board from './components/Board';

type AppState = 'intro' | 'quiz' | 'result' | 'board';

function App() {
  const [language, setLanguage] = useState<LanguageCode>('en');
  const [appState, setAppState] = useState<AppState>('intro');
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [scores, setScores] = useState({ eco: 0, soc: 0 });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const t = TRANSLATIONS[language];

  const handleStart = () => {
    setAppState('quiz');
    setAnswers({});
  };

  const handleQuizComplete = (finalAnswers: Record<number, number>) => {
    setAnswers(finalAnswers);
    
    // Calculate Scores
    let rawEco = 0;
    let rawSoc = 0;
    
    // Max possible score per axis is QuestionCountInAxis * 2
    // We want to normalize to -10 to 10
    
    let ecoMax = 0;
    let socMax = 0;

    QUESTIONS.forEach(q => {
      const score = finalAnswers[q.id] || 0;
      if (q.category === 'economic') {
        rawEco += score * q.multiplier;
        ecoMax += 2; // Max score for this question is 2
      } else {
        rawSoc += score * q.multiplier;
        socMax += 2;
      }
    });

    // Normalize to -10 to 10 scale
    // (raw / max) * 10
    const finalEco = parseFloat(((rawEco / ecoMax) * 10).toFixed(2));
    const finalSoc = parseFloat(((rawSoc / socMax) * 10).toFixed(2));

    setScores({ eco: finalEco, soc: finalSoc });
    setAppState('result');
  };

  const handleRestart = () => {
    setAppState('intro');
    setAnswers({});
    setScores({ eco: 0, soc: 0 });
  };

  const handleGoHome = () => {
      setAppState('intro');
  }

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 selection:bg-blue-200">
      
      {/* Sidebar Component */}
      <IdeologySidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        data={IDEOLOGIES[language]}
        translations={t}
      />

      {/* Header */}
      <header className="w-full p-6 flex justify-between items-center max-w-7xl mx-auto z-10">
        <div className="flex items-center space-x-4">
            <button 
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 -ml-2 rounded-full hover:bg-white/50 transition-colors group"
                aria-label="Open Ideologies Menu"
            >
                <svg className="w-6 h-6 text-gray-700 group-hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                </svg>
            </button>
            <div className="flex items-center space-x-2 cursor-pointer" onClick={handleGoHome}>
                <div className="w-8 h-8 bg-gradient-to-tr from-green-600 to-emerald-600 rounded-lg shadow-lg flex items-center justify-center text-white font-bold text-lg">P</div>
                <h1 className="font-semibold text-xl tracking-tight hidden sm:block">PolitiCompass</h1>
            </div>
        </div>
        
        <div className="flex items-center space-x-4">
             <button
                onClick={() => setAppState('board')}
                className={`text-sm font-medium transition-colors ${appState === 'board' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-900'}`}
            >
                {t.board}
            </button>
            <LanguageSelector currentLanguage={language} onLanguageChange={setLanguage} />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 relative w-full">
        
        {/* Background blobs for aesthetics - Wrapped in overflow-hidden to prevent scrollbar jitter */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="z-10 w-full">
            {appState === 'intro' && (
            <div className="text-center max-w-2xl mx-auto animate-fade-in-up">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 pb-4 leading-tight">
                  {t.title}
                </h1>
                <p className="text-xl text-gray-500 mb-10 leading-relaxed px-4">
                  Discover where you stand in the political landscape using our modern AI-enhanced analysis tool.
                </p>
                <button
                  onClick={handleStart}
                  className="px-10 py-4 bg-gray-900 text-white text-lg font-medium rounded-full shadow-xl hover:bg-black hover:scale-105 transition-all duration-300 ring-4 ring-transparent hover:ring-gray-200"
                >
                  {t.start}
                </button>
            </div>
            )}

            {appState === 'quiz' && (
            <Quiz 
                questions={QUESTIONS} 
                language={language}
                translations={t}
                onComplete={handleQuizComplete} 
                onBack={handleRestart}
            />
            )}

            {appState === 'result' && (
            <Result 
                ecoScore={scores.eco} 
                socScore={scores.soc} 
                answers={answers}
                translations={t}
                language={language}
                onRestart={handleRestart}
            />
            )}

            {appState === 'board' && (
                <Board translations={t} language={language} onBack={handleGoHome} />
            )}
        </div>
      </main>

      <footer className="w-full text-center py-6 text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} PolitiCompass</p>
      </footer>

      {/* Tailwind Animation Styles embedded here since we can't use index.css */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
            animation: fade-in-up 0.6s ease-out forwards;
        }
        @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .animate-fade-in {
            animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default App;