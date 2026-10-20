import { Component, inject, ChangeDetectionStrategy, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../core/i18n/language.service';
import { ProjectsService } from '../../service/projects.service';
import { alsoKnow, buildWith, certificates } from './code.data';

/** Hours that fill a whole bar in the project timeline (the axis shows 0–800 h in five steps). */
export const TIMELINE_MAX_HOURS = 1000;

export interface SkillGroup {
  title: string;
  items: string[];
  /** Show the items one per line instead of as a comma-separated sentence */
  list?: boolean;
}

@Component({
  selector: 'app-code',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './code.component.html',
})
export class CodeComponent {
  private readonly projects = inject(ProjectsService);
  readonly t = inject(LanguageService).content;

  readonly axis = [0, 200, 400, 600, 800];

  /** Projects with their bar width; long bars carry their label inside, short ones next to the bar. */
  readonly tracks = computed(() => {
    const work = this.t().work;
    return this.projects.getAll().map(project => {
      const width = Math.min(100, (project.hours / TIMELINE_MAX_HOURS) * 100);
      return {
        ...project,
        width,
        labelInside: width >= 40,
        label: project.status === 'In Development' ? work.hoursSoFar(project.hours) : work.hours(project.hours),
      };
    });
  });

  readonly skillGroups = computed<SkillGroup[]>(() => {
    const work = this.t().work;
    return [
      { title: work.buildWith, items: buildWith },
      { title: work.alsoKnow, items: alsoKnow },
      { title: work.backgroundTitle, items: work.background, list: true },
    ];
  });

  readonly certificates = certificates;
}
