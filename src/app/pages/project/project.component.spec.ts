import { TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { Router, provideRouter, withComponentInputBinding } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { MatDialog } from '@angular/material/dialog';

import { routes } from '../../app.routes';
import { ProjectComponent } from './project.component';
import { CodeComponent } from '../code/code.component';
import { ImageDialogComponent } from '../../shared/image-dialog/image-dialog.component';

describe('ProjectComponent', () => {
  let harness: RouterTestingHarness;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [provideRouter(routes, withComponentInputBinding()), provideNoopAnimations()]
    });
    harness = await RouterTestingHarness.create();
  });

  it('should render the project from the URL', async () => {
    await harness.navigateByUrl('/projects/elli', ProjectComponent);
    const page = harness.routeNativeElement!;
    expect(page.querySelector('h2')?.textContent).toContain('Elli-Ticorporate');
    expect(page.querySelectorAll('h3.text-2xl').length).toBeGreaterThan(3);
    expect(page.querySelector('a[aria-label="Back to projects"]')?.getAttribute('href')).toBe('/code');
  });

  it('should render inline formatting in paragraphs', async () => {
    await harness.navigateByUrl('/projects/elli', ProjectComponent);
    expect(harness.routeNativeElement!.querySelector('p span.font-semibold')).toBeTruthy();
  });

  it('should show screenshots that open in a dialog', async () => {
    const component = await harness.navigateByUrl('/projects/elli', ProjectComponent);
    const dialog = TestBed.inject(MatDialog);
    spyOn(dialog, 'open');

    const buttons = harness.routeNativeElement!.querySelectorAll<HTMLButtonElement>('button[aria-label^="Open image"]');
    expect(buttons.length).toBe(6);
    buttons[0].click();

    expect(dialog.open).toHaveBeenCalledWith(ImageDialogComponent, jasmine.objectContaining({
      data: component.project()!.images![0]
    }));
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
    expect(harness.routeNativeElement!.querySelector('h2')?.textContent).toContain('Music Portfolio Website');
  });

  it('should send unknown projects back to the Code page', async () => {
    await harness.navigateByUrl('/projects/does-not-exist', CodeComponent);
    expect(TestBed.inject(Router).url).toBe('/code');
  });
});
