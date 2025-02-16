import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-band',
  imports: [CommonModule, MatIconModule],
  templateUrl: './band.component.html',
  styleUrl: './band.component.css'
})
export class BandComponent {

  constructor(private router: Router) {}

  backToMusic() {
    this.router.navigate(['music']);
  }

}
