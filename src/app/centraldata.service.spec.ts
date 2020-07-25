import { TestBed } from '@angular/core/testing';

import { CentraldataService } from './centraldata.service';

describe('CentraldataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CentraldataService = TestBed.get(CentraldataService);
    expect(service).toBeTruthy();
  });
});
