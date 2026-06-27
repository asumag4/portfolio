import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

interface SectionProps {
  id: string;
  /** Zero-padded pipeline stage number, e.g. "02". */
  stage: string;
  eyebrow: string;
  title: string;
  lead?: string;
  alt?: boolean;
  children: ReactNode;
}

/**
 * Standard section shell: pipeline-stage eyebrow, title, optional lead,
 * then arbitrary content inside the shared container.
 */
export function Section({ id, stage, eyebrow, title, lead, alt = false, children }: SectionProps): JSX.Element {
  return (
    <section id={id} className={`section${alt ? ' section--alt' : ''}`}>
      <div className="container">
        <Reveal>
          <p className="section__eyebrow">
            <span className="section__eyebrow-slash">{'//'}</span> stage {stage} — {eyebrow}
          </p>
          <h2 className="section__title">{title}</h2>
          {lead ? <p className="section__lead">{lead}</p> : null}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
