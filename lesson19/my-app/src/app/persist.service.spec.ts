import { TestBed, inject } from '@angular/core/testing';

import { PersistService } from './persist.service';

describe('PersistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersistService]
    });
  });

  it('should be created', inject([PersistService], (service: PersistService) => {
    expect(service).toBeTruthy();
  }));
});
