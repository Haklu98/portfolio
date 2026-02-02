import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearlycalComponent } from './yearlycal.component';

describe('YearlycalComponent', () => {
  let component: YearlycalComponent;
  let fixture: ComponentFixture<YearlycalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YearlycalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearlycalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
