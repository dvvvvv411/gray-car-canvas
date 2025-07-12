import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage, languages, Language } from '@/contexts/LanguageContext';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-2 rounded-lg text-white hover:bg-white/20 transition-all duration-200"
        aria-label="Select language"
      >
        <span className="text-lg">{languages[language].flag}</span>
        <span className="hidden sm:inline text-sm font-medium">{languages[language].name}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown Menu */}
          <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50 min-w-[160px]">
            {Object.entries(languages).map(([code, lang]) => (
              <button
                key={code}
                onClick={() => handleLanguageChange(code as Language)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                  language === code ? 'bg-primary/10 text-primary' : 'text-gray-700'
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="text-sm font-medium">{lang.name}</span>
                {language === code && (
                  <div className="ml-auto w-2 h-2 bg-primary rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSelector;