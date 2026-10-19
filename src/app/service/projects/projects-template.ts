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

export interface Project {
  /** URL segment: /projects/:slug */
  slug: string;
  /** Title on the project page */
  name: string;
  /** Short title under the thumbnail on the Code page */
  cardTitle: string;
  thumbnail: string;
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
