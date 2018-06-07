import { TestBed, inject } from '@angular/core/testing';

import { SgbapiService } from './sgbapi.service';

describe('SgbapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SgbapiService]
    });
  });

  it('should be created', inject([SgbapiService], (service: SgbapiService) => {
    expect(service).toBeTruthy();
  }));
});
