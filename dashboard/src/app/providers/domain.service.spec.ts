import { TestBed, inject } from '@angular/core/testing';

import { DomainService } from './domain.service';

describe('ScanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DomainService]
    });
  });

  it('should be created', inject([DomainService], (service: DomainService) => {
    expect(service).toBeTruthy();
  }));
});
