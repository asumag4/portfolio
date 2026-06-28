import type { ProjectItem } from '../../../types/portfolio.types';
import { Icon } from '../../shared/Icon';
import { Modal } from '../../shared/Modal';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

/**
 * Detail modal for a project: paragraphs, highlight bullets, full tech
 * stack, an architecture diagram (image or ASCII <pre>), and links.
 */
export function ProjectModal({ project, onClose }: ProjectModalProps): JSX.Element {
  return (
    <Modal open={project !== null} onClose={onClose} labelledBy="project-modal-title">
      {project ? (
        <div
          className="project-modal"
          style={project.accent ? ({ '--accent': project.accent } as React.CSSProperties) : undefined}
        >
          <header className="project-modal__header">
            <span className="project-modal__emoji" aria-hidden="true">
              {project.emoji ?? '🛰️'}
            </span>
            <div>
              <h3 id="project-modal-title" className="project-modal__title">
                {project.title}
              </h3>
              <p className="project-modal__tagline">{project.tagline}</p>
              {project.link ? (
                <a
                  className="btn btn--ghost btn--sm project-modal__repo-link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="github" size={15} />
                  View Repository
                </a>
              ) : null}
            </div>
          </header>

          <div className="project-modal__section">
            {project.description.map((para) => (
              <p key={para.slice(0, 32)} className="project-modal__para">
                {para}
              </p>
            ))}
          </div>

          {project.highlights && project.highlights.length > 0 ? (
            <div className="project-modal__section">
              <h4 className="project-modal__subhead">Highlights</h4>
              <ul className="project-modal__highlights">
                {project.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="project-modal__section">
            <h4 className="project-modal__subhead">Tech stack</h4>
            <div className="chip-row">
              {project.tech.map((t) => (
                <span className="chip" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {project.architecture ? (
            <div className="project-modal__section">
              <h4 className="project-modal__subhead">Architecture</h4>
              {project.architecture.image ? (
                <img
                  className="project-modal__diagram-img"
                  src={project.architecture.image}
                  alt={project.architecture.caption ?? `${project.title} architecture diagram`}
                />
              ) : project.architecture.ascii ? (
                <pre className="project-modal__diagram-ascii" aria-label="Architecture diagram">
                  {project.architecture.ascii}
                </pre>
              ) : null}
              {project.architecture.caption ? (
                <p className="project-modal__caption">{project.architecture.caption}</p>
              ) : null}
            </div>
          ) : null}

          {project.links && project.links.length > 0 ? (
            <div className="project-modal__links">
              {project.links.map((link) => (
                <a
                  key={link.url}
                  className="btn btn--ghost btn--sm"
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name={link.icon ?? 'external'} size={15} />
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      ) : (
        <div />
      )}
    </Modal>
  );
}
