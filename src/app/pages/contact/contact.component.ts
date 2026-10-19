import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './contact.component.html'
})
export class ContactComponent {

  readonly email = 'aleksi.hakala.98@gmail.com';

}
