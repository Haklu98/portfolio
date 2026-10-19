import { Injectable, computed, inject } from '@angular/core';
import { LanguageService } from '../core/i18n/language.service';
import { Lang } from '../core/i18n/content';
import { projects } from './projects/projects-data';
import { Project, ProjectSource } from './projects/projects-template';

/** Picks one language's texts from a project written in both. */
export function localizeProject(source: ProjectSource, lang: Lang): Project {
  return {
    ...source,
    name: source.name[lang],
    cardTitle: source.cardTitle[lang],
    summary: source.summary[lang],
    roles: source.roles[lang],
    sections: source.sections[lang],
    images: source.images?.map(image => ({ ...image, alt: image.alt[lang] })),
  };
}

/** Projects in the current language. Reading them inside a computed/effect/template updates on a language switch. */
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private readonly language = inject(LanguageService);

  private readonly localized = computed(() => projects.map(project => localizeProject(project, this.language.lang())));

  /** All projects in display order. */
  getAll(): readonly Project[] {
    return this.localized();
  }

  /** The project with the given slug, or undefined if there is none. */
  getBySlug(slug: string | null | undefined): Project | undefined {
    return this.localized().find(project => project.slug === slug);
  }
}
