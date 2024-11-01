import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonchartComponent } from './commonchart.component';

describe('CommonchartComponent', () => {
  let component: CommonchartComponent;
  let fixture: ComponentFixture<CommonchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
