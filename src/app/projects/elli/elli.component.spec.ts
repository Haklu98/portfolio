import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ElliComponent } from './elli.component';

describe('ElliComponent', () => {
  let component: ElliComponent;
  let fixture: ComponentFixture<ElliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElliComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElliComponent);
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
