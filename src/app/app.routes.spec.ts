import { TestBed } from '@angular/core/testing';
import { Router, provideRouter, withComponentInputBinding } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

import { routes } from './app.routes';
import { HomeComponent } from './pages/home/home.component';
import { CodeComponent } from './pages/code/code.component';
import { ProjectComponent } from './pages/project/project.component';

describe('app routes', () => {
  let harness: RouterTestingHarness;
  let router: Router;

  beforeEach(async () => {
    TestBed.configureTestingModule({ providers: [provideRouter(routes, withComponentInputBinding())] });
    harness = await RouterTestingHarness.create();
    router = TestBed.inject(Router);
  });

  it('should show the home page at the root URL', async () => {
    await harness.navigateByUrl('/', HomeComponent);
    expect(router.url).toBe('/');
  });

  it('should redirect /home to the root URL', async () => {
    await harness.navigateByUrl('/home', HomeComponent);
    expect(router.url).toBe('/');
  });

  it('should open pages directly by URL', async () => {
    await harness.navigateByUrl('/code', CodeComponent);
    expect(router.url).toBe('/code');

    await harness.navigateByUrl('/projects/elli', ProjectComponent);
    expect(router.url).toBe('/projects/elli');
  });

  it('should redirect old project URLs to /projects/:slug', async () => {
    await harness.navigateByUrl('/elli', ProjectComponent);
    expect(router.url).toBe('/projects/elli');

    await harness.navigateByUrl('/turvajatkat', ProjectComponent);
    expect(router.url).toBe('/projects/turvajatkat');

    await harness.navigateByUrl('/musicportfolio', ProjectComponent);
    expect(router.url).toBe('/projects/musicportfolio');
  });

  it('should redirect unknown URLs to the home page', async () => {
    await harness.navigateByUrl('/does-not-exist', HomeComponent);
    expect(router.url).toBe('/');
  });
});
