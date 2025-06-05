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
        'modern-header fade-transition',
        isTransitioning ? 'fade-out' : 'fade-in'
      )}
    >
      <div id="logo-container" className="modern-logo">
        <h1 id="dev-name" className="dev-name">Arslan Kemal GÜNDÜZ</h1>
        <h2 id="dev-title" className="dev-role">Senior Software Developer</h2>
        <div className="tech-stack">
          <span className="tech-item">.NET</span>
          <span className="tech-item">React</span>
          <span className="tech-item">JavaScript</span>
          <span className="tech-item">Cloud</span>
        </div>
        <p id="dev-intro" className="dev-intro">
          {t.devIntro}
        </p>
      </div>
      
      <nav id="main-nav" className="modern-nav" role="navigation" aria-label="Main navigation">
        <div className="nav-items">
          {NAVIGATION_ITEMS.map(({ id, section, labelKey }, index) => (
            <button
              key={id}
              id={id}
              onClick={sectionHandlers[section]}
              className={classNames(
                'modern-nav-item',
                activeSection === section && 'active'
              )}
              disabled={isTransitioning}
              aria-current={activeSection === section ? 'page' : undefined}
            >
              <span className="nav-number">0{index + 1}</span>
              <span className="nav-text">{t[labelKey]}</span>
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
