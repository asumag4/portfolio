# Arthur Sumague — Portfolio

A modular, config-driven portfolio. React 18 + TypeScript (strict) + Vite, zero runtime dependencies beyond React. Every word of content and every colour lives in **two files** — you should rarely need to touch a component.

## Quickstart

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production bundle in /dist
npm run preview  # serve the production build locally
```

Node 18+ recommended.

## Where to edit things (the whole map)

| What | File |
|---|---|
| **All content** — hero, experiences, projects, skills, stats, about, résumé, contact, footer | `src/config/portfolio.config.ts` |
| **All colours + design tokens** (fonts, radii, durations, easing) | `src/config/themes.ts` |
| **Section order / navbar** | `src/config/sections.ts` |
| Spacing & type scale, semantic aliases | top of `src/styles/global.css` |
| Static assets (résumé PDF, images, sample CSV) | `/public` |

Search the config for `[EDIT]` — those are placeholders waiting for your real employers, usernames, email, and URLs.

## Theming

Three themes ship out of the box: `void` (dark, default), `daylight` (light), and `nebula` (a custom example). The navbar toggle cycles through whatever is in the `THEMES` array.

**To create your own theme:**

1. Open `src/config/themes.ts`
2. Copy an existing theme object, give it a unique `id` + `label`
3. Change the colours (every key is documented in the `ThemeColors` interface — primary/secondary/tertiary, surfaces, text tiers, hero gradients, starfield colours)
4. Add it to the `THEMES` array — done. It's now in the toggle cycle and persists to `localStorage`.

`ThemeManager` injects every key as a CSS variable on `<html>` (`primaryHover` → `--primary-hover`), so components never hardcode colours. Structural tokens (fonts, radii, motion durations) live in the same file under `TOKENS`.

## Easter egg

Type the Konami code (↑ ↑ ↓ ↓ ← → ← → B A) anywhere on the page.

## Accessibility & motion

- `prefers-reduced-motion` disables the starfield animation, cursor glow, reveals, and counters (static frame / instant visibility instead)
- Modal: focus trap, ESC + backdrop close, focus restore
- Carousel dots and arrows are keyboard-operable; semantic landmarks throughout

## Deploying

Static output — anything that serves `/dist` works:

- **Vercel / Netlify:** import the repo, framework = Vite, build `npm run build`, output `dist`
- **GitHub Pages:** set `base: '/<repo-name>/'` in `vite.config.ts`, build, publish `dist` (e.g. with `gh-pages`)

## Architecture notes

- **OOP core** (`src/core/`): `ThemeManager`, `StarfieldEngine` (Star / ShootingStar classes), `Typewriter`, `CsvParser` + `DataLemurService` — framework-free classes
- **Thin React shells** (`src/components/`): hooks bridge the classes into the component tree (`useTypewriter`, `useDataLemur`, …)
- **Config in, DOM out**: components map over config arrays; adding content never means writing JSX


## Future Work

- [ ] Add a section for certificates
- [ ] When clicking on the skills - should bring a web of all the relevant work-experiences + projects along through it
- [ ] Should change hero CSS animation when the theme changes
- [ ] The light mode is too light - find a mundane "afternoon" type of feel
- [ ] We can have a morning theme, but make it light blue instead of just straight up white