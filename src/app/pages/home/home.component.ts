import { Component, ChangeDetectionStrategy, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../core/i18n/language.service';
import { ageOn } from './age';

export type DayPeriod = 'night' | 'morning' | 'afternoon' | 'evening';

/** Which greeting to show at a given hour (0–23). */
export function dayPeriod(hour: number): DayPeriod {
  if (hour < 5) return 'night';
  if (hour < 12) return 'morning';
  if (hour < 18) return 'afternoon';
  return 'evening';
}

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './home.component.html'
})
export class HomeComponent {
  readonly t = inject(LanguageService).content;

  readonly age = ageOn(new Date());

  /** Set when the page opens; the text follows the current language. */
  readonly period = dayPeriod(new Date().getHours());
  readonly greeting = computed(() => this.t().home.greetings[this.period]);
}
