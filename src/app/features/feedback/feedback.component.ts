import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, state, style, transition, animate, stagger, query } from '@angular/animations';

// PrimeNG Imports
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { ProgressBarModule } from 'primeng/progressbar';
import { ChartModule } from 'primeng/chart';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { FeedbackService } from './feedback.service';
import { Subscription } from 'rxjs';

// Enhanced Interfaces
interface AdvancedFeedback {
  clientName: string;
  clientEmail: string;
  company?: string;
  industry?: string;
  projectName?: string;
  completionDate?: Date;
  servicesUsed?: string[];
  projectSize?: string;
  ratings: { [key: string]: number };
  highlights: string;
  improvements: string;
  recommendation: string;
  allowPublish: boolean;
  showCompany: boolean;
  contactForCase: boolean;
}

interface FeedbackType {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  count: number;
}

interface LiveStat {
  id: string;
  icon: string;
  value: number;
  displayValue: string;
  label: string;
  trend: number;
}

interface EmojiRating {
  emoji: string;
  label: string;
}

interface QuickFeedback {
  rating: number;
  comment: string;
}

interface Review {
  id: string;
  name: string;
  email: string;
  company?: string;
  position?: string;
  avatar?: string;
  rating: number;
  subject: string;
  message: string;
  projectName?: string;
  date: Date;
  tags: { name: string; type: string }[];
  verified: boolean;
  likes?: number;
  isLiked?: boolean;
  expanded?: boolean;
  metrics?: { label: string; value: number }[];
}

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    RatingModule,
    RippleModule,
    DialogModule,
    DropdownModule,
    MultiSelectModule,
    CalendarModule,
    CheckboxModule,
    ProgressBarModule,
    ChartModule,
    ToastModule
  ],
  providers: [MessageService],
  animations: [
    trigger('statsAnimation', [
      transition(':enter', [
        query('.stat-item', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger(150, [
            animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ])
      ])
    ]),
    trigger('cardHover', [
      state('normal', style({ transform: 'scale(1)' })),
      state('hovered', style({ transform: 'scale(1.02)' })),
      transition('normal <=> hovered', animate('300ms ease-in-out'))
    ]),
    trigger('typeSelection', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ]),
    trigger('reviewAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('400ms {{delay}}ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('impactAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-30px)' }),
        animate('500ms {{delay}}ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class FeedbackComponent implements OnInit, OnDestroy {
  @ViewChild('reviewsSection') reviewsSection!: ElementRef;

  // Original properties
  feedbacks: any[] = [];
  feedback: any = {
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

  // Enhanced properties
  selectedFeedbackType: string = '';
  showSuccessModal = false;
  showQuickFeedback = false;
  showShareModal = false;
  showAnalytics = false; // Toggle for admin view
  viewMode: 'grid' | 'list' = 'grid';
  
  // Advanced feedback
  advancedFeedback: AdvancedFeedback = {
    clientName: '',
    clientEmail: '',
    company: '',
    industry: '',
    projectName: '',
    completionDate: undefined,
    servicesUsed: [],
    projectSize: '',
    ratings: {},
    highlights: '',
    improvements: '',
    recommendation: '',
    allowPublish: false,
    showCompany: false,
    contactForCase: false
  };

  quickFeedback: QuickFeedback = {
    rating: 0,
    comment: ''
  };

  // Data arrays
  feedbackTypes: FeedbackType[] = [
    {
      id: 'project',
      title: 'Project Review',
      description: 'Share feedback about a completed project',
      longDescription: 'Provide detailed feedback about your project experience, helping us understand what worked well and areas for improvement.',
      icon: 'pi pi-briefcase',
      count: 127
    },
    {
      id: 'general',
      title: 'General Feedback',
      description: 'General thoughts about our services',
      longDescription: 'Share your overall experience with our company, services, and team.',
      icon: 'pi pi-comment',
      count: 89
    },
    {
      id: 'feature',
      title: 'Feature Request',
      description: 'Suggest new features or improvements',
      longDescription: 'Help us improve by suggesting new features or enhancements to our existing services.',
      icon: 'pi pi-lightbulb',
      count: 45
    }
  ];

  liveStats: LiveStat[] = [
    {
      id: 'clients',
      icon: 'pi pi-users',
      value: 500,
      displayValue: '500+',
      label: 'Happy Clients',
      trend: 12
    },
    {
      id: 'rating',
      icon: 'pi pi-star-fill',
      value: 4.9,
      displayValue: '4.9',
      label: 'Average Rating',
      trend: 5
    },
    {
      id: 'satisfaction',
      icon: 'pi pi-heart-fill',
      value: 98,
      displayValue: '98%',
      label: 'Satisfaction Rate',
      trend: 3
    },
    {
      id: 'projects',
      icon: 'pi pi-check-circle',
      value: 750,
      displayValue: '750+',
      label: 'Projects Delivered',
      trend: 18
    }
  ];

  emojiRatings: EmojiRating[] = [
    { emoji: '😞', label: 'Poor' },
    { emoji: '😐', label: 'Fair' },
    { emoji: '🙂', label: 'Good' },
    { emoji: '😊', label: 'Very Good' },
    { emoji: '🤩', label: 'Excellent' }
  ];

  // Dropdown options
  industries = [
    { label: 'Technology', value: 'technology' },
    { label: 'Healthcare', value: 'healthcare' },
    { label: 'Finance', value: 'finance' },
    { label: 'E-commerce', value: 'ecommerce' },
    { label: 'Education', value: 'education' },
    { label: 'Manufacturing', value: 'manufacturing' },
    { label: 'Other', value: 'other' }
  ];

  serviceOptions = [
    { label: 'Web Development', value: 'web' },
    { label: 'Mobile Development', value: 'mobile' },
    { label: 'UI/UX Design', value: 'design' },
    { label: 'Cloud Services', value: 'cloud' },
    { label: 'DevOps', value: 'devops' },
    { label: 'AI/ML', value: 'ai' },
    { label: 'Consulting', value: 'consulting' }
  ];

  projectSizes = [
    { label: 'Small (< 3 months)', value: 'small' },
    { label: 'Medium (3-6 months)', value: 'medium' },
    { label: 'Large (6-12 months)', value: 'large' },
    { label: 'Enterprise (12+ months)', value: 'enterprise' }
  ];

  ratingCategories = [
    { key: 'communication', name: 'Communication', description: 'How well did we communicate throughout the project?' },
    { key: 'quality', name: 'Code Quality', description: 'How would you rate the quality of our deliverables?' },
    { key: 'timeline', name: 'Timeline', description: 'Did we meet the agreed timelines?' },
    { key: 'support', name: 'Support', description: 'How responsive were we to your needs?' },
    { key: 'value', name: 'Value for Money', description: 'Do you feel you received good value?' }
  ];

  // Review filtering and display
  filteredReviews: Review[] = [];
  reviewFilters = {
    industry: '',
    rating: '',
    service: '',
    search: ''
  };

  industryFilters = [
    { label: 'Technology', value: 'technology' },
    { label: 'Healthcare', value: 'healthcare' },
    { label: 'Finance', value: 'finance' },
    { label: 'E-commerce', value: 'ecommerce' }
  ];

  ratingFilters = [
    { label: '5 Stars', value: '5' },
    { label: '4+ Stars', value: '4' },
    { label: '3+ Stars', value: '3' }
  ];

  serviceFilters = [
    { label: 'Web Development', value: 'web' },
    { label: 'Mobile Development', value: 'mobile' },
    { label: 'UI/UX Design', value: 'design' }
  ];

  sortOptions = [
    { label: 'Most Recent', value: 'recent' },
    { label: 'Highest Rated', value: 'rating' },
    { label: 'Most Helpful', value: 'helpful' }
  ];

  sortOption = 'recent';
  totalReviews = 0;
  displayedReviews = 0;
  loadingMoreReviews = false;

  // Impact metrics
  impactMetrics = [
    {
      title: 'Feature Implementations',
      description: 'Client suggestions that became reality',
      value: '85%',
      metric: 'Success Rate',
      progress: 85,
      icon: 'pi pi-cog'
    },
    {
      title: 'Response Time',
      description: 'Average time to address feedback',
      value: '< 24h',
      metric: 'Response Time',
      progress: 90,
      icon: 'pi pi-clock'
    },
    {
      title: 'Client Retention',
      description: 'Clients who return for more projects',
      value: '92%',
      metric: 'Retention Rate',
      progress: 92,
      icon: 'pi pi-refresh'
    }
  ];

  // Analytics data
  ratingChartData: any;
  trendsChartData: any;
  chartOptions: any;
  keyMetrics: any[] = [];

  // Subscriptions
  private subscriptions: Subscription[] = [];

  // Expose Math for template
  Math = Math;

  constructor(
    private feedbackService: FeedbackService,
    private messageService: MessageService
  ) {
    this.initializeRatings();
    this.initializeChartData();
  }

  ngOnInit() {
    this.loadFeedbacks();
    this.loadAnalyticsData();
    
    // Initialize with first feedback type
    if (this.feedbackTypes.length > 0) {
      this.selectFeedbackType(this.feedbackTypes[0].id);
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  // Initialization methods
  private initializeRatings() {
    this.ratingCategories.forEach(category => {
      this.advancedFeedback.ratings[category.key] = 0;
    });
  }

  private initializeChartData() {
    this.ratingChartData = {
      labels: ['5 Stars', '4 Stars', '3 Stars', '2 Stars', '1 Star'],
      datasets: [{
        data: [65, 20, 10, 3, 2],
        backgroundColor: ['#22c55e', '#84cc16', '#eab308', '#f97316', '#ef4444']
      }]
    };

    this.trendsChartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Average Rating',
        data: [4.2, 4.5, 4.7, 4.8, 4.9, 4.9],
        borderColor: '#22c55e',
        tension: 0.4
      }]
    };

    this.chartOptions = {
      responsive: true,
      maintainAspectRatio: false
    };

    this.keyMetrics = [
      { label: 'Average Rating', value: '4.9/5', trend: 'positive' },
      { label: 'Response Rate', value: '98%', trend: 'positive' },
      { label: 'Resolution Time', value: '2.3 days', trend: 'negative' }
    ];
  }

  // Data loading methods
  loadFeedbacks() {
    const subscription = this.feedbackService.getFeedbacks().subscribe(data => {
      this.feedbacks = data.map((fb: any) => ({
        ...fb,
        date: new Date(fb.date || Date.now()),
        tags: fb.tags || [],
        expanded: false,
        isLiked: false
      }));
      this.filteredReviews = [...this.feedbacks];
      this.totalReviews = this.feedbacks.length;
      this.displayedReviews = Math.min(6, this.totalReviews);
    });
    this.subscriptions.push(subscription);
  }

  loadAnalyticsData() {
    // Load analytics data for admin dashboard
    // This would typically come from an analytics service
  }

  // Feedback type selection
  selectFeedbackType(typeId: string) {
    this.selectedFeedbackType = typeId;
    this.resetAdvancedForm();
  }

  getCurrentFeedbackType(): FeedbackType | undefined {
    return this.feedbackTypes.find(type => type.id === this.selectedFeedbackType);
  }

  // Quick feedback methods
  openQuickFeedback() {
    this.showQuickFeedback = true;
    this.quickFeedback = { rating: 0, comment: '' };
  }

  closeQuickFeedback() {
    this.showQuickFeedback = false;
  }

  setQuickRating(rating: number) {
    this.quickFeedback.rating = rating;
  }

  submitQuickFeedback() {
    // Submit quick feedback
    this.messageService.add({
      severity: 'success',
      summary: 'Thank You!',
      detail: 'Your quick feedback has been submitted.'
    });
    this.closeQuickFeedback();
  }

  // Advanced feedback methods
  submitAdvancedFeedback() {
    this.isSubmitting = true;
    
    const feedbackData = {
      ...this.advancedFeedback,
      type: this.selectedFeedbackType,
      date: new Date()
    };

    const subscription = this.feedbackService.postAdvancedFeedback(feedbackData).subscribe({
      next: (response) => {
        this.showSuccessModal = true;
        this.resetAdvancedForm();
        this.isSubmitting = false;
        this.loadFeedbacks(); // Refresh the list
      },
      error: (error) => {
        console.error('Error submitting feedback:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to submit feedback. Please try again.'
        });
        this.isSubmitting = false;
      }
    });
    this.subscriptions.push(subscription);
  }

  saveDraft() {
    // Save feedback as draft
    localStorage.setItem('feedbackDraft', JSON.stringify(this.advancedFeedback));
    this.messageService.add({
      severity: 'info',
      summary: 'Draft Saved',
      detail: 'Your feedback has been saved as a draft.'
    });
  }

  resetAdvancedForm() {
    this.advancedFeedback = {
      clientName: '',
      clientEmail: '',
      company: '',
      industry: '',
      projectName: '',
      completionDate: undefined,
      servicesUsed: [],
      projectSize: '',
      ratings: {},
      highlights: '',
      improvements: '',
      recommendation: '',
      allowPublish: false,
      showCompany: false,
      contactForCase: false
    };
    this.initializeRatings();
  }

  // Review interaction methods
  toggleLike(review: Review) {
    review.isLiked = !review.isLiked;
    review.likes = (review.likes || 0) + (review.isLiked ? 1 : -1);
  }

  toggleExpand(review: Review) {
    review.expanded = !review.expanded;
  }

  shareReview(review: Review) {
    // Store the review to share and open modal
    this.showShareModal = true;
  }

  copyReviewLink() {
    navigator.clipboard.writeText(window.location.href);
    this.messageService.add({
      severity: 'success',
      summary: 'Copied!',
      detail: 'Review link copied to clipboard.'
    });
    this.showShareModal = false;
  }

  shareOnLinkedIn() {
    // Implement LinkedIn sharing
    this.showShareModal = false;
  }

  shareOnTwitter() {
    // Implement Twitter sharing
    this.showShareModal = false;
  }

  // Filtering and sorting methods
  filterReviews() {
    this.filteredReviews = this.feedbacks.filter(review => {
      if (this.reviewFilters.industry && review.industry !== this.reviewFilters.industry) return false;
      if (this.reviewFilters.rating && review.rating < parseInt(this.reviewFilters.rating)) return false;
      if (this.reviewFilters.service && !review.services?.includes(this.reviewFilters.service)) return false;
      return true;
    });
    this.displayedReviews = Math.min(6, this.filteredReviews.length);
  }

  searchReviews(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredReviews = this.feedbacks.filter(review =>
      review.name.toLowerCase().includes(searchTerm) ||
      review.subject.toLowerCase().includes(searchTerm) ||
      review.message.toLowerCase().includes(searchTerm)
    );
    this.displayedReviews = Math.min(6, this.filteredReviews.length);
  }

  sortReviews() {
    switch (this.sortOption) {
      case 'recent':
        this.filteredReviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
      case 'rating':
        this.filteredReviews.sort((a, b) => b.rating - a.rating);
        break;
      case 'helpful':
        this.filteredReviews.sort((a, b) => (b.likes || 0) - (a.likes || 0));
        break;
    }
  }

  setViewMode(mode: 'grid' | 'list') {
    this.viewMode = mode;
  }

  loadMoreReviews() {
    this.loadingMoreReviews = true;
    setTimeout(() => {
      this.displayedReviews = Math.min(this.displayedReviews + 6, this.filteredReviews.length);
      this.loadingMoreReviews = false;
    }, 500);
  }

  // Navigation methods
  scrollToReviews() {
    this.reviewsSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  submitAnother() {
    this.showSuccessModal = false;
    this.resetAdvancedForm();
  }

  viewAllReviews() {
    this.showSuccessModal = false;
    this.scrollToReviews();
  }

  // Utility methods
  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
  }

  trackByStatId(index: number, stat: LiveStat): string {
    return stat.id;
  }

  trackByTypeId(index: number, type: FeedbackType): string {
    return type.id;
  }

  trackByReviewId(index: number, review: Review): string {
    return review.id;
  }

  // Legacy methods (for backward compatibility)
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
    const subscription = this.feedbackService.postFeedback(feedbackData).subscribe({
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
    this.subscriptions.push(subscription);
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

  getRatingText(rating: number): string {
    const ratingTexts = {
      0: '',
      1: 'Poor',
      2: 'Fair', 
      3: 'Good',
      4: 'Very Good',
      5: 'Excellent'
    };
    return ratingTexts[rating as keyof typeof ratingTexts] || '';
  }

  // Legacy benefits property for backward compatibility
  benefits = [
    {
      icon: 'pi pi-chart-line',
      title: 'Continuous Improvement',
      description: 'Your insights help us enhance our development processes and deliver better solutions tailored to your needs.'
    },
    {
      icon: 'pi pi-lightbulb',
      title: 'Innovation Drive',
      description: 'Your feedback inspires new features and technologies that benefit all our clients and push industry standards.'
    },
    {
      icon: 'pi pi-users',
      title: 'Better Collaboration',
      description: 'Your suggestions strengthen our partnership and ensure we meet your exact requirements and expectations.'
    },
    {
      icon: 'pi pi-heart',
      title: 'Client Success',
      description: 'Your success stories motivate us and help other clients understand the value we can bring to their projects.'
    }
  ];
}