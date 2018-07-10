import { TestBed, inject } from '@angular/core/testing';

import { MoviesRestService } from './movies-rest.service';

describe('MoviesRestServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoviesRestService]
    });
  });

  it('should be created', inject([MoviesRestService], (service: MoviesRestService) => {
    expect(service).toBeTruthy();
  }));
});
