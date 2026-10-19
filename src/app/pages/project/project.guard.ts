import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ProjectsService } from '../../service/projects.service';

/** Lets /projects/:slug through only for known projects; unknown slugs go back to the Code page. */
export const projectExistsGuard: CanActivateFn = (route) =>
  inject(ProjectsService).getBySlug(route.paramMap.get('slug'))
    ? true
    : inject(Router).createUrlTree(['/code']);
