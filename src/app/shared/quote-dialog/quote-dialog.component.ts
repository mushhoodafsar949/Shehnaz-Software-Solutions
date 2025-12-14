import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quote-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    SelectButtonModule,
    InputTextareaModule,
    CheckboxModule
  ],
  providers: [MessageService],
  templateUrl: './quote-dialog.component.html',
  styleUrls: ['./quote-dialog.component.scss']
})
export class QuoteDialogComponent implements OnInit {
  quoteForm: FormGroup;
  isSubmitting = false;

  services = [
    { name: 'Web Development', code: 'web' },
    { name: 'Mobile App Development', code: 'mobile' },
    { name: 'Cloud Solutions', code: 'cloud' },
    { name: 'AI & Machine Learning', code: 'ai' },
    { name: 'DevOps & Infrastructure', code: 'devops' },
    { name: 'UI/UX Design', code: 'design' }
  ];

  budgetRanges = [
    { name: 'Under $10,000', value: '10k' },
    { name: '$10,000 - $25,000', value: '25k' },
    { name: '$25,000 - $50,000', value: '50k' },
    { name: '$50,000+', value: '50k+' }
  ];

  timelineOptions = [
    { name: 'ASAP (1-2 weeks)', value: 'asap' },
    { name: 'Within 1 month', value: '1month' },
    { name: '2-3 months', value: '3months' },
    { name: '3-6 months', value: '6months' },
    { name: 'Flexible', value: 'flexible' }
  ];

  additionalServices = [
    { 
      name: 'UI/UX Design', 
      description: 'Complete design system and user experience',
      icon: 'pi pi-palette',
      selected: false 
    },
    { 
      name: 'Quality Assurance', 
      description: 'Comprehensive testing and QA services',
      icon: 'pi pi-check-circle',
      selected: false 
    },
    { 
      name: 'DevOps & Deployment', 
      description: 'CI/CD setup and cloud deployment',
      icon: 'pi pi-cloud-upload',
      selected: false 
    },
    { 
      name: 'Training & Support', 
      description: 'Team training and ongoing support',
      icon: 'pi pi-graduation-cap',
      selected: false 
    },
    { 
      name: 'API Development', 
      description: 'Custom API design and development',
      icon: 'pi pi-code',
      selected: false 
    },
    { 
      name: 'Data Analytics', 
      description: 'Analytics integration and reporting',
      icon: 'pi pi-chart-line',
      selected: false 
    }
  ];

  constructor(
    private fb: FormBuilder,
    private ref: DynamicDialogRef,
    private messageService: MessageService
  ) {
    this.quoteForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
      phone: [''],
      service: [null, Validators.required],
      budget: [null, Validators.required],
      timeline: [null],
      requirements: ['', Validators.required]
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.quoteForm.valid) {
      this.isSubmitting = true;
      // Simulate API call
      setTimeout(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Quote Request Submitted',
          detail: 'We will contact you shortly with a detailed quote.'
        });
        this.ref.close({ success: true, data: this.quoteForm.value });
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

  toggleAdditionalService(service: any) {
    service.selected = !service.selected;
  }
}