import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { NavigationComponent } from './navigation.component';

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
    const hrefs = Array.from<HTMLAnchorElement>(fixture.nativeElement.querySelectorAll('nav > div > a'))
      .map(a => a.getAttribute('href'));
    expect(hrefs).toEqual(['/', '/code', '/contact']);
  });

  it('should label the mobile menu button for screen readers', () => {
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button[mat-icon-button]');
    expect(button.getAttribute('aria-label')).toBe('Open navigation menu');
  });
});
