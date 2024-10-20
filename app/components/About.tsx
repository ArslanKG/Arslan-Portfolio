import { forwardRef } from "react";

const About = forwardRef<HTMLElement, {}>((props, ref) => {
  return (
    <section id="about" ref={ref}>
      <h2 className="section-heading">About Me </h2>
      <div className="about-content">
        <div className="about-text">
          <p>
          With over 3 years of experience primarily in .Net development, I have also worked extensively with modern frontend technologies such as React.js and Vue.js.
          </p>
          <p>
          My diverse technical skill set allows me to build efficient, scalable, and responsive web applications, seamlessly bridging backend and frontend functionalities.
          </p>
          <p>
          I am passionate about learning new tools and frameworks, continuously enhancing my expertise to deliver optimal solutions in full-stack development.
          </p>
        </div>
        <div className="about-image">
          {/* Profil resmi buraya */}
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;
