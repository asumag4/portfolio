import { portfolio } from '../../../config/portfolio.config';
import { Reveal } from '../../shared/Reveal';
import { Section } from '../../shared/Section';
import './education.css';

export function Education(): JSX.Element | null {
  const items = portfolio.education;
  if (!items || items.length === 0) return null;

  return (
    <Section
      id="education"
      stage="02"
      eyebrow="education"
      title="Where I studied"
      lead="Degrees, projects, and activities that shaped how I think about data and systems."
    >
      <div className="edu-grid">
        {items.map((item, i) => (
          <Reveal key={item.id} delay={i * 80}>
            <article className="edu-card">
              <div className="edu-card__header">
                {item.icon && (
                  <span className="edu-card__icon" aria-hidden="true">
                    {item.icon.startsWith('ti ') ? (
                      <i className={item.icon} />
                    ) : (
                      item.icon
                    )}
                  </span>
                )}
                <div className="edu-card__meta">
                  <p className="edu-card__period">
                    {item.start} — {item.end ?? 'Present'}
                  </p>
                  <h3 className="edu-card__title">{item.education_title}</h3>
                  <p className="edu-card__school">
                    {item.major} · <span className="edu-card__school-name">{item.school}</span>
                  </p>
                </div>
              </div>

              {item.description && (
                <p className="edu-card__description">{item.description}</p>
              )}

              {item.notable_works.length > 0 && (
                <div className="edu-card__works">
                  <p className="edu-card__works-label">Notable works &amp; contributions</p>
                  <div className="edu-card__works-list">
                    {item.notable_works.map((work, wi) => (
                      <div key={wi} className="edu-card__work">
                        <p className="edu-card__work-name">{work.name}</p>
                        <ul className="edu-card__work-bullets">
                          {work.description.map((task, ti) => (
                            <li key={ti}>{task}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
