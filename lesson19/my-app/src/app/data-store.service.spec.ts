import { TestBed, inject } from '@angular/core/testing';

import { DataStoreService } from './data-storage.service';

describe('DataStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataStoreService]
    });
  });

  it('should be created', inject([DataStoreService], (service: DataStoreService) => {
    expect(service).toBeTruthy();
  }));
});
