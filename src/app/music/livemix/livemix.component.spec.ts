import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivemixComponent } from './livemix.component';

describe('LivemixComponent', () => {
  let component: LivemixComponent;
  let fixture: ComponentFixture<LivemixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivemixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivemixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
