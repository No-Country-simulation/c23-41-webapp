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
import { AuthService } from '../../../../core/services/auth.service';
import { AnimationHandler } from '../../../../shared/animations/animation-handler';
import { APP_NAME } from '../../../../shared/constants/constants';
import { SKILLS } from '../../../../shared/constants/skills';
import { NavigateController } from '../../../../shared/controllers/navigate.controller';
import { FormErrorMessages } from '../../../../shared/utils/form-error-message';
import { RegisterService } from './service/register.service';
import { tap } from 'rxjs';
import { RegisterController } from './controller/register.controller';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, ButtonModule, LucideAngularModule, CardModule, CommonModule, MultiSelectModule, PasswordModule, InputMaskModule, DividerModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  animations: AnimationHandler.getFadeInOut()
})
export class RegisterComponent {
  readonly users = Users;
  readonly star = Star;
  readonly lightbulb = Lightbulb;
  readonly skills = SKILLS;

  appName = APP_NAME;
  navigateController = inject(NavigateController);
  authService = inject(AuthService);
  registerController = inject(RegisterController);
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
      this.registerController.registrarEstudiante(this.registerForm.value).pipe(tap({
        next: () => {
          this.isLoading = true;
          // Simulate API call
          setTimeout(() => {
            this.isLoading = false;
            this.navigateController.navigateToLoginFromAuthOutlet();
          }, 1000);
        }
      })).subscribe();
    }
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    this.toMakeRegister(this.registerForm.value.email as string, this.registerForm.value.password as string);
    this.navigateController.navigateToLoginFromAuthOutlet();
  }
}
