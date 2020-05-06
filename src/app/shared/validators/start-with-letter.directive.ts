import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appStartWithLetter]',
  providers: [{ provide: NG_VALIDATORS, useExisting: StartWithLetterDirective, multi: true }]
})
export class StartWithLetterDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors {
    if (!control.value) {
      return { startWithLetterValidator: { value: control.value } };
    }
    const firstCharCode: number = control.value.charCodeAt(0);
    return (firstCharCode < 65 || firstCharCode > 122) ? { startWithLetterValidator: { value: control.value } } : null;
  }

}
