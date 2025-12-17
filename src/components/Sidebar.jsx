import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar pro-sidenav" aria-label="Site navigation">
      {/* Top brand row */}
      <div className="pro-top">
        <button className="pro-burger" aria-label="Open menu" title="Menu">
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="currentColor" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"/>
          </svg>
        </button>
        <div className="pro-name">Tom&nbsp;Sammon</div>
      </div>

      <nav className="pro-nav">
        {/* SECTION */}
        <p className="pro-section">MFE ARCHITECTURE</p>
        <a className="pro-link is-active" href="#how-built">
          <span className="pro-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M3 5h18v14H3zM5 7v10h14V7z"/>
            </svg>
          </span>
          <span>How It's Built</span>
        </a>
        <a className="pro-link" href="#source-code">
          <span className="pro-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M16 18l6-6l-6-6v12zM2 6h12v12H2z"/>
            </svg>
          </span>
          <span>View Source Code</span>
        </a>

        {/* SECTION with "View All" */}
        <div className="pro-section-row">
          <p className="pro-section">LIVE REMOTES</p>
          <a className="pro-viewall" href="#remotes">View All</a>
        </div>
        <a className="pro-link" href="#syntax">
          <span className="pro-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="m8 17l-5-5l5-5l1.4 1.4L6.8 12l2.6 2.6zm8 0l-1.4-1.4l2.6-2.6l-2.6-2.6L16 7l5 5z"/>
            </svg>
          </span>
          <span>Syntax Highlighter</span>
        </a>
        <a className="pro-link" href="#ai-designer">
          <span className="pro-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M4 4h16v4H4zm0 6h10v10H4zM16 12h4v8h-4z"/>
            </svg>
          </span>
          <span>AI FE System Designer</span>
        </a>
        <a className="pro-link" href="#catalogue">
          <span className="pro-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M3 4h18v4H3zm0 6h18v10H3z"/>
            </svg>
          </span>
          <span>Ecommerce Catalogue</span>
        </a>

        {/* SECTION */}
        <p className="pro-section">RESOURCES</p>
        <a className="pro-link" href="#contact">
          <span className="pro-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M3 6h18v12H3zm2 2v8h14V8z"/>
            </svg>
          </span>
          <span>Contact Me</span>
        </a>
      </nav>

      {/* Social row pinned to bottom */}
      <div className="pro-social">
        <a className="pro-sicon" href="mailto:hello@example.com" title="Email" aria-label="Email">
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v.4l10 6.7l10-6.7V6a2 2 0 0 0-2-2m2 5.25l-9.4 6.27a1 1 0 0 1-1.2 0L2 9.25V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z"/>
          </svg>
        </a>
        <a className="pro-sicon" href="https://github.com/" target="_blank" rel="noreferrer" title="GitHub" aria-label="GitHub">
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.2-3.37-1.2c-.45-1.16-1.1-1.47-1.1-1.47c-.9-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.89 1.52 2.34 1.08 2.91.83c.09-.65.35-1.08.63-1.33c-2.22-.25-4.56-1.11-4.56-4.95c0-1.09.39-1.98 1.03-2.68c-.1-.25-.45-1.28.1-2.65c0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02c.55 1.37.2 2.4.1 2.65c.64.7 1.03 1.59 1.03 2.68c0 3.85-2.34 4.7-4.57 4.95c.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2"/>
          </svg>
        </a>
        <a className="pro-sicon" href="https://linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn" aria-label="LinkedIn">
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="currentColor" d="M6.94 6.5A2.44 2.44 0 1 1 4.5 4.06A2.45 2.45 0 0 1 6.94 6.5M7 8.9H3v12h4zm6.5 0H9.4v12h4v-6.3c0-3.7 4.8-4 4.8 0v6.3h4v-7.4c0-6.1-6.9-5.9-8.7-2.9z"/>
          </svg>
        </a>
        <a className="pro-sicon" href="/resume.pdf" target="_blank" rel="noreferrer" title="Resume PDF" aria-label="Resume">
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8m-4 13H6V3h7v5h5z"/>
          </svg>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
