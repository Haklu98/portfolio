import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatRippleModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [MatButtonModule, MatIconModule, MatMenuModule, MatRippleModule, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

  constructor(private router: Router) {}

  home() {
    this.router.navigate(['home'], { skipLocationChange: true });
  }

  code() {
    this.router.navigate(['code'], { skipLocationChange: true });
  }

  music() {
    this.router.navigate(['music'], { skipLocationChange: true });
  }

  about() {
    this.router.navigate(['about'], { skipLocationChange: true });
  }

  contact() {
    this.router.navigate(['contact'], { skipLocationChange: true });
  }

  isActive(route: string): boolean {
    return this.router.url.includes(route);
  }

}
