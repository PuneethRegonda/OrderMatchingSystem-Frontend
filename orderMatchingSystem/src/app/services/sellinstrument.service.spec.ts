import { TestBed } from '@angular/core/testing';

import { SellinstrumentService } from './sellinstrument.service';

describe('SellinstrumentService', () => {
  let service: SellinstrumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellinstrumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
