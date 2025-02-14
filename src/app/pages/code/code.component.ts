import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-code',
  imports: [],
  templateUrl: './code.component.html',
  styleUrl: './code.component.css'
})
export class CodeComponent {

  constructor(private router: Router) {}

  openElli() {
    this.router.navigate(['elli'], { skipLocationChange: true });
  }

}
