import { Component, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements AfterViewInit {
  step1Form: FormGroup;
  step2Form: FormGroup;
  showDpi = false;

  constructor(
    private formBuilder: FormBuilder,
    private cdRef: ChangeDetectorRef
  ) {
    this.step1Form = this.formBuilder.group({
      birthdate: ['', [Validators.required, this.validateDate]],
    });

    this.step2Form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]],
    });
  }

  ngAfterViewInit(): void {
    this.cdRef.detectChanges();
  }

  validateDate(control: AbstractControl): ValidationErrors | null {
    const selectedDate = new Date(control.value);
    const currentDate = new Date();
    if (selectedDate >= currentDate) {
      return { invalidDate: true };
    }
    return null;
  }

  prevStep(stepper: MatStepper): void {
    // Ir al paso anterior
    stepper.previous();
  }

  nextStep(stepper: MatStepper): void {
    // Ir al siguiente paso solo si el paso actual es válido
    if (this.isStepValid(stepper)) {
      stepper.next();
    }
  }

  isStepValid(stepper: MatStepper): boolean {
    if (stepper.selectedIndex === 0) {
      return this.step1Form.valid;
    } else if (stepper.selectedIndex === 1) {
      return this.step2Form.valid;
    } else {
      return true; // Paso 3 no requiere validación
    }
  }
}
