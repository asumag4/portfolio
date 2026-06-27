/**
 * portfolio.types.ts
 * ------------------------------------------------------------------
 * The type contract for the master config (src/config/portfolio.config.ts).
 * Every section component renders purely from these shapes, so adding
 * a new experience / project / skill is a data change, not a code change.
 */

export type IconName =
  | 'github'
  | 'linkedin'
  | 'mail'
  | 'external'
  | 'close'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-down'
  | 'arrow-up'
  | 'sun'
  | 'moon'
  | 'sparkles'
  | 'download'
  | 'send'
  | 'copy'
  | 'check'
  | 'code'
  | 'database'
  | 'doc'
  | 'menu';

export interface CTA {
  label: string;
  href: string;
  variant: 'primary' | 'ghost';
}

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon: IconName;
}

export interface HeroConfig {
  /** Small mono line above the name, e.g. "// hello, world" */
  eyebrow: string;
  name: string;
  /** Roles cycled by the typewriter under the name */
  typedRoles: string[];
  tagline: string;
  ctas: CTA[];
  scrollHint: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  /** Free-form, e.g. "Jan 2024" */
  start: string;
  /** null = present */
  end: string | null;
  location?: string;
  summary?: string;
  bullets: string[];
  tech: string[];
}

export interface ArchitectureDiagram {
  /** Path/URL to a diagram image (put files in /public). Takes priority over ascii. */
  image?: string;
  /** ASCII / box-drawing diagram rendered in a <pre> block. */
  ascii?: string;
  caption?: string;
}

export interface ProjectLink {
  label: string;
  url: string;
  icon?: IconName;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  /** Shown on the card when no image is provided */
  emoji?: string;
  /** Optional card image (put files in /public and reference as "/my-image.png") */
  image?: string;
  /** Optional per-project accent colour, falls back to theme primary */
  accent?: string;
  /** One string per paragraph in the modal */
  description: string[];
  highlights?: string[];
  tech: string[];
  links?: ProjectLink[];
  architecture?: ArchitectureDiagram;
}

export type SkillAccent = 'blue' | 'teal' | 'purple' | 'amber' | 'coral' | 'green' | 'gray' | 'pink';

export interface SkillGroup {
  category: string;
  /** Tabler icon class string, e.g. 'ti ti-database' */
  iconClass: string;
  accent: SkillAccent;
  items: string[];
}

export interface StatsConfig {
  leetcode: {
    username: string;
    profileUrl: string;
    /** Renders a leetcard.jacoblin.cool stats image (third-party service) */
    showCard: boolean;
  };
  datalemur: {
    profileUrl?: string;
    /**
     * Raw URL to your tracking CSV, e.g.
     * https://raw.githubusercontent.com/<user>/<repo>/main/datalemur.csv
     * A header row is optional. If a "difficulty" column exists, a
     * per-difficulty breakdown is rendered automatically.
     */
    csvUrl: string;
    /** Shown if the CSV can't be fetched (offline, private repo, CORS…) */
    fallbackTotal: number;
    note?: string;
  };
  github?: {
    username: string;
    /** Renders github-readme-stats cards themed from the active palette */
    showCards: boolean;
  };
}

export interface AboutConfig {
  heading: string;
  /** Initials shown in the portrait block when no image is given */
  portraitInitials: string;
  portraitImage?: string;
  paragraphs: string[];
  highlights: { label: string; value: string }[];
  /** "Currently" ticker — learning / building / reading */
  currently: string[];
  funFacts: string[];
}

export interface ResumeConfig {
  /** Place the file in /public, e.g. /resume.pdf */
  pdfPath: string;
  downloadName?: string;
  lastUpdated?: string;
}

export interface ContactConfig {
  heading: string;
  blurb: string;
  email: string;
  /**
   * POST endpoint for the form (e.g. a Formspree URL:
   * https://formspree.io/f/xxxxxxx). When null, the form falls back
   * to opening the visitor's mail client via mailto:.
   */
  formEndpoint: string | null;
  successMessage: string;
  errorMessage: string;
}

export interface MetaConfig {
  title: string;
  description: string;
}

export interface FooterConfig {
  line: string;
}

export interface PortfolioConfig {
  meta: MetaConfig;
  hero: HeroConfig;
  socials: SocialLink[];
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  skills: SkillGroup[];
  stats: StatsConfig;
  about: AboutConfig;
  resume: ResumeConfig;
  contact: ContactConfig;
  footer: FooterConfig;
}
