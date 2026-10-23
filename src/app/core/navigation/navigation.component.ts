import { Component, ChangeDetectionStrategy, HostListener, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';
import { ThemeService } from '../theme/theme.service';
import { LanguageService } from '../i18n/language.service';
import { Lang } from '../i18n/content';

interface NavLink {
  path: string;
  label: string;
  /** Only mark as active on an exact URL match (needed for the root path). */
  exact: boolean;
}

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './navigation.component.html',
  styles: `
    .nav-link {
      display: inline-block;
      padding: 0.5rem 0;
      color: var(--ink);
      text-decoration: none;
      border-bottom: 2px solid transparent;
    }
    .nav-link:hover { color: var(--brand); }
    .nav-link[aria-current='page'] { color: var(--brand); border-bottom-color: var(--brand); }

    .mobile-link {
      display: block;
      padding: 0.875rem 0;
      font-size: 1.25rem;
      font-weight: 500;
      color: var(--ink);
      text-decoration: none;
    }
    .mobile-link:hover { color: var(--brand); }
    .mobile-link[aria-current='page'] { color: var(--brand); }

    .lang-button {
      min-width: 2.5rem;
      min-height: 2.75rem;
      padding: 0 0.375rem;
      border-radius: 0.5rem;
      font-size: 0.9375rem;
      font-weight: 500;
      color: var(--dim);
    }
    .lang-button:hover { color: var(--brand); background: var(--surface); }
    .lang-button[aria-pressed='true'] { color: var(--ink); text-decoration: underline; text-decoration-color: var(--brand); text-underline-offset: 6px; text-decoration-thickness: 2px; }
  `,
})
export class NavigationComponent {
  readonly theme = inject(ThemeService);

  readonly language = inject(LanguageService);
  readonly t = this.language.content;

  readonly links = computed<NavLink[]>(() => {
    const nav = this.t().nav;
    return [
      { path: '/', label: nav.home, exact: true },
      { path: '/code', label: nav.work, exact: false },
      { path: '/pricing', label: nav.pricing, exact: false },
      { path: '/contact', label: nav.contact, exact: false },
    ];
  });

  /** Language options; each is labelled in its own language so it is recognisable whichever is active. */
  readonly languages: { lang: Lang; code: string; name: string }[] = [
    { lang: 'en', code: 'EN', name: 'English' },
    { lang: 'fi', code: 'FI', name: 'Suomi' },
  ];

  /** Whether the mobile menu is open (the menu button only shows below the md breakpoint). */
  readonly menuOpen = signal(false);

  constructor() {
    // Close the menu whenever a navigation finishes, e.g. via the browser's back button.
    inject(Router).events
      .pipe(filter(event => event instanceof NavigationEnd), takeUntilDestroyed())
      .subscribe(() => this.closeMenu());
  }

  toggleMenu(): void {
    this.menuOpen.update(open => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }
}
