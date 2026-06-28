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

### Adding an experience or project

Append an object to the `experiences` or `projects` array in `portfolio.config.ts`. The timeline, carousel, dots, and modal all render from the array — no component changes. Projects accept an optional `accent` colour, `links`, and an `architecture` diagram as either an `image` path (drop the file in `/public`) or an `ascii` block.

## Theming

Three themes ship out of the box: `void` (dark, default), `daylight` (light), and `nebula` (a custom example). The navbar toggle cycles through whatever is in the `THEMES` array.

**To create your own theme:**

1. Open `src/config/themes.ts`
2. Copy an existing theme object, give it a unique `id` + `label`
3. Change the colours (every key is documented in the `ThemeColors` interface — primary/secondary/tertiary, surfaces, text tiers, hero gradients, starfield colours)
4. Add it to the `THEMES` array — done. It's now in the toggle cycle and persists to `localStorage`.

`ThemeManager` injects every key as a CSS variable on `<html>` (`primaryHover` → `--primary-hover`), so components never hardcode colours. Structural tokens (fonts, radii, motion durations) live in the same file under `TOKENS`.

## DataLemur stats (CSV-driven)

The Stats section fetches a CSV you keep in a GitHub repo and counts rows (and difficulties, if a `difficulty` column exists).

1. Track your solves in a CSV — header row optional. Recognized columns: `date, question, difficulty, category` (any subset works; see `/public/sample-datalemur.csv`).
2. Push it to a **public** repo and grab the raw URL:
   `https://raw.githubusercontent.com/<user>/<repo>/main/datalemur.csv`
3. Set `stats.datalemur.csvUrl` in the config.

If the fetch fails (offline, private repo), the section falls back to `fallbackTotal` with an honest "last known count" note. The bundled sample at `/sample-datalemur.csv` makes it work out of the box.

## LeetCode + GitHub cards

- LeetCode renders a stats card from `leetcard.jacoblin.cool` (third-party) plus a profile link — set your `username` in `stats.leetcode`.
- GitHub readme-stats cards are wired but **off** (`showCards: false`) until you set a real username. They're themed from the active palette automatically.

## Contact form

Two modes, switched by one config value (`contact.formEndpoint`):

- **`null` (default):** submitting opens the visitor's mail client pre-filled (mailto fallback — works with zero setup).
- **Formspree:** create a free form at formspree.io, paste the endpoint (`https://formspree.io/f/xxxxxxx`) into `formEndpoint`, and the form POSTs JSON with proper sending/sent/error states.

A hidden honeypot field quietly drops bot submissions.

## Résumé

Drop your PDF at `/public/resume.pdf`. The section HEAD-checks the file: if it's missing you'll see a setup hint instead of a broken link; once present you get download + inline preview.

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

- [ ] When clicking on the skills - should bring a web of all the relevant work-experiences + projects along through it