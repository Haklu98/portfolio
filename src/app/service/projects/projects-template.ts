import type { Localized } from '../../core/i18n/content';

/** A technology shown with its icon, e.g. `{ name: 'Angular', icon: 'angularjs-plain' }`. */
export interface Technology {
  name: string;
  /**
   * File name (without .svg) of an icon in public/icons/.
   * Icons come from Devicon (https://devicon.dev, MIT): copy new ones from
   * the devicon package's icons/<name>/ folder.
   */
  icon: string;
}

export interface ProjectImage {
  /** Full-size image shown in the dialog */
  src: string;
  /** Small preview shown on the project page (same aspect ratio as src) */
  thumb: string;
  /** Intrinsic size of src, used to reserve space before the image loads */
  width: number;
  height: number;
  alt: string;
}

/** A titled block of text on the project page. Paragraphs may contain inline HTML (e.g. `<span class="font-semibold">`). */
export interface ProjectSection {
  heading: string;
  paragraphs: string[];
}

export type ProjectStatus = 'Completed' | 'In Development';

/** A project as shown on the page, in one language (see ProjectsService). */
export interface Project {
  /** URL segment: /projects/:slug */
  slug: string;
  /** Title on the project page */
  name: string;
  /** Short title used in project lists */
  cardTitle: string;
  /** One-line description shown in project lists and under the page title */
  summary: string;
  thumbnail: string;
  /** Background behind the thumbnail when the icon is transparent (e.g. a white icon needs a dark tile) */
  thumbnailBackground?: string;
  status: ProjectStatus;
  /** Approximate hours spent */
  hours: number;
  roles: string[];
  technologies: Technology[];
  sections: ProjectSection[];
  /** Screenshots that open in a dialog */
  images?: ProjectImage[];
  liveUrl?: string;
  /** Link text after "Visit", e.g. "turvajatkat.fi" */
  liveLabel?: string;
  github?: string;
}

/**
 * A project as written in projects-data.ts: every text is given in both languages,
 * e.g. `summary: { en: '…', fi: '…' }`. Everything else is shared.
 */
export interface ProjectSource extends Omit<Project, 'name' | 'cardTitle' | 'summary' | 'roles' | 'sections' | 'images'> {
  name: Localized<string>;
  cardTitle: Localized<string>;
  summary: Localized<string>;
  roles: Localized<string[]>;
  sections: Localized<ProjectSection[]>;
  images?: (Omit<ProjectImage, 'alt'> & { alt: Localized<string> })[];
}
