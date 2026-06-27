import { portfolio } from '../../../config/portfolio.config';
import { Icon } from '../../shared/Icon';
import { Reveal } from '../../shared/Reveal';
import { Section } from '../../shared/Section';
import './skills.css';

/**
 * Skill groups with optional proficiency bars. Bar widths are driven
 * by the --lvl CSS var and animate when the group reveals.
 */
export function Skills(): JSX.Element {
  return (
    <Section
      id="skills"
      stage="03"
      eyebrow="skills"
      title="Tools of the trade"
      lead="The stack I reach for when data needs to move, transform, or predict."
    >
      <div className="skills">
        {portfolio.skills.map((group, i) => (
          <Reveal key={group.category} className="skills__group" delay={i * 80}>
            <h3 className="skills__category">
              {group.icon ? <Icon name={group.icon} size={16} /> : null}
              {group.category}
            </h3>
            <ul className="skills__list">
              {group.items.map((item) => (
                <li key={item.name} className="skills__item">
                  <div className="skills__row">
                    <span className="skills__name">{item.name}</span>
                    {typeof item.level === 'number' ? (
                      <span className="skills__pct">{item.level}%</span>
                    ) : null}
                  </div>
                  {typeof item.level === 'number' ? (
                    <div className="skills__bar" aria-hidden="true">
                      <div
                        className="skills__fill"
                        style={{ '--lvl': `${item.level}%` } as React.CSSProperties}
                      />
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
