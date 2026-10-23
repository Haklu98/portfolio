import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { HomeComponent, dayPeriod } from './home.component';
import { LanguageService } from '../../core/i18n/language.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    TestBed.inject(LanguageService).set('en');
    TestBed.tick();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should pick the greeting by the time of day', () => {
    expect(dayPeriod(3)).toBe('night');
    expect(dayPeriod(9)).toBe('morning');
    expect(dayPeriod(14)).toBe('afternoon');
    expect(dayPeriod(21)).toBe('evening');
  });

  it('should show the current age in the introduction', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain(`I'm ${component.age} years young`);
  });

  it('should render the greeting above the name', () => {
    fixture.detectChanges();
    const greeting: HTMLElement = fixture.nativeElement.querySelector('.greeting');
    expect(greeting.textContent?.trim()).toBe(component.greeting());
    expect(fixture.nativeElement.querySelector('h1').textContent).toContain('Aleksi Hakala');
  });

  it('should switch the texts to Finnish', () => {
    TestBed.inject(LanguageService).set('fi');
    fixture.detectChanges();
    const text: string = fixture.nativeElement.textContent;
    expect(text).toContain(`Olen ${component.age}-vuotias`);
    expect(text).toContain('Katso projektini');
    expect(component.greeting()).toMatch(/^(Hei|Hyvää)/);
  });

  it('should link to the projects, pricing and contact pages', () => {
    fixture.detectChanges();
    const hrefs = Array.from<HTMLAnchorElement>(fixture.nativeElement.querySelectorAll('a')).map(a => a.getAttribute('href'));
    expect(hrefs).toEqual(['/code', '/pricing', '/contact']);
  });
});
