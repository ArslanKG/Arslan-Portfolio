import { useLanguage } from '~/contexts/LanguageContext';
import { translations } from '~/data/translations';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer id="main-footer" className="mt-24 text-sm text-slate-400">
      <p id="copyright" className="mb-2">
        {t.copyright}
      </p>
      <p id="tech-stack" className="text-xs">
        {t.techStack}
      </p>
    </footer>
  );
}
