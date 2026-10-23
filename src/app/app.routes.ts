import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { projectExistsGuard } from './pages/project/project.guard';

// Home is part of the initial bundle; the other pages are lazy-loaded on first visit.
// `title` is a key into the current language's `titles` (see LocalizedTitleStrategy).
export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', title: 'home' },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'code', loadComponent: () => import('./pages/code/code.component').then(m => m.CodeComponent), title: 'work' },
  { path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent), title: 'about' },
  { path: 'pricing', loadComponent: () => import('./pages/pricing/pricing.component').then(m => m.PricingComponent), title: 'pricing' },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent), title: 'contact' },
  {
    path: 'projects/:slug',
    loadComponent: () => import('./pages/project/project.component').then(m => m.ProjectComponent),
    canActivate: [projectExistsGuard],
    title: 'project',
  },
  // Old project URLs
  { path: 'elli', redirectTo: 'projects/elli' },
  { path: 'turvajatkat', redirectTo: 'projects/turvajatkat' },
  { path: 'musicportfolio', redirectTo: 'projects/musicportfolio' },
  { path: '**', redirectTo: '' },
];
