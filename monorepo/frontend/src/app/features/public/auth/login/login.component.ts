import { Component, inject } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { LucideAngularModule, BookOpen } from 'lucide-angular';
import {FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { NavigateController } from '../../../../shared/controllers/navigate.controller';
import { AnimationHandler } from '../../../../shared/animations/animation-handler';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardModule, ButtonModule, LucideAngularModule, InputTextModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  animations: AnimationHandler.getFadeInOut()
})
export class LoginComponent {
  readonly navigateController = inject(NavigateController);
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
    console.log(this.loginForm.value);
  }
}
