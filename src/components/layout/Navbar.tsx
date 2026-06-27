import { useEffect, useMemo, useState } from 'react';
import { SECTION_REGISTRY } from '../../config/sections';
import { useActiveSection } from '../../hooks/useActiveSection';
import { Icon } from '../shared/Icon';
import { ThemeToggle } from './ThemeToggle';

/**
 * Sticky navbar. Links come straight from SECTION_REGISTRY — add a
 * section to the registry and it shows up here automatically.
 */
export function Navbar(): JSX.Element {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = useMemo(() => SECTION_REGISTRY.filter((s) => s.nav), []);
  const active = useActiveSection(useMemo(() => navItems.map((s) => s.id), [navItems]));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile drawer when resizing to desktop.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 901px)');
    const onChange = () => mq.matches && setMenuOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const go = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a
          className="navbar__logo"
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          arthur<span className="navbar__cursor">_</span>
        </a>

        <nav className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`} aria-label="Sections">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`navbar__link${active === item.id ? ' navbar__link--active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                go(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <ThemeToggle />
          <button
            className="navbar__burger"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
