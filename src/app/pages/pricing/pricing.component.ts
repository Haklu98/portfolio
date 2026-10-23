import { Component, ChangeDetectionStrategy, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-pricing',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './pricing.component.html'
})
export class PricingComponent {
  private readonly language = inject(LanguageService);
  readonly t = this.language.content;

  /** Whole euros in the visitor's language: "1 400 €" in Finnish, "€1,400" in English. */
  private readonly euros = computed(() => new Intl.NumberFormat(this.language.lang() === 'fi' ? 'fi-FI' : 'en-IE', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }));

  formatPrice(price: number): string {
    return this.euros().format(price);
  }
}
