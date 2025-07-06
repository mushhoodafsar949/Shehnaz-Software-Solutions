import { Component, OnInit } from '@angular/core';
import { FeedbackService } from './feedback.service';

interface Feedback {
  name: string;
  email: string;
  subject: string;
  message: string;
  rating: number;
  token: string;
  date?: Date;
  tags?: string[];
}

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
  standalone: false
})
export class FeedbackComponent implements OnInit {
  feedbacks: any[] = [];
  feedback: Feedback = {
    name: '',
    email: '',
    subject: '',
    message: '',
    rating: 0,
    token: ''
  };
  isSubmitting = false;
  showSuccess = false;
  tokenError = '';
  readonly VALID_TOKEN = 'FEED2024';

  constructor(private feedbackService: FeedbackService) {}

  ngOnInit() {
    this.loadFeedbacks();
  }

  loadFeedbacks() {
    this.feedbackService.getFeedbacks().subscribe(data => {
      this.feedbacks = data.map((fb: any) => ({
        ...fb,
        date: new Date(fb.date || Date.now()),
        tags: fb.tags || []
      }));
    });
  }

  setRating(rating: number) {
    this.feedback.rating = rating;
  }

  submitFeedback() {
    if (this.isSubmitting) return;
    this.tokenError = '';
    if (this.feedback.token !== this.VALID_TOKEN) {
      this.tokenError = 'Invalid feedback token.';
      return;
    }
    this.isSubmitting = true;
    const feedbackData = {
      ...this.feedback,
      date: new Date(),
      tags: this.generateTags(this.feedback.rating)
    };
    this.feedbackService.postFeedback(feedbackData).subscribe({
      next: (newFb) => {
        this.feedbacks.unshift(newFb);
        this.resetForm();
        this.showSuccessMessage();
        this.isSubmitting = false;
      },
      error: (error) => {
        console.error('Error submitting feedback:', error);
        this.isSubmitting = false;
      }
    });
  }

  private generateTags(rating: number): string[] {
    const tags = [];
    if (rating >= 4) tags.push('Excellent');
    if (rating >= 3) tags.push('Good');
    if (rating <= 2) tags.push('Needs Improvement');
    return tags;
  }

  private resetForm() {
    this.feedback = {
      name: '',
      email: '',
      subject: '',
      message: '',
      rating: 0,
      token: ''
    };
  }

  private showSuccessMessage() {
    this.showSuccess = true;
    setTimeout(() => {
      this.showSuccess = false;
    }, 5000);
  }

  closeSuccess() {
    this.showSuccess = false;
  }
} 