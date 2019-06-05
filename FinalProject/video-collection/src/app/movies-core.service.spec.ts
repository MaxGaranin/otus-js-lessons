import { TestBed, inject } from '@angular/core/testing';

import { MoviesCoreService } from './movies-core.service';

describe('MoviesCoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoviesCoreService]
    });
  });

  it('should be created', inject([MoviesCoreService], (service: MoviesCoreService) => {
    expect(service).toBeTruthy();
  }));
});
