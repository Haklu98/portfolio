import { TestBed } from '@angular/core/testing';

import { LANG_STORAGE_KEY, LanguageService } from './language.service';
import { en } from './content.en';
import { fi } from './content.fi';

describe('LanguageService', () => {
  const root = document.documentElement;
  let originalLang: string;

  beforeEach(() => {
    originalLang = root.lang;
    root.lang = '';
    localStorage.removeItem(LANG_STORAGE_KEY);
  });

  afterEach(() => {
    root.lang = originalLang === 'fi' ? 'en' : originalLang;
    localStorage.removeItem(LANG_STORAGE_KEY);
  });

  it('should default to English', () => {
    const service = TestBed.inject(LanguageService);
    TestBed.tick();
    expect(service.lang()).toBe('en');
    expect(service.content()).toBe(en);
    expect(root.lang).toBe('en');
  });

  it('should start from the language index.html already picked', () => {
    root.lang = 'fi';
    const service = TestBed.inject(LanguageService);
    expect(service.lang()).toBe('fi');
    expect(service.content()).toBe(fi);
  });

  it('should switch language, update <html lang> and remember the choice', () => {
    const service = TestBed.inject(LanguageService);
    service.set('fi');
    TestBed.tick();
    expect(service.content().nav.home).toBe('Etusivu');
    expect(root.lang).toBe('fi');
    expect(localStorage.getItem(LANG_STORAGE_KEY)).toBe('fi');
  });

  it('should have a Finnish text for every English one', () => {
    const keys = (value: unknown, path = ''): string[] =>
      value && typeof value === 'object' && !Array.isArray(value)
        ? Object.entries(value).flatMap(([key, child]) => keys(child, `${path}.${key}`))
        : [path];
    expect(keys(fi)).toEqual(keys(en));
  });
});
