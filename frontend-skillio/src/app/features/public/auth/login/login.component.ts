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

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,CardModule, ButtonModule, LucideAngularModule, InputTextModule, ReactiveFormsModule, IconLogoComponent, PasswordModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  animations: AnimationHandler.getFadeInOut()
})
export class LoginComponent {
  readonly navigateController = inject(NavigateController);
  readonly authService = inject(AuthService);
  readonly BookOpen = BookOpen;
  public isLoading = false;

  public loginForm = new FormGroup({
    email: new FormControl('',  [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  navigateToRegister = () => {
    this.navigateController.navigateToRegisterFromAuthOutlet();
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.toMakeLogin(this.loginForm.value.email as string, this.loginForm.value.password as string);
  }

  toMakeLogin(username: string, password: string): void {
    this.isLoading = true;
    setTimeout(() => {
      if (this.authService.login(username, password)) {
        this.isLoading = false;
        this.navigateController.navigateToWelcome();
      } else {
        console.log('Login failed');
      }
    }, 500);
  }
}
