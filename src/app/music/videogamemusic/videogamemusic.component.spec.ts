import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideogamemusicComponent } from './videogamemusic.component';

describe('VideogamemusicComponent', () => {
  let component: VideogamemusicComponent;
  let fixture: ComponentFixture<VideogamemusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideogamemusicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideogamemusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
