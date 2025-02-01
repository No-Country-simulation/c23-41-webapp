import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavigateController } from '../../../../../shared/controllers/navigate.controller';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { StepsModule } from 'primeng/steps';
import { CardModule } from 'primeng/card';
import { LucideAngularModule } from 'lucide-angular';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'app-register-details',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, ButtonModule, StepsModule, CardModule, LucideAngularModule, InputTextareaModule],
  templateUrl: './register-details.component.html',
  styleUrl: './register-details.component.scss'
})
export class RegisterDetailsComponent {
  navigationController = inject(NavigateController);
  submitted = false;
  loading = false;
  currentStep = 0;

  detailsForm = new FormGroup({
    country: new FormControl('', [Validators.required, Validators.minLength(3)]),
    city: new FormControl('', [Validators.required, Validators.minLength(3)]),
    university: new FormControl(''),
    career: new FormControl(''),
    skillsWanted: new FormControl(''),
    skillsHave: new FormControl('')
  });

  steps = [
    { label: 'Location' },
    { label: 'Education' },
    { label: 'Skills' }
  ];

  nextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  skip() {
    this.navigationController.navigateToFeedFromPrincipalOutlet();
  }

  onSubmit() {
    this.submitted = true;
    if (this.detailsForm.valid) {
      this.loading = true;
      // Simulate API call
      setTimeout(() => {
        this.loading = false;
        this.navigationController.navigateToFeedFromPrincipalOutlet();
      }, 1000);
    }
  }
}
