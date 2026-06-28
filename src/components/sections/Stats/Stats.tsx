import { portfolio } from '../../../config/portfolio.config';
import { useTheme } from '../../../context/ThemeContext';
import { useDataLemur } from '../../../hooks/useDataLemur';
import { CountUp } from '../../shared/CountUp';
import { Icon } from '../../shared/Icon';
import { Reveal } from '../../shared/Reveal';
import { Section } from '../../shared/Section';
import './stats.css';

const hex = (v: string): string => v.replace('#', '');

/**
 * Code-practice stats:
 *  - LeetCode: themed leetcard image + profile link
 *  - DataLemur: total + per-difficulty bars parsed live from the CSV
 *    tracked in a GitHub repo (with a graceful fallback number)
 *  - GitHub: optional readme-stats cards themed from the active palette
 */
export function Stats(): JSX.Element {
  const { leetcode, datalemur, github } = portfolio.stats;
  const { theme } = useTheme();
  const { stats, loading } = useDataLemur(datalemur.csvUrl, datalemur.fallbackTotal);

  const c = theme.colors;
  const leetcardUrl =
    `https://leetcard.jacoblin.cool/${leetcode.username}` +
    `?theme=transparent&font=JetBrains%20Mono&ext=heatmap` +
    `&border=0&radius=12`;

  const ghCardBase =
    `https://github-readme-stats.vercel.app/api?username=${github?.username}` +
    `&show_icons=true&hide_border=true&bg_color=00000000` +
    `&title_color=${hex(c.primary)}&icon_color=${hex(c.secondary)}` +
    `&text_color=${hex(c.text2)}&ring_color=${hex(c.primary)}`;

  const maxDifficulty = Math.max(1, ...stats.byDifficulty.map((d) => d.count));

  return (
    <Section
      id="stats"
      stage="04"
      eyebrow="code stats"
      title="Practice, quantified"
      lead="SQL and algorithm reps, pulled from live sources where the platforms allow it."
      alt
    >
      <div className="stats">
        {/* LeetCode */}
        <Reveal className="stats__card">
          <h3 className="stats__card-title">
            <Icon name="code" size={16} /> LeetCode
          </h3>
          {leetcode.showCard ? (
            <img
              className="stats__leetcard"
              src={leetcardUrl}
              alt={`LeetCode statistics for ${leetcode.username}`}
              loading="lazy"
            />
          ) : null}
          <a className="btn btn--ghost btn--sm" href={leetcode.profileUrl} target="_blank" rel="noreferrer">
            <Icon name="external" size={15} />
            View profile
          </a>
        </Reveal>

        {/* DataLemur */}
        <Reveal className="stats__card" delay={90}>
          <h3 className="stats__card-title">
            <Icon name="database" size={16} /> DataLemur
          </h3>

          <div className="stats__dl-hero">
            <CountUp value={stats.total} className="stats__number" />
            <span className="stats__big-label">SQL problems solved</span>
          </div>

          <div className="stats__dl-divider" />

          {stats.byDifficulty.length > 0 ? (
            <ul className="stats__difficulties">
              {stats.byDifficulty.map((d) => {
                const pct = Math.round((d.count / stats.total) * 100);
                return (
                  <li key={d.label} className="stats__difficulty">
                    <span className={`stats__difficulty-dot stats__difficulty-dot--${d.label.toLowerCase()}`} />
                    <span className="stats__difficulty-label">{d.label}</span>
                    <div className="stats__difficulty-bar">
                      <div
                        className={`stats__difficulty-fill stats__difficulty-fill--${d.label.toLowerCase()}`}
                        style={{ '--w': `${(d.count / maxDifficulty) * 100}%` } as React.CSSProperties}
                      />
                    </div>
                    <span className="stats__difficulty-count">{d.count}</span>
                    <span className="stats__difficulty-pct">{pct}%</span>
                  </li>
                );
              })}
            </ul>
          ) : null}

          <p className="stats__note">
            {loading
              ? 'Fetching latest from the tracking CSV…'
              : stats.live
                ? datalemur.note ?? 'Fetched live from the tracking CSV.'
                : 'Live fetch unavailable — showing last known count.'}
          </p>

          {datalemur.profileUrl ? (
            <a className="btn btn--ghost btn--sm" href={datalemur.profileUrl} target="_blank" rel="noreferrer">
              <Icon name="external" size={15} />
              View profile
            </a>
          ) : null}
        </Reveal>

        {/* GitHub (optional) */}
        {github?.showCards ? (
          <Reveal className="stats__card" delay={180}>
            <h3 className="stats__card-title">
              <Icon name="github" size={16} /> GitHub
            </h3>
            <img
              className="stats__gh-card"
              src={ghCardBase}
              alt={`GitHub statistics for ${github.username}`}
              loading="lazy"
            />
          </Reveal>
        ) : null}
      </div>
    </Section>
  );
}
