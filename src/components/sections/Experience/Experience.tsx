import type { BulletItem } from '../../../types/portfolio.types';
import { portfolio } from '../../../config/portfolio.config';
import { Reveal } from '../../shared/Reveal';
import { Section } from '../../shared/Section';
import './experience.css';

function isBulletItem(b: string | BulletItem): b is BulletItem {
  return typeof b === 'object';
}

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
              <div className="timeline__card-header">
                <div className="timeline__card-meta">
                  <p className="timeline__period">
                    {item.start} — {item.end ?? 'Present'}
                  </p>
                  <h3 className="timeline__role">{item.role}</h3>
                </div>
                {item.logoUrl && (
                  item.companyUrl ? (
                    <a
                      href={item.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="timeline__logo-link"
                      aria-label={item.company}
                    >
                      <img src={item.logoUrl} alt={item.company} className="timeline__logo" />
                    </a>
                  ) : (
                    <img src={item.logoUrl} alt={item.company} className="timeline__logo" />
                  )
                )}
              </div>
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
                {item.bullets.map((b, idx) =>
                  isBulletItem(b) ? (
                    <li key={idx}>
                      {b.text}
                      <ul className="timeline__sub-bullets">
                        {b.sub.map((s, si) => (
                          <li key={si}>{s}</li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <li key={idx}>{b}</li>
                  )
                )}
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
