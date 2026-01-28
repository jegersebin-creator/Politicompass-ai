import React, { useState } from 'react';
import { QuadrantInfo, IdeologyDetail, Translation } from '../types';

interface IdeologySidebarProps {
  isOpen: boolean;
  onClose: () => void;
  data: QuadrantInfo[];
  translations: Translation;
}

const IdeologySidebar: React.FC<IdeologySidebarProps> = ({ isOpen, onClose, data, translations }) => {
  const [expandedQuadrant, setExpandedQuadrant] = useState<string | null>(null);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleQuadrant = (name: string) => {
    setExpandedQuadrant(expandedQuadrant === name ? null : name);
    // setExpandedItem(null); // Optional: close items when switching quadrants
  };

  const toggleItem = (name: string) => {
    setExpandedItem(expandedItem === name ? null : name);
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Sidebar Panel */}
      <div 
        className={`fixed inset-y-0 left-0 w-full sm:w-[480px] bg-[#F5F5F7]/95 backdrop-blur-xl shadow-2xl z-50 transform transition-transform duration-300 ease-in-out border-r border-white/20 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200/50">
                <h2 className="text-2xl font-bold text-gray-900 tracking-tight">{translations.ideologies}</h2>
                <button 
                    onClick={onClose}
                    className="p-2 rounded-full hover:bg-gray-200/50 transition-colors text-gray-500"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {/* Content Scroll Area */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 no-scrollbar">
                {data.map((quadrant) => (
                    <div key={quadrant.name} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        
                        {/* Quadrant Header */}
                        <button 
                            onClick={() => toggleQuadrant(quadrant.name)}
                            className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                        >
                            <div>
                                <h3 className="text-lg font-bold text-gray-800">{quadrant.name}</h3>
                                <p className="text-xs text-gray-500 mt-1 leading-snug pr-4">{quadrant.description}</p>
                            </div>
                            <div className={`transform transition-transform duration-300 ${expandedQuadrant === quadrant.name ? 'rotate-180' : ''}`}>
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </button>

                        {/* Quadrant Items List */}
                        <div className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${expandedQuadrant === quadrant.name ? 'max-h-[2000px]' : 'max-h-0'}`}>
                            <div className="p-2 bg-gray-50/50 space-y-2">
                                {quadrant.items.map((item) => (
                                    <div key={item.name} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                                        <button 
                                            onClick={() => toggleItem(item.name)}
                                            className="w-full flex items-center justify-between p-4 text-left hover:bg-blue-50/30 transition-colors"
                                        >
                                            <span className="font-semibold text-gray-700 text-sm md:text-base">{item.name}</span>
                                            <div className={`transform transition-transform duration-200 ${expandedItem === item.name ? 'rotate-90' : ''}`}>
                                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </button>

                                        {/* Item Details */}
                                        <div className={`transition-[max-height] duration-300 ease-in-out overflow-hidden bg-gray-50/80 ${expandedItem === item.name ? 'max-h-[1000px]' : 'max-h-0'}`}>
                                            <div className="p-5 space-y-4 text-sm leading-relaxed text-gray-600">
                                                <div>
                                                    <h4 className="font-bold text-gray-800 mb-1 text-xs uppercase tracking-wider">Definition</h4>
                                                    <p>{item.definition}</p>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-800 mb-1 text-xs uppercase tracking-wider">Analysis</h4>
                                                    <p>{item.explanation}</p>
                                                </div>
                                                <div className="grid grid-cols-1 gap-3 pt-2">
                                                    <div className="bg-white p-3 rounded-lg border border-gray-100">
                                                        <span className="block text-xs font-bold text-gray-400 uppercase mb-1">Figures</span>
                                                        <span className="text-gray-800 font-medium">{item.figures}</span>
                                                    </div>
                                                    <div className="bg-white p-3 rounded-lg border border-gray-100">
                                                        <span className="block text-xs font-bold text-gray-400 uppercase mb-1">Keywords</span>
                                                        <div className="flex flex-wrap gap-1">
                                                            {item.keywords.split(',').map(k => (
                                                                <span key={k} className="inline-block px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md border border-blue-100">
                                                                    {k.trim()}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="p-6 border-t border-gray-200/50 bg-[#F5F5F7]/90 backdrop-blur">
                <button 
                    onClick={onClose}
                    className="w-full py-3 bg-gray-900 text-white rounded-xl font-medium shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
                >
                    {translations.close}
                </button>
            </div>
        </div>
      </div>
    </>
  );
};

export default IdeologySidebar;