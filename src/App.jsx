import { useState, useEffect, useRef } from 'react';
import { useTypewriter } from './hooks/useTypewriter';
import { useTheme } from './hooks/useTheme';
import ThemeToggle from './components/ThemeToggle';
import { ProjectIntro, ProjectDetail, projects } from './components/Projects';
import { ExperienceIntro, ExperienceDetail, experiences } from './components/WorkExperience';
import Contact from './components/Contact';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [currentSection, setCurrentSection] = useState(0);

  // Create refs for all sections
  const heroRef = useRef(null);
  const projectIntroRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const expIntroRef = useRef(null);
  const exp1Ref = useRef(null);
  const exp2Ref = useRef(null);
  const exp3Ref = useRef(null);
  const contactRef = useRef(null);

  const sections = [
    heroRef,
    expIntroRef,
    exp1Ref,
    exp2Ref,
    exp3Ref,
    projectIntroRef,
    project1Ref,
    project2Ref,
    contactRef
  ];

  const phrases = [
    "Hello, I am Tom Sammon.",
    "Business Development Manager and Developer.",
    "I build cool portfolios !!"
  ];

  const { displayText } = useTypewriter(phrases);

  // Set current year
  useEffect(() => {
    const year = new Date().getFullYear();
    const yearElements = document.querySelectorAll('#year');
    yearElements.forEach(el => el.textContent = year);
  }, []);

  // Disable manual scrolling
  useEffect(() => {
    const preventScroll = (e) => {
      e.preventDefault();
    };

    // Prevent mouse wheel scrolling
    window.addEventListener('wheel', preventScroll, { passive: false });
    // Prevent touch scrolling
    window.addEventListener('touchmove', preventScroll, { passive: false });
    // Prevent arrow key scrolling
    window.addEventListener('keydown', (e) => {
      if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End'].includes(e.key)) {
        e.preventDefault();
      }
    });

    return () => {
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
    };
  }, []);

  // Navigate to next section on Enter
  const navigateToNextSection = () => {
    if (currentSection < sections.length - 1) {
      const nextSection = currentSection + 1;
      setCurrentSection(nextSection);
      sections[nextSection].current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Navigate to previous section on Spacebar
  const navigateToPreviousSection = () => {
    if (currentSection > 0) {
      const prevSection = currentSection - 1;
      setCurrentSection(prevSection);
      sections[prevSection].current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Navigate to specific section (for 3D navigation)
  const navigateToSection = (sectionIndex) => {
    if (sectionIndex >= 0 && sectionIndex < sections.length) {
      setCurrentSection(sectionIndex);
      sections[sectionIndex].current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Helper function to check if user is typing in a form field
  const isTypingInFormField = () => {
    const activeElement = document.activeElement;
    return (
      activeElement.tagName === 'INPUT' ||
      activeElement.tagName === 'TEXTAREA' ||
      activeElement.isContentEditable
    );
  };

  // Handle Enter and Spacebar key navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't trigger navigation if user is typing in a form field
      if (isTypingInFormField()) return;

      if (e.key === 'Enter') {
        e.preventDefault();
        navigateToNextSection();
      } else if (e.key === ' ') {
        e.preventDefault();
        navigateToPreviousSection();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSection]);

  // Keyboard shortcut: T to toggle theme
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't trigger theme toggle if user is typing in a form field
      if (isTypingInFormField()) return;

      if ((e.key === 't' || e.key === 'T') && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        toggleTheme();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleTheme]);

  return (
    <div className="page story-mode">
      {/* Hero Section */}
      <section ref={heroRef} className="hero-section story-section">
        <header className="container header">
          <nav className="nav">
            <div className="brand">tomsammon.dev</div>
            <div className="links">
              <ThemeToggle theme={theme} onToggle={toggleTheme} />
            </div>
          </nav>
        </header>

        <main className="container hero">
          <div className="intro" aria-label="Intro">
            <h1 className="intro-title sr-only">Welcome</h1>

            <p id="typewriter" className="typewriter-line" aria-live="polite" aria-atomic="true">
              <span className="typewriter-text">{displayText}</span>
              <span className="typewriter-caret" aria-hidden="true"></span>
            </p>

            <p className="intro-hint">
              Press <code>Enter</code> to continue · <code>Space</code> to go back
            </p>
          </div>
        </main>
      </section>

      {/* Experience Intro */}
      <section ref={expIntroRef} className="content-section story-section">
        <ExperienceIntro />
      </section>

      {/* Experience 1 */}
      <section ref={exp1Ref} className="content-section story-section">
        <ExperienceDetail key={`exp-0-${currentSection}`} experience={experiences[0]} index={0} total={experiences.length} />
      </section>

      {/* Experience 2 */}
      <section ref={exp2Ref} className="content-section story-section">
        <ExperienceDetail key={`exp-1-${currentSection}`} experience={experiences[1]} index={1} total={experiences.length} />
      </section>

      {/* Experience 3 */}
      <section ref={exp3Ref} className="content-section story-section">
        <ExperienceDetail key={`exp-2-${currentSection}`} experience={experiences[2]} index={2} total={experiences.length} />
      </section>

      {/* Projects Intro */}
      <section ref={projectIntroRef} className="content-section story-section">
        <ProjectIntro />
      </section>

      {/* Project 1 */}
      <section ref={project1Ref} className="content-section story-section">
        <ProjectDetail key={`project-0-${currentSection}`} project={projects[0]} index={0} total={projects.length} />
      </section>

      {/* Project 2 */}
      <section ref={project2Ref} className="content-section story-section">
        <ProjectDetail key={`project-1-${currentSection}`} project={projects[1]} index={1} total={projects.length} />
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="content-section story-section">
        <Contact onNavigate={navigateToSection} />

        <footer className="container footer">
          © <span id="year"></span> Tom Sammon
        </footer>
      </section>
    </div>
  );
}

export default App;
