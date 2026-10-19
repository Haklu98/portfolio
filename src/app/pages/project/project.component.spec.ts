import { TestBed } from '@angular/core/testing';
import { Router, provideRouter, withComponentInputBinding } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

import { routes } from '../../app.routes';
import { ProjectComponent } from './project.component';
import { CodeComponent } from '../code/code.component';

describe('ProjectComponent', () => {
  let harness: RouterTestingHarness;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [provideRouter(routes, withComponentInputBinding())]
    });
    harness = await RouterTestingHarness.create();
  });

  it('should render the project from the URL', async () => {
    await harness.navigateByUrl('/projects/elli', ProjectComponent);
    const page = harness.routeNativeElement!;
    expect(page.querySelector('h1')?.textContent).toContain('Elli-Ticorporate');
    expect(page.querySelectorAll('article section h2').length).toBeGreaterThanOrEqual(3);
    expect(page.querySelector('a[href="/code"]')?.textContent).toContain('All projects');
  });

  it('should render inline formatting in paragraphs', async () => {
    await harness.navigateByUrl('/projects/elli', ProjectComponent);
    expect(harness.routeNativeElement!.querySelector('p span.font-semibold')).toBeTruthy();
  });

  it('should open a screenshot in a dialog and close it again', async () => {
    const component = await harness.navigateByUrl('/projects/elli', ProjectComponent);
    const page = harness.routeNativeElement!;
    const buttons = page.querySelectorAll<HTMLButtonElement>('button[aria-label^="Open image"]');
    expect(buttons.length).toBe(6);

    buttons[0].click();
    harness.detectChanges();
    const dialog = page.querySelector('dialog')!;
    expect(dialog.open).toBeTrue();
    expect(dialog.querySelector('img')?.getAttribute('src')).toBe(component.project()!.images![0].src);

    dialog.querySelector<HTMLButtonElement>('button[aria-label="Close image"]')!.click();
    expect(dialog.open).toBeFalse();
  });

  it('should show a live website link instead of screenshots when there are none', async () => {
    await harness.navigateByUrl('/projects/turvajatkat', ProjectComponent);
    const page = harness.routeNativeElement!;
    expect(page.querySelector('a[href="https://turvajatkat.fi/"]')).toBeTruthy();
    expect(page.querySelector('button[aria-label^="Open image"]')).toBeNull();
  });

  it('should update when navigating between projects', async () => {
    const component = await harness.navigateByUrl('/projects/elli', ProjectComponent);
    await harness.navigateByUrl('/projects/musicportfolio', ProjectComponent);
    expect(component.project()?.slug).toBe('musicportfolio');
    expect(harness.routeNativeElement!.querySelector('h1')?.textContent).toContain('Music Portfolio Website');
  });

  it('should send unknown projects back to the Code page', async () => {
    await harness.navigateByUrl('/projects/does-not-exist', CodeComponent);
    expect(TestBed.inject(Router).url).toBe('/code');
  });
});
