import React from 'react';
import { Translation } from '../types';

interface PrivacyPolicyProps {
    translations: Translation;
    onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ translations, onBack }) => {
    return (
        <div className="w-full max-w-4xl mx-auto p-8 animate-fade-in bg-white rounded-3xl shadow-xl border border-gray-100 my-8">
            <button 
                onClick={onBack} 
                className="mb-6 text-gray-500 hover:text-gray-900 flex items-center transition-colors font-medium"
            >
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                </svg>
                {translations.back}
            </button>

            <h1 className="text-3xl font-bold text-gray-900 mb-8">{translations.privacyPolicy}</h1>
            
            <div className="prose max-w-none text-gray-600 space-y-6">
                <p>Last updated: {new Date().getFullYear()}</p>

                <h2 className="text-xl font-bold text-gray-800">1. Introduction</h2>
                <p>Welcome to PolitiCompass AI. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.</p>

                <h2 className="text-xl font-bold text-gray-800">2. Data We Collect</h2>
                <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:</p>
                <ul className="list-disc pl-5">
                    <li><strong>Usage Data:</strong> Includes information about how you use our website.</li>
                    <li><strong>Content Data:</strong> If you post on our Community Board, we store the content you generate.</li>
                </ul>

                <h2 className="text-xl font-bold text-gray-800">3. How We Use Your Data</h2>
                <p>We use your data to:</p>
                <ul className="list-disc pl-5">
                    <li>Provide the political alignment analysis service.</li>
                    <li>Manage and moderate the Community Board.</li>
                    <li>Improve our website functionality.</li>
                </ul>

                <h2 className="text-xl font-bold text-gray-800">4. Cookies</h2>
                <p>We use cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.</p>

                <h2 className="text-xl font-bold text-gray-800">5. Third-Party Links & Services</h2>
                <p>This website may include links to third-party websites, plug-ins and applications (e.g., Google Firebase, Google Gemini API). Clicking on those links or enabling those connections may allow third parties to collect or share data about you.</p>

                <h2 className="text-xl font-bold text-gray-800">6. Contact Us</h2>
                <p>If you have any questions about this privacy policy or our privacy practices, please contact us.</p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;