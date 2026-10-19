import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { TurvajatkatComponent } from './turvajatkat.component';

describe('TurvajatkatComponent', () => {
  let component: TurvajatkatComponent;
  let fixture: ComponentFixture<TurvajatkatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TurvajatkatComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurvajatkatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should link back to the projects page', () => {
    const back: HTMLAnchorElement = fixture.nativeElement.querySelector('a[aria-label="Back to projects"]');
    expect(back.getAttribute('href')).toBe('/code');
  });
});
