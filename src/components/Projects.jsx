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

        {/* Right Side: Image, Tech Stack, Features, Link */}
        <div className={`detail-right ${showRightSide ? 'visible' : ''}`}>
          {/* GitHub Image Link */}
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="project-image-link"
          >
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="project-image"
            />
            <div className="github-overlay">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.2-3.37-1.2c-.45-1.16-1.1-1.47-1.1-1.47c-.9-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.89 1.52 2.34 1.08 2.91.83c.09-.65.35-1.08.63-1.33c-2.22-.25-4.56-1.11-4.56-4.95c0-1.09.39-1.98 1.03-2.68c-.1-.25-.45-1.28.1-2.65c0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02c.55 1.37.2 2.4.1 2.65c.64.7 1.03 1.59 1.03 2.68c0 3.85-2.34 4.7-4.57 4.95c.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2"/>
              </svg>
              <span>View on GitHub</span>
            </div>
          </a>

          {/* Tech Stack Badges */}
          <div className="detail-tech">
            <h4 className="detail-section-heading">Tech Stack</h4>
            <div className="tech-badges">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>

          <a href={project.link} className="btn btn-primary">
            View Project →
          </a>
        </div>
      </div>
    </div>
  );
});

const projects = [
  {
    title: "My Portfolio",
    description: "An immersive, story-driven portfolio featuring interactive typewriter animations, seamless keyboard navigation, and dynamic theme switching. Built with modern web technologies and optimized for performance, this portfolio showcases my journey through elegant, accessible design and smooth user experiences.",
    tech: ["React", "Vite", "Node.js", "Three.js", "CSS", "HTML"],
    features: [
      "Interactive 3D elements with Three.js",
      "Custom typewriter effect and animations",
      "Dark/Light theme toggle with 'T' shortcut",
      "Keyboard-first navigation (Enter/Space)",
      "Express backend for contact form"
    ],
    link: "#",
    github: "https://github.com/KingTom07/My-portfolio.git",
    image: "/images/project1.png"
  },
  {
    title: "SaaS Analytics Dashboard",
    description: "Real-time charts with RBAC and export tools for enterprise data visualization.",
    tech: ["React", "D3.js", "Node.js"],
    features: [
      "38% bundle size reduction via code-splitting",
      "Full keyboard navigation",
      "Screen reader accessibility"
    ],
    link: "#",
    github: "https://github.com/yourusername/saas-dashboard",
    image: "/images/project2.png"
  },
  {
    title: "E-commerce Microsite",
    description: "High-performance landing pages with optimized CLS/LCP and A/B testing.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    features: [
      "21% increase in add-to-cart rate",
      "Lazy-loaded images & font optimization",
      "SEO-optimized structure"
    ],
    link: "#",
    github: "https://github.com/yourusername/ecommerce-microsite",
    image: "/images/project3.png"
  }
];

export { ProjectIntro, ProjectDetail, projects };
