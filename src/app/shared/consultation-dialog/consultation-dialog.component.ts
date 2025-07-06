import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export interface ConsultationQuestion {
  id: string;
  category: string;
  question: string;
  type: 'radio' | 'checkbox' | 'text' | 'select' | 'number';
  options?: string[];
  weight: number;
}

export interface ConsultationResult {
  score: number;
  recommendation: string;
  services: string[];
  estimatedBudget: string;
  timeline: string;
  priority: 'low' | 'medium' | 'high';
  nextSteps: string[];
}

@Component({
  selector: 'app-consultation-dialog',
  templateUrl: './consultation-dialog.component.html',
  styleUrls: ['./consultation-dialog.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatProgressBarModule,
    MatChipsModule,
    FormsModule,
    MatRadioModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    ReactiveFormsModule
  ]
})
export class ConsultationDialogComponent implements OnInit {
  questions: ConsultationQuestion[] = [
    // Business Overview
    {
      id: 'business_type',
      category: 'Business Overview',
      question: 'What type of business do you operate?',
      type: 'select',
      options: ['Startup', 'Small Business (1-50 employees)', 'Medium Business (51-200 employees)', 'Large Enterprise (200+ employees)', 'Non-profit', 'Government', 'Educational Institution'],
      weight: 5
    },
    {
      id: 'industry',
      category: 'Business Overview',
      question: 'What industry does your business operate in?',
      type: 'select',
      options: ['Technology', 'Healthcare', 'Finance', 'E-commerce', 'Manufacturing', 'Education', 'Real Estate', 'Entertainment', 'Food & Beverage', 'Transportation', 'Other'],
      weight: 3
    },
    {
      id: 'project_scope',
      category: 'Project Overview',
      question: 'What is the scope of your project?',
      type: 'select',
      options: ['New application development', 'Existing system upgrade', 'System integration', 'Digital transformation', 'Maintenance & support', 'Consultation only'],
      weight: 8
    },
    {
      id: 'budget_range',
      category: 'Budget & Timeline',
      question: 'What is your budget range for this project?',
      type: 'select',
      options: ['Under $10,000', '$10,000 - $25,000', '$25,000 - $50,000', '$50,000 - $100,000', '$100,000 - $250,000', '$250,000 - $500,000', 'Over $500,000'],
      weight: 10
    },
    {
      id: 'timeline',
      category: 'Budget & Timeline',
      question: 'What is your preferred timeline for project completion?',
      type: 'select',
      options: ['1-3 months', '3-6 months', '6-12 months', '12+ months', 'No specific deadline'],
      weight: 7
    },
    {
      id: 'urgency',
      category: 'Budget & Timeline',
      question: 'How urgent is this project?',
      type: 'radio',
      options: ['Not urgent - exploratory phase', 'Moderate urgency - planning phase', 'High urgency - need to start soon', 'Critical - immediate start required'],
      weight: 6
    },
    {
      id: 'platform_preference',
      category: 'Technical Requirements',
      question: 'What platform(s) do you need?',
      type: 'checkbox',
      options: ['Web Application', 'Mobile App (iOS)', 'Mobile App (Android)', 'Desktop Application', 'API/Backend Only', 'Hybrid Solution'],
      weight: 7
    },
    {
      id: 'user_count',
      category: 'Technical Requirements',
      question: 'How many users will use your application?',
      type: 'select',
      options: ['1-10 users', '11-50 users', '51-200 users', '201-1000 users', '1000+ users', 'Public/Unlimited'],
      weight: 6
    },
    {
      id: 'data_sensitivity',
      category: 'Technical Requirements',
      question: 'How sensitive is the data your application will handle?',
      type: 'radio',
      options: ['Public data only', 'Internal business data', 'Customer personal data', 'Financial/Healthcare data', 'Highly regulated data'],
      weight: 8
    },
    {
      id: 'integration_needs',
      category: 'Technical Requirements',
      question: 'Do you need integration with existing systems?',
      type: 'checkbox',
      options: ['CRM System', 'ERP System', 'Payment Gateway', 'Email Marketing', 'Analytics Tools', 'Social Media', 'Cloud Services', 'No integrations needed'],
      weight: 5
    },
    {
      id: 'scalability',
      category: 'Technical Requirements',
      question: 'How important is scalability for your application?',
      type: 'radio',
      options: ['Not important - fixed user base', 'Moderate - some growth expected', 'Important - significant growth planned', 'Critical - rapid scaling expected'],
      weight: 6
    },
    {
      id: 'development_model',
      category: 'Development Preferences',
      question: 'What development model do you prefer?',
      type: 'radio',
      options: ['Fixed price - set scope', 'Time & materials - flexible scope', 'Agile/Scrum - iterative development', 'Hybrid approach'],
      weight: 5
    },
    {
      id: 'team_involvement',
      category: 'Development Preferences',
      question: 'How involved do you want to be in the development process?',
      type: 'radio',
      options: ['Hands-off - deliver final product', 'Regular updates and demos', 'Active collaboration and feedback', 'Co-development partnership'],
      weight: 4
    },
    {
      id: 'maintenance_needs',
      category: 'Development Preferences',
      question: 'What type of ongoing support do you need?',
      type: 'checkbox',
      options: ['Bug fixes only', 'Feature updates', 'Performance optimization', 'Security updates', '24/7 monitoring', 'Training and documentation', 'No ongoing support needed'],
      weight: 5
    },
    {
      id: 'technology_preference',
      category: 'Development Preferences',
      question: 'Do you have any technology preferences or constraints?',
      type: 'text',
      weight: 3
    },
    {
      id: 'web_development_needs',
      category: 'Web Development',
      question: 'What type of web application do you need?',
      type: 'checkbox',
      options: ['E-commerce platform', 'Content Management System', 'Customer Portal', 'Admin Dashboard', 'API/Backend', 'Progressive Web App', 'Single Page Application'],
      weight: 6
    },
    {
      id: 'mobile_app_type',
      category: 'Mobile Development',
      question: 'What type of mobile application do you need?',
      type: 'checkbox',
      options: ['Native iOS App', 'Native Android App', 'Cross-platform App', 'Hybrid App', 'Progressive Web App', 'Mobile-responsive Web App'],
      weight: 6
    },
    {
      id: 'cloud_requirements',
      category: 'Cloud & DevOps',
      question: 'What cloud services do you need?',
      type: 'checkbox',
      options: ['Cloud hosting', 'Database services', 'File storage', 'CDN/Content delivery', 'Load balancing', 'Auto-scaling', 'Backup & recovery', 'Monitoring & logging'],
      weight: 5
    },
    {
      id: 'security_requirements',
      category: 'Security & Compliance',
      question: 'What security requirements do you have?',
      type: 'checkbox',
      options: ['User authentication', 'Role-based access control', 'Data encryption', 'SSL/TLS certificates', 'GDPR compliance', 'HIPAA compliance', 'SOC 2 compliance', 'Penetration testing'],
      weight: 8
    },
    {
      id: 'analytics_needs',
      category: 'Data & Analytics',
      question: 'What analytics capabilities do you need?',
      type: 'checkbox',
      options: ['User behavior tracking', 'Business intelligence dashboards', 'Real-time reporting', 'Data visualization', 'Predictive analytics', 'Machine learning integration', 'Custom reporting'],
      weight: 4
    },
    {
      id: 'competition',
      category: 'Market Analysis',
      question: 'Do you have direct competitors with similar digital solutions?',
      type: 'radio',
      options: ['No competitors', 'Few competitors', 'Moderate competition', 'Highly competitive market'],
      weight: 3
    },
    {
      id: 'success_metrics',
      category: 'Success Metrics',
      question: 'How will you measure the success of this project?',
      type: 'checkbox',
      options: ['User adoption rate', 'Revenue increase', 'Cost reduction', 'Process efficiency', 'Customer satisfaction', 'Market share growth', 'Operational metrics'],
      weight: 4
    },
    {
      id: 'risk_tolerance',
      category: 'Risk Assessment',
      question: 'What is your risk tolerance for this project?',
      type: 'radio',
      options: ['Low risk - proven technologies only', 'Moderate risk - some innovation acceptable', 'High risk - cutting-edge solutions preferred'],
      weight: 4
    },
    {
      id: 'team_expertise',
      category: 'Team Assessment',
      question: 'What is your team\'s technical expertise level?',
      type: 'radio',
      options: ['No technical team', 'Basic technical knowledge', 'Moderate technical expertise', 'Advanced technical team'],
      weight: 3
    }
  ];
  answers: any = {};
  currentQuestionIndex = 0;
  currentQuestion: ConsultationQuestion | null = null;
  currentAnswer: any = null;
  showResults = false;
  consultationResult: ConsultationResult | null = null;
  questionHistory: number[] = [];
  totalQuestions = 25;

  constructor(
    private dialogRef: MatDialogRef<ConsultationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    console.log('ConsultationDialogComponent constructor called');
    console.log('Dialog data:', data);
  }

  ngOnInit() {
    this.startConsultation();
  }

  startConsultation() {
    this.currentQuestionIndex = 0;
    this.currentQuestion = this.questions[this.currentQuestionIndex];
    this.currentAnswer = this.answers[this.currentQuestion?.id] || null;
    this.questionHistory = [this.currentQuestionIndex];
    this.totalQuestions = Math.max(25, this.questions.length);
  }

  isCurrentAnswerValid(): boolean {
    if (!this.currentQuestion) return false;
    if (this.currentQuestion.type === 'checkbox') {
      return Array.isArray(this.currentAnswer) && this.currentAnswer.length > 0;
    }
    return this.currentAnswer !== null && this.currentAnswer !== '';
  }

  nextStep() {
    if (!this.isCurrentAnswerValid()) return;
    // Save answer
    this.answers[this.currentQuestion!.id] = this.currentAnswer;
    // Decide next question index based on answer (adaptive logic)
    let nextIndex = this.getNextQuestionIndex();
    if (nextIndex === -1 || this.questionHistory.length >= 25) {
      this.submitConsultation();
      return;
    }
    this.currentQuestionIndex = nextIndex;
    this.currentQuestion = this.questions[this.currentQuestionIndex];
    this.currentAnswer = this.answers[this.currentQuestion.id] || null;
    this.questionHistory.push(this.currentQuestionIndex);
  }

  previousStep() {
    if (this.questionHistory.length > 1) {
      this.questionHistory.pop();
      this.currentQuestionIndex = this.questionHistory[this.questionHistory.length - 1];
      this.currentQuestion = this.questions[this.currentQuestionIndex];
      this.currentAnswer = this.answers[this.currentQuestion.id] || null;
    }
  }

  canGoBack(): boolean {
    return this.questionHistory.length > 1;
  }

  // Example adaptive logic: you can expand this for more complex flows
  getNextQuestionIndex(): number {
    // For now, just go to the next unanswered question
    for (let i = 0; i < this.questions.length; i++) {
      if (!this.answers.hasOwnProperty(this.questions[i].id)) {
        return i;
      }
    }
    return -1; // No more questions
  }

  isOptionSelected(option: string): boolean {
    return Array.isArray(this.currentAnswer) && this.currentAnswer.includes(option);
  }

  onCheckboxChange(option: string, checked: boolean) {
    if (!Array.isArray(this.currentAnswer)) this.currentAnswer = [];
    if (checked) {
      if (!this.currentAnswer.includes(option)) this.currentAnswer.push(option);
    } else {
      this.currentAnswer = this.currentAnswer.filter((o: string) => o !== option);
    }
  }

  submitConsultation() {
    this.consultationResult = this.calculateRecommendation();
    this.showResults = true;
  }

  calculateRecommendation(): ConsultationResult {
    let totalScore = 0;
    let maxScore = 0;
    const serviceScores: { [key: string]: number } = {
      'Custom Software Development': 0,
      'Cloud & DevOps Solutions': 0,
      'UI/UX & Product Design': 0,
      'Data & Analytics': 0,
      'Security & Compliance': 0
    };

    this.questions.forEach(question => {
      const answer = this.answers[question.id];
      if (answer) {
        maxScore += question.weight;
        
        switch (question.category) {
          case 'Business Overview':
            if (question.id === 'business_type') {
              const businessScores: { [key: string]: number } = { 'Startup': 3, 'Small Business (1-50 employees)': 5, 'Medium Business (51-200 employees)': 7, 'Large Enterprise (200+ employees)': 10 };
              totalScore += (businessScores[answer] || 5) * question.weight;
            }
            break;
          case 'Project Overview':
            if (question.id === 'project_scope') {
              const scopeScores: { [key: string]: number } = { 'New application development': 10, 'Existing system upgrade': 7, 'System integration': 6, 'Digital transformation': 9 };
              totalScore += (scopeScores[answer] || 5) * question.weight;
            }
            break;
          case 'Budget & Timeline':
            if (question.id === 'budget_range') {
              const budgetScores: { [key: string]: number } = { 'Under $10,000': 2, '$10,000 - $25,000': 4, '$25,000 - $50,000': 6, '$50,000 - $100,000': 8, '$100,000 - $250,000': 9, '$250,000 - $500,000': 10 };
              totalScore += (budgetScores[answer] || 5) * question.weight;
            }
            break;
          case 'Technical Requirements':
            if (question.id === 'platform_preference' && Array.isArray(answer)) {
              if (answer.includes('Web Application')) serviceScores['Custom Software Development'] += 3;
              if (answer.includes('Mobile App (iOS)') || answer.includes('Mobile App (Android)')) serviceScores['Custom Software Development'] += 2;
              if (answer.includes('API/Backend Only')) serviceScores['Custom Software Development'] += 2;
            }
            if (question.id === 'data_sensitivity') {
              if (answer.includes('Financial/Healthcare data') || answer.includes('Highly regulated data')) {
                serviceScores['Security & Compliance'] += 5;
              }
            }
            break;
          case 'Cloud & DevOps':
            if (Array.isArray(answer) && answer.length > 0) {
              serviceScores['Cloud & DevOps Solutions'] += answer.length * 2;
            }
            break;
          case 'Web Development':
            if (Array.isArray(answer) && answer.length > 0) {
              serviceScores['Custom Software Development'] += answer.length * 2;
              serviceScores['UI/UX & Product Design'] += answer.length;
            }
            break;
          case 'Mobile Development':
            if (Array.isArray(answer) && answer.length > 0) {
              serviceScores['Custom Software Development'] += answer.length * 2;
              serviceScores['UI/UX & Product Design'] += answer.length;
            }
            break;
          case 'Security & Compliance':
            if (Array.isArray(answer) && answer.length > 0) {
              serviceScores['Security & Compliance'] += answer.length * 3;
            }
            break;
          case 'Data & Analytics':
            if (Array.isArray(answer) && answer.length > 0) {
              serviceScores['Data & Analytics'] += answer.length * 2;
            }
            break;
        }
      }
    });

    const normalizedScore = (totalScore / maxScore) * 100;
    
    const recommendedServices = Object.entries(serviceScores)
      .filter(([_, score]) => score > 0)
      .sort(([_, a], [__, b]) => b - a)
      .slice(0, 3)
      .map(([service, _]) => service);

    const priority = normalizedScore > 80 ? 'high' : normalizedScore > 50 ? 'medium' : 'low';
    
    const budgetRanges: { [key: string]: string } = {
      low: '$10,000 - $25,000',
      medium: '$25,000 - $100,000',
      high: '$100,000 - $500,000+'
    };

    const timelines: { [key: string]: string } = {
      low: '3-6 months',
      medium: '6-12 months',
      high: '12+ months'
    };

    return {
      score: Math.round(normalizedScore),
      recommendation: this.generateRecommendation(recommendedServices, priority),
      services: recommendedServices,
      estimatedBudget: budgetRanges[priority],
      timeline: timelines[priority],
      priority,
      nextSteps: this.generateNextSteps(recommendedServices, priority)
    };
  }

  generateRecommendation(services: string[], priority: string): string {
    const recommendations: { [key: string]: string } = {
      high: `Based on your requirements, we recommend a comprehensive ${priority}-priority engagement focusing on ${services.join(', ')}. Your project shows significant complexity and business impact potential.`,
      medium: `Your project requirements suggest a ${priority}-priority approach with focus on ${services.join(', ')}. This balanced approach will deliver value while managing costs effectively.`,
      low: `For your current needs, we recommend starting with a ${priority}-priority engagement focusing on ${services.join(', ')}. This approach allows for iterative development and future scaling.`
    };
    return recommendations[priority];
  }

  generateNextSteps(services: string[], priority: string): string[] {
    const baseSteps = [
      'Schedule a detailed technical consultation',
      'Review and refine project requirements',
      'Create detailed project roadmap',
      'Establish development timeline and milestones'
    ];

    if (priority === 'high') {
      baseSteps.push('Set up dedicated project team');
      baseSteps.push('Begin infrastructure planning');
    } else if (priority === 'medium') {
      baseSteps.push('Define MVP features');
      baseSteps.push('Plan development phases');
    } else {
      baseSteps.push('Start with proof of concept');
      baseSteps.push('Plan for iterative development');
    }

    return baseSteps;
  }

  getQuote() {
    this.dialogRef.close({ action: 'getQuote', result: this.consultationResult });
  }

  close() {
    this.dialogRef.close();
  }

  // For radio/select options
  selectOption(option: string) {
    this.currentAnswer = option;
  }

  // For checkbox options (already present)
  toggleCheckboxOption(option: string) {
    if (!Array.isArray(this.currentAnswer)) {
      this.currentAnswer = [];
    }
    if (this.currentAnswer.includes(option)) {
      this.currentAnswer = this.currentAnswer.filter((o: string) => o !== option);
    } else {
      this.currentAnswer = [...this.currentAnswer, option];
    }
  }

  // Keyboard accessibility for option cards
  onOptionKeydown(event: KeyboardEvent, option: string, type: string) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (type === 'checkbox') {
        this.toggleCheckboxOption(option);
      } else {
        this.selectOption(option);
      }
    }
  }

  async downloadPDF() {
    const resultsElement = document.querySelector('.results-container') as HTMLElement;
    if (!resultsElement) return;
    const canvas = await html2canvas(resultsElement, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({ orientation: 'p', unit: 'pt', format: 'a4' });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    // Calculate image dimensions to fit A4
    const imgWidth = pageWidth - 40;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    pdf.addImage(imgData, 'PNG', 20, 20, imgWidth, imgHeight);
    pdf.save('consultation-report.pdf');
  }
} 