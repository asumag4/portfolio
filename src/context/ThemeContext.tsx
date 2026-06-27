import { createContext, useCallback, useContext, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { ThemeManager } from '../core/ThemeManager';
import type { Theme } from '../config/themes';

interface ThemeContextValue {
  theme: Theme;
  themes: Theme[];
  cycle: () => void;
  set: (id: string) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const managerRef = useRef<ThemeManager | null>(null);
  if (managerRef.current === null) {
    managerRef.current = new ThemeManager();
  }
  const manager = managerRef.current;
  const [theme, setTheme] = useState<Theme>(manager.current);

  const cycle = useCallback(() => setTheme(manager.next()), [manager]);
  const set = useCallback(
    (id: string) => {
      manager.apply(id);
      setTheme(manager.current);
    },
    [manager],
  );

  return (
    <ThemeContext.Provider value={{ theme, themes: manager.all, cycle, set }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside <ThemeProvider>');
  return ctx;
}
