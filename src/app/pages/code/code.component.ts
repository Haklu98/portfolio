import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectsService } from '../../service/projects.service';
import { certificates, primarySkills, utilitySkills } from './code.data';

@Component({
  selector: 'app-code',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './code.component.html',
})
export class CodeComponent {
  readonly projects = inject(ProjectsService).getAll();
  readonly primarySkills = primarySkills;
  readonly utilitySkills = utilitySkills;
  readonly certificates = certificates;
}
