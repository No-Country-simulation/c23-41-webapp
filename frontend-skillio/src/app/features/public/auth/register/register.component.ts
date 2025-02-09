import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Lightbulb, LucideAngularModule, Star, Users } from 'lucide-angular';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { finalize, tap } from 'rxjs';
import { AuthService } from '../../../../core/services/auth.service';
import { AnimationHandler } from '../../../../shared/animations/animation-handler';
import { APP_NAME } from '../../../../shared/constants/constants';
import { SKILLS } from '../../../../shared/constants/skills';
import { NavigateController } from '../../../../shared/controllers/navigate.controller';
import { ToastServiceService } from '../../../../shared/services/toast-service.service';
import { FormErrorMessages } from '../../../../shared/utils/form-error-message';
import { RegisterController } from './controller/register.controller';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    InputTextModule, 
    ButtonModule, 
    LucideAngularModule, 
    CardModule, 
    CommonModule,  
    ToastModule,  
    MultiSelectModule, 
    PasswordModule, 
    InputMaskModule, 
    DividerModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  animations: AnimationHandler.getFadeInOut()
})
export class RegisterComponent {
  readonly users = Users;
  readonly star = Star;
  readonly lightbulb = Lightbulb;
  readonly skills = SKILLS;

  navigateController = inject(NavigateController);
  authService = inject(AuthService);
  registerController = inject(RegisterController);
  toastService = inject(ToastServiceService);
  
  appName = APP_NAME;
  submitted = false;
  isLoading = false;

  
  passwordMatchValidator: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { matching: false };
  };

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    phone: new FormControl('', [Validators.required, FormErrorMessages.phoneValidator])
  }, {
    validators: this.passwordMatchValidator
  });

  navigateToLogin = () => {
    this.navigateController.navigateToLoginFromAuthOutlet();
  }

  toMakeRegister(email: string, password: string) {
    setTimeout(() => {
      this.authService.register(email, password)
    }, 500);
  }

  onSubmitt() {
    this.submitted = true;
    if (this.registerForm.valid) {
      this.isLoading = true;
      this.registerController.registrarEstudiante(this.registerForm.value).pipe(
        finalize(() => this.isLoading = false),
        tap({
          next: () => {
            this.toastService.success('Registration successful! Please log in.');
            setTimeout(() => {
              this.navigateController.registerDetails();
            }, 1000);
          },
          error: (error) => {
            this.toastService.error('Registration failed. Please try again.');
          }
        })
      ).subscribe();
    }
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    this.toMakeRegister(this.registerForm.value.email as string, this.registerForm.value.password as string);
    this.toastService.success('Registration successful! Please log in.');
    setTimeout(() => {
      this.navigateController.registerDetails();
    }, 1000);
  }
}
