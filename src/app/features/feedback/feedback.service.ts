import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

interface AdvancedFeedback {
  id?: string;
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
  type?: string;
  date?: Date;
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
  industry?: string;
  services?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private feedbacks: Review[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@techcorp.com',
      company: 'TechCorp Solutions',
      position: 'CTO',
      avatar: '',
      rating: 5,
      subject: 'Outstanding E-commerce Platform Development',
      message: 'Nest Tech Solutions exceeded our expectations in every way. They delivered a robust, scalable e-commerce platform that has increased our sales by 150%. The team was professional, responsive, and truly understood our business needs. The code quality is exceptional, and the ongoing support has been fantastic. I would highly recommend them for any serious software development project.',
      projectName: 'E-commerce Platform Rebuild',
      date: new Date('2024-01-15'),
      tags: [
        { name: 'Excellent', type: 'rating' },
        { name: 'E-commerce', type: 'service' },
        { name: 'Scalable', type: 'feature' }
      ],
      verified: true,
      likes: 12,
      isLiked: false,
      expanded: false,
      metrics: [
        { label: 'Communication', value: 5 },
        { label: 'Code Quality', value: 5 },
        { label: 'Timeline', value: 4 },
        { label: 'Support', value: 5 },
        { label: 'Value', value: 5 }
      ],
      industry: 'ecommerce',
      services: ['web', 'design', 'cloud']
    },
    {
      id: '2',
      name: 'Michael Chen',
      email: 'mchen@healthplus.com',
      company: 'HealthPlus Medical',
      position: 'IT Director',
      avatar: '',
      rating: 5,
      subject: 'Revolutionary Healthcare Management System',
      message: 'The healthcare management system developed by Nest Tech Solutions has transformed our operations. Patient scheduling is now seamless, and our staff productivity has increased significantly. The HIPAA compliance was handled perfectly, and the system integrates beautifully with our existing infrastructure.',
      projectName: 'Healthcare Management System',
      date: new Date('2024-01-10'),
      tags: [
        { name: 'Excellent', type: 'rating' },
        { name: 'Healthcare', type: 'industry' },
        { name: 'HIPAA Compliant', type: 'feature' }
      ],
      verified: true,
      likes: 8,
      isLiked: false,
      expanded: false,
      metrics: [
        { label: 'Communication', value: 5 },
        { label: 'Code Quality', value: 5 },
        { label: 'Timeline', value: 5 },
        { label: 'Support', value: 4 },
        { label: 'Value', value: 5 }
      ],
      industry: 'healthcare',
      services: ['web', 'mobile', 'cloud']
    },
    {
      id: '3',
      name: 'Emma Rodriguez',
      email: 'e.rodriguez@financeflow.com',
      company: 'FinanceFlow Inc',
      position: 'Product Manager',
      avatar: '',
      rating: 4,
      subject: 'Solid Financial Dashboard Development',
      message: 'Great experience working with Nest Tech Solutions on our financial dashboard. The real-time analytics and reporting features are exactly what we needed. The team was knowledgeable about financial regulations and security requirements. Minor delays in delivery, but the quality made up for it.',
      projectName: 'Financial Analytics Dashboard',
      date: new Date('2024-01-05'),
      tags: [
        { name: 'Very Good', type: 'rating' },
        { name: 'Finance', type: 'industry' },
        { name: 'Real-time', type: 'feature' }
      ],
      verified: true,
      likes: 6,
      isLiked: false,
      expanded: false,
      metrics: [
        { label: 'Communication', value: 4 },
        { label: 'Code Quality', value: 5 },
        { label: 'Timeline', value: 3 },
        { label: 'Support', value: 4 },
        { label: 'Value', value: 4 }
      ],
      industry: 'finance',
      services: ['web', 'ai', 'cloud']
    },
    {
      id: '4',
      name: 'David Kim',
      email: 'david@startupxyz.com',
      company: 'StartupXYZ',
      position: 'Founder & CEO',
      avatar: '',
      rating: 5,
      subject: 'MVP Development That Secured Our Funding',
      message: 'Nest Tech Solutions helped us build an MVP that directly contributed to securing our Series A funding. Their understanding of startup needs and ability to work within tight budgets while maintaining quality is remarkable. The product they delivered was investor-ready and technically sound.',
      projectName: 'SaaS MVP Development',
      date: new Date('2023-12-28'),
      tags: [
        { name: 'Excellent', type: 'rating' },
        { name: 'MVP', type: 'service' },
        { name: 'Startup', type: 'company-size' }
      ],
      verified: true,
      likes: 15,
      isLiked: false,
      expanded: false,
      metrics: [
        { label: 'Communication', value: 5 },
        { label: 'Code Quality', value: 4 },
        { label: 'Timeline', value: 5 },
        { label: 'Support', value: 5 },
        { label: 'Value', value: 5 }
      ],
      industry: 'technology',
      services: ['web', 'mobile', 'design']
    },
    {
      id: '5',
      name: 'Jennifer Walsh',
      email: 'j.walsh@edutech.org',
      company: 'EduTech Solutions',
      position: 'VP of Technology',
      avatar: '',
      rating: 4,
      subject: 'Comprehensive Learning Management System',
      message: 'The learning management system exceeded our expectations in terms of functionality and user experience. Students and teachers love the intuitive interface. The system handles our 10,000+ users without any performance issues. Great work on accessibility features too.',
      projectName: 'Learning Management System',
      date: new Date('2023-12-20'),
      tags: [
        { name: 'Very Good', type: 'rating' },
        { name: 'Education', type: 'industry' },
        { name: 'Scalable', type: 'feature' }
      ],
      verified: true,
      likes: 9,
      isLiked: false,
      expanded: false,
      metrics: [
        { label: 'Communication', value: 4 },
        { label: 'Code Quality', value: 5 },
        { label: 'Timeline', value: 4 },
        { label: 'Support', value: 4 },
        { label: 'Value', value: 4 }
      ],
      industry: 'education',
      services: ['web', 'design', 'cloud']
    },
    {
      id: '6',
      name: 'Robert Taylor',
      email: 'rtaylor@manufacturing.com',
      company: 'Advanced Manufacturing Co',
      position: 'Operations Director',
      avatar: '',
      rating: 5,
      subject: 'IoT Integration That Transformed Our Operations',
      message: 'The IoT dashboard and manufacturing analytics system has revolutionized how we monitor our production lines. Real-time insights have helped us reduce downtime by 40% and improve overall efficiency. The team understood our complex requirements and delivered beyond expectations.',
      projectName: 'IoT Manufacturing Dashboard',
      date: new Date('2023-12-15'),
      tags: [
        { name: 'Excellent', type: 'rating' },
        { name: 'IoT', type: 'technology' },
        { name: 'Manufacturing', type: 'industry' }
      ],
      verified: true,
      likes: 11,
      isLiked: false,
      expanded: false,
      metrics: [
        { label: 'Communication', value: 5 },
        { label: 'Code Quality', value: 5 },
        { label: 'Timeline', value: 4 },
        { label: 'Support', value: 5 },
        { label: 'Value', value: 5 }
      ],
      industry: 'manufacturing',
      services: ['web', 'ai', 'cloud', 'devops']
    }
  ];

  private analytics = {
    ratingDistribution: [65, 20, 10, 3, 2],
    monthlyTrends: [4.2, 4.5, 4.7, 4.8, 4.9, 4.9],
    keyMetrics: [
      { label: 'Average Rating', value: '4.8/5', trend: 'positive' },
      { label: 'Response Rate', value: '96%', trend: 'positive' },
      { label: 'Resolution Time', value: '2.1 days', trend: 'positive' }
    ]
  };

  constructor() {
    // Initialize feedback data with proper dates and IDs
    this.feedbacks = this.feedbacks.map((feedback, index) => ({
      ...feedback,
      id: feedback.id || (index + 1).toString(),
      date: feedback.date || new Date()
    }));
  }

  getFeedbacks(): Observable<Review[]> {
    return of(this.feedbacks).pipe(delay(500)); // Simulate API delay
  }

  getFeedbackById(id: string): Observable<Review | undefined> {
    const feedback = this.feedbacks.find(f => f.id === id);
    return of(feedback).pipe(delay(300));
  }

  postFeedback(feedback: any): Observable<any> {
    const newFeedback = {
      ...feedback,
      id: Date.now().toString(),
      date: new Date(),
      verified: false,
      likes: 0,
      isLiked: false,
      expanded: false
    };
    this.feedbacks.unshift(newFeedback);
    return of(newFeedback).pipe(delay(1000)); // Simulate submission delay
  }

  postAdvancedFeedback(feedback: AdvancedFeedback): Observable<any> {
    const newFeedback: Review = {
      id: Date.now().toString(),
      name: feedback.clientName,
      email: feedback.clientEmail,
      company: feedback.company,
      position: '', // Could be extracted from additional fields
      avatar: '',
      rating: this.calculateOverallRating(feedback.ratings),
      subject: `${feedback.type} feedback from ${feedback.company || feedback.clientName}`,
      message: this.formatFeedbackMessage(feedback),
      projectName: feedback.projectName,
      date: new Date(),
      tags: this.generateTagsFromFeedback(feedback),
      verified: false, // New feedback starts unverified
      likes: 0,
      isLiked: false,
      expanded: false,
      metrics: this.formatMetrics(feedback.ratings),
      industry: feedback.industry,
      services: feedback.servicesUsed
    };

    this.feedbacks.unshift(newFeedback);
    return of(newFeedback).pipe(delay(1500)); // Simulate processing delay
  }

  updateFeedbackLikes(feedbackId: string, increment: boolean): Observable<Review | undefined> {
    const feedback = this.feedbacks.find(f => f.id === feedbackId);
    if (feedback) {
      feedback.likes = (feedback.likes || 0) + (increment ? 1 : -1);
      feedback.isLiked = increment;
    }
    return of(feedback).pipe(delay(200));
  }

  getAnalytics(): Observable<any> {
    return of(this.analytics).pipe(delay(800));
  }

  searchFeedbacks(query: string): Observable<Review[]> {
    const filtered = this.feedbacks.filter(feedback =>
      feedback.name.toLowerCase().includes(query.toLowerCase()) ||
      feedback.subject.toLowerCase().includes(query.toLowerCase()) ||
      feedback.message.toLowerCase().includes(query.toLowerCase()) ||
      feedback.company?.toLowerCase().includes(query.toLowerCase())
    );
    return of(filtered).pipe(delay(400));
  }

  filterFeedbacks(filters: any): Observable<Review[]> {
    let filtered = [...this.feedbacks];

    if (filters.industry) {
      filtered = filtered.filter(f => f.industry === filters.industry);
    }

    if (filters.rating) {
      const minRating = parseInt(filters.rating);
      filtered = filtered.filter(f => f.rating >= minRating);
    }

    if (filters.service) {
      filtered = filtered.filter(f => f.services?.includes(filters.service));
    }

    if (filters.verified !== undefined) {
      filtered = filtered.filter(f => f.verified === filters.verified);
    }

    return of(filtered).pipe(delay(600));
  }

  // Helper methods
  private calculateOverallRating(ratings: { [key: string]: number }): number {
    const values = Object.values(ratings);
    if (values.length === 0) return 0;
    return Math.round(values.reduce((sum, rating) => sum + rating, 0) / values.length);
  }

  private formatFeedbackMessage(feedback: AdvancedFeedback): string {
    const parts = [];
    
    if (feedback.highlights) {
      parts.push(`What we did well: ${feedback.highlights}`);
    }
    
    if (feedback.improvements) {
      parts.push(`Areas for improvement: ${feedback.improvements}`);
    }
    
    if (feedback.recommendation) {
      parts.push(`Recommendation: ${feedback.recommendation}`);
    }

    return parts.join('\n\n');
  }

  private generateTagsFromFeedback(feedback: AdvancedFeedback): { name: string; type: string }[] {
    const tags: { name: string; type: string }[] = [];
    
    const overallRating = this.calculateOverallRating(feedback.ratings);
    
    if (overallRating >= 5) {
      tags.push({ name: 'Excellent', type: 'rating' });
    } else if (overallRating >= 4) {
      tags.push({ name: 'Very Good', type: 'rating' });
    } else if (overallRating >= 3) {
      tags.push({ name: 'Good', type: 'rating' });
    }

    if (feedback.industry) {
      tags.push({ name: feedback.industry, type: 'industry' });
    }

    if (feedback.servicesUsed) {
      feedback.servicesUsed.forEach(service => {
        tags.push({ name: service, type: 'service' });
      });
    }

    if (feedback.allowPublish) {
      tags.push({ name: 'Approved for Publishing', type: 'status' });
    }

    if (feedback.contactForCase) {
      tags.push({ name: 'Case Study Candidate', type: 'status' });
    }

    return tags;
  }

  private formatMetrics(ratings: { [key: string]: number }): { label: string; value: number }[] {
    return Object.entries(ratings).map(([key, value]) => ({
      label: this.formatMetricLabel(key),
      value: value
    }));
  }

  private formatMetricLabel(key: string): string {
    const labelMap: { [key: string]: string } = {
      communication: 'Communication',
      quality: 'Code Quality',
      timeline: 'Timeline',
      support: 'Support',
      value: 'Value for Money'
    };
    return labelMap[key] || key.charAt(0).toUpperCase() + key.slice(1);
  }

  // Mock data for development
  generateMockReviews(count: number = 10): Observable<Review[]> {
    const mockNames = ['Alex Johnson', 'Maria Garcia', 'James Wilson', 'Lisa Chen', 'David Brown'];
    const mockCompanies = ['Tech Innovators', 'Digital Solutions', 'Future Systems', 'Smart Enterprises', 'Global Corp'];
    const mockIndustries = ['technology', 'healthcare', 'finance', 'education', 'manufacturing'];
    const mockServices = ['web', 'mobile', 'design', 'cloud', 'ai', 'devops'];

    const mockReviews: Review[] = Array.from({ length: count }, (_, index) => ({
      id: `mock-${Date.now()}-${index}`,
      name: mockNames[Math.floor(Math.random() * mockNames.length)],
      email: `user${index}@example.com`,
      company: mockCompanies[Math.floor(Math.random() * mockCompanies.length)],
      position: 'Senior Developer',
      rating: Math.floor(Math.random() * 2) + 4, // 4-5 stars
      subject: `Great experience with project ${index + 1}`,
      message: `This is a sample review message for project ${index + 1}. The team was professional and delivered quality work.`,
      projectName: `Project ${index + 1}`,
      date: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000), // Last 90 days
      tags: [
        { name: 'Excellent', type: 'rating' },
        { name: mockIndustries[Math.floor(Math.random() * mockIndustries.length)], type: 'industry' }
      ],
      verified: Math.random() > 0.3,
      likes: Math.floor(Math.random() * 20),
      isLiked: false,
      expanded: false,
      industry: mockIndustries[Math.floor(Math.random() * mockIndustries.length)],
      services: [mockServices[Math.floor(Math.random() * mockServices.length)]]
    }));

    return of(mockReviews).pipe(delay(1000));
  }
} 