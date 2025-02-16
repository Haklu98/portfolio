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
 import { BandComponent } from '../../music/band/band.component';
 import { LivemixComponent } from '../../music/livemix/livemix.component';
 import { MusicprodComponent } from '../../music/musicprod/musicprod.component';
 import { SoloprojectComponent } from '../../music/soloproject/soloproject.component';
 import { VideogamemusicComponent } from '../../music/videogamemusic/videogamemusic.component';

@Component({
  selector: 'app-music',
  imports: [MatIconModule],
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})
export class MusicComponent {
  readonly dialog = inject(MatDialog);

  constructor(private router: Router) {}

  band = 'band';
  livemix = 'livemix';
  musicprod = 'musicprod';
  soloproject = 'soloproject';
  videogamemusic = 'videogamemusic';

  open(path: string) { this.router.navigate([path]); }


}


