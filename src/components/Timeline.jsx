import React from 'react';

const Timeline = () => {
  return (
    <section className="main">
      <section id="hero" className="section">
        <h1>Timeline</h1>
        <p>Projects and my current work as a web development teacher.</p>
      </section>

      <section id="timeline" className="section" aria-label="Career & Projects timeline">
        <ol className="timeline">
          {/* GROUP */}
          <li className="timeline-group">
            <div className="timeline-icon" aria-hidden="true">🏫</div>
            <h3 className="timeline-heading">Current Work</h3>
          </li>

          <li className="timeline-item">
            <div className="timeline-dot" aria-hidden="true"></div>
            <div className="timeline-content">
              <header className="timeline-title">
                <strong>Web Development Teacher</strong>
                <time className="timeline-time" dateTime="2024-09">Sep 2024 — Present</time>
              </header>
              <p>Teaching HTML/CSS/JS and modern workflows. Building real-world projects with students.</p>
              <ul className="timeline-bullets">
                <li>Modular curriculum with weekly builds</li>
                <li>Git/GitHub, code reviews, CI basics</li>
                <li>Mentored 20+ students into junior roles</li>
              </ul>
            </div>
          </li>

          {/* GROUP */}
          <li className="timeline-group">
            <div className="timeline-icon" aria-hidden="true">🧩</div>
            <h3 className="timeline-heading">Selected Projects</h3>
          </li>

          <li className="timeline-item">
            <div className="timeline-dot" aria-hidden="true"></div>
            <div className="timeline-content">
              <header className="timeline-title">
                <strong>Portfolio Template</strong>
                <time className="timeline-time" dateTime="2025-03">Mar 2025</time>
              </header>
              <p>Minimal, fast portfolio: typewriter intro, theme toggle, accessible animations.</p>
              <ul className="timeline-bullets">
                <li>Lighthouse 95+ across pages</li>
                <li>Prefers-reduced-motion support</li>
                <li>CSS variables + theme switch</li>
              </ul>
              <a className="btn btn-primary" href="#" target="_blank" rel="noreferrer">View project →</a>
            </div>
          </li>

          <li className="timeline-item">
            <div className="timeline-dot" aria-hidden="true"></div>
            <div className="timeline-content">
              <header className="timeline-title">
                <strong>SaaS Analytics Dashboard</strong>
                <time className="timeline-time" dateTime="2024-12">Dec 2024</time>
              </header>
              <p>Real-time charts, RBAC, export tools.</p>
              <ul className="timeline-bullets">
                <li>−38% bundle via code-splitting</li>
                <li>Keyboard + screen reader a11y</li>
              </ul>
              <a className="btn btn-primary" href="#" target="_blank" rel="noreferrer">Case study →</a>
            </div>
          </li>

          <li className="timeline-item">
            <div className="timeline-dot" aria-hidden="true"></div>
            <div className="timeline-content">
              <header className="timeline-title">
                <strong>E-commerce Microsite</strong>
                <time className="timeline-time" dateTime="2024-06">Jun 2024</time>
              </header>
              <p>Landing + PDP with optimized CLS/LCP and A/B tests.</p>
              <ul className="timeline-bullets">
                <li>+21% add-to-cart</li>
                <li>Lazy-loaded images & font-swap</li>
              </ul>
              <a className="btn btn-primary" href="#" target="_blank" rel="noreferrer">Live site →</a>
            </div>
          </li>
        </ol>
      </section>

      <section id="about" className="section">
        <h2>About</h2>
        <p>I'm Tom — a teacher and developer. I build lean, fast user experiences with clarity, motion, and performance in mind.</p>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Available for freelance — <a className="link-cta" href="mailto:hello@example.com">email me</a>.</p>
      </section>
    </section>
  );
};

export default Timeline;
