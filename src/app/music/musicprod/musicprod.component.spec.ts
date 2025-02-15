import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicprodComponent } from './musicprod.component';

describe('MusicprodComponent', () => {
  let component: MusicprodComponent;
  let fixture: ComponentFixture<MusicprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicprodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
