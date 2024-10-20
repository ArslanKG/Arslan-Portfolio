import { forwardRef } from "react";
import { projects, Project } from "~/data/projects";

const Projects = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section id="projects" ref={ref}>
      <h2 className="section-heading">Projects</h2>
      <div className="projects-grid">
        {projects.map((project: Project, index: number) => (
          <div key={index} className="project-item">
            <div className="project-content">
              <div className="project-label">Featured Project</div>
              <h3 className="project-title">{project.title}</h3>
              <div className="project-description">
                <p>{project.description}</p>
              </div>
              <ul className="project-tech-list">
                {project.technologies.map((tech, techIndex) => (
                  <li key={techIndex}>{tech}</li>
                ))}
              </ul>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} aria-label="GitHub Link" target="_blank" rel="noopener noreferrer">
                    {/* GitHub icon */}
                  </a>
                )}
                {project.external && (
                  <a href={project.external} aria-label="External Link" className="external" target="_blank" rel="noopener noreferrer">
                    {/* External link icon */}
                  </a>
                )}
              </div>
            </div>
            <div className="project-image">
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
