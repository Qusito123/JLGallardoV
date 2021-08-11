import { TestBed } from '@angular/core/testing';

import { CupsService } from './cups.service';

describe('CupsService', () => {
  let service: CupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
