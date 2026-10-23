import { TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { Router, TitleStrategy, provideRouter, withComponentInputBinding } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

import { routes } from './app.routes';
import { HomeComponent } from './pages/home/home.component';
import { CodeComponent } from './pages/code/code.component';
import { ProjectComponent } from './pages/project/project.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { LocalizedTitleStrategy } from './core/i18n/title.strategy';
import { LanguageService } from './core/i18n/language.service';

describe('app routes', () => {
  let harness: RouterTestingHarness;
  let router: Router;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [provideRouter(routes, withComponentInputBinding()), { provide: TitleStrategy, useClass: LocalizedTitleStrategy }]
    });
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

    await harness.navigateByUrl('/pricing', PricingComponent);
    expect(router.url).toBe('/pricing');
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

  afterEach(() => {
    TestBed.inject(LanguageService).set('en');
    TestBed.tick();
  });

  it('should set a page title for every page', async () => {
    const title = TestBed.inject(Title);

    await harness.navigateByUrl('/', HomeComponent);
    TestBed.tick();
    expect(title.getTitle()).toBe('Aleksi Hakala | Developer Portfolio');

    await harness.navigateByUrl('/code', CodeComponent);
    TestBed.tick();
    expect(title.getTitle()).toBe('Work | Aleksi Hakala');

    await harness.navigateByUrl('/pricing', PricingComponent);
    TestBed.tick();
    expect(title.getTitle()).toBe('Pricing | Aleksi Hakala');

    await harness.navigateByUrl('/projects/elli', ProjectComponent);
    TestBed.tick();
    expect(title.getTitle()).toBe('Elli-Ticorporate | Aleksi Hakala');
  });

  it('should translate the page title when the language changes', async () => {
    const title = TestBed.inject(Title);

    await harness.navigateByUrl('/projects/musicportfolio', ProjectComponent);
    TestBed.inject(LanguageService).set('fi');
    TestBed.tick();
    expect(title.getTitle()).toBe('Musiikkiportfolio-sivusto | Aleksi Hakala');

    await harness.navigateByUrl('/contact');
    TestBed.tick();
    expect(title.getTitle()).toBe('Yhteystiedot | Aleksi Hakala');
  });
});
