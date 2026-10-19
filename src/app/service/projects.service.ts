import { Injectable } from '@angular/core';
import { projects } from './projects/projects-data';
import { Project } from './projects/projects-template';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  /** All projects in display order. */
  getAll(): readonly Project[] {
    return projects;
  }

  /** The project with the given slug, or undefined if there is none. */
  getBySlug(slug: string | null | undefined): Project | undefined {
    return projects.find(project => project.slug === slug);
  }
}
