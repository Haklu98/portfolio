import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectsService } from '../../service/projects.service';
import { certificates, skillGroups } from './code.data';

/** Hours that fill a whole bar in the project timeline (the axis shows 0–400 h in five steps). */
export const TIMELINE_MAX_HOURS = 500;

@Component({
  selector: 'app-code',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './code.component.html',
})
export class CodeComponent {
  readonly axis = [0, 100, 200, 300, 400];

  /** Projects with their bar width; long bars carry their label inside, short ones next to the bar. */
  readonly tracks = inject(ProjectsService).getAll().map(project => {
    const width = Math.min(100, (project.hours / TIMELINE_MAX_HOURS) * 100);
    return {
      ...project,
      width,
      labelInside: width >= 40,
      label: project.status === 'In Development' ? `~${project.hours} h so far` : `~${project.hours} h`,
    };
  });

  readonly skillGroups = skillGroups;
  readonly certificates = certificates;
}
