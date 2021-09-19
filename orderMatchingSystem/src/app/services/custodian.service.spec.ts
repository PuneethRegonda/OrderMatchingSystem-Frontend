import { TestBed } from '@angular/core/testing';

import { CustodianService } from './custodian.service';

describe('CustodianService', () => {
  let service: CustodianService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustodianService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
