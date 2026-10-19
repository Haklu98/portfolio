/** A technology shown with its devicon, e.g. `{ name: 'Angular', icon: 'devicon-angularjs-plain' }`. */
export interface Technology {
  name: string;
  /** Devicon class name, see https://devicon.dev */
  icon: string;
}

export interface ProjectImage {
  src: string;
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
