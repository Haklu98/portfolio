import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../theme/theme.service';

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
  `,
})
export class NavigationComponent {
  readonly theme = inject(ThemeService);
}
