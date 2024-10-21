import { forwardRef } from "react";
import { useLanguage } from '~/contexts/LanguageContext';
import { translations } from '~/data/translations';
import { experiences } from "~/data/experience";

const Experience = forwardRef<HTMLElement>((props, ref) => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="experience-section" ref={ref}>
      <h2 id="experience-heading" className="section-heading">{t.experienceTitle}</h2>
      <div id="experience-content" className="experience-content">
        {experiences[language].map((exp, index) => (
          <div id={`experience-item-${index}`} key={index} className="experience-item group">
            <div id={`experience-header-${index}`} className="experience-header">
              <h3 id={`experience-title-${index}`} className="experience-title">
                {exp.title} <span id={`experience-company-${index}`} className="company">@ {exp.company}</span>
              </h3>
              <div id={`experience-date-${index}`} className="experience-date">{exp.date}</div>
            </div>
            <p id={`experience-description-${index}`} className="experience-description">{exp.description}</p>
            <ul id={`experience-technologies-${index}`} className="experience-technologies">
              {exp.technologies.map((tech, techIndex) => (
                <li id={`experience-tech-${index}-${techIndex}`} key={techIndex}>{tech}</li>
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
