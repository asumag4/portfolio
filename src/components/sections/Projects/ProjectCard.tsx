import { useRef } from 'react';
import type { ProjectItem } from '../../../types/portfolio.types';
import { Icon } from '../../shared/Icon';

interface ProjectCardProps {
  project: ProjectItem;
  onOpen: () => void;
}

/**
 * Carousel card with a subtle pointer-tracked 3D tilt (CSS vars --rx/--ry)
 * and an optional per-project accent colour (--accent).
 */
export function ProjectCard({ project, onOpen }: ProjectCardProps): JSX.Element {
  const ref = useRef<HTMLButtonElement>(null);

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty('--rx', `${(-y * 5).toFixed(2)}deg`);
    el.style.setProperty('--ry', `${(x * 7).toFixed(2)}deg`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  };

  return (
    <button
      ref={ref}
      className="project-card"
      style={project.accent ? ({ '--accent': project.accent } as React.CSSProperties) : undefined}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      onClick={onOpen}
      aria-haspopup="dialog"
    >
      <div className="project-card__media" aria-hidden="true">
        {project.image ? (
          <img src={project.image} alt="" loading="lazy" />
        ) : (
          <span className="project-card__emoji">{project.emoji ?? '🛰️'}</span>
        )}
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__tagline">{project.tagline}</p>
        <div className="chip-row">
          {project.tech.slice(0, 4).map((t) => (
            <span className="chip chip--sm" key={t}>
              {t}
            </span>
          ))}
          {project.tech.length > 4 ? (
            <span className="chip chip--sm">+{project.tech.length - 4}</span>
          ) : null}
        </div>
      </div>

      <span className="project-card__open">
        details <Icon name="chevron-right" size={14} />
      </span>
    </button>
  );
}
