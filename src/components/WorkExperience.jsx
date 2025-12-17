import { forwardRef, useState, useEffect } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';
import LinkedInEmbed from './LinkedInEmbed';

const ExperienceIntro = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="container section-content">
      <h2 className="section-title">My professional journey</h2>
      <p className="section-nav-hint" style={{ marginTop: '2rem' }}>Press <code>Enter</code> to explore · <code>Space</code> to go back</p>
    </div>
  );
});

const ExperienceDetail = forwardRef(({ experience, index, total }, ref) => {
  const [showRightSide, setShowRightSide] = useState(false);
  const [titleComplete, setTitleComplete] = useState(false);
  const [descriptionComplete, setDescriptionComplete] = useState(false);

  // Reset state when experience changes (when navigating between experiences)
  useEffect(() => {
    setShowRightSide(false);
    setTitleComplete(false);
    setDescriptionComplete(false);
  }, [experience.role]);

  // Typewriter for title
  const { displayText: titleDisplay, isTyping: titleTyping } = useTypewriter([experience.role], { loop: false });

  // Start description typewriter immediately - but only show it when titleComplete
  const { displayText: descDisplay, isTyping: descTyping } = useTypewriter([experience.description], { loop: false });

  // When title finishes typing
  useEffect(() => {
    if (titleDisplay === experience.role && !titleTyping && !titleComplete) {
      const timer = setTimeout(() => {
        setTitleComplete(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [titleDisplay, titleTyping, experience.role, titleComplete]);

  // Fallback: if title is already complete on mount
  useEffect(() => {
    if (!titleTyping && titleDisplay && titleDisplay.length > 0) {
      setTitleComplete(true);
    }
  }, [titleTyping, titleDisplay]);

  // When description finishes typing
  useEffect(() => {
    if (titleComplete && descDisplay === experience.description && !descTyping && !descriptionComplete) {
      setDescriptionComplete(true);
      setShowRightSide(true);
    }
  }, [descDisplay, descTyping, experience.description, titleComplete, descriptionComplete]);

  return (
    <div ref={ref} className="container section-content">
      <p className="section-nav-hint">Experience {index + 1} of {total} · Press <code>Enter</code> to continue · <code>Space</code> to go back</p>

      <div className="detail-split-layout">
        {/* Left Side: Role and Description */}
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

        {/* Right Side: Company, Period, Website, Image */}
        <div className={`detail-right ${showRightSide ? 'visible' : ''}`}>
          <div className="detail-meta">
            <h4 className="detail-company">{experience.company}</h4>
            <span className="detail-period">{experience.period}</span>
            {experience.website && (
              <a href={experience.website} target="_blank" rel="noopener noreferrer" className="detail-website">
                Visit Website →
              </a>
            )}
            {experience.linkedInPost && (
              <LinkedInEmbed {...experience.linkedInPost} />
            )}
            {experience.image && !experience.linkedInPost && (
              <div className="detail-image">
                {experience.imageLink ? (
                  <a href={experience.imageLink} target="_blank" rel="noopener noreferrer">
                    <img src={experience.image} alt={`${experience.company} screenshot`} />
                  </a>
                ) : (
                  <img src={experience.image} alt={`${experience.company} screenshot`} />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

const experiences = [
  {
    role: "Business Development Manager",
    company: "Step8Up",
    period: "Nov 2024 — Present",
    website: "https://www.step8up.co.uk/",
    linkedInPost: {
      postUrl: "https://www.linkedin.com/posts/tom-sammon-9a0863209_my-takeaway-from-todays-show-is-the-age-activity-7394497128657530880-qQB0?utm_source=share&utm_medium=member_desktop",
      author: "Tom Sammon",
      authorTitle: "Business Development Manager at Step8Up",
      date: "1w",
      content: "My takeaway from today's show is the age of digital transformation and lifelong learning...",
      image: null // Add your post image path here if you have one
    },
    description: "Business development and relationship manager of Step8up UK, My mission is to keep learning, keep building, and keep helping others grow through technology, and help learners recruit and Upskill through today's tech market.",
    achievements: [
      "Developed modular curriculum with weekly builds",
      "Taught Git/GitHub, code reviews, and CI basics",
      "Mentored 20+ students into junior developer roles"
    ]
  },
  {
    role: "Full stack Web development TA",
    company: "Step8Up",
    period: "Sep 2024 — Present",
    website: "https://www.step8up.co.uk/",
    description: "TA and Talent aqquisition manager to the future of Web development specialists and guru's",
    linkedInPost: {
      postUrl: "https://www.linkedin.com/posts/jeevs_confidence-real-pitching-activity-7402621041774215168-6-b1?utm_source=share&utm_medium=member_desktop",
      author: "Tom Sammon",
      authorTitle: "Full stack Web development TA at Step8Up",
      date: "Recently",
      content: "Confidence, real pitching...",
      image: null
    },
    achievements: [
      "Reduced page load times by 40% through optimization",
      "Implemented accessibility standards (WCAG 2.1 AA)",
      "Led migration from vanilla JS to React framework"
    ]
  },
  {
    role: "Co founder",
    company: "Ai CRM (Soon to come)",
    period: "Dec 2024 — Present",
    website: null,
    description: "Bridging the gab between Artificial Intelligence and Client Relationships, utilizing AI as a tool for managing work flow B2B relationships",
    linkedInPost: null,
    achievements: [
      "Contributed to 3 major product releases",
      "Refactored authentication system for better security",
      "Wrote comprehensive unit and integration tests"
    ]
  }
];

export { ExperienceIntro, ExperienceDetail, experiences };
