Single-page portfolio built with React, Vite, and Tailwind CSS. The layout highlights profile, work experience, and self-reflection sections with smooth slide-in animations, a gradient backdrop, and an always-available section navigator.

## Tech stack

- React 18 with Vite
- Tailwind CSS (dark mode first)
- React Icons

## Local development

```bash
npm install
npm run dev
```

The dev server starts at <http://localhost:5173>. The site opens in dark mode by default, but you can toggle light mode with the sun/moon button in the header.

## Build for production

```bash
npm run build
npm run preview
```

## Features

- Gradient background with glassmorphism accents
- Section-based navigation with animated chevron shortcuts (desktop & mobile layouts)
- Slide-in reveals as you scroll through Profile, Work & Experience, and Reflection sections
- Persistent dark/light mode preference stored in `localStorage`