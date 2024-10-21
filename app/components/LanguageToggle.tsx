import { useLanguage } from '~/contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage, isTransitioning } = useLanguage();

  return (
    <div className="lang-btn-container">
      <button
        className={`lang-btn ${language === 'tr' ? 'active' : ''}`}
        onClick={() => setLanguage('tr')}
        disabled={isTransitioning}
      >
        TR
      </button>
      <button
        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => setLanguage('en')}
        disabled={isTransitioning}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;
