import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from './component/dialog/dialog.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  title(_title: unknown) {
    throw new Error('Method not implemented.');
  }
  dialogRef: MatDialogRef<DialogComponent> | undefined;

  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    this.dialogRef = this.dialog.open(DialogComponent, {
      data: { title: 'Prueba diálogo' },
    });

    this.dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Procesa el nombre ingresado aqui
      }
    });
  }
}
