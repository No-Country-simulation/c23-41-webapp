import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavigateController } from '../../../../../shared/controllers/navigate.controller';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { StepsModule } from 'primeng/steps';
import { CardModule } from 'primeng/card';
import { BookMarked, CheckCircle2, ChevronLeft, ChevronRight, LucideAngularModule } from 'lucide-angular';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { StepperModule } from 'primeng/stepper';
import { CommonModule } from '@angular/common';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { PasswordModule } from 'primeng/password';
import { MultiSelectModule } from 'primeng/multiselect';
import { SKILLS } from '../../../../../shared/constants/skills';

@Component({
  selector: 'app-register-details',
  standalone: true,
  imports: [
    ReactiveFormsModule, CommonModule, InputTextModule, InputIconModule, StepsModule, IconFieldModule, LucideAngularModule, ButtonModule, StepperModule , PasswordModule, CardModule, MultiSelectModule, LucideAngularModule, InputTextareaModule],
  templateUrl: './register-details.component.html',
  styleUrl: './register-details.component.scss'
})
export class RegisterDetailsComponent {
  readonly checkCircle2 = CheckCircle2;
  readonly chevronRight = ChevronRight;
  readonly chevronLeft = ChevronLeft;
  readonly skills = SKILLS;

  navigationController = inject(NavigateController);
  currentStep = 0;
  submitted = false;
  loading = false;

  detailsForm = new FormGroup({
    country: new FormControl('', [Validators.required, Validators.minLength(3)]),
    city: new FormControl('', [Validators.required, Validators.minLength(3)]),
    university: new FormControl(''),
    career: new FormControl(''),
    skillsWanted: new FormControl(''),
    skillsHave: new FormControl('')
  });

  steps = [
    { id: 'location', label: 'Location' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' }
  ];

  getStepNumberClass(index: number): string {
    return `
      ${index === this.currentStep ? 'bg-[#b9ff66]' : index < this.currentStep ? 'bg-[#b9ff66]' : 'bg-gray-200'} 
      ${index === this.currentStep ? 'text-black' : index < this.currentStep ? 'text-black' : 'text-gray-600'}
    `;
  }

  getStepLabelClass(index: number): string {
    return `text-sm ${index === this.currentStep ? 'text-black font-medium' : 'text-gray-600'}`;
  }

  skip() {
    this.navigationController.navigateToFeedFromPrincipalOutlet();
  }

  nextStep(): void {
    if (this.currentStep < this.steps.length - 1) {
      if (this.currentStep === 0) {
        if (this.detailsForm.get('country')?.valid && this.detailsForm.get('city')?.valid) {
          this.currentStep++;
        } else {
          this.submitted = true;
        }
      } else {
        this.currentStep++;
      }
    }
  }

  previousStep(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
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
