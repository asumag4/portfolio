import { portfolio } from '../../../config/portfolio.config';
import { Reveal } from '../../shared/Reveal';
import { Section } from '../../shared/Section';
import './experience.css';

/**
 * Vertical timeline driven entirely by `portfolio.experiences`.
 * Desktop: cards alternate around a centre spine. Mobile: single column.
 */
export function Experience(): JSX.Element {
  const items = portfolio.experiences;

  return (
    <Section
      id="experience"
      stage="01"
      eyebrow="experience"
      title="Where I've worked"
      lead="A timeline of roles and the systems I shipped along the way."
    >
      <ol className="timeline">
        {items.map((item, i) => (
          <Reveal as="li" key={item.id} className="timeline__item" delay={i * 90}>
            <div className="timeline__node" aria-hidden="true" />
            <article className="timeline__card">
              <p className="timeline__period">
                {item.start} — {item.end ?? 'Present'}
              </p>
              <h3 className="timeline__role">{item.role}</h3>
              <p className="timeline__company">
                {item.companyUrl ? (
                  <a href={item.companyUrl} target="_blank" rel="noreferrer">
                    {item.company}
                  </a>
                ) : (
                  item.company
                )}
                {item.location ? <span className="timeline__location"> · {item.location}</span> : null}
              </p>
              {item.summary ? <p className="timeline__summary">{item.summary}</p> : null}
              <ul className="timeline__bullets">
                {item.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="chip-row">
                {item.tech.map((t) => (
                  <span className="chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
