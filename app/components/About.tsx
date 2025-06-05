import { forwardRef } from "react";
import { useLanguage } from '~/contexts/LanguageContext';
import { aboutData } from '~/data/aboutData';

const About = forwardRef<HTMLElement, {}>((props, ref) => {
  const { language } = useLanguage();
  const t = aboutData[language];

  return (
    <section id="about-section" ref={ref}>
      <h2 id="about-heading" className="section-heading">{t.aboutMe}</h2>
      <div id="about-content" className="about-content">
        <div id="about-text" className="about-text">
          <p id="about-para-1">{t.aboutPara1}</p>
          <p id="about-para-2">{t.aboutPara2}</p>
          <p id="about-para-3">{t.aboutPara3}</p>
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;
