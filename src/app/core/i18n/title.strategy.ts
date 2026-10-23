import { Injectable, effect, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { LanguageService } from './language.service';
import { ProjectsService } from '../../service/projects.service';

/** Keys used as `title` in app.routes.ts; the text comes from the current language's `titles`. */
export type PageTitleKey = 'home' | 'work' | 'contact' | 'about' | 'pricing' | 'project';

/**
 * Sets the browser tab title from the route's title key in the current language,
 * and updates it again when the visitor switches language.
 */
@Injectable({ providedIn: 'root' })
export class LocalizedTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);
  private readonly language = inject(LanguageService);
  private readonly projects = inject(ProjectsService);

  private readonly current = signal<{ key: PageTitleKey; slug: string | null } | null>(null);

  constructor() {
    super();
    effect(() => {
      const current = this.current();
      if (!current) {
        return;
      }
      const titles = this.language.content().titles;
      if (current.key === 'project') {
        const project = this.projects.getBySlug(current.slug);
        this.title.setTitle(project ? titles.project(project.name) : titles.work);
      } else {
        this.title.setTitle(titles[current.key]);
      }
    });
  }

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const key = this.buildTitle(snapshot) as PageTitleKey | undefined;
    if (key) {
      this.current.set({ key, slug: this.deepest(snapshot.root).paramMap.get('slug') });
    }
  }

  private deepest(route: ActivatedRouteSnapshot): ActivatedRouteSnapshot {
    return route.firstChild ? this.deepest(route.firstChild) : route;
  }
}
