import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DatepickerRangoComponent } from './component/datepicker-rango/datepicker-rango.component';
import { DatepickerFechaMinMaxComponent } from './component/datepicker-fecha-min-max/datepicker-fecha-min-max.component';
import { DatepickerMesAnoComponent } from './component/datepicker-mes-ano/datepicker-mes-ano.component';
import { DatepickerFormatoMmDdYyyyComponent } from './component/datepicker-formato-mm-dd-yyyy/datepicker-formato-mm-dd-yyyy.component';
import { DialogComponent } from './component/dialog/dialog.component';
import { TablaComponent } from './component/tabla/tabla.component';
import { StepperComponent } from './component/stepper/stepper.component';

const routes: Routes = [
  { path: '', redirectTo: '/datepicker-rango', pathMatch: 'full' },
  { path: 'datepicker-rango', component: DatepickerRangoComponent },
  {
    path: 'datepicker-fecha-min-max',
    component: DatepickerFechaMinMaxComponent,
  },
  { path: 'datepicker-mes-ano', component: DatepickerMesAnoComponent },
  {
    path: 'datepicker-formato-mm-dd-yyyy',
    component: DatepickerFormatoMmDdYyyyComponent,
  },
  { path: 'dialog', component: DialogComponent },
  { path: 'table', component: TablaComponent },
  { path: 'stepper', component: StepperComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
