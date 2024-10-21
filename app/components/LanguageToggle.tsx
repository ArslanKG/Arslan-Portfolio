import { useLanguage } from '~/contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="lang-btn-container">
      <button
        className={`lang-btn ${language === 'tr' ? 'active' : ''}`}
        onClick={() => setLanguage('tr')}
      >
        TR
      </button>
      <button
        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => setLanguage('en')}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;
