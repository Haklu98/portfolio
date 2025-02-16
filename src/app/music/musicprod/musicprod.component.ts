import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-musicprod',
  imports: [ MatIconModule ],
  templateUrl: './musicprod.component.html',
  styleUrl: './musicprod.component.css'
})
export class MusicprodComponent {

    constructor(private router: Router) {}

    backToMusic() {
      this.router.navigate(['music'], { skipLocationChange: true });
    }
}
