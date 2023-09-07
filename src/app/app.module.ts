import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { DatepickerRangoComponent } from '../app/component/datepicker-rango/datepicker-rango.component';
import { DatepickerFechaMinMaxComponent } from '../app/component/datepicker-fecha-min-max/datepicker-fecha-min-max.component';
import { DatepickerMesAnoComponent } from '../app/component/datepicker-mes-ano/datepicker-mes-ano.component';
import { DatepickerFormatoMmDdYyyyComponent } from '../app/component/datepicker-formato-mm-dd-yyyy/datepicker-formato-mm-dd-yyyy.component';
import { DialogComponent } from './component/dialog/dialog.component';
import { TablaComponent } from './component/tabla/tabla.component';
import { StepperComponent } from './component/stepper/stepper.component';

@NgModule({
  declarations: [
    AppComponent, // Agrega AppComponent como el componente raíz
    DatepickerRangoComponent,
    DatepickerFechaMinMaxComponent,
    DatepickerMesAnoComponent,
    DatepickerFormatoMmDdYyyyComponent,
    DialogComponent,
    TablaComponent,
    StepperComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    // Agrega los módulos de Angular Material aquí
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatStepperModule,
    MatSlideToggleModule,
    FormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
