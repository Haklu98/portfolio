import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElliComponent } from './elli.component';

describe('ElliComponent', () => {
  let component: ElliComponent;
  let fixture: ComponentFixture<ElliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElliComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
