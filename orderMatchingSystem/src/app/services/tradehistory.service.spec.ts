import { TestBed } from '@angular/core/testing';

import { TradehistoryService } from './tradehistory.service';

describe('TradehistoryService', () => {
  let service: TradehistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TradehistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
