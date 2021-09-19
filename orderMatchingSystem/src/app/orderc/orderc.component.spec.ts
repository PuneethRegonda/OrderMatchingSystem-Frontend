import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdercComponent } from './orderc.component';

describe('OrdercComponent', () => {
  let component: OrdercComponent;
  let fixture: ComponentFixture<OrdercComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdercComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdercComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
