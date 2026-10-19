import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { projectExistsGuard } from './pages/project/project.guard';
import { projectTitleResolver } from './pages/project/project-title.resolver';

// Home is part of the initial bundle; the other pages are lazy-loaded on first visit.
export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', title: 'Aleksi Hakala | Developer Portfolio' },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'code', loadComponent: () => import('./pages/code/code.component').then(m => m.CodeComponent), title: 'Work | Aleksi Hakala' },
  { path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent), title: 'About | Aleksi Hakala' },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent), title: 'Contact | Aleksi Hakala' },
  {
    path: 'projects/:slug',
    loadComponent: () => import('./pages/project/project.component').then(m => m.ProjectComponent),
    canActivate: [projectExistsGuard],
    title: projectTitleResolver,
  },
  // Old project URLs
  { path: 'elli', redirectTo: 'projects/elli' },
  { path: 'turvajatkat', redirectTo: 'projects/turvajatkat' },
  { path: 'musicportfolio', redirectTo: 'projects/musicportfolio' },
  { path: '**', redirectTo: '' },
];
