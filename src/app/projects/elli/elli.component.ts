import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-elli',
  imports: [MatIconModule],
  templateUrl: './elli.component.html',
  styleUrl: './elli.component.css'
})
export class ElliComponent {


  constructor(private router: Router) {}

  close() {
    this.router.navigate(['code'], { skipLocationChange: true });
  }

}
