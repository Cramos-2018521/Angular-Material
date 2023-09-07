import { Component } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-datepicker-mes-ano',
  templateUrl: './datepicker-mes-ano.component.html',
  styleUrls: ['./datepicker-mes-ano.component.scss'],
})
export class DatepickerMesAnoComponent {
  mesAnoControl = new FormControl(new Date());

  seleccionarFecha(event: MatDatepickerInputEvent<Date>) {
    if (event.value) {
      const fechaSeleccionada = event.value;
      const mes = fechaSeleccionada.getMonth() + 1;
      const ano = fechaSeleccionada.getFullYear();
      const fecha = new Date(ano, mes - 1, 1); // Restamos 1 a mes porque los meses en JavaScript van de 0 a 11
      this.mesAnoControl.setValue(fecha);
    }
  }
}
