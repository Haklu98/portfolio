import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatRippleModule } from '@angular/material/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [MatButtonModule, MatIconModule, MatMenuModule, MatRippleModule, RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './navigation.component.html'
})
export class NavigationComponent {

  /** Classes applied to the desktop nav link of the current page. */
  readonly activeClasses = 'scale-[1.05] !bg-slate-200 !text-black !font-semibold';

}
