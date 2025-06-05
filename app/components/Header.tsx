import { FC, useMemo } from "react";
import { useLanguage } from '~/contexts/LanguageContext';
import { headerData } from '~/data/headerData';
import { NAVIGATION_ITEMS, Section } from '~/utils/constants';
import { classNames } from '~/utils/helpers';

interface HeaderProps {
  onAboutClick: () => void;
  onExperienceClick: () => void;
  onProjectsClick: () => void;
  activeSection: Section;
}

const Header: FC<HeaderProps> = ({ onAboutClick, onExperienceClick, onProjectsClick, activeSection }) => {
  const { language, isTransitioning } = useLanguage();
  const t = headerData[language];

  // Map section handlers for better maintainability
  const sectionHandlers = useMemo(() => ({
    about: onAboutClick,
    experience: onExperienceClick,
    projects: onProjectsClick
  }), [onAboutClick, onExperienceClick, onProjectsClick]);

  return (
    <header
      id="main-header"
      className={classNames(
        'fixed-header fade-transition',
        isTransitioning ? 'fade-out' : 'fade-in'
      )}
    >
      <div id="logo-container" className="logo">
        <h1 id="dev-name" className="text-balance">Arslan Kemal GÜNDÜZ</h1>
        <h2 id="dev-title" className="subtitle">{t.devTitle}</h2>
        <p id="dev-intro" className="intro-text mt-6 text-base text-slate-400">
          {t.devIntro}
        </p>
      </div>
      
      <nav id="main-nav" className="nav-container" role="navigation" aria-label="Main navigation">
        <ol>
          {NAVIGATION_ITEMS.map(({ id, section, labelKey }) => (
            <li key={id}>
              <button
                id={id}
                onClick={sectionHandlers[section]}
                className={classNames(
                  'nav-button',
                  activeSection === section && 'active'
                )}
                disabled={isTransitioning}
                aria-current={activeSection === section ? 'page' : undefined}
              >
                {t[labelKey]}
              </button>
            </li>
          ))}
        </ol>
      </nav>
    </header>
  );
};

export default Header;
