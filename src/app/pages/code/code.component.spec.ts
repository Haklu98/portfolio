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
    expect(hrefs).toContain('/projects/elli');
    expect(hrefs).toContain('/projects/turvajatkat');
    expect(hrefs).toContain('/projects/musicportfolio');
  });

  it('should render every skill and certificate from the data', () => {
    const text: string = fixture.nativeElement.textContent;
    for (const skill of [...component.primarySkills, ...component.utilitySkills]) {
      expect(text).toContain(skill.name);
    }
    const badges = fixture.nativeElement.querySelectorAll('a[href^="https://www.credly.com"] img');
    expect(badges.length).toBe(component.certificates.length);
    expect(text).toContain('AWS Certified Cloud Practitioner');
  });
});
