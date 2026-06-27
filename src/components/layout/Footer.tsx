import { portfolio } from '../../config/portfolio.config';
import { Icon } from '../shared/Icon';

export function Footer(): JSX.Element {
  const { footer, socials } = portfolio;

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__line">{footer.line}</p>
        <div className="footer__socials">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="footer__social"
            >
              <Icon name={s.icon} size={18} />
            </a>
          ))}
        </div>
        <button
          className="footer__top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          <Icon name="arrow-up" size={16} />
          <span>top</span>
        </button>
      </div>
    </footer>
  );
}
