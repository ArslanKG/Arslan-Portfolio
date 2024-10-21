import { forwardRef } from "react";
import { useLanguage } from '~/contexts/LanguageContext';
import { translations } from '~/data/translations';
import { projects } from "~/data/projects";

const Projects = forwardRef<HTMLElement>((props, ref) => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="projects-section" ref={ref}>
      <h2 id="projects-heading" className="section-heading">{t.projectsTitle}</h2>
      <div id="projects-grid" className="projects-grid">
        {projects[language].map((project, index) => (
          <div id={`project-item-${index}`} key={index} className="project-item">
            <div id={`project-content-${index}`} className="project-content">
              <div id={`project-label-${index}`} className="project-label">{t.featuredProject}</div>
              <h3 id={`project-title-${index}`} className="project-title">{project.title}</h3>
              <div id={`project-description-${index}`} className="project-description">
                <p>{project.description}</p>
              </div>
              <ul id={`project-tech-list-${index}`} className="project-tech-list">
                {project.technologies.map((tech, techIndex) => (
                  <li id={`project-tech-${index}-${techIndex}`} key={techIndex}>{tech}</li>
                ))}
              </ul>
              <div id={`project-links-${index}`} className="project-links">
                {project.github && (
                  <a id={`project-github-${index}`} href={project.github} aria-label="GitHub Link" target="_blank" rel="noopener noreferrer">
                    {/* GitHub icon */}
                  </a>
                )}
                {project.external && (
                  <a id={`project-external-${index}`} href={project.external} aria-label="External Link" className="external" target="_blank" rel="noopener noreferrer">
                    {/* External link icon */}
                  </a>
                )}
              </div>
            </div>
            <div id={`project-image-${index}`} className="project-image">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.title} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

Projects.displayName = "Projects";

export default Projects;
