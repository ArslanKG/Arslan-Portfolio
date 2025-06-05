// Animation durations
export const ANIMATION_DURATIONS = {
  LANGUAGE_TRANSITION: 300,
  FADE_TRANSITION: 300,
  HOVER_TRANSITION: 200
} as const;

// Sections
export const SECTIONS = {
  ABOUT: 'about',
  EXPERIENCE: 'experience',
  PROJECTS: 'projects'
} as const;

// Navigation items configuration
export const NAVIGATION_ITEMS = [
  {
    id: 'nav-about',
    section: SECTIONS.ABOUT,
    labelKey: 'about'
  },
  {
    id: 'nav-experience', 
    section: SECTIONS.EXPERIENCE,
    labelKey: 'experience'
  },
  {
    id: 'nav-projects',
    section: SECTIONS.PROJECTS, 
    labelKey: 'projects'
  }
] as const;

// Languages
export const LANGUAGES = {
  TR: 'tr',
  EN: 'en'
} as const;

export type Language = typeof LANGUAGES[keyof typeof LANGUAGES];
export type Section = typeof SECTIONS[keyof typeof SECTIONS];