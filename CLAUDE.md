# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A minimal, performance-focused portfolio website built with React and Vite. Features a typewriter intro animation, dark/light theme toggle, and single-page architecture. The intro screen transitions to portfolio content when the user presses Enter.

## Tech Stack

- **React 18** - UI library
- **Vite 6** - Build tool and dev server
- **Vanilla CSS** - Styling with CSS custom properties

## File Structure

### Source Files (`src/`)
- `main.jsx` - React entry point, renders App
- `App.jsx` - Main component with state management for intro/portfolio views
- `styles.css` - Complete stylesheet with theme variables and responsive design

### Components (`src/components/`)
- `ThemeToggle.jsx` - Dark/light theme switch component
- `Sidebar.jsx` - Navigation sidebar with social links
- `Timeline.jsx` - Portfolio timeline with projects and experience

### Hooks (`src/hooks/`)
- `useTypewriter.js` - Custom hook for typewriter animation with reduced motion support
- `useTheme.js` - Custom hook for theme management and localStorage persistence

## Architecture

### Single-Page Flow
1. **Intro Screen**: Typewriter animation → User presses Enter → Fade transition
2. **Portfolio Screen**: Sidebar navigation + timeline content (both rendered on same page)

State managed in `App.jsx` with `showPortfolio` boolean that toggles between views.

### Theme System
- CSS custom properties defined in `:root` and `:root[data-theme="light"]`
- `useTheme` hook manages `data-theme` attribute on `<html>` element
- Persists to `localStorage` with key `"theme"`
- Keyboard shortcut: `T` toggles theme (implemented in App.jsx)
- UI: Pill-style toggle switch with animated knob

### Typewriter Animation
- `useTypewriter` custom hook cycles through phrases with typing/deleting effect
- Respects `prefers-reduced-motion` (instant display when enabled)
- Configurable: `typeSpeed`, `deleteSpeed`, `holdTime`, `loop`
- Uses refs to maintain state across renders without causing re-renders

### Layout Patterns
- **Intro Screen**: Grid layout with centered hero section (`.hero`)
- **Portfolio Screen**: Two-column grid (`.layout`)
  - Sidebar: 260px fixed width, sticky position with `pro-sidenav` styles
  - Main: Fluid width with timeline component
  - Responsive: Stacks to single column below 960px

### Accessibility Features
- `prefers-reduced-motion` detection in `useTypewriter` hook
- ARIA attributes on theme toggle and interactive elements
- `.sr-only` utility class for screen reader text
- Semantic HTML with proper heading hierarchy

## Development Workflow

### Running the Dev Server
```bash
npm run dev
```
Starts Vite dev server at http://localhost:5173 with hot module replacement.

### Building for Production
```bash
npm run build
```
Creates optimized production build in `dist/` directory.

### Preview Production Build
```bash
npm run preview
```
Serves the production build locally for testing.

### Key Responsive Breakpoints
- `960px` - Layout stacks (sidebar above content)
- `640px` - Timeline adjusts spacing
- `420px` - Theme toggle becomes more compact

## Color Palette Variables

Dark theme (default):
- `--bg`: #272d2d (page background)
- `--surface`: #343a3a (panels)
- `--text`: #f6f8ff (main text)
- `--primary`: #23ce6b (green accent)
- `--secondary`: #a846a0 (magenta accent)

Light theme uses same variable names with different values set via `[data-theme="light"]`.

## Common Modifications

### Adding Timeline Items
Edit the JSX in `src/components/Timeline.jsx`. Follow the pattern:
```jsx
<li className="timeline-item">
  <div className="timeline-dot" aria-hidden="true"></div>
  <div className="timeline-content">
    <header className="timeline-title">
      <strong>Title</strong>
      <time className="timeline-time" dateTime="YYYY-MM">Date</time>
    </header>
    <p>Description</p>
  </div>
</li>
```

### Changing Typewriter Phrases
Edit the `phrases` array in `src/App.jsx`:
```jsx
const phrases = [
  "Hello, I am Tom Sammon.",
  "Teacher, and Developer.",
  "I build cool portfolios !!"
];
```

### Adjusting Theme Colors
Modify CSS custom properties in `:root` and `:root[data-theme="light"]` blocks in `src/styles.css`.

### Modifying Transition Timing
In `src/App.jsx`, adjust the setTimeout delay:
```jsx
setFadeOut(true);
setTimeout(() => {
  setShowPortfolio(true);
}, 300); // Change this value
```

## Component Props & APIs

### useTypewriter(phrases, options)
- **phrases**: Array of strings to type
- **options**: `{ typeSpeed, deleteSpeed, holdTime, loop }`
- **Returns**: `{ displayText, isTyping }`

### useTheme()
- **Returns**: `{ theme, toggleTheme }`
- **theme**: 'light' | 'dark'
- **toggleTheme**: Function to toggle between themes

### ThemeToggle
- **Props**: `{ theme, onToggle }`

## Browser Support

Uses modern CSS and JavaScript features:
- CSS custom properties, Grid layout, `clamp()`, `color-mix()`, `svh` units
- React 18+ (requires ES6+ JavaScript)
- Vite dev server uses native ESM

## Migration Notes

Original vanilla HTML/CSS/JS files moved to `old_files/` directory:
- `old_files/home.html` - Original two-page portfolio
- `old_files/intro.js` - Original vanilla JS typewriter
- `old_files/theme.js` - Original vanilla JS theme toggle
