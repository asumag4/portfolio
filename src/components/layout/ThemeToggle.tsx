import { useTheme } from '../../context/ThemeContext';
import { Icon } from '../shared/Icon';
import type { IconName } from '../../types/portfolio.types';

const THEME_ICON: Record<string, IconName> = {
  void: 'moon',
  daylight: 'sun',
};

/** Cycles through every registered theme; icon reflects the current one. */
export function ThemeToggle(): JSX.Element {
  const { theme, cycle } = useTheme();
  const icon: IconName = THEME_ICON[theme.id] ?? 'sparkles';

  return (
    <button
      className="theme-toggle"
      onClick={cycle}
      aria-label={`Switch theme (current: ${theme.label})`}
      title={`Theme: ${theme.label} — click to cycle`}
    >
      <Icon name={icon} size={18} />
    </button>
  );
}
