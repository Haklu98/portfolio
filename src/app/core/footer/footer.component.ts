import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { LanguageService } from '../i18n/language.service';

@Component({
  selector: 'app-footer',
  imports: [],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  readonly year = new Date().getFullYear();
  readonly t = inject(LanguageService).content;
}
