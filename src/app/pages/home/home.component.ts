import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {


  ngOnInit(): void {
      this.getGreeting();
  }

  greeting: string = '';

  getGreeting() {
    const date = new Date();
    const hour = date.getHours();

    if (hour < 5) {
      this.greeting = 'Hello there, insomniac!';
    } else if (hour < 12) {
      this.greeting = 'Good Morning, my friend!';
    } else if (hour < 18) {
      this.greeting = 'Good Afternoon, you!';
    } else if (hour < 24) {
      this.greeting = 'Good Evening, fellow traveller!';
    }
  }

}
