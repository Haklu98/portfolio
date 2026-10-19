import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CodeComponent } from './pages/code/code.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectComponent } from './pages/project/project.component';
import { projectExistsGuard } from './pages/project/project.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', data: { animation: 'HomePage' } },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'code', component: CodeComponent, data: { animation: 'CodePage' } },
  { path: 'about', component: AboutComponent, data: { animation: 'AboutPage' } },
  { path: 'contact', component: ContactComponent, data: { animation: 'ContactPage' } },
  { path: 'projects/:slug', component: ProjectComponent, canActivate: [projectExistsGuard], data: { animation: 'ProjectPage' } },
  // Old project URLs
  { path: 'elli', redirectTo: 'projects/elli' },
  { path: 'turvajatkat', redirectTo: 'projects/turvajatkat' },
  { path: 'musicportfolio', redirectTo: 'projects/musicportfolio' },
  { path: '**', redirectTo: '' },
];
