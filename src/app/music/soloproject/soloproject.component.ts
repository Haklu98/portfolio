import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-soloproject',
  imports: [MatIconModule],
  templateUrl: './soloproject.component.html',
  styleUrl: './soloproject.component.css'
})
export class SoloprojectComponent {


      constructor(private router: Router) {}

      backToMusic() {
        this.router.navigate(['music']);
      }


}
