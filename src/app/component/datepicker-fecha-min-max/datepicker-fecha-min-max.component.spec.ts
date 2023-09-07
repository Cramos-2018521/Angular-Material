import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerFechaMinMaxComponent } from './datepicker-fecha-min-max.component';

describe('DatepickerFechaMinMaxComponent', () => {
  let component: DatepickerFechaMinMaxComponent;
  let fixture: ComponentFixture<DatepickerFechaMinMaxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatepickerFechaMinMaxComponent],
    });
    fixture = TestBed.createComponent(DatepickerFechaMinMaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
