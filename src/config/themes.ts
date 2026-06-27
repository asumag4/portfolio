/**
 * themes.ts
 * ------------------------------------------------------------------
 *  THE single place colours and design tokens live.
 *
 *  ▸ To tweak a colour: edit the hex in the relevant theme below.
 *  ▸ To create your own theme: copy an existing Theme object, give it
 *    a unique `id` + `label`, change the colours, and add it to the
 *    THEMES array. The toggle in the navbar cycles through every
 *    registered theme automatically — no other code changes needed.
 *
 *  Every value here is injected as a CSS custom property on <html>
 *  by ThemeManager (camelCase → kebab-case), e.g. `bgAlt` → `--bg-alt`.
 *  Components only ever reference the CSS variables.
 */

export interface ThemeColors {
  /* surfaces */
  bg: string;
  bgAlt: string;
  surface: string;
  surfaceHover: string;
  border: string;
  borderStrong: string;
  /* text */
  text1: string;
  text2: string;
  text3: string;
  /* brand */
  primary: string;
  primaryHover: string;
  primarySoft: string;
  onPrimary: string;
  secondary: string;
  secondarySoft: string;
  tertiary: string;
  /* effects */
  glow: string;
  success: string;
  danger: string;
  shadow: string;
  /* hero + starfield */
  heroA: string;
  heroB: string;
  star: string;
  starBright: string;
}

export interface Theme {
  id: string;
  label: string;
  /** Icon shown on the theme toggle while this theme is active */
  icon: 'moon' | 'sun' | 'sparkles';
  isDark: boolean;
  colors: ThemeColors;
}

/* ------------------------------------------------------------------
 * Structural design tokens (theme-independent). Also injected as
 * CSS variables — change spacing rhythm, radii, fonts, and motion
 * timing here, once, for the whole app.
 * ------------------------------------------------------------------ */
export interface DesignTokens {
  fontDisplay: string;
  fontBody: string;
  fontMono: string;
  radiusS: string;
  radiusM: string;
  radiusL: string;
  navHeight: string;
  maxWidth: string;
  durFast: string;
  durMed: string;
  durSlow: string;
  ease: string;
  easeSpring: string;
}

export const TOKENS: DesignTokens = {
  fontDisplay: "'Space Grotesk', system-ui, sans-serif",
  fontBody: "'Manrope', system-ui, sans-serif",
  fontMono: "'JetBrains Mono', ui-monospace, monospace",
  radiusS: '8px',
  radiusM: '14px',
  radiusL: '22px',
  navHeight: '68px',
  maxWidth: '1120px',
  durFast: '160ms',
  durMed: '320ms',
  durSlow: '650ms',
  ease: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
  easeSpring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
};

/* ------------------------------------------------------------------
 * Theme: VOID (default dark) — deep-field navy with nebula violet
 * ------------------------------------------------------------------ */
const voidTheme: Theme = {
  id: 'void',
  label: 'Void (dark)',
  icon: 'moon',
  isDark: true,
  colors: {
    bg: '#060913',
    bgAlt: '#0a101f',
    surface: '#0e1626',
    surfaceHover: '#15203a',
    border: '#1d2a45',
    borderStrong: '#2c3d63',
    text1: '#e8ecf8',
    text2: '#a8b3cf',
    text3: '#6c7a9c',
    primary: '#8b7cff',
    primaryHover: '#a195ff',
    primarySoft: 'rgba(139, 124, 255, 0.14)',
    onPrimary: '#0b0820',
    secondary: '#2dd4ff',
    secondarySoft: 'rgba(45, 212, 255, 0.12)',
    tertiary: '#ff7ac6',
    glow: 'rgba(139, 124, 255, 0.35)',
    success: '#34d399',
    danger: '#f87171',
    shadow: 'rgba(2, 5, 16, 0.6)',
    heroA: '#141b3c',
    heroB: '#060913',
    star: '#cfd8ff',
    starBright: '#ffffff',
  },
};

/* ------------------------------------------------------------------
 * Theme: DAYLIGHT (light)
 * ------------------------------------------------------------------ */
const daylightTheme: Theme = {
  id: 'daylight',
  label: 'Daylight (light)',
  icon: 'sun',
  isDark: false,
  colors: {
    bg: '#f6f7fb',
    bgAlt: '#ffffff',
    surface: '#ffffff',
    surfaceHover: '#eef0f9',
    border: '#e2e6f0',
    borderStrong: '#c9d0e3',
    text1: '#161f3a',
    text2: '#46526f',
    text3: '#7b86a3',
    primary: '#5b4ee6',
    primaryHover: '#4a3ed1',
    primarySoft: 'rgba(91, 78, 230, 0.10)',
    onPrimary: '#ffffff',
    secondary: '#0e8fb5',
    secondarySoft: 'rgba(14, 143, 181, 0.10)',
    tertiary: '#d52f86',
    glow: 'rgba(91, 78, 230, 0.20)',
    success: '#0e9f6e',
    danger: '#dc2626',
    shadow: 'rgba(23, 32, 64, 0.12)',
    heroA: '#e7e9ff',
    heroB: '#f6f7fb',
    star: '#7d76d8',
    starBright: '#5b4ee6',
  },
};

/* ------------------------------------------------------------------
 * Theme: NEBULA — an example *custom* theme. Copy this block to make
 * your own; the toggle picks it up automatically.
 * ------------------------------------------------------------------ */
const nebulaTheme: Theme = {
  id: 'nebula',
  label: 'Nebula (custom example)',
  icon: 'sparkles',
  isDark: true,
  colors: {
    bg: '#0b0612',
    bgAlt: '#120a1e',
    surface: '#170d29',
    surfaceHover: '#211440',
    border: '#2a1747',
    borderStrong: '#3f2469',
    text1: '#f3e9ff',
    text2: '#c0aee0',
    text3: '#8a78ad',
    primary: '#ff5ea8',
    primaryHover: '#ff7ebc',
    primarySoft: 'rgba(255, 94, 168, 0.16)',
    onPrimary: '#23061a',
    secondary: '#59e3ff',
    secondarySoft: 'rgba(89, 227, 255, 0.12)',
    tertiary: '#ffd166',
    glow: 'rgba(255, 94, 168, 0.32)',
    success: '#3ddc97',
    danger: '#ff6b6b',
    shadow: 'rgba(8, 3, 18, 0.65)',
    heroA: '#2a0f3d',
    heroB: '#0b0612',
    star: '#ffd9f1',
    starBright: '#ffffff',
  },
};

/** Register every theme here. Order = toggle cycle order. */
export const THEMES: Theme[] = [voidTheme, daylightTheme, nebulaTheme];

export const DEFAULT_THEME_ID = 'void';
