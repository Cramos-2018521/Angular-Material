import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-datepicker-fecha-min-max',
  templateUrl: './datepicker-fecha-min-max.component.html',
  styleUrls: ['./datepicker-fecha-min-max.component.scss'],
})
export class DatepickerFechaMinMaxComponent {
  minDate = new Date(); // Fecha mínima (hoy)
  maxDate = new Date('2023-12-31'); // Fecha máxima (31 de diciembre de 2023)

  selectedDate = new FormControl(null);
}
