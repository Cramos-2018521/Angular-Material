import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-datepicker-rango',
  templateUrl: './datepicker-rango.component.html',
  styleUrls: ['./datepicker-rango.component.scss'],
})
export class DatepickerRangoComponent {
  startControl = new FormControl();
  endControl = new FormControl();
}
