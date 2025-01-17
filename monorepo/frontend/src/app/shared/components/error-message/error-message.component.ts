import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormErrorMessages } from '../../utils/form-error-message';

@Component({
  selector: 'app-error-message',
  standalone: true,
  imports: [],
  templateUrl: './error-message.component.html',
  styleUrl: './error-message.component.scss'
})
export class ErrorMessageComponent {
  @Input({ required: true }) formGroup!: FormGroup;
  @Input({ required: true }) controlName!: string;
  @Input({ required: true }) fieldName!: string;



  /**
   * Checks if the error message should be displayed.
   * The error is shown only after the user leaves the field and if the control is invalid.
   * @returns True if the error message should be visible, otherwise false.
   */
  shouldShowError(): boolean {
    const control = this.formGroup.get(this.controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  getErrorMessage(controlName: string, fieldName: string): string | null {
    const control = this.formGroup.get(controlName);
    return control ? FormErrorMessages.getErrorMessage(control, fieldName) : null;
  }
  
}
