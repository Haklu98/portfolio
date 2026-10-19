import { Component, computed, inject, input, ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';
import { ProjectsService } from '../../service/projects.service';
import { ProjectImage } from '../../service/projects/projects-template';
import { ImageDialogComponent } from '../../shared/image-dialog/image-dialog.component';

/** Project detail page for /projects/:slug. The route guard makes sure the slug exists. */
@Component({
  selector: 'app-project',
  imports: [MatIconModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './project.component.html',
})
export class ProjectComponent {
  private readonly projects = inject(ProjectsService);
  private readonly dialog = inject(MatDialog);

  /** Bound from the :slug route parameter (withComponentInputBinding). */
  readonly slug = input.required<string>();

  readonly project = computed(() => this.projects.getBySlug(this.slug()));

  openImage(image: ProjectImage): void {
    this.dialog.open(ImageDialogComponent, {
      data: image,
      maxWidth: '90vw',
      height: 'auto',
      maxHeight: '90vh',
    });
  }
}
