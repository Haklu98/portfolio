import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloprojectComponent } from './soloproject.component';

describe('SoloprojectComponent', () => {
  let component: SoloprojectComponent;
  let fixture: ComponentFixture<SoloprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoloprojectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoloprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
