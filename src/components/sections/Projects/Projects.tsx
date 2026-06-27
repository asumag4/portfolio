import { useCallback, useEffect, useRef, useState } from 'react';
import { portfolio } from '../../../config/portfolio.config';
import type { ProjectItem } from '../../../types/portfolio.types';
import { Icon } from '../../shared/Icon';
import { Reveal } from '../../shared/Reveal';
import { Section } from '../../shared/Section';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import './projects.css';

/**
 * Horizontal scroll-snap carousel of project cards.
 * Clicking a card opens the detail modal (description, tech stack,
 * architecture diagram, links). Cards come from `portfolio.projects`.
 */
export function Projects(): JSX.Element {
  const projects = portfolio.projects;
  const railRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [openProject, setOpenProject] = useState<ProjectItem | null>(null);

  // Track the closest-snapped card so the dots stay in sync.
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const children = Array.from(rail.children) as HTMLElement[];
        const railCenter = rail.scrollLeft + rail.clientWidth / 2;
        let best = 0;
        let bestDist = Infinity;
        children.forEach((child, i) => {
          const center = child.offsetLeft + child.offsetWidth / 2;
          const dist = Math.abs(center - railCenter);
          if (dist < bestDist) {
            bestDist = dist;
            best = i;
          }
        });
        setIndex(best);
      });
    };
    onScroll();
    rail.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      rail.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const scrollTo = useCallback((i: number) => {
    const rail = railRef.current;
    if (!rail) return;
    const child = rail.children[i] as HTMLElement | undefined;
    if (!child) return;
    rail.scrollTo({
      left: child.offsetLeft - (rail.clientWidth - child.offsetWidth) / 2,
      behavior: 'smooth',
    });
  }, []);

  const step = (dir: -1 | 1) => {
    scrollTo(Math.min(projects.length - 1, Math.max(0, index + dir)));
  };

  return (
    <Section
      id="projects"
      stage="02"
      eyebrow="projects"
      title="Things I've built"
      lead="Click any card for the full story — architecture, stack, and the decisions behind it."
      alt
    >
      <Reveal>
        <div className="carousel">
          <div className="carousel__rail" ref={railRef} tabIndex={0} aria-label="Projects carousel">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} onOpen={() => setOpenProject(p)} />
            ))}
          </div>

          <div className="carousel__controls">
            <button
              className="carousel__arrow"
              onClick={() => step(-1)}
              disabled={index === 0}
              aria-label="Previous project"
            >
              <Icon name="chevron-left" size={20} />
            </button>

            <div className="carousel__dots" role="tablist" aria-label="Project pages">
              {projects.map((p, i) => (
                <button
                  key={p.id}
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Go to ${p.title}`}
                  className={`carousel__dot${i === index ? ' carousel__dot--active' : ''}`}
                  onClick={() => scrollTo(i)}
                />
              ))}
            </div>

            <button
              className="carousel__arrow"
              onClick={() => step(1)}
              disabled={index === projects.length - 1}
              aria-label="Next project"
            >
              <Icon name="chevron-right" size={20} />
            </button>
          </div>
        </div>
      </Reveal>

      <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
    </Section>
  );
}
