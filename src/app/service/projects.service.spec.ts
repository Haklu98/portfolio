import { TestBed } from '@angular/core/testing';

import { ProjectsService } from './projects.service';

describe('ProjectsService', () => {
  let service: ProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should find a project by slug', () => {
    expect(service.getBySlug('elli')?.name).toBe('Elli-Ticorporate');
  });

  it('should return undefined for an unknown slug', () => {
    expect(service.getBySlug('does-not-exist')).toBeUndefined();
    expect(service.getBySlug(null)).toBeUndefined();
  });

  it('should have a unique slug for every project', () => {
    const slugs = service.getAll().map(project => project.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});
