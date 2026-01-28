import React, { useEffect, useState, useRef } from 'react';
import { Translation, IdeologyDetail, LanguageCode, PoliticalFigure } from '../types';
import { IDEOLOGIES, POLITICAL_FIGURES } from '../constants';
import html2canvas from 'html2canvas';

interface ResultProps {
  ecoScore: number;
  socScore: number;
  answers: Record<number, number>;
  translations: Translation;
  language: LanguageCode;
  onRestart: () => void;
}

const Result: React.FC<ResultProps> = ({ ecoScore, socScore, translations, language, onRestart }) => {
  const [matchedIdeology, setMatchedIdeology] = useState<IdeologyDetail | null>(null);
  const [selectedFigure, setSelectedFigure] = useState<PoliticalFigure | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Logic to find the closest ideology based on Euclidean distance
    const findClosestIdeology = () => {
      const allIdeologies = IDEOLOGIES[language].flatMap(quadrant => quadrant.items);
      
      let closest: IdeologyDetail | null = null;
      let minDistance = Infinity;

      allIdeologies.forEach(ideology => {
        // Calculate distance: sqrt((x2 - x1)^2 + (y2 - y1)^2)
        const dist = Math.sqrt(
          Math.pow(ideology.coords.x - ecoScore, 2) + 
          Math.pow(ideology.coords.y - socScore, 2)
        );

        if (dist < minDistance) {
          minDistance = dist;
          closest = ideology;
        }
      });

      setMatchedIdeology(closest);
    };

    findClosestIdeology();
  }, [ecoScore, socScore, language]);

  // Determine background gradient based on scores (for visual feedback)
  const getGradient = () => {
    if (ecoScore < 0 && socScore > 0) return "from-red-50 to-red-100/50"; // Auth Left
    if (ecoScore > 0 && socScore > 0) return "from-blue-50 to-blue-100/50"; // Auth Right
    if (ecoScore < 0 && socScore < 0) return "from-green-50 to-green-100/50"; // Lib Left
    if (ecoScore > 0 && socScore < 0) return "from-yellow-50 to-yellow-100/50"; // Lib Right
    return "from-gray-50 to-gray-100/50";
  };

  // Helper to get percentages for css positioning
  const getPercent = (val: number, isX: boolean) => {
    // Input range -10 to 10
    // X: -10 is 0%, 10 is 100%
    // Y: 10 is 0% (top), -10 is 100% (bottom)
    if (isX) {
      return ((val + 10) / 20) * 100;
    } else {
      return ((10 - val) / 20) * 100;
    }
  };

  const xPercent = getPercent(ecoScore, true);
  const yPercent = getPercent(socScore, false);

  const handleDownload = async () => {
    if (resultRef.current) {
        try {
            await new Promise(resolve => setTimeout(resolve, 100));
            const canvas = await html2canvas(resultRef.current, {
                backgroundColor: '#F5F5F7',
                scale: 2,
                useCORS: true,
                logging: false,
                onclone: (clonedDoc) => {
                    const element = clonedDoc.getElementById('capture-target');
                    if (element) {
                        element.style.display = 'block';
                    }
                }
            });
            const link = document.createElement('a');
            link.download = 'politicompass-result.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        } catch (error) {
            console.error('Failed to capture image:', error);
        }
    }
  };

  const handleShare = () => {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 pb-12 animate-fade-in relative">
        
        {/* Figure Detail Modal/Overlay */}
        {selectedFigure && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm" onClick={() => setSelectedFigure(null)}>
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-md w-full animate-fade-in-up border border-white/20" onClick={e => e.stopPropagation()}>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">{selectedFigure.name}</h3>
                <button 
                  onClick={() => setSelectedFigure(null)}
                  className="p-1 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {selectedFigure.description}
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between text-xs text-gray-400 font-mono">
                <span>Eco: {(selectedFigure.x / 2).toFixed(1)}</span>
                <span>Soc: {(selectedFigure.y / 2).toFixed(1)}</span>
              </div>
            </div>
          </div>
        )}

        {/* Content to capture */}
        <div id="capture-target" ref={resultRef} className="p-4 md:p-8 rounded-[3rem] bg-[#F5F5F7]">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 pb-2">
                {translations.resultsTitle}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                
                {/* Infographic Chart Section */}
                <div className="flex flex-col items-center justify-center p-2">
                    <div className="relative bg-white rounded-[2rem] p-6 sm:p-8 shadow-xl border border-gray-100">
                        
                        <div className="flex flex-col items-center">
                            {/* Top Label */}
                            <div className="mb-2 font-bold text-gray-700 uppercase tracking-widest text-xs sm:text-sm">
                                {translations.authoritarian}
                            </div>

                            <div className="flex items-center">
                                {/* Left Label */}
                                <div className="mr-2 font-bold text-gray-700 uppercase tracking-widest text-xs sm:text-sm -rotate-90">
                                    {translations.left}
                                </div>

                                {/* Chart */}
                                <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] border-[3px] border-gray-800 bg-white shadow-inner select-none">
                                    {/* 2x2 Grid for Backgrounds */}
                                    <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                                        {/* Auth Left (Red) */}
                                        <div className="bg-red-200/80 flex items-center justify-center p-2 text-center border-r border-b border-gray-400/30">
                                            <span className="text-red-900/40 font-bold text-xs sm:text-sm uppercase leading-tight select-none">
                                                {translations.authoritarian}<br/>{translations.left}
                                            </span>
                                        </div>
                                        {/* Auth Right (Blue) */}
                                        <div className="bg-blue-300/80 flex items-center justify-center p-2 text-center border-b border-gray-400/30">
                                            <span className="text-blue-900/40 font-bold text-xs sm:text-sm uppercase leading-tight select-none">
                                                {translations.authoritarian}<br/>{translations.right}
                                            </span>
                                        </div>
                                        {/* Lib Left (Green) */}
                                        <div className="bg-green-200/80 flex items-center justify-center p-2 text-center border-r border-gray-400/30">
                                            <span className="text-green-900/40 font-bold text-xs sm:text-sm uppercase leading-tight select-none">
                                                {translations.libertarian}<br/>{translations.left}
                                            </span>
                                        </div>
                                        {/* Lib Right (Yellow) */}
                                        <div className="bg-yellow-100/80 flex items-center justify-center p-2 text-center">
                                            <span className="text-yellow-900/40 font-bold text-xs sm:text-sm uppercase leading-tight select-none">
                                                {translations.libertarian}<br/>{translations.right}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Axes Lines */}
                                    <div className="absolute inset-0 pointer-events-none">
                                        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gray-800"></div>
                                        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-800"></div>
                                        {/* Arrows */}
                                        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[5px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-gray-800"></div>
                                        <div className="absolute top-1/2 right-0 translate-x-[5px] -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-gray-800"></div>
                                        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[5px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[10px] border-t-gray-800"></div>
                                        <div className="absolute top-1/2 left-0 -translate-x-[5px] -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[10px] border-r-gray-800"></div>
                                    </div>

                                    {/* Small Grid ticks */}
                                    <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 pointer-events-none opacity-20">
                                        {Array.from({ length: 100 }).map((_, i) => (
                                            <div key={i} className="border-[0.5px] border-gray-600/30"></div>
                                        ))}
                                    </div>

                                    {/* Other Political Figures */}
                                    {POLITICAL_FIGURES.map((figure) => (
                                      <button
                                        key={figure.name}
                                        onClick={() => setSelectedFigure(figure)}
                                        className="absolute w-3 h-3 -ml-1.5 -mt-1.5 bg-gray-700/60 hover:bg-gray-900 rounded-full cursor-pointer hover:scale-150 transition-transform z-10 group"
                                        style={{ left: `${getPercent(figure.x, true)}%`, top: `${getPercent(figure.y, false)}%` }}
                                        aria-label={`View ${figure.name}`}
                                      >
                                      </button>
                                    ))}

                                    {/* User Data Point Marker */}
                                    <div 
                                        className="absolute w-5 h-5 -ml-2.5 -mt-2.5 bg-red-600 border-2 border-white rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
                                        style={{ left: `${xPercent}%`, top: `${yPercent}%` }}
                                    >
                                        <div className="absolute inset-0 rounded-full bg-red-600 animate-ping opacity-40"></div>
                                    </div>
                                </div>

                                {/* Right Label */}
                                <div className="ml-2 font-bold text-gray-700 uppercase tracking-widest text-xs sm:text-sm rotate-90">
                                    {translations.right}
                                </div>
                            </div>

                            {/* Bottom Label */}
                            <div className="mt-2 font-bold text-gray-700 uppercase tracking-widest text-xs sm:text-sm">
                                {translations.libertarian}
                            </div>
                            
                            <p className="mt-4 text-xs text-gray-400 font-medium">Click on the gray dots to see historical figures</p>
                        </div>

                    </div>
                </div>

                {/* Analysis Section (Now using Static Data) */}
                <div className={`bg-gradient-to-br ${getGradient()} rounded-[2.5rem] p-8 md:p-10 flex flex-col relative h-full min-h-[500px] border border-white/50 shadow-xl transition-all duration-500`}>
                    <div className="flex items-center space-x-3 mb-8">
                        <div className="bg-white/80 backdrop-blur-md p-2.5 rounded-2xl shadow-sm">
                            <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 tracking-wide uppercase opacity-70">{translations.geminiAnalysis}</h3>
                    </div>

                    {!matchedIdeology ? (
                        <div className="flex-1 flex flex-col items-center justify-center space-y-6">
                            <div className="relative">
                                <div className="w-16 h-16 border-4 border-gray-200 border-t-gray-800 rounded-full animate-spin"></div>
                            </div>
                            <p className="text-gray-500 font-medium animate-pulse">{translations.analyzing}</p>
                        </div>
                    ) : (
                        <div className="flex-1 animate-fade-in-up">
                            <div className="mb-6">
                                <h4 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                                    {matchedIdeology.name}
                                </h4>
                                <div className="bg-white/40 backdrop-blur-sm rounded-xl p-4 mb-4 border border-white/40">
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Definition</p>
                                    <p className="text-gray-800 text-sm italic">{matchedIdeology.definition}</p>
                                </div>
                                <p className="text-gray-700 leading-relaxed text-lg font-medium opacity-90">
                                    {matchedIdeology.explanation}
                                </p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                <div className="bg-white/40 backdrop-blur-md rounded-2xl p-5 border border-white/40 shadow-sm">
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Key Figures</p>
                                    <p className="text-gray-900 font-semibold">{matchedIdeology.figures}</p>
                                </div>
                                <div className="bg-white/40 backdrop-blur-md rounded-2xl p-5 border border-white/40 shadow-sm">
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Keywords</p>
                                    <div className="flex flex-wrap gap-2">
                                        {matchedIdeology.keywords.split(',').map((k, i) => (
                                            <span key={i} className="px-2 py-1 bg-white/60 rounded-md text-xs font-medium text-gray-700 border border-gray-100">
                                                {k.trim()}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 pb-8">
            <button
                onClick={onRestart}
                className="group relative px-8 py-3.5 bg-gray-900 text-white font-medium text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden w-full md:w-auto"
            >
                <span className="relative z-10">{translations.restart}</span>
                <div className="absolute inset-0 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
            
            <button
                onClick={handleDownload}
                className="px-8 py-3.5 bg-white text-gray-700 font-medium text-lg rounded-full shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-200 border border-gray-200 flex items-center justify-center space-x-2 w-full md:w-auto"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>{translations.download}</span>
            </button>

            <button
                onClick={handleShare}
                className="px-8 py-3.5 bg-blue-50 text-blue-600 font-medium text-lg rounded-full shadow-sm hover:shadow-md hover:bg-blue-100 transition-all duration-200 border border-blue-100 flex items-center justify-center space-x-2 w-full md:w-auto relative"
            >
                {copied ? (
                    <>
                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                         </svg>
                         <span>{translations.copied}</span>
                    </>
                ) : (
                    <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                        <span>{translations.share}</span>
                    </>
                )}
            </button>
        </div>
    </div>
  );
};

export default Result;