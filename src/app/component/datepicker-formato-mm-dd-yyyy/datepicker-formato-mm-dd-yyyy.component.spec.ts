import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerFormatoMmDdYyyyComponent } from './datepicker-formato-mm-dd-yyyy.component';

describe('DatepickerFormatoMmDdYyyyComponent', () => {
  let component: DatepickerFormatoMmDdYyyyComponent;
  let fixture: ComponentFixture<DatepickerFormatoMmDdYyyyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatepickerFormatoMmDdYyyyComponent]
    });
    fixture = TestBed.createComponent(DatepickerFormatoMmDdYyyyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
