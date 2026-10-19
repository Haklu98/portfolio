import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { projectExistsGuard } from './pages/project/project.guard';

// Home is part of the initial bundle; the other pages are lazy-loaded on first visit.
export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', data: { animation: 'HomePage' } },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'code', loadComponent: () => import('./pages/code/code.component').then(m => m.CodeComponent), data: { animation: 'CodePage' } },
  { path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent), data: { animation: 'AboutPage' } },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent), data: { animation: 'ContactPage' } },
  {
    path: 'projects/:slug',
    loadComponent: () => import('./pages/project/project.component').then(m => m.ProjectComponent),
    canActivate: [projectExistsGuard],
    data: { animation: 'ProjectPage' },
  },
  // Old project URLs
  { path: 'elli', redirectTo: 'projects/elli' },
  { path: 'turvajatkat', redirectTo: 'projects/turvajatkat' },
  { path: 'musicportfolio', redirectTo: 'projects/musicportfolio' },
  { path: '**', redirectTo: '' },
];
