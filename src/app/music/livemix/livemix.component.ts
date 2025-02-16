import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-livemix',
  imports: [MatIconModule],
  templateUrl: './livemix.component.html',
  styleUrl: './livemix.component.css'
})
export class LivemixComponent {

  constructor(private router: Router) {}

  backToMusic() {
    this.router.navigate(['music'], { skipLocationChange: true });
  }
}
