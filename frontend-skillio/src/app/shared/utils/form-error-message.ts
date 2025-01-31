import { AbstractControl } from '@angular/forms';

export class FormErrorMessages {
  private static errorMessages: Record<
    string,
    (control: AbstractControl, fieldName: string) => string
  > = {
    required: (_, fieldName) => `${fieldName} is required.`,
    email: () => `Please provide a valid email address.`,
    minlength: (control, fieldName) =>
      `${fieldName} must be at least ${control.getError('minlength')?.requiredLength} characters long.`,
    maxlength: (control, fieldName) =>
      `${fieldName} cannot exceed ${control.getError('maxlength')?.requiredLength} characters.`,
    pattern: (_, fieldName) => `${fieldName} has an invalid format.`,
  };

  /**
   * Retrieves the error message for a given form control.
   * @param control - The form control to check for validation errors.
   * @param fieldName - A friendly name for the field.
   * @returns The error message if any validation error is found, otherwise null.
   */
  static getErrorMessage(control: AbstractControl, fieldName: string = 'Field'): string | null {
    const errorKey = Object.keys(control.errors || {})[0];
    const getMessage = this.errorMessages[errorKey];
    return getMessage ? getMessage(control, fieldName) : null;
  }
}
