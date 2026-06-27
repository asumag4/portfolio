import { THEMES, TOKENS, DEFAULT_THEME_ID } from '../config/themes';
import type { Theme } from '../config/themes';

const STORAGE_KEY = 'portfolio-theme';

/** camelCase → kebab-case for CSS custom property names (text1 → text-1) */
function kebab(s: string): string {
  return s
    .replace(/([A-Z])/g, '-$1')
    .replace(/(\d+)/g, '-$1')
    .toLowerCase();
}

/**
 * ThemeManager — owns the theme lifecycle.
 *  - injects design tokens once
 *  - injects the active palette as CSS variables on <html>
 *  - persists the choice to localStorage
 *  - broadcasts a `themechange` CustomEvent (the starfield listens)
 */
export class ThemeManager {
  private themes: Theme[];
  private index: number;

  constructor() {
    this.themes = THEMES;
    const saved = typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    const savedIdx = this.themes.findIndex((t) => t.id === saved);
    const defaultIdx = this.themes.findIndex((t) => t.id === DEFAULT_THEME_ID);
    this.index = savedIdx >= 0 ? savedIdx : Math.max(0, defaultIdx);
    this.applyTokens();
    this.apply(this.current.id, false);
  }

  get current(): Theme {
    return this.themes[this.index];
  }

  get all(): Theme[] {
    return this.themes;
  }

  /** Inject theme-independent design tokens (fonts, radii, motion). */
  private applyTokens(): void {
    const root = document.documentElement.style;
    for (const [key, value] of Object.entries(TOKENS)) {
      root.setProperty(`--${kebab(key)}`, value);
    }
  }

  /** Apply a theme by id; persists + broadcasts unless told otherwise. */
  apply(id: string, persist = true): void {
    const i = this.themes.findIndex((t) => t.id === id);
    if (i < 0) return;
    this.index = i;
    const theme = this.themes[i];
    const rootEl = document.documentElement;
    rootEl.dataset.theme = theme.id;
    rootEl.style.colorScheme = theme.isDark ? 'dark' : 'light';
    for (const [key, value] of Object.entries(theme.colors)) {
      rootEl.style.setProperty(`--${kebab(key)}`, value);
    }
    if (persist && typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, theme.id);
    }
    window.dispatchEvent(new CustomEvent('themechange', { detail: theme }));
  }

  /** Cycle to the next registered theme; returns it. */
  next(): Theme {
    const nextTheme = this.themes[(this.index + 1) % this.themes.length];
    this.apply(nextTheme.id);
    return nextTheme;
  }
}
