import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { PricingComponent } from './pricing.component';
import { LanguageService } from '../../core/i18n/language.service';

describe('PricingComponent', () => {
  let component: PricingComponent;
  let fixture: ComponentFixture<PricingComponent>;

  /** The visible prices, with the non-breaking spaces Intl uses turned into plain spaces. */
  const prices = () => Array.from<HTMLElement>(fixture.nativeElement.querySelectorAll('.price'))
    .map(el => el.textContent!.replace(/\s/g, ' ').trim());

  /** The VAT label shown after each price. */
  const vats = () => Array.from<HTMLElement>(fixture.nativeElement.querySelectorAll('.vat'))
    .map(el => el.textContent!.trim());

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    TestBed.inject(LanguageService).set('en');
    TestBed.tick();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should list the four services with their starting prices', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('.plan').length).toBe(4);
    expect(prices()).toEqual(['€690', '€1,400', '€3,500', '€30']);
    expect(fixture.nativeElement.textContent).toContain('/ month');
    expect(vats()).toEqual(['+ VAT', '+ VAT', '+ VAT', '+ VAT']);
  });

  it('should show the Finnish texts and price format', () => {
    TestBed.inject(LanguageService).set('fi');
    fixture.detectChanges();
    const text: string = fixture.nativeElement.textContent;
    expect(text).toContain('Kotisivut');
    expect(text).toContain('alkaen');
    expect(text).toContain('/ kk');
    expect(prices()).toEqual(['690 €', '1 400 €', '3 500 €', '30 €']);
    expect(vats()).toEqual(['+ alv', '+ alv', '+ alv', '+ alv']);
  });

  it('should link to the contact page for a quote', () => {
    fixture.detectChanges();
    const link: HTMLAnchorElement = fixture.nativeElement.querySelector('a.btn-primary');
    expect(link.getAttribute('href')).toBe('/contact');
  });
});
