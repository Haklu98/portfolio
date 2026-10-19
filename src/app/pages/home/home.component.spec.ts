import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
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

  it('should render the greeting in the heading', () => {
    fixture.detectChanges();
    const heading: HTMLElement = fixture.nativeElement.querySelector('h1');
    expect(heading.textContent?.trim()).toBe(component.greeting);
  });
});
