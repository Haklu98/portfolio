import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { CodeComponent } from './code.component';

describe('CodeComponent', () => {
  let component: CodeComponent;
  let fixture: ComponentFixture<CodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should link to every project page', () => {
    const hrefs = Array.from<HTMLAnchorElement>(fixture.nativeElement.querySelectorAll('a[href]'))
      .map(a => a.getAttribute('href'));
    expect(hrefs).toContain('/elli');
    expect(hrefs).toContain('/turvajatkat');
    expect(hrefs).toContain('/musicportfolio');
  });
});
