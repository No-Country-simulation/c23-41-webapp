import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Lightbulb, LucideAngularModule, Star, Users } from 'lucide-angular';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipsModule } from 'primeng/chips';
import { MultiSelectModule } from 'primeng/multiselect';
import { AuthService } from '../../../../core/services/auth.service';
import { AnimationHandler } from '../../../../shared/animations/animation-handler';
import { ErrorMessageComponent } from '../../../../shared/components/error-message/error-message.component';
import { APP_NAME } from '../../../../shared/constants/constants';
import { SKILLS } from '../../../../shared/constants/skills';
import { NavigateController } from '../../../../shared/controllers/navigate.controller';
import { InputTextModule } from 'primeng/inputtext';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, ButtonModule, LucideAngularModule, CardModule, CommonModule, MultiSelectModule],
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
  navigateController = inject(NavigateController)
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
  }, {
    validators: this.passwordMatchValidator
  });

  navigateToLogin = () => {
    this.navigateController.navigateToLoginFromAuthOutlet();
  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      this.isLoading = true;
      // Simulate API call
      setTimeout(() => {
        this.isLoading = false;
        console.log("navigate")
        this.navigateController.registerDetails();
      }, 1000);
    }
  }
}
