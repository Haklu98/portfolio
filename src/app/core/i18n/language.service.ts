import { DOCUMENT, Injectable, computed, effect, inject, signal } from '@angular/core';
import { CONTENT, Lang, SiteContent } from './content';

/** localStorage key; index.html reads the same key before Angular starts so <html lang> is right from the first paint. */
export const LANG_STORAGE_KEY = 'lang';

/**
 * The site's language (English or Finnish).
 * The first visit follows the browser's language (index.html decides); after that the visitor's choice is remembered.
 * All copy comes from `content()`, so switching re-renders the page instantly without a reload.
 */
@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);

  readonly lang = signal<Lang>(this.initialLang());

  /** Every text on the site in the current language. */
  readonly content = computed<SiteContent>(() => CONTENT[this.lang()]);

  constructor() {
    effect(() => this.apply(this.lang()));
  }

  set(lang: Lang): void {
    this.lang.set(lang);
  }

  private initialLang(): Lang {
    return this.document.documentElement.lang === 'fi' ? 'fi' : 'en';
  }

  private apply(lang: Lang): void {
    this.document.documentElement.lang = lang;
    this.document.querySelector('meta[name="description"]')?.setAttribute('content', CONTENT[lang].meta.description);
    try {
      localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch {
      // Storage can be unavailable (private mode, blocked cookies); the language still applies for this visit.
    }
  }
}
