import { useEffect, useRef } from 'react';
import { portfolio } from '../../../config/portfolio.config';
import { useTypewriter } from '../../../hooks/useTypewriter';
import { Icon } from '../../shared/Icon';
import { Starfield } from './Starfield';
import './hero.css';

/**
 * Full-viewport landing hero: canvas starfield + cursor-follow glow,
 * gradient name, typewriter role line, CTAs and a scroll hint.
 */
export function Hero(): JSX.Element {
  const { hero } = portfolio;
  const typed = useTypewriter(hero.typedRoles);
  const glowRef = useRef<HTMLDivElement>(null);

  // Cursor glow follows the pointer with a soft lerp (rAF, no re-renders).
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    const target = { x: window.innerWidth / 2, y: window.innerHeight * 0.35 };
    const pos = { ...target };

    const onPointer = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };

    const tick = () => {
      pos.x += (target.x - pos.x) * 0.08;
      pos.y += (target.y - pos.y) * 0.08;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', onPointer, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('pointermove', onPointer);
      cancelAnimationFrame(raf);
    };
  }, []);

  const onCta = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="top" className="hero">
      <Starfield />
      <div className="hero__glow" ref={glowRef} aria-hidden="true" />
      <div className="hero__orbit" aria-hidden="true" />

      <div className="container hero__content">
        <p className="hero__eyebrow">{hero.eyebrow}</p>
        <h1 className="hero__name">{hero.name}</h1>
        <p className="hero__role" aria-label={hero.typedRoles.join(', ')}>
          <span>{typed}</span>
          <span className="hero__caret" aria-hidden="true" />
        </p>
        <p className="hero__tagline">{hero.tagline}</p>

        <div className="hero__ctas">
          {hero.ctas.map((cta) => (
            <a
              key={cta.label}
              href={cta.href}
              className={`btn btn--${cta.variant}`}
              onClick={(e) => onCta(e, cta.href)}
            >
              {cta.label}
            </a>
          ))}
        </div>
      </div>

      <button
        className="hero__scroll-hint"
        onClick={() =>
          document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })
        }
        aria-label="Scroll to content"
      >
        <span>{hero.scrollHint}</span>
        <Icon name="chevron-down" size={16} />
      </button>
    </section>
  );
}
