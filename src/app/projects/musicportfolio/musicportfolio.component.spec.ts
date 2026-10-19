import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { MusicportfolioComponent } from './musicportfolio.component';

describe('MusicportfolioComponent', () => {
  let component: MusicportfolioComponent;
  let fixture: ComponentFixture<MusicportfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicportfolioComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicportfolioComponent);
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
