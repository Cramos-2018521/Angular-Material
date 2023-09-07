import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-datepicker-formato-mm-dd-yyyy',
  templateUrl: './datepicker-formato-mm-dd-yyyy.component.html',
  styleUrls: ['./datepicker-formato-mm-dd-yyyy.component.scss']
})
export class DatepickerFormatoMmDdYyyyComponent {
  dateControl = new FormControl(); // FormControl para la fecha

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  // Función para formatear la fecha en el formato deseado
  formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: '2-digit'
    };
    return date.toLocaleDateString('en-US', options);
  }
}
