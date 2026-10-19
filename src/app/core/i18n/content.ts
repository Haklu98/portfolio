import { en } from './content.en';
import { fi } from './content.fi';

export type Lang = 'en' | 'fi';

/** The shape of all site copy. The English file defines it; the Finnish file must match it exactly. */
export type SiteContent = typeof en;

/** A value given in both languages, e.g. `{ en: 'Description', fi: 'Kuvaus' }`. Used for project data. */
export type Localized<T> = Record<Lang, T>;

export const CONTENT: Record<Lang, SiteContent> = { en, fi };
