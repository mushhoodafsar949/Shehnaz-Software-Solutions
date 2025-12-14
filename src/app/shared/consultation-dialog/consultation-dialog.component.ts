import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { StepsModule } from 'primeng/steps';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-consultation-dialog',
  templateUrl: './consultation-dialog.component.html',
  styleUrls: ['./consultation-dialog.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    RippleModule,
    StepsModule,
    DropdownModule,
    InputTextModule,
    InputTextareaModule,
    ToastModule
  ],
  providers: [MessageService]
})
export class ConsultationDialogComponent implements OnInit {
  consultationForm: FormGroup;
  currentStep = 0;
  isSubmitting = false;

  steps = [
    { label: 'Project Type' },
    { label: 'Requirements' },
    { label: 'Contact Info' }
  ];

  projectTypes = [
    { label: 'Web Application', value: 'web' },
    { label: 'Mobile App', value: 'mobile' },
    { label: 'Cloud Solution', value: 'cloud' },
    { label: 'AI/ML Project', value: 'ai' },
    { label: 'DevOps Setup', value: 'devops' },
    { label: 'UI/UX Design', value: 'design' }
  ];

  budgetRanges = [
    { label: 'Under $10,000', value: '10k' },
    { label: '$10,000 - $25,000', value: '25k' },
    { label: '$25,000 - $50,000', value: '50k' },
    { label: '$50,000+', value: '50k+' }
  ];

  timelines = [
    { label: '1-3 months', value: '3m' },
    { label: '3-6 months', value: '6m' },
    { label: '6-12 months', value: '12m' },
    { label: '12+ months', value: '12m+' }
  ];

  constructor(
    private fb: FormBuilder,
    private ref: DynamicDialogRef,
    private messageService: MessageService
  ) {
    this.consultationForm = this.fb.group({
      projectType: ['', Validators.required],
      projectDescription: ['', Validators.required],
      budget: ['', Validators.required],
      timeline: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
      phone: ['']
    });
  }

  ngOnInit() {}

  nextStep() {
    if (this.isStepValid()) {
      this.currentStep++;
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Required Fields',
        detail: 'Please fill in all required fields.'
      });
    }
  }

  previousStep() {
    this.currentStep--;
  }

  isStepValid(): boolean {
    switch (this.currentStep) {
      case 0:
        return !!this.consultationForm.get('projectType')?.valid;
      case 1:
        return !!this.consultationForm.get('projectDescription')?.valid &&
               !!this.consultationForm.get('budget')?.valid &&
               !!this.consultationForm.get('timeline')?.valid;
      case 2:
        return !!this.consultationForm.get('name')?.valid &&
               !!this.consultationForm.get('email')?.valid;
      default:
        return true;
    }
  }

  onSubmit() {
    if (this.consultationForm.valid) {
      this.isSubmitting = true;
      // Simulate API call
      setTimeout(() => {
        this.ref.close({ success: true, data: this.consultationForm.value });
      }, 1500);
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Form Invalid',
        detail: 'Please fill in all required fields correctly.'
      });
    }
  }

  onCancel() {
    this.ref.close();
  }
}