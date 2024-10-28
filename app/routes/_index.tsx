import { useEffect, useRef, useState } from "react";
import Header from '../components/Header';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

export default function Index() {
  const mainRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { isTransitioning } = useLanguage();

  const scrollTo = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    setIsClient(true);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      const sectionHeight = fullHeight / 8;

      if (scrollPosition < sectionHeight) {
        setActiveSection("about");
      } else if (scrollPosition < sectionHeight * 2.75) {
        setActiveSection("experience");
      } else {
        setActiveSection("projects");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // İlk yüklemede çağır

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container mx-auto px-4 max-w-full min-h-screen pt-24">
      <Header 
        onAboutClick={() => scrollTo(aboutRef)}
        onExperienceClick={() => scrollTo(experienceRef)}
        onProjectsClick={() => scrollTo(projectsRef)}
        activeSection={activeSection}
      />
      <main ref={mainRef} className={`relative z-10 fade-transition ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
        {isClient ? (
          <>
            <About ref={aboutRef} />
            <Experience ref={experienceRef} />
            <Projects ref={projectsRef} />
            <Footer />
          </>
        ) : (
          <div>Loading...</div>
        )}
      </main>
    </div>
  );
}
