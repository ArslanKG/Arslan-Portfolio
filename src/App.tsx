import { useEffect, useRef, useState } from "react";
import Header from '../app/components/Header';
import About from '../app/components/About';
import Experience from '../app/components/Experience';
import Projects from '../app/components/Projects';
import Footer from '../app/components/Footer';
import LanguageToggle from '../app/components/LanguageToggle';
import ErrorBoundary from '../app/components/ErrorBoundary';
import { useLanguage } from '../app/contexts/LanguageContext';
import { Section, SECTIONS } from '../app/utils/constants';

function PortfolioContent() {
  const mainRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [activeSection, setActiveSection] = useState<Section>(SECTIONS.ABOUT);
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
        setActiveSection(SECTIONS.ABOUT);
      } else if (scrollPosition < sectionHeight * 2.75) {
        setActiveSection(SECTIONS.EXPERIENCE);
      } else {
        setActiveSection(SECTIONS.PROJECTS);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const gradientElement = document.getElementById('gradient-background');
    
    const updateGradient = (e: MouseEvent) => {
      if (gradientElement) {
        const x = e.clientX;
        const y = e.clientY;
        gradientElement.style.background = `radial-gradient(800px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
      }
    };

    document.addEventListener('mousemove', updateGradient);

    return () => {
      document.removeEventListener('mousemove', updateGradient);
    };
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

function App() {
  return (
    <div className="bg-navy leading-relaxed text-slate antialiased">
      <ErrorBoundary>
        <LanguageToggle />
        <div
          id="gradient-background"
          className="pointer-events-none fixed inset-0 z-[-1] transition duration-300"
        />
        <PortfolioContent />
      </ErrorBoundary>
    </div>
  );
}

export default App;