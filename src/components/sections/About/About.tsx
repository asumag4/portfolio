import { portfolio } from '../../../config/portfolio.config';
import { Reveal } from '../../shared/Reveal';
import { Section } from '../../shared/Section';
import './about.css';

/**
 * Biography: portrait (image or initials), paragraphs, highlight grid,
 * a "currently" ticker, and a fun-facts list.
 */
export function About(): JSX.Element {
  const about = portfolio.about;

  return (
    <Section id="about" stage="05" eyebrow="about" title={about.heading}>
      <div className="about">
        <Reveal className="about__portrait-wrap">
          <div className="about__portrait">
            {about.portraitImage ? (
              <img src={about.portraitImage} alt={portfolio.hero.name} />
            ) : (
              <span className="about__initials">{about.portraitInitials}</span>
            )}
          </div>
          <div className="about__currently">
            <p className="about__currently-title">currently</p>
            <ul>
              {about.currently.map((c) => (
                <li key={c} className="chip chip--sm">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="about__body">
          <Reveal delay={80}>
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 32)} className="about__para">
                {p}
              </p>
            ))}
          </Reveal>

          <Reveal className="about__highlights" delay={140}>
            {about.highlights.map((h) => (
              <div key={h.label} className="about__highlight">
                <span className="about__highlight-value">{h.value}</span>
                <span className="about__highlight-label">{h.label}</span>
              </div>
            ))}
          </Reveal>

          <Reveal delay={200}>
            <p className="about__facts-title">// fun facts</p>
            <ul className="about__facts">
              {about.funFacts.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
