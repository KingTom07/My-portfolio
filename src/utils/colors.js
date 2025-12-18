// Utility to get CSS variable colors for use in Three.js
export const getColor = (varName) => {
  if (typeof window === 'undefined') return '#000000'
  return getComputedStyle(document.documentElement)
    .getPropertyValue(`--${varName}`)
    .trim()
}

// Pre-defined color constants from CSS variables
export const colors = {
  // Brand
  primary: () => getColor('primary'),
  secondary: () => getColor('secondary'),

  // 3D Scene
  greenAccent: () => getColor('green-accent'),
  greenLight: () => getColor('green-light'),
  greenNeon: () => getColor('green-neon'),
  yellowHighlight: () => getColor('yellow-highlight'),
  redIndicator: () => getColor('red-indicator'),

  // GitHub terminal
  githubBg: () => getColor('github-bg'),
  githubSurface: () => getColor('github-surface'),
  githubBorder: () => getColor('github-border'),
  githubText: () => getColor('github-text'),
  githubMuted: () => getColor('github-muted'),
  githubLink: () => getColor('github-link'),
  githubGreen: () => getColor('github-green'),

  // Materials
  woodDark: () => getColor('wood-dark'),
  metalDark: () => getColor('metal-dark'),
  metalLight: () => getColor('metal-light'),
  screenDark: () => getColor('screen-dark'),
  screenLight: () => getColor('screen-light'),

  // Base
  text: () => getColor('text'),
  muted: () => getColor('muted'),
  bg: () => getColor('bg'),
  surface: () => getColor('surface'),
  panel: () => getColor('panel'),
}
