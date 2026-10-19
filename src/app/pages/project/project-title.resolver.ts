import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ProjectsService } from '../../service/projects.service';

/** Browser tab title for /projects/:slug, e.g. "Elli-Ticorporate | Aleksi Hakala". */
export const projectTitleResolver: ResolveFn<string> = (route) => {
  const project = inject(ProjectsService).getBySlug(route.paramMap.get('slug'));
  return `${project?.name ?? 'Project'} | Aleksi Hakala`;
};
