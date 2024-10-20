import { FC } from "react";

interface HeaderProps {
  onAboutClick: () => void;
  onExperienceClick: () => void;
  onProjectsClick: () => void;
  activeSection: string;
}

const Header: FC<HeaderProps> = ({ onAboutClick, onExperienceClick, onProjectsClick, activeSection }) => {
  return (
    <header className="fixed-header">
      <div className="logo">
        <h1>Arslan Kemal GÜNDÜZ</h1>
        <h2 className="subtitle">Senior Software Developer Specialist</h2>
        <p className="intro-text">
        I build scalable, efficient, user-centric applications with clean architecture.
        </p>
      </div>
      <nav>
        <ol>
          <li>
            <button 
              onClick={onAboutClick} 
              className={activeSection === "about" ? "active" : ""}
            >
              About
            </button>
          </li>
          <li>
            <button 
              onClick={onExperienceClick} 
              className={activeSection === "experience" ? "active" : ""}
            >
              Experience
            </button>
          </li>
          <li>
            <button 
              onClick={onProjectsClick} 
              className={activeSection === "projects" ? "active" : ""}
            >
              Projects
            </button>
          </li>
        </ol>
      </nav>
    </header>
  );
};

export default Header;
