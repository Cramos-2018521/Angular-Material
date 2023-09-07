import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  name: string | undefined;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onConfirm(): void {
    if (this.name) {
      this.dialogRef.close(this.name);
    } else {
      // Mostrar mensaje de error o validación
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
