import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { NavigationComponent } from './navigation.component';
import { ThemeService } from '../theme/theme.service';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render real links for the main pages', () => {
    const hrefs = Array.from<HTMLAnchorElement>(fixture.nativeElement.querySelectorAll('nav a'))
      .map(a => a.getAttribute('href'));
    expect(hrefs).toEqual(['/', '/code', '/contact']);
  });

  it('should toggle the theme and describe the next action for screen readers', () => {
    const theme = TestBed.inject(ThemeService);
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('header button');
    const startedDark = theme.theme() === 'dark';
    expect(button.getAttribute('aria-label')).toBe(startedDark ? 'Switch to light mode' : 'Switch to dark mode');

    button.click();
    fixture.detectChanges();
    expect(theme.theme()).toBe(startedDark ? 'light' : 'dark');
    expect(button.getAttribute('aria-label')).toBe(startedDark ? 'Switch to dark mode' : 'Switch to light mode');

    button.click(); // leave the document as it was
  });
});
