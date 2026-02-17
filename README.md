# Sonic Canvas - Hybrid Artist Portfolio

A visually immersive, interactive landing page for Justin Ray, a hybrid music production artist. This project features an abstract "oil-on-canvas" aesthetic, generative visuals, and a custom audio-visual experience.

## Project Overview

This application serves as the central hub for the "Hybrid Production" identity, showcasing multiple music projects (loserdub, VISION, le vide, etc.) and experimental creative apps.

## Tech Stack

- **Framework**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Typography**: Space Grotesk & Syne (via Google Fonts)

## Key Features

- **Oil Paint Aesthetic**: Custom SVG filters (`<filter id="oil-paint">`) and CSS keyframe animations create a fluid, organic background effect.
- **Fuzzy Text Engine**: A custom Canvas-based component (`FuzzyText.tsx`) that renders text with analog distortion, fuzz, and interactive hover states.
- **Interactive UI**: Custom cursor tooltips, glassmorphism effects, and micro-interactions using Tailwind.
- **SoundCloud Integration**: Embedded player for the latest "VISION" tracks.
- **Transmission System**: A contact form that constructs pre-formatted emails for collaboration inquiries.

## Projects

1.  **loserdub**: Indie/Electronic - Emotional Dissonance Meets Optimistic Nostalgia.
2.  **VISION**: Hybrid/Funko Pop - Cinematic soundscapes.
3.  **le vide**: French/AltPop - Minimalist textures.
4.  **flawed future**: EDM/Hardstyle - Glitch mechanics.
5.  **disarray**: Alternative/Indie - Controlled chaos.

## Development

This project is structured to run in a browser-based ES module environment or a standard Vite setup.

**Entry Point**: `index.html` -> `index.tsx` -> `App.tsx`
