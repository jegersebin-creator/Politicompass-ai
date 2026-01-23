import React, { useEffect, useState, useRef } from 'react';
import { Translation, GeminiAnalysis, LanguageCode } from '../types';
import { getGeminiAnalysis } from '../services/geminiService';
import html2canvas from 'html2canvas';

interface ResultProps {
  ecoScore: number;
  socScore: number;
  answers: Record<number, number>;
  translations: Translation;
  language: LanguageCode;
  onRestart: () => void;
}

const Result: React.FC<ResultProps> = ({ ecoScore, socScore, answers, translations, language, onRestart }) => {
  const [analysis, setAnalysis] = useState<GeminiAnalysis | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchAnalysis = async () => {
      try {
        const result = await getGeminiAnalysis(answers, language, ecoScore, socScore);
        if (isMounted) {
          setAnalysis(result);
          setLoading(false);
        }
      } catch (e) {
        console.error(e);
        if (isMounted) setLoading(false);
      }
    };
    fetchAnalysis();
    return () => { isMounted = false; };
  }, [answers, language, ecoScore, socScore]);

  // Determine background gradient for the analysis card based on result
  const getGradient = () => {
    if (ecoScore < 0 && socScore > 0) return "from-red-50 to-red-100/50"; // Auth Left
    if (ecoScore > 0 && socScore > 0) return "from-blue-50 to-blue-100/50"; // Auth Right
    if (ecoScore < 0 && socScore < 0) return "from-green-50 to-green-100/50"; // Lib Left
    if (ecoScore > 0 && socScore < 0) return "from-yellow-50 to-yellow-100/50"; // Lib Right (Yellow now)
    return "from-gray-50 to-gray-100/50";
  };

  // Calculate position percentages (0-100%)
  const xPercent = ((ecoScore + 10) / 20) * 100;
  const yPercent = ((10 - socScore) / 20) * 100;

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
    <div className="w-full max-w-6xl mx-auto px-4 pb-12 animate-fade-in">
        
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
                                <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] border-[3px] border-gray-800 bg-white shadow-inner">
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
                                        {/* Horizontal Axis */}
                                        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gray-800"></div>
                                        {/* Vertical Axis */}
                                        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-800"></div>
                                        
                                        {/* Axis Arrows */}
                                        {/* Top Arrow */}
                                        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[5px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-gray-800"></div>
                                        {/* Right Arrow */}
                                        <div className="absolute top-1/2 right-0 translate-x-[5px] -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-gray-800"></div>
                                        {/* Bottom Arrow */}
                                        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[5px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[10px] border-t-gray-800"></div>
                                        {/* Left Arrow */}
                                        <div className="absolute top-1/2 left-0 -translate-x-[5px] -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[10px] border-r-gray-800"></div>
                                    </div>

                                    {/* Small Grid ticks (Optional detail) */}
                                    <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 pointer-events-none opacity-20">
                                        {Array.from({ length: 100 }).map((_, i) => (
                                            <div key={i} className="border-[0.5px] border-gray-600/30"></div>
                                        ))}
                                    </div>

                                    {/* Data Point Marker */}
                                    <div 
                                        className="absolute w-5 h-5 -ml-2.5 -mt-2.5 bg-red-600 border-2 border-white rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20"
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
                        </div>

                    </div>
                </div>

                {/* Analysis Section */}
                <div className={`bg-gradient-to-br ${getGradient()} rounded-[2.5rem] p-8 md:p-10 flex flex-col relative h-full min-h-[500px] border border-white/50 shadow-xl transition-all duration-500`}>
                <div className="flex items-center space-x-3 mb-8">
                    <div className="bg-white/80 backdrop-blur-md p-2.5 rounded-2xl shadow-sm">
                        <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 tracking-wide uppercase opacity-70">{translations.geminiAnalysis}</h3>
                </div>

                {loading ? (
                    <div className="flex-1 flex flex-col items-center justify-center space-y-6">
                    <div className="relative">
                        <div className="w-16 h-16 border-4 border-gray-200 border-t-gray-800 rounded-full animate-spin"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-8 h-8 bg-gray-100 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                    <p className="text-gray-500 font-medium animate-pulse">{translations.analyzing}</p>
                    </div>
                ) : (
                    <div className="flex-1 animate-fade-in-up">
                        <div className="mb-8">
                            <h4 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                                {analysis?.ideology || "Unknown"}
                            </h4>
                            <p className="text-gray-700 leading-relaxed text-lg font-medium opacity-90">
                                {analysis?.description}
                            </p>
                        </div>
                        
                        {analysis?.keyFactors && (
                            <div className="bg-white/40 backdrop-blur-md rounded-2xl p-6 border border-white/40 shadow-sm">
                                <ul className="space-y-4">
                                    {analysis.keyFactors.map((factor, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 mr-3 bg-gray-800 rounded-full"></span>
                                            <span className="text-gray-800 text-md leading-relaxed">{factor}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
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