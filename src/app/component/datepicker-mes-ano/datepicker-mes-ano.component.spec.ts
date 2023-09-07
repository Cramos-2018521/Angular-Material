import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerMesAnoComponent } from './datepicker-mes-ano.component';

describe('DatepickerMesAnoComponent', () => {
  let component: DatepickerMesAnoComponent;
  let fixture: ComponentFixture<DatepickerMesAnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatepickerMesAnoComponent]
    });
    fixture = TestBed.createComponent(DatepickerMesAnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
