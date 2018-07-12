import { TestBed, inject } from '@angular/core/testing';

import { OmdbService } from './omdb.service';
import { HttpClient } from '../../node_modules/@angular/common/http';

describe('OmdbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        OmdbService,
        { provide: HttpClient, useValue: {} },
      ],
    });
  });

  it('should be created', inject([OmdbService], (service: OmdbService) => {
    expect(service).toBeTruthy();
  }));
});
