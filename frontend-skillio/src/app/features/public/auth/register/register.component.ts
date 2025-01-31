import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CardModule, ButtonModule, LucideAngularModule, ChipsModule, MultiSelectModule, CommonModule, ErrorMessageComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  animations: AnimationHandler.getFadeInOut()
})
export class RegisterComponent {
  readonly navigateController = inject(NavigateController);
  readonly authService = inject(AuthService)
  // icons
  readonly users = Users;
  readonly star = Star;
  readonly lightbulb = Lightbulb;

  // Variables
  public isLoading = false;
  public appName = APP_NAME;
  public skills = SKILLS;
  
  registerForm = new FormGroup({
      fullName: new FormControl('',  [Validators.required]),
      email: new FormControl<string>('',  [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      skills: new FormControl<string[] | null>(null, [Validators.required])
  });
  

 /**
   * Handles the submission of the registration form.
   */
  onSubmit(): void {
    if (this.registerForm.invalid) {
      return;
    }

    const { email, password } = this.registerForm.value;

    // Save the user in sessionStorage after successful registration
    if (this.authService.register(email as string, password as string)) {
      console.log('Registration successful!');
      this.toMakeLogin(email as string, password as string);
    } else {
      console.log('Username already exists.');
    }
  }

  /**
   * Performs the login process after successful registration.
   * Navigates to the feed after login.
   * @param username - The username to log in.
   * @param password - The password to log in.
   */
  toMakeLogin(username: string, password: string): void {
    setTimeout(() => {
      if (this.authService.login(username, password)) {
        this.navigateToFeed();
      } else {
        console.log('Login failed');
      }
    }, 500);
  }

  /**
   * Navigates to the login page.
   */
  navigateToLogin(): void {
    this.navigateController.navigateToLoginFromAuthOutlet();
  }

  /**
   * Navigates to the feed page after successful login.
   */
  navigateToFeed(): void {
    this.navigateController.navigateToFeedFromPrincipalOutlet();
  }
}
