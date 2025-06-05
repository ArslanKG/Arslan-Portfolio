import { forwardRef } from "react";
import { useLanguage } from '~/contexts/LanguageContext';
import { experienceData, generalInfo } from "~/data/experienceData";
import { generateElementId, getLanguageData } from '~/utils/helpers';

const Experience = forwardRef<HTMLElement>((props, ref) => {
  const { language } = useLanguage();
  const langData = getLanguageData(generalInfo, language);

  return (
    <section id="experience-section" ref={ref}>
      <h2 id="experience-heading" className="section-heading">
        {langData?.experience || 'Experience'}
      </h2>
      <div id="experience-content" className="experience-content">
        {experienceData[language].map((exp, index) => (
          <article
            id={generateElementId('experience-item', index)}
            key={`experience-${index}`}
            className="experience-item group"
          >
            <header id={generateElementId('experience-header', index)} className="experience-header">
              <h3 id={generateElementId('experience-title', index)} className="experience-title">
                {exp.title}{' '}
                <span
                  id={generateElementId('experience-company', index)}
                  className="company"
                >
                  @ {exp.company}
                </span>
              </h3>
              <time
                id={generateElementId('experience-date', index)}
                className="experience-date"
                dateTime={exp.date.replace(' — ', '/')}
              >
                {exp.date}
              </time>
            </header>
            <p
              id={generateElementId('experience-description', index)}
              className="experience-description"
            >
              {exp.description}
            </p>
            <ul
              id={generateElementId('experience-technologies', index)}
              className="experience-technologies"
              role="list"
              aria-label={`Technologies used at ${exp.company}`}
            >
              {exp.technologies.map((tech, techIndex) => (
                <li
                  id={generateElementId('experience-tech', index, tech.toLowerCase())}
                  key={`tech-${index}-${techIndex}`}
                >
                  {tech}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
});

Experience.displayName = "Experience";

export default Experience;
