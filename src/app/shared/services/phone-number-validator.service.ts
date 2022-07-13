import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PhoneNumberValidatorService {

  constructor() { }

  patternValidator(): ValidatorFn {
    return(control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if(!value) {
        return null;
      }

      const tenDigits = /^0[0-9]{9}$/.test(value);
      const twelveDigits = /^251[0-9]{9}$/.test(value);

      return tenDigits || twelveDigits ? null : { invalidPhoneNumber: true };
    }
  }
}
