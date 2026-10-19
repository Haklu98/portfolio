import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideRouter } from '@angular/router';

import { HomeComponent } from './home.component';

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
    jasmine.clock().uninstall();
  });

  function greetingAt(hour: number): string {
    jasmine.clock().install();
    jasmine.clock().mockDate(new Date(2025, 0, 1, hour, 30));
    component.getGreeting();
    jasmine.clock().uninstall();
    return component.greeting;
  }

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should greet according to the time of day', () => {
    expect(greetingAt(3)).toBe('Hello there, insomniac!');
    expect(greetingAt(9)).toBe('Good Morning, my friend!');
    expect(greetingAt(14)).toBe('Good Afternoon, you!');
    expect(greetingAt(21)).toBe('Good Evening, fellow traveller!');
  });

  it('should show the current age in the introduction', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain(`I'm a ${component.age}-year-old`);
  });

  it('should render the greeting above the name', () => {
    fixture.detectChanges();
    const greeting: HTMLElement = fixture.nativeElement.querySelector('.greeting');
    expect(greeting.textContent?.trim()).toBe(component.greeting);
    expect(fixture.nativeElement.querySelector('h1').textContent).toContain('Aleksi Hakala');
  });

  it('should link to the projects and contact pages', () => {
    fixture.detectChanges();
    const hrefs = Array.from<HTMLAnchorElement>(fixture.nativeElement.querySelectorAll('a')).map(a => a.getAttribute('href'));
    expect(hrefs).toEqual(['/code', '/contact']);
  });
});
