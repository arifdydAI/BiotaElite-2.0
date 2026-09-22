// BiotaElite 2.0 Language Context (English & বাংলা)
import React, { createContext, useContext, useState, useEffect } from 'react';

import { TRANSLATIONS } from '../i18n/translations';

export type Language = 'en' | 'bn';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, defaultText?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('biota_language');
    return (saved === 'bn' || saved === 'en') ? saved : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('biota_language', lang);
    document.documentElement.lang = lang;
    document.body.setAttribute('data-lang', lang);
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.body.setAttribute('data-lang', language);
  }, [language]);

  const t = (key: string, defaultText?: string): string => {
    if (TRANSLATIONS[key]) {
      return TRANSLATIONS[key][language] || TRANSLATIONS[key].en;
    }
    return defaultText || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
