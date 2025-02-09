import { Component, inject } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { LucideAngularModule, BookOpen } from 'lucide-angular';
import {FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { NavigateController } from '../../../../shared/controllers/navigate.controller';
import { AnimationHandler } from '../../../../shared/animations/animation-handler';
import { IconLogoComponent } from '../../../../shared/components/icon-logo/icon-logo.component';
import { AuthService } from '../../../../core/services/auth.service';
import { PasswordModule } from 'primeng/password';
import { CommonModule } from '@angular/common';
import { LoginController } from './controller/login.controller';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,CardModule, ButtonModule, LucideAngularModule, InputTextModule, ReactiveFormsModule, IconLogoComponent, PasswordModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  readonly navigateController = inject(NavigateController);
  readonly authService = inject(AuthService);
  readonly loginController = inject(LoginController);
  readonly BookOpen = BookOpen;
  public isLoading = false;

  public loginForm = new FormGroup({
    email: new FormControl('',  [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  navigateToRegister = () => {
    this.navigateController.navigateToRegisterFromAuthOutlet();
  }

  navigateToRecovery = () => {
    this.navigateController.navigateToRecoveryPassword();
  }

  onSubmit(): void {
    if (this.loginForm.invalid) return;

    this.isLoading = true;
    this.loginController.toLogin(this.loginForm.value.email as string, this.loginForm.value.password as string)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe({
        next: () => this.navigateController.navigateToWelcome(),
        error: (error) => {
          // Handle error - you might want to show a toast/notification here
          console.error('Login failed:', error);
        }
      });
  }
}
