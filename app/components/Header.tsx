import { FC } from "react";
import { useLanguage } from '~/contexts/LanguageContext';
import { translations } from '~/data/translations';

interface HeaderProps {
  onAboutClick: () => void;
  onExperienceClick: () => void;
  onProjectsClick: () => void;
  activeSection: string;
}

const Header: FC<HeaderProps> = ({ onAboutClick, onExperienceClick, onProjectsClick, activeSection }) => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <header id="main-header" className="fixed-header">
      <div id="logo-container" className="logo">
        <h1 id="dev-name">Arslan Kemal GÜNDÜZ</h1>
        <h2 id="dev-title" className="subtitle">{t.devTitle}</h2>
        <p id="dev-intro" className="intro-text mt-6 max-w-md text-base text-slate-400 line-clamp-2">
          {t.devIntro}
        </p>
      </div>
      <nav id="main-nav">
        <ol>
          <li>
            <button 
              id="nav-about" 
              onClick={onAboutClick} 
              className={activeSection === "about" ? "active" : ""}
            >
              {t.about}
            </button>
          </li>
          <li>
            <button 
              id="nav-experience" 
              onClick={onExperienceClick} 
              className={activeSection === "experience" ? "active" : ""}
            >
              {t.experience}
            </button>
          </li>
          <li>
            <button 
              id="nav-projects" 
              onClick={onProjectsClick} 
              className={activeSection === "projects" ? "active" : ""}
            >
              {t.projects}
            </button>
          </li>
        </ol>
      </nav>
    </header>
  );
};

export default Header;
