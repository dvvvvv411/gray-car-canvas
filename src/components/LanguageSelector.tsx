import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Language, useLanguage } from '@/contexts/LanguageContext';
import { GermanyFlag } from './flags/GermanyFlag';
import { UKFlag } from './flags/UKFlag';
import { FranceFlag } from './flags/FranceFlag';
import { SpainFlag } from './flags/SpainFlag';
import { ItalyFlag } from './flags/ItalyFlag';
import { NetherlandsFlag } from './flags/NetherlandsFlag';

const languages = [
  { code: 'de' as Language, name: 'Deutsch', flag: GermanyFlag },
  { code: 'en' as Language, name: 'English', flag: UKFlag },
  { code: 'fr' as Language, name: 'Français', flag: FranceFlag },
  { code: 'es' as Language, name: 'Español', flag: SpainFlag },
  { code: 'it' as Language, name: 'Italiano', flag: ItalyFlag },
  { code: 'nl' as Language, name: 'Nederlands', flag: NetherlandsFlag },
];

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  
  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-md bg-background border border-border hover:bg-accent transition-colors"
        aria-label="Select language"
      >
        <currentLanguage.flag className="w-4 h-3" />
        <span className="text-sm font-medium">{currentLanguage.code.toUpperCase()}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full mt-1 right-0 bg-background border border-border rounded-md shadow-lg z-20 min-w-[150px]">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2 text-sm hover:bg-accent transition-colors first:rounded-t-md last:rounded-b-md ${
                  language === lang.code ? 'bg-accent text-accent-foreground' : ''
                }`}
              >
                <lang.flag className="w-4 h-3" />
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};