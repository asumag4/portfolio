import { useEffect, useState } from 'react';
import { portfolio } from '../../../config/portfolio.config';
import { Icon } from '../../shared/Icon';
import { Reveal } from '../../shared/Reveal';
import { Section } from '../../shared/Section';
import './resume.css';

/**
 * Résumé / CV: HEAD-checks the PDF in /public, offers an inline
 * preview toggle + a download button, and shows a setup hint when
 * the file hasn't been added yet.
 */
export function Resume(): JSX.Element {
  const { resume } = portfolio;
  const [exists, setExists] = useState<boolean | null>(null);
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(resume.pdfPath, { method: 'HEAD' })
      .then((res) => {
        const type = res.headers.get('content-type') ?? '';
        if (!cancelled) setExists(res.ok && !type.includes('text/html'));
      })
      .catch(() => {
        if (!cancelled) setExists(false);
      });
    return () => {
      cancelled = true;
    };
  }, [resume.pdfPath]);

  return (
    <Section
      id="resume"
      stage="06"
      eyebrow="résumé"
      title="The paper trail"
      lead="A one-page summary for the inbox crowd."
      alt
    >
      <Reveal className="resume">
        <div className="resume__card">
          <Icon name="doc" size={34} className="resume__icon" />
          <div className="resume__meta">
            <h3 className="resume__title">Résumé / CV</h3>
            {resume.lastUpdated ? (
              <p className="resume__updated">last updated {resume.lastUpdated}</p>
            ) : null}
          </div>

          <div className="resume__actions">
            <a
              className="btn btn--primary btn--sm"
              href={resume.pdfPath}
              download={resume.downloadName ?? 'resume.pdf'}
            >
              <Icon name="download" size={15} />
              Download PDF
            </a>
            <button className="btn btn--ghost btn--sm" onClick={() => setPreview((v) => !v)}>
              {preview ? 'Hide preview' : 'Preview inline'}
            </button>
          </div>
        </div>

        {exists === false ? (
          <p className="resume__hint">
            Heads up: no file found at <code>{resume.pdfPath}</code> yet. Drop your PDF into the{' '}
            <code>/public</code> folder with that name and this section lights up automatically.
          </p>
        ) : null}

        {preview && exists !== false ? (
          <iframe className="resume__preview" src={resume.pdfPath} title="Résumé preview" />
        ) : null}
      </Reveal>
    </Section>
  );
}
