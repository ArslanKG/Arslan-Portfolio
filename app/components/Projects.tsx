import { forwardRef } from "react";
import { useLanguage } from '~/contexts/LanguageContext';
import { projectsData, generalInfo } from "~/data/projectsData";
import { GitHubIcon, ExternalLinkIcon } from '~/components/ui/Icons';
import { generateElementId, getLanguageData } from '~/utils/helpers';

const Projects = forwardRef<HTMLElement>((props, ref) => {
  const { language } = useLanguage();
  const langData = getLanguageData(generalInfo, language);

  return (
    <section id="projects-section" ref={ref}>
      <h2 id="projects-heading" className="section-heading">
        {langData?.projects || 'Projects'}
      </h2>
      <div id="projects-content" className="projects-content">
        {projectsData[language].map((project, index) => (
          <article
            id={generateElementId('project-item', index)}
            key={`project-${index}`}
            className="project-item group"
          >
            <header className="project-header">
              <h3 id={generateElementId('project-title', index)} className="project-title">
                {project.title}
                <span className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <GitHubIcon />
                    </a>
                  )}
                  {project.external && (
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLinkIcon />
                    </a>
                  )}
                </span>
              </h3>
            </header>
            <div className="project-content">
              <div className="project-image">
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  loading="lazy"
                />
              </div>
              <div className="project-info">
                <p
                  id={generateElementId('project-description', index)}
                  className="project-description"
                >
                  {project.description}
                </p>
                <ul
                  id={generateElementId('project-tech-list', index)}
                  className="project-tech-list"
                  role="list"
                  aria-label={`Technologies used in ${project.title}`}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <li
                      id={generateElementId('project-tech', index, tech.toLowerCase())}
                      key={`tech-${index}-${techIndex}`}
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
});

Projects.displayName = "Projects";

export default Projects;
