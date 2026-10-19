import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './contact.component.html'
})
export class ContactComponent {

  readonly email = 'aleksi.hakala.98@gmail.com';

  readonly links = [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/aleksi-hakala-a061121a7/', icon: '/assets/images/linkedin.webp' },
    { label: 'GitHub', url: 'https://github.com/Haklu98', icon: '/assets/images/github.webp' },
    { label: 'Instagram', url: 'https://www.instagram.com/lalexeii', icon: '/assets/images/insta.webp' },
    { label: 'hakalamusic.com', url: 'https://www.hakalamusic.com/', icon: null },
  ];

}
