import { forwardRef, useState, useEffect } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

const ProjectIntro = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="container section-content">
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">Here are some of my recent projects</p>
      <p className="section-nav-hint" style={{ marginTop: '2rem' }}>Press <code>Enter</code> to explore · <code>Space</code> to go back</p>
    </div>
  );
});

const ProjectDetail = forwardRef(({ project, index, total }, ref) => {
  const [showRightSide, setShowRightSide] = useState(false);
  const [titleComplete, setTitleComplete] = useState(false);
  const [descriptionComplete, setDescriptionComplete] = useState(false);

  // Reset state when project changes (when navigating between projects)
  useEffect(() => {
    setShowRightSide(false);
    setTitleComplete(false);
    setDescriptionComplete(false);
  }, [project.title]);

  // Typewriter for title
  const { displayText: titleDisplay, isTyping: titleTyping } = useTypewriter([project.title], { loop: false });

  // Start description typewriter immediately - but only show it when titleComplete
  const { displayText: descDisplay, isTyping: descTyping } = useTypewriter([project.description], { loop: false });

  // When title finishes typing
  useEffect(() => {
    if (titleDisplay === project.title && !titleTyping && !titleComplete) {
      const timer = setTimeout(() => {
        setTitleComplete(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [titleDisplay, titleTyping, project.title, titleComplete]);

  // Fallback: if title is already complete on mount
  useEffect(() => {
    if (!titleTyping && titleDisplay && titleDisplay.length > 0) {
      setTitleComplete(true);
    }
  }, [titleTyping, titleDisplay]);

  // When description finishes typing
  useEffect(() => {
    if (titleComplete && descDisplay === project.description && !descTyping && !descriptionComplete) {
      setDescriptionComplete(true);
      setShowRightSide(true);
    }
  }, [descDisplay, descTyping, project.description, titleComplete, descriptionComplete]);

  return (
    <div ref={ref} className="container section-content">
      <p className="section-nav-hint">Project {index + 1} of {total} · Press <code>Enter</code> to continue · <code>Space</code> to go back</p>

      <div className="detail-split-layout">
        {/* Left Side: Title and Description ONLY */}
        <div className="detail-left">
          <h3 className="detail-title">
            {titleDisplay}
            {!titleComplete && <span className="typewriter-caret-inline"></span>}
          </h3>

          <p className="detail-description">
            {titleComplete && descDisplay}
            {titleComplete && !descriptionComplete && <span className="typewriter-caret-inline"></span>}
          </p>
        </div>

        {/* Right Side: Project Visual */}
        <div className={`detail-right ${showRightSide ? 'visible' : ''}`}>
          {/* Project Image/Screenshot */}
          {project.image && (
            <div className="project-image-container">
              <a href={project.github} target="_blank" rel="noreferrer">
                <img src={project.image} alt={`${project.title} preview`} className="project-screenshot-clean" />
              </a>
            </div>
          )}

          {/* Tech Stack */}
          <div className="project-tech-list">
            {project.tech.map((tech, idx) => (
              <span key={idx} className="tech-tag">{tech}</span>
            ))}
          </div>

          {/* Project Links */}
          <div className="project-links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.2-3.37-1.2c-.45-1.16-1.1-1.47-1.1-1.47c-.9-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.89 1.52 2.34 1.08 2.91.83c.09-.65.35-1.08.63-1.33c-2.22-.25-4.56-1.11-4.56-4.95c0-1.09.39-1.98 1.03-2.68c-.1-.25-.45-1.28.1-2.65c0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02c.55 1.37.2 2.4.1 2.65c.64.7 1.03 1.59 1.03 2.68c0 3.85-2.34 4.7-4.57 4.95c.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2"/>
                </svg>
                <span>GitHub</span>
              </a>
            )}
            {project.link && project.link !== "#" && (
              <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                </svg>
                <span>Live Site</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

const projects = [
  {
    title: "My Portfolio",
    description: "<p> An immersive, story-driven portfolio featuring interactive typewriter animations, seamless keyboard navigation, and dynamic theme switching. Built with modern web technologies and optimized for performance, this portfolio showcases my journey through elegant, accessible design and smooth user experiences. </p>",
    tech: ["React", "Vite", "Node.js", "Three.js", "CSS", "HTML"],
    readme: "Interactive portfolio with typewriter animations and keyboard navigation. Built with React, Vite, and Three.js.",
    github: "https://github.com/KingTom07/My-portfolio",
    image: "/images/portfolio.jpg"
  },
  {
    title: "TypeTurtle",
    description: "<p> A retro-styled typing speed game that challenges users to test their WPM and accuracy. Features a full authentication system with online leaderboards powered by SQL, real-time performance tracking, and a nostalgic aesthetic design. Compete globally and track your progress as you improve your typing skills. </p>",
    tech: ["JavaScript", "Kotlin", "SQL", "CSS"],
    link: "https://github.com/KingTom07/TypeTurtle",
    github: "https://github.com/KingTom07/TypeTurtle",
    image: "/images/typeturtle.jpg"
  }
];

export { ProjectIntro, ProjectDetail, projects };
