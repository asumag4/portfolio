import { useState } from 'react';
import { portfolio } from '../../../config/portfolio.config';
import { Icon } from '../../shared/Icon';
import { Reveal } from '../../shared/Reveal';
import { Section } from '../../shared/Section';
import './contact.css';

type FormStatus = 'idle' | 'sending' | 'sent' | 'error';

/**
 * Contact form. With `contact.formEndpoint` set (e.g. Formspree) the
 * form POSTs JSON; with it null, it opens the visitor's mail client
 * pre-filled (mailto fallback). Includes a honeypot field for bots
 * and a copy-email button.
 */
export function Contact(): JSX.Element {
  const { contact } = portfolio;
  const [status, setStatus] = useState<FormStatus>('idle');
  const [copied, setCopied] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real users never fill this hidden field.
    if ((data.get('company') as string)?.length) return;

    const name = (data.get('name') as string) ?? '';
    const email = (data.get('email') as string) ?? '';
    const message = (data.get('message') as string) ?? '';

    if (!contact.formEndpoint) {
      const subject = encodeURIComponent(`Portfolio message from ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(contact.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      /* clipboard unavailable — the mailto link still works */
    }
  };

  return (
    <Section id="contact" stage="07" eyebrow="contact" title={contact.heading} lead={contact.blurb}>
      <div className="contact">
        <Reveal className="contact__aside">
          <p className="contact__email-label">// or email me directly</p>
          <div className="contact__email-row">
            <a className="contact__email" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            <button
              className="contact__copy"
              onClick={copyEmail}
              aria-label={copied ? 'Email copied' : 'Copy email address'}
            >
              <Icon name={copied ? 'check' : 'copy'} size={16} />
            </button>
          </div>
          <div className="contact__socials">
            {portfolio.socials.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="btn btn--ghost btn--sm">
                <Icon name={s.icon} size={15} />
                {s.label}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal as="div" delay={90}>
          <form className="contact__form" onSubmit={onSubmit}>
            {/* Honeypot — hidden from humans, tempting for bots */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              className="contact__honeypot"
              aria-hidden="true"
            />

            <div className="contact__row">
              <label className="contact__field">
                <span>Name</span>
                <input name="name" type="text" required placeholder="Ada Lovelace" />
              </label>
              <label className="contact__field">
                <span>Email</span>
                <input name="email" type="email" required placeholder="ada@example.com" />
              </label>
            </div>

            <label className="contact__field">
              <span>Message</span>
              <textarea
                name="message"
                required
                rows={6}
                placeholder="Tell me about your data problem…"
              />
            </label>

            <div className="contact__submit-row">
              <button className="btn btn--primary" type="submit" disabled={status === 'sending'}>
                <Icon name="send" size={16} />
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>

              {status === 'sent' ? (
                <p className="contact__status contact__status--ok" role="status">
                  {contact.successMessage}
                </p>
              ) : null}
              {status === 'error' ? (
                <p className="contact__status contact__status--err" role="alert">
                  {contact.errorMessage}
                </p>
              ) : null}
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
