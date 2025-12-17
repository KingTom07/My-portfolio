import React from 'react';

const ThemeToggle = ({ theme, onToggle }) => {
  const isLight = theme === 'light';

  return (
    <label className="theme-switch" aria-label="Toggle color theme">
      <span className="theme-label">DARK</span>
      <input
        type="checkbox"
        id="theme-toggle"
        checked={isLight}
        onChange={onToggle}
        aria-pressed={isLight}
        aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      />
      <span className="theme-toggle-ui" aria-hidden="true">
        <span className="knob"></span>
      </span>
      <span className="theme-label">LIGHT</span>
    </label>
  );
};

export default ThemeToggle;
