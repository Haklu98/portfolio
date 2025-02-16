import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CodeComponent } from './pages/code/code.component';
import { MusicComponent } from './pages/music/music.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ElliComponent } from './projects/elli/elli.component';
import { BandComponent } from './music/band/band.component';
import { LivemixComponent } from './music/livemix/livemix.component';
import { MusicprodComponent } from './music/musicprod/musicprod.component';
import { SoloprojectComponent } from './music/soloproject/soloproject.component';
import { VideogamemusicComponent } from './music/videogamemusic/videogamemusic.component';

export const routes: Routes = [
  { path : '', component: HomeComponent, data: {animation: 'HomePage'}},
  { path: 'home', component: HomeComponent, data: {animation: 'HomePage'}},
  { path: 'code', component: CodeComponent, data: {animation: 'CodePage'}},
  { path: 'music', component: MusicComponent, data: {animation: 'MusicPage'}},
  { path: 'about', component: AboutComponent, data: {animation: 'AboutPage'}},
  { path: 'contact', component: ContactComponent, data: {animation: 'ContactPage'}},
  { path: 'elli', component: ElliComponent, data: {animation: 'ProjectPage'}},
  { path: 'band', component: BandComponent, data: {animation: 'ProjectPage'}},
  { path: 'livemix', component: LivemixComponent, data: {animation: 'ProjectPage'}},
  { path: 'musicprod', component: MusicprodComponent, data: {animation: 'ProjectPage'}},
  { path: 'soloproject', component: SoloprojectComponent, data: {animation: 'ProjectPage'}},
  { path: 'videogamemusic', component: VideogamemusicComponent, data: {animation: 'ProjectPage'}},
];
