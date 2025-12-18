const NavigationGlossary = ({ onNavigate }) => {
  const navigationItems = [
    { label: 'Top Page', section: 0, description: 'Return to start' },
    { label: 'Experience', section: 1, description: 'My professional journey' },
    { label: 'Projects', section: 5, description: 'View my work' },
  ];

  return (
    <div className="navigation-glossary">
      <div className="glossary-content">
        {navigationItems.map((item, index) => (
          <button
            key={index}
            className="glossary-item"
            onClick={() => onNavigate(item.section)}
          >
            <span className="glossary-label">{item.label}</span>
            <span className="glossary-description">{item.description}</span>
            <span className="glossary-arrow">→</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavigationGlossary;
