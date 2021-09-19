import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderplacingComponent } from './orderplacing.component';

describe('OrderplacingComponent', () => {
  let component: OrderplacingComponent;
  let fixture: ComponentFixture<OrderplacingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderplacingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderplacingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
