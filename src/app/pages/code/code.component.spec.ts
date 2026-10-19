import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { CodeComponent, TIMELINE_MAX_HOURS } from './code.component';
import { LanguageService } from '../../core/i18n/language.service';

describe('CodeComponent', () => {
  afterEach(() => {
    TestBed.inject(LanguageService).set('en');
    TestBed.tick();
  });
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

  it('should size each project bar by the hours spent', () => {
    for (const track of component.tracks()) {
      expect(track.width).toBeCloseTo((track.hours / TIMELINE_MAX_HOURS) * 100);
    }
    const elli = component.tracks().find(t => t.slug === 'elli')!;
    expect(elli.labelInside).toBeTrue();
    expect(elli.label).toBe('~450 h');
  });

  it('should mark projects that are still in development', () => {
    const music = component.tracks().find(t => t.slug === 'musicportfolio')!;
    expect(music.label).toBe('~80 h so far');
    expect(fixture.nativeElement.querySelectorAll('.bar-wip').length).toBe(2); // legend + bar
  });

  it('should render every skill and certificate from the data', () => {
    const text: string = fixture.nativeElement.textContent;
    for (const group of component.skillGroups()) {
      for (const item of group.items) {
        expect(text).toContain(item);
      }
    }
    const badges = fixture.nativeElement.querySelectorAll('a[href^="https://www.credly.com"] img');
    expect(badges.length).toBe(component.certificates.length);
    expect(text).toContain('AWS Certified Cloud Practitioner');
  });

  it('should switch the page to Finnish', () => {
    TestBed.inject(LanguageService).set('fi');
    fixture.detectChanges();
    const text: string = fixture.nativeElement.textContent;
    expect(fixture.nativeElement.querySelector('h1').textContent).toContain('Työt');
    expect(text).toContain('Työkaluni');
    expect(text).toContain('Kehitteillä');
    expect(component.tracks().find(t => t.slug === 'musicportfolio')!.label).toBe('~80 h tähän mennessä');
    expect(text).toContain('Musiikkiportfolio');
  });
});
