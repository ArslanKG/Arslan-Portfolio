import { forwardRef } from 'react';
import { useLanguage } from '~/contexts/LanguageContext';
import { experienceData } from '~/data/experienceData';

const Experience = forwardRef<HTMLElement>((props, ref) => {
  const { language } = useLanguage();
  const experiences = experienceData[language];

  return (
    <section id="experience" className="experience-section" ref={ref}>
      <h2 className="section-heading">
        {language === 'tr' ? 'Deneyim' : 'Experience'}
      </h2>
      
      <div className="container">
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-period">
                {exp.period}
              </div>
              
              <div className="experience-content">
                <div className="experience-header">
                  <h3 className="experience-role">{exp.role}</h3>
                  <div className="experience-company">{exp.company}</div>
                </div>
                
                <div className="experience-meta">
                  <span className="experience-type">{exp.type}</span>
                  <span className="experience-location">{exp.location}</span>
                </div>
                
                <p className="experience-description">
                  {exp.description}
                </p>
                
                <div className="experience-technologies">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Experience.displayName = 'Experience';

export default Experience;
