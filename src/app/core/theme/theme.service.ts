import { DOCUMENT, Injectable, effect, inject, signal } from '@angular/core';

export type Theme = 'dark' | 'light';

/** localStorage key; index.html reads the same key before Angular starts to avoid a flash of the wrong theme. */
export const THEME_STORAGE_KEY = 'theme';

const THEME_COLORS: Record<Theme, string> = {
  dark: '#0E0907',
  light: '#F7EFE4',
};

/**
 * Dark (the hakalamusic.com palette) is the default; light is opt-in.
 * The choice is stored in localStorage and applied as data-theme on <html>.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);

  readonly theme = signal<Theme>(this.initialTheme());

  constructor() {
    effect(() => this.apply(this.theme()));
  }

  toggle(): void {
    this.theme.update(theme => (theme === 'dark' ? 'light' : 'dark'));
  }

  private initialTheme(): Theme {
    return this.document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  }

  private apply(theme: Theme): void {
    const root = this.document.documentElement;
    if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
    } else {
      root.removeAttribute('data-theme');
    }
    this.document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLORS[theme]);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Storage can be unavailable (private mode, blocked cookies); the theme still applies for this visit.
    }
  }
}
