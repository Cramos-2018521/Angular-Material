import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerRangoComponent } from './datepicker-rango.component';

describe('DatepickerRangoComponent', () => {
  let component: DatepickerRangoComponent;
  let fixture: ComponentFixture<DatepickerRangoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatepickerRangoComponent]
    });
    fixture = TestBed.createComponent(DatepickerRangoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
