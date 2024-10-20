import { forwardRef } from "react";
import { experiences } from "~/data/experience";

const Experience = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section id="experience" ref={ref}>
      <h2 className="section-heading">Experience</h2>
      <div className="experience-content">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item group">
            <div className="experience-header">
              <h3 className="experience-title">
                {exp.title} <span className="company">@ {exp.company}</span>
              </h3>
              <div className="experience-date">{exp.date}</div>
            </div>
            <p className="experience-description">{exp.description}</p>
            <ul className="experience-technologies">
              {exp.technologies.map((tech, techIndex) => (
                <li key={techIndex}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
});

Experience.displayName = "Experience";

export default Experience;
