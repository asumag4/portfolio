import { useCallback, useState } from 'react';
import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { About } from './components/sections/About/About';
import { Contact } from './components/sections/Contact/Contact';
import { Education } from './components/sections/Education/Education';
import { Experience } from './components/sections/Experience/Experience';
import { Hero } from './components/sections/Hero/Hero';
import { Projects } from './components/sections/Projects/Projects';
import { Resume } from './components/sections/Resume/Resume';
import { Skills } from './components/sections/Skills/Skills';
import { Stats } from './components/sections/Stats/Stats';
import { SECTION_REGISTRY } from './config/sections';
import { useKonami } from './hooks/useKonami';

/**
 * Section components keyed by registry id — reordering happens in
 * sections.ts, not here.
 */
const SECTION_COMPONENTS: Record<string, () => JSX.Element | null> = {
  experience: Experience,
  education: Education,
  projects: Projects,
  skills: Skills,
  stats: Stats,
  about: About,
  resume: Resume,
  contact: Contact,
};

export default function App(): JSX.Element {
  const [toast, setToast] = useState(false);

  // Konami code → hyperspace jump in the starfield + a little toast.
  useKonami(
    useCallback(() => {
      window.dispatchEvent(new Event('warp'));
      setToast(true);
      window.setTimeout(() => setToast(false), 2600);
    }, []),
  );

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        {SECTION_REGISTRY.map(({ id }) => {
          const Component = SECTION_COMPONENTS[id];
          return Component ? <Component key={id} /> : null;
        })}
      </main>
      <Footer />
      <div className={`toast${toast ? ' toast--show' : ''}`} role="status" aria-live="polite">
        Warp drive engaged 🚀
      </div>
    </>
  );
}
