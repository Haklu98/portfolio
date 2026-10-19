import { Component, ChangeDetectionStrategy, ElementRef, computed, inject, input, signal, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectsService } from '../../service/projects.service';
import { ProjectImage } from '../../service/projects/projects-template';

/** Project detail page for /projects/:slug. The route guard makes sure the slug exists. */
@Component({
  selector: 'app-project',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './project.component.html',
})
export class ProjectComponent {
  private readonly projects = inject(ProjectsService);

  /** Bound from the :slug route parameter (withComponentInputBinding). */
  readonly slug = input.required<string>();

  readonly project = computed(() => this.projects.getBySlug(this.slug()));

  /** Icons drawn in near-black that need lightening on the dark theme. */
  readonly darkIcons = new Set(['github-plain', 'express-original']);

  /** The screenshot shown in the dialog. */
  readonly openedImage = signal<ProjectImage | null>(null);

  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('imageDialog');

  openImage(image: ProjectImage): void {
    this.openedImage.set(image);
    this.dialog().nativeElement.showModal();
  }

  closeImage(): void {
    this.dialog().nativeElement.close();
  }

  /** Clicks on the backdrop land on the <dialog> element itself; clicks on its content do not. */
  onDialogClick(event: MouseEvent): void {
    if (event.target === this.dialog().nativeElement) {
      this.closeImage();
    }
  }
}
