import { createContext, useState, useContext, ReactNode, FC } from 'react';
import { Language, LANGUAGES, ANIMATION_DURATIONS } from '~/utils/constants';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isTransitioning: boolean;
}

interface LanguageProviderProps {
  children: ReactNode;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(LANGUAGES.TR);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const setLanguage = (lang: Language) => {
    if (lang !== language) {
      setIsTransitioning(true);
      setTimeout(() => {
        setLanguageState(lang);
        setIsTransitioning(false);
      }, ANIMATION_DURATIONS.LANGUAGE_TRANSITION);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isTransitioning }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
