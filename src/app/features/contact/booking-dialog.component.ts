import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SelectButtonModule } from 'primeng/selectbutton';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-booking-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    SelectButtonModule,
    RippleModule
  ],
  providers: [MessageService],
  templateUrl: './booking-dialog.component.html',
  styleUrls: ['./booking-dialog.component.scss']
})
export class BookingDialogComponent {
  bookingForm: FormGroup;
  isSubmitting = false;

  services = [
    { name: 'Web Development', code: 'web' },
    { name: 'Mobile App Development', code: 'mobile' },
    { name: 'Cloud Solutions', code: 'cloud' },
    { name: 'AI & Machine Learning', code: 'ai' },
    { name: 'DevOps & Infrastructure', code: 'devops' },
    { name: 'UI/UX Design', code: 'design' }
  ];

  timeSlots = [
    { name: 'Morning (9AM-12PM)', value: 'morning' },
    { name: 'Afternoon (1PM-5PM)', value: 'afternoon' },
    { name: 'Evening (6PM-9PM)', value: 'evening' }
  ];

  constructor(
    private fb: FormBuilder,
    private ref: DynamicDialogRef,
    private messageService: MessageService
  ) {
    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
      phone: [''],
      service: [null, Validators.required],
      preferredTime: [null, Validators.required],
      message: ['']
    });
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      this.isSubmitting = true;
      // Simulate API call
      setTimeout(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Meeting Scheduled',
          detail: 'We will contact you shortly to confirm your appointment.'
        });
        this.ref.close({ success: true, data: this.bookingForm.value });
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