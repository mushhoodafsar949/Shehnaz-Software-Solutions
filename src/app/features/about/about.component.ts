import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ConsultationDialogComponent } from '../../shared/consultation-dialog/consultation-dialog.component';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  icon: string;
  skills: string[];
}

interface Project {
  name: string;
  category: string;
  description: string;
  icon: string;
  budget: string;
  timeline: string;
  teamSize: string;
  impact: string[];
  techStack: string[];
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: false,
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('0.8s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('scaleIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ]),
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(40px)' }),
        animate('0.8s 0.1s cubic-bezier(.35,0,.25,1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class AboutComponent implements OnInit, OnDestroy {
  currentSlideIndex = 0;
  private autoSlideInterval: any;
  
  teamMembers: TeamMember[] = [
    {
      name: 'Mushhood Afsar',
      role: 'CEO & Lead Developer',
      description: 'Visionary leader with 8+ years of experience in full-stack development and business strategy. Passionate about creating innovative solutions that drive business growth.',
      icon: 'person',
      skills: ['Angular', 'React', 'Node.js', 'Python', 'AWS']
    },
    {
      name: 'Ahmed Hassan',
      role: 'Senior Frontend Developer',
      description: 'Expert in modern frontend technologies with a keen eye for user experience. Specializes in creating responsive and accessible web applications.',
      icon: 'code',
      skills: ['Angular', 'React', 'Vue.js', 'TypeScript', 'CSS3']
    },
    {
      name: 'Fatima Ali',
      role: 'Senior Backend Developer',
      description: 'Backend specialist with deep expertise in scalable architecture and database design. Ensures robust and efficient server-side solutions.',
      icon: 'storage',
      skills: ['Node.js', 'Python', 'Java', 'PostgreSQL', 'MongoDB']
    },
    {
      name: 'Omar Khan',
      role: 'Mobile App Developer',
      description: 'Mobile development expert creating native and cross-platform applications. Focuses on performance and user engagement.',
      icon: 'smartphone',
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase']
    },
    {
      name: 'Aisha Malik',
      role: 'UI/UX Designer',
      description: 'Creative designer with a passion for user-centered design. Creates beautiful and intuitive interfaces that enhance user experience.',
      icon: 'palette',
      skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'User Research']
    },
    {
      name: 'Zainab Rehman',
      role: 'DevOps Engineer',
      description: 'DevOps specialist ensuring smooth deployment and infrastructure management. Maintains high availability and performance standards.',
      icon: 'cloud',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Linux']
    },
    {
      name: 'Hassan Raza',
      role: 'QA Engineer',
      description: 'Quality assurance expert ensuring software reliability and performance. Implements comprehensive testing strategies.',
      icon: 'bug_report',
      skills: ['Selenium', 'Jest', 'Cypress', 'Manual Testing', 'Automation']
    },
    {
      name: 'Nadia Ahmed',
      role: 'Project Manager',
      description: 'Experienced project manager coordinating development teams and ensuring timely delivery of high-quality solutions.',
      icon: 'assignment',
      skills: ['Agile', 'Scrum', 'JIRA', 'Team Leadership', 'Client Communication']
    }
  ];

  projects: Project[] = [
    {
      name: 'SecurePay Pro',
      category: 'FinTech',
      description: 'A comprehensive digital banking platform with real-time fraud detection, AI-powered risk assessment, and seamless payment processing for 2M+ users.',
      icon: 'account_balance',
      budget: '$450,000',
      timeline: '8 months',
      teamSize: '12 developers',
      impact: [
        'Reduced fraud incidents by 85% using AI algorithms',
        'Increased transaction volume by 300%',
        'Achieved 99.9% uptime with zero security breaches',
        'Saved $2M annually in operational costs'
      ],
      techStack: ['Angular', 'Node.js', 'Python', 'TensorFlow', 'PostgreSQL', 'Redis', 'AWS', 'Docker', 'Kubernetes']
    },
    {
      name: 'HealthCare AI Assistant',
      category: 'Healthcare',
      description: 'Intelligent healthcare management system with AI-powered diagnosis assistance, patient monitoring, and predictive analytics for early disease detection.',
      icon: 'local_hospital',
      budget: '$380,000',
      timeline: '10 months',
      teamSize: '10 developers',
      impact: [
        'Improved diagnosis accuracy by 92%',
        'Reduced patient wait times by 60%',
        'Detected early-stage diseases in 15,000+ patients',
        'Decreased hospital readmission rates by 40%'
      ],
      techStack: ['React', 'Python', 'TensorFlow', 'PyTorch', 'MongoDB', 'Apache Kafka', 'Azure', 'MLflow', 'FastAPI']
    },
    {
      name: 'EcoMart Marketplace',
      category: 'E-Commerce',
      description: 'Advanced e-commerce platform with AI-powered product recommendations, dynamic pricing, and automated inventory management for 500+ vendors.',
      icon: 'shopping_cart',
      budget: '$320,000',
      timeline: '6 months',
      teamSize: '8 developers',
      impact: [
        'Increased conversion rates by 45%',
        'Reduced cart abandonment by 35%',
        'Optimized inventory turnover by 50%',
        'Generated $15M in additional revenue'
      ],
      techStack: ['Vue.js', 'Node.js', 'Python', 'Scikit-learn', 'Elasticsearch', 'Redis', 'AWS', 'Stripe API', 'RabbitMQ']
    },
    {
      name: 'AI-Powered Trading Bot',
      category: 'FinTech',
      description: 'Advanced algorithmic trading system with deep learning models for market prediction, risk management, and automated portfolio optimization.',
      icon: 'trending_up',
      budget: '$280,000',
      timeline: '7 months',
      teamSize: '6 developers',
      impact: [
        'Achieved 23% annual return on investment',
        'Reduced trading risks by 65%',
        'Processed 10M+ market data points daily',
        'Generated $8M in trading profits'
      ],
      techStack: ['Python', 'TensorFlow', 'PyTorch', 'Pandas', 'NumPy', 'Redis', 'PostgreSQL', 'Docker', 'AWS']
    },
    {
      name: 'MediScan AI',
      category: 'Healthcare',
      description: 'AI-powered medical imaging analysis platform for early detection of diseases using deep learning and computer vision technologies.',
      icon: 'medical_services',
      budget: '$410,000',
      timeline: '9 months',
      teamSize: '11 developers',
      impact: [
        'Detected cancer with 96% accuracy',
        'Reduced diagnosis time by 80%',
        'Analyzed 50,000+ medical images',
        'Saved 2,000+ lives through early detection'
      ],
      techStack: ['Python', 'TensorFlow', 'OpenCV', 'Django', 'PostgreSQL', 'Docker', 'AWS', 'NVIDIA GPU', 'DICOM']
    },
    {
      name: 'Enterprise Resource Manager',
      category: 'Enterprise',
      description: 'A robust ERP solution for large organizations, featuring real-time analytics, workflow automation, and seamless integration with legacy systems.',
      icon: 'business',
      budget: '$600,000',
      timeline: '14 months',
      teamSize: '18 developers',
      impact: [
        'Streamlined business operations across 5 departments',
        'Reduced manual workload by 60%',
        'Enabled real-time decision making with advanced dashboards',
        'Integrated with 10+ legacy systems'
      ],
      techStack: ['Angular', '.NET Core', 'C#', 'SQL Server', 'Azure', 'Docker', 'Kubernetes']
    },
    {
      name: 'Enterprise HR Portal',
      category: 'Enterprise Solutions',
      description: 'A robust HR management platform built with Angular and .NET Core, streamlining employee onboarding, payroll, and performance reviews for large organizations.',
      icon: 'business_center',
      budget: '$600,000',
      timeline: '10 months',
      teamSize: '14 developers',
      impact: [
        'Automated HR workflows, reducing manual effort by 70%',
        'Integrated payroll and benefits, saving $1.2M annually',
        'Improved employee satisfaction scores by 30%'
      ],
      techStack: ['Angular', '.NET Core', 'SQL Server', 'Azure', 'Docker', 'CI/CD']
    },
    {
      name: 'Smart Healthcare Dashboard',
      category: 'Healthcare',
      description: 'A real-time analytics dashboard for hospitals, built with Angular and ASP.NET, providing actionable insights for patient care and resource allocation.',
      icon: 'monitor_heart',
      budget: '$350,000',
      timeline: '7 months',
      teamSize: '8 developers',
      impact: [
        'Reduced ER wait times by 40% through predictive analytics',
        'Enabled real-time monitoring of 500+ beds',
        'Improved patient outcomes and operational efficiency'
      ],
      techStack: ['Angular', 'ASP.NET', 'SignalR', 'Azure', 'Power BI']
    },
    {
      name: 'E-Learning Platform',
      category: 'Education',
      description: 'A scalable e-learning solution using Angular and .NET, supporting thousands of concurrent users with interactive courses, live sessions, and progress tracking.',
      icon: 'school',
      budget: '$420,000',
      timeline: '9 months',
      teamSize: '10 developers',
      impact: [
        'Onboarded 50,000+ students in the first year',
        'Increased course completion rates by 55%',
        'Enabled seamless live video and chat integration'
      ],
      techStack: ['Angular', '.NET', 'Azure', 'WebRTC', 'Redis', 'Docker']
    }
  ];

  constructor(
    private router: Router, 
    private viewportScroller: ViewportScroller,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 20000); // 20 seconds
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.teamMembers.length;
  }

  previousSlide() {
    this.currentSlideIndex = this.currentSlideIndex === 0 
      ? this.teamMembers.length - 1 
      : this.currentSlideIndex - 1;
  }

  goToSlide(index: number) {
    this.currentSlideIndex = index;
  }

  navigateToServices() {
    this.viewportScroller.scrollToPosition([0, 0]);
    this.router.navigate(['/services']);
  }

  openConsultationDialog() {
    console.log('Opening consultation dialog...');
    const dialogRef = this.dialog.open(ConsultationDialogComponent, {
      width: '90vw',
      maxWidth: '1200px',
      height: '85vh',
      maxHeight: '85vh',
      panelClass: 'consultation-dialog-panel',
      disableClose: false,
      autoFocus: false,
      hasBackdrop: true,
      backdropClass: 'dialog-backdrop',
      data: {}
    });

    console.log('Dialog opened:', dialogRef);

    dialogRef.afterOpened().subscribe(() => {
      console.log('Dialog after opened');
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed with result:', result);
      if (result && result.action === 'getQuote') {
        this.viewportScroller.scrollToPosition([0, 0]);
        this.router.navigate(['/quote']);
      }
    });
  }
} 