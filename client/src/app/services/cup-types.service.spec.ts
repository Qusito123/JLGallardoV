import { TestBed } from '@angular/core/testing';

import { CupTypesService } from './cup-types.service';

describe('CupTypesService', () => {
  let service: CupTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CupTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
