import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
 } from '@angular/material/dialog';
import { ArchiveComponent } from './dialogs/archive/archive.component';
import { LoginComponent } from './dialogs/login/login.component';
import { CardsComponent } from './dialogs/cards/cards.component';
import { ConfirmationComponent } from './dialogs/confirmation/confirmation.component';
import { YearlycalComponent } from './dialogs/yearlycal/yearlycal.component';
import { FilteringComponent } from './dialogs/filtering/filtering.component';

@Component({
  selector: 'app-elli',
  imports: [MatIconModule, LoginComponent, CardsComponent, ArchiveComponent, ConfirmationComponent, YearlycalComponent, FilteringComponent],
  templateUrl: './elli.component.html',
  styleUrl: './elli.component.css'
})
export class ElliComponent {
  readonly dialog = inject(MatDialog);

  login = LoginComponent;
  cards = CardsComponent;
  yearlycal = YearlycalComponent;
  archive = ArchiveComponent;
  confirmation = ConfirmationComponent;
  filtering = FilteringComponent;

  constructor(private router: Router) {}

  openDialog(component: any): void {
    const dialogRef = this.dialog.open(component, {
      maxWidth: '90vw',
      height: 'auto', // Mahdollistaa sisällön mukautumisen
      maxHeight: '90vh'
    });
  }

  close() {
    this.router.navigate(['code'], { skipLocationChange: true });
  }

}
