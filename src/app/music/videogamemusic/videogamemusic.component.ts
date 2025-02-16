import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-videogamemusic',
  imports: [MatIconModule],
  templateUrl: './videogamemusic.component.html',
  styleUrl: './videogamemusic.component.css'
})
export class VideogamemusicComponent {

  constructor(private router: Router) {}

    backToMusic() {
      this.router.navigate(['music'], { skipLocationChange: true });
    }

}
