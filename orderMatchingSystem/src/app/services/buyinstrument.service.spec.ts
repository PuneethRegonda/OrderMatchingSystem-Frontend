import { TestBed } from '@angular/core/testing';

import { BuyinstrumentService } from './buyinstrument.service';

describe('BuyinstrumentService', () => {
  let service: BuyinstrumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyinstrumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
