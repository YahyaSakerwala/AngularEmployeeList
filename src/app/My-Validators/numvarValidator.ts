import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function numvarValidator(): ValidatorFn {
    const regex = /^[a-zA-Z\s]*$/; // Regular expression to allow only alphabetic characters and spaces
  
    return (control: AbstractControl): ValidationErrors | null => {
      const isNumeric = regex.test(control.value);
      return isNumeric ? null : { isNumeric: true };
    }
  }