import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectImage } from '../../service/projects/projects-template';

/** Shows a single screenshot in a Material dialog. Open with `dialog.open(ImageDialogComponent, { data: image })`. */
@Component({
  selector: 'app-image-dialog',
  template: `<img class="block max-w-full h-auto" [src]="image.src" [alt]="image.alt">`,
})
export class ImageDialogComponent {
  readonly image = inject<ProjectImage>(MAT_DIALOG_DATA);
}
