import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { NavigationComponent } from './navigation.component';
import { ThemeService } from '../theme/theme.service';
import { LanguageService } from '../i18n/language.service';

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
    const hrefs = (selector: string) => Array.from<HTMLAnchorElement>(fixture.nativeElement.querySelectorAll(selector))
      .map(a => a.getAttribute('href'));
    expect(hrefs('header > div nav a')).toEqual(['/', '/code', '/contact']);
    expect(hrefs('#mobile-menu a')).toEqual(['/', '/code', '/contact']);
  });

  it('should switch the language from the EN/FI buttons', () => {
    const language = TestBed.inject(LanguageService);
    const fiButton: HTMLButtonElement = fixture.nativeElement.querySelector('button[lang="fi"]');
    const enButton: HTMLButtonElement = fixture.nativeElement.querySelector('button[lang="en"]');
    expect(enButton.getAttribute('aria-pressed')).toBe('true');

    fiButton.click();
    fixture.detectChanges();
    expect(language.lang()).toBe('fi');
    expect(fiButton.getAttribute('aria-pressed')).toBe('true');
    expect(enButton.getAttribute('aria-pressed')).toBe('false');
    const labels = Array.from<HTMLAnchorElement>(fixture.nativeElement.querySelectorAll('header > div nav a')).map(a => a.textContent?.trim());
    expect(labels).toEqual(['Etusivu', 'Työt', 'Yhteystiedot']);

    enButton.click();
    fixture.detectChanges();
    expect(language.lang()).toBe('en');
  });

  describe('mobile menu', () => {
    let menuButton: HTMLButtonElement;
    let menu: HTMLElement;

    beforeEach(() => {
      menuButton = fixture.nativeElement.querySelector('button[aria-controls="mobile-menu"]');
      menu = fixture.nativeElement.querySelector('#mobile-menu');
    });

    it('should start closed', () => {
      expect(menuButton.getAttribute('aria-expanded')).toBe('false');
      expect(menuButton.getAttribute('aria-label')).toBe('Open menu');
      expect(menu.hidden).toBeTrue();
    });

    it('should open and close from the menu button', () => {
      menuButton.click();
      fixture.detectChanges();
      expect(menuButton.getAttribute('aria-expanded')).toBe('true');
      expect(menuButton.getAttribute('aria-label')).toBe('Close menu');
      expect(menu.hidden).toBeFalse();

      menuButton.click();
      fixture.detectChanges();
      expect(menu.hidden).toBeTrue();
    });

    it('should close when a link is chosen', () => {
      menuButton.click();
      fixture.detectChanges();
      menu.querySelector<HTMLAnchorElement>('a[href="/contact"]')!.click();
      fixture.detectChanges();
      expect(component.menuOpen()).toBeFalse();
      expect(menu.hidden).toBeTrue();
    });

    it('should close with the Escape key', () => {
      menuButton.click();
      fixture.detectChanges();
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
      fixture.detectChanges();
      expect(menu.hidden).toBeTrue();
    });
  });

  it('should toggle the theme and describe the next action for screen readers', () => {
    const theme = TestBed.inject(ThemeService);
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button[aria-label^="Switch to"]');
    const startedDark = theme.theme() === 'dark';
    expect(button.getAttribute('aria-label')).toBe(startedDark ? 'Switch to light mode' : 'Switch to dark mode');

    button.click();
    fixture.detectChanges();
    expect(theme.theme()).toBe(startedDark ? 'light' : 'dark');
    expect(button.getAttribute('aria-label')).toBe(startedDark ? 'Switch to dark mode' : 'Switch to light mode');

    button.click(); // leave the document as it was
  });
});
