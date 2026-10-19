import { Component, ChangeDetectionStrategy, HostListener, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';
import { ThemeService } from '../theme/theme.service';

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
  `,
})
export class NavigationComponent {
  readonly theme = inject(ThemeService);

  readonly links: NavLink[] = [
    { path: '/', label: 'Home', exact: true },
    { path: '/code', label: 'Work', exact: false },
    { path: '/contact', label: 'Contact', exact: false },
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
