import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { RecoveryService } from './service/recovery.service';
import { LucideAngularModule, Mail, Phone } from 'lucide-angular';

@Component({
  selector: 'app-recovery-password',
  standalone: true,
  imports: [TabViewModule, InputTextModule, ButtonModule, ReactiveFormsModule, CommonModule, LucideAngularModule],
  templateUrl: './recovery-password.component.html',
  styleUrl: './recovery-password.component.scss'
})
export class RecoveryPasswordComponent {
  readonly mail = Mail;
  readonly phone = Phone;

  private authService = inject(RecoveryService);
  private messageService = inject(MessageService);
  selectedMethod = signal<'email' | 'phone'>('email'); // Track selected recovery method
  loading = signal(false); // Track loading state
  recoveryForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^\(\d{3}\) \d{3}-\d{4}$/)]), // Add phone validation if needed
  });;

 // Switch between email and phone methods
 switchMethod(method: 'email' | 'phone') {
  this.selectedMethod.set(method);
  this.recoveryForm.reset(); // Reset form when switching methods
}
}
