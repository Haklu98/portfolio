import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CodeComponent } from './pages/code/code.component';
import { MusicComponent } from './pages/music/music.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ElliComponent } from './projects/elli/elli.component';

export const routes: Routes = [
  { path : '', component: HomeComponent, data: {animation: 'HomePage'}},
  { path: 'home', component: HomeComponent, data: {animation: 'HomePage'}},
  { path: 'code', component: CodeComponent, data: {animation: 'CodePage'}},
  { path: 'music', component: MusicComponent, data: {animation: 'MusicPage'}},
  { path: 'about', component: AboutComponent, data: {animation: 'AboutPage'}},
  { path: 'contact', component: ContactComponent, data: {animation: 'ContactPage'}},
  { path: 'elli', component: ElliComponent, data: {animation: 'ProjectPage'}}
];
