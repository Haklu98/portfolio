import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './core/navigation/navigation.component';
import { FooterComponent } from './core/footer/footer.component';

/** App shell: navigation, the routed page and the footer. Page changes cross-fade via the View Transitions API (see app.config.ts). */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationComponent, FooterComponent],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class AppComponent {}
