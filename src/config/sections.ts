/**
 * sections.ts — the section registry.
 * Reorder / remove entries here and both the page order and the
 * navbar update together. `alt` flags the alternating background.
 */
export interface SectionMeta {
  id: string;
  label: string;
  nav: boolean;
  alt?: boolean;
}

export const SECTION_REGISTRY: SectionMeta[] = [
  { id: 'experience', label: 'Experience', nav: true },
  { id: 'projects', label: 'Projects', nav: true, alt: true },
  { id: 'skills', label: 'Skills', nav: true },
  { id: 'stats', label: 'Code Stats', nav: true, alt: true },
  { id: 'about', label: 'About', nav: true },
  { id: 'resume', label: 'Résumé', nav: true, alt: true },
  { id: 'contact', label: 'Contact', nav: true },
];
