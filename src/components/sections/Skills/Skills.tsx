import type { SkillAccent } from '../../../types/portfolio.types';
import { portfolio } from '../../../config/portfolio.config';
import { Reveal } from '../../shared/Reveal';
import { Section } from '../../shared/Section';
import './skills.css';

const ICON_STYLE: Record<SkillAccent, { bg: string; color: string }> = {
  blue:   { bg: 'rgba(139,124,255,0.15)', color: '#a195ff' },
  teal:   { bg: 'rgba(45,212,255,0.12)',  color: '#2dd4ff' },
  purple: { bg: 'rgba(167,139,250,0.15)', color: '#c4b5fd' },
  amber:  { bg: 'rgba(251,191,36,0.12)',  color: '#f5b800' },
  coral:  { bg: 'rgba(248,113,113,0.12)', color: '#f87171' },
  green:  { bg: 'rgba(52,211,153,0.12)',  color: '#34d399' },
  gray:   { bg: 'rgba(108,122,156,0.10)', color: '#9aa3bf' },
  pink:   { bg: 'rgba(255,122,198,0.12)', color: '#ff7ac6' },
};

export function Skills(): JSX.Element {
  return (
    <Section
      id="skills"
      stage="03"
      eyebrow="skills"
      title="Tools of the trade"
      lead="The stack I reach for when data needs to move, transform, or predict."
    >
      <div className="skills-grid">
        {portfolio.skills.map((group, i) => {
          const { bg, color } = ICON_STYLE[group.accent];
          return (
            <Reveal key={group.category} className="cat-card" delay={i * 60}>
              <div className="cat-header">
                <div className="cat-icon" style={{ background: bg }}>
                  <i className={group.iconClass} style={{ color, fontSize: 16 }} aria-hidden="true" />
                </div>
                <span className="cat-title">{group.category}</span>
              </div>
              <div className="pill-group">
                {group.items.map((item) => (
                  <span key={item} className={`pill p-${group.accent}`}>{item}</span>
                ))}
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
