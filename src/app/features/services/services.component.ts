import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ChipModule } from 'primeng/chip';
import { CardModule } from 'primeng/card';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { SmartServiceLogoComponent } from './smart-service-logo.component';
import { ConsultationDialogComponent } from '../../shared/consultation-dialog/consultation-dialog.component';

interface SolutionCategory {
  title: string;
  description: string;
  icon: string;
  projects: string;
  expertise: string;
}

interface DetailedSolution {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  keyFeatures: string[];
  technologies: string[];
  projects: string;
  satisfaction: string;
  icon: string;
}

interface Industry {
  name: string;
  description: string;
  icon: string;
  solutions: string[];
  projects: string;
  experience: string;
}

interface ProcessStep {
  title: string;
  description: string;
  icon: string;
  deliverables: string[];
}

interface CompetitiveAdvantage {
  title: string;
  description: string;
  icon: string;
  metrics?: { value: string; label: string; }[];
}

interface SuccessStory {
  client: string;
  industry: string;
  solutionType: string;
  challenge: string;
  results: string[];
  technologies: string[];
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    RippleModule,
    ChipModule,
    CardModule,
    DynamicDialogModule,
    SmartServiceLogoComponent,
    RouterModule,
  ],
  providers: [DialogService],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('900ms 200ms cubic-bezier(.35,0,.25,1)', style({ opacity: 1 }))
      ])
    ]),
    trigger('slideUp', [
      transition(':enter', [
        style({ transform: 'translateY(40px)', opacity: 0 }),
        animate('900ms 400ms cubic-bezier(.35,0,.25,1)', style({ transform: 'none', opacity: 1 }))
      ])
    ]),
    trigger('scaleIn', [
      transition(':enter', [
        style({ transform: 'scale(0.8)', opacity: 0 }),
        animate('700ms 200ms cubic-bezier(.35,0,.25,1)', style({ transform: 'scale(1)', opacity: 1 }))
      ])
    ])
  ]
})
export class ServicesComponent implements OnInit {

  solutionCategories: SolutionCategory[] = [
    {
      title: 'Digital Transformation',
      description: 'Comprehensive digital modernization strategies that revolutionize business operations and customer experiences.',
      icon: 'pi pi-sync',
      projects: '200+',
      expertise: '5+ Years'
    },
    {
      title: 'Custom Software Development',
      description: 'Tailored software solutions built from the ground up to meet your specific business requirements and goals.',
      icon: 'pi pi-code',
      projects: '300+',
      expertise: 'Enterprise Grade'
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services that enhance performance, security, and cost-efficiency.',
      icon: 'pi pi-cloud',
      projects: '150+',
      expertise: 'Multi-Cloud'
    },
    {
      title: 'AI & Machine Learning',
      description: 'Intelligent automation and predictive analytics solutions that drive data-driven decision making.',
      icon: 'pi pi-android',
      projects: '75+',
      expertise: 'Advanced AI'
    }
  ];

  detailedSolutions: DetailedSolution[] = [
    {
      id: 'web-development',
      title: 'Web Development Excellence',
      subtitle: 'Modern, Scalable, High-Performance Web Applications',
      description: 'We craft exceptional web experiences using cutting-edge frameworks and technologies. Our solutions are built for scale, performance, and user engagement, ensuring your digital presence drives real business results.',
      keyFeatures: [
        'Responsive & Mobile-First Design',
        'Progressive Web App (PWA) Development',
        'Real-time Data Integration',
        'Advanced Security Implementation',
        'Performance Optimization',
        'SEO & Analytics Integration'
      ],
      technologies: ['React', 'Angular', 'Vue.js', 'Node.js', 'TypeScript', 'Next.js', 'GraphQL'],
      projects: '200+',
      satisfaction: '98%',
      icon: 'web-development'
    },
    {
      id: 'mobile-development',
      title: 'Mobile App Innovation',
      subtitle: 'Native & Cross-Platform Mobile Solutions',
      description: 'Create powerful mobile experiences that engage users and drive business growth. From native iOS and Android apps to cross-platform solutions, we deliver mobile excellence.',
      keyFeatures: [
        'Native iOS & Android Development',
        'Cross-Platform Solutions (React Native, Flutter)',
        'Offline-First Architecture',
        'Push Notifications & Real-time Sync',
        'App Store Optimization',
        'Mobile Analytics & Performance Monitoring'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Xamarin'],
      projects: '120+',
      satisfaction: '96%',
      icon: 'mobile-development'
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps Mastery',
      subtitle: 'Scalable Infrastructure & Automated Deployments',
      description: 'Transform your development lifecycle with cloud-native solutions and DevOps automation. Achieve faster deployments, better reliability, and reduced operational costs.',
      keyFeatures: [
        'Multi-Cloud Architecture Design',
        'CI/CD Pipeline Automation',
        'Container Orchestration (Kubernetes)',
        'Infrastructure as Code',
        'Monitoring & Logging Solutions',
        'Security & Compliance Automation'
      ],
      technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
      projects: '100+',
      satisfaction: '99%',
      icon: 'cloud-devops'
    },
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      subtitle: 'Intelligent Solutions for Modern Business',
      description: 'Harness the power of artificial intelligence and machine learning to automate processes, gain insights, and create competitive advantages through data-driven solutions.',
      keyFeatures: [
        'Custom AI Model Development',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Predictive Analytics',
        'Automated Decision Making',
        'ML Model Deployment & Monitoring'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'Python', 'OpenAI', 'Scikit-learn', 'MLflow'],
      projects: '60+',
      satisfaction: '95%',
      icon: 'ai-ml'
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design Excellence',
      subtitle: 'User-Centered Design That Converts',
      description: 'Create intuitive, beautiful user experiences that drive engagement and conversions. Our design process focuses on user research, usability, and business outcomes.',
      keyFeatures: [
        'User Research & Persona Development',
        'Information Architecture',
        'Interactive Prototyping',
        'Design System Creation',
        'Usability Testing',
        'Accessibility Compliance'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'Framer'],
      projects: '250+',
      satisfaction: '97%',
      icon: 'ui-ux-design'
    },
    {
      id: 'api-development',
      title: 'API & Integration Services',
      subtitle: 'Seamless System Connectivity',
      description: 'Build robust, scalable APIs and integrations that connect your systems, enable data flow, and create seamless user experiences across all touchpoints.',
      keyFeatures: [
        'RESTful API Development',
        'GraphQL Implementation',
        'Microservices Architecture',
        'Third-Party Integrations',
        'API Security & Authentication',
        'Documentation & Testing'
      ],
      technologies: ['Node.js', 'Express', 'FastAPI', 'GraphQL', 'Swagger', 'Postman'],
      projects: '180+',
      satisfaction: '98%',
      icon: 'api-development'
    }
  ];

  industries: Industry[] = [
    {
      name: 'Financial Services',
      description: 'Secure, compliant solutions for banking, fintech, and financial institutions.',
      icon: 'pi pi-dollar',
      solutions: ['Trading Platforms', 'Payment Systems', 'Risk Management', 'Regulatory Compliance'],
      projects: '50+',
      experience: '5+ Years'
    },
    {
      name: 'Healthcare & Life Sciences',
      description: 'HIPAA-compliant solutions for healthcare providers and medical technology companies.',
      icon: 'pi pi-heart',
      solutions: ['Telemedicine', 'Patient Management', 'Medical Devices', 'Health Analytics'],
      projects: '35+',
      experience: '4+ Years'
    },
    {
      name: 'E-Commerce & Retail',
      description: 'Scalable commerce platforms and retail technology solutions.',
      icon: 'pi pi-shopping-cart',
      solutions: ['E-commerce Platforms', 'Inventory Management', 'Customer Analytics', 'Mobile Commerce'],
      projects: '80+',
      experience: '5+ Years'
    },
    {
      name: 'Manufacturing & Logistics',
      description: 'Digital transformation solutions for manufacturing and supply chain optimization.',
      icon: 'pi pi-cog',
      solutions: ['IoT Integration', 'Supply Chain', 'Quality Control', 'Predictive Maintenance'],
      projects: '25+',
      experience: '3+ Years'
    },
    {
      name: 'Education & EdTech',
      description: 'Innovative learning platforms and educational technology solutions.',
      icon: 'pi pi-book',
      solutions: ['Learning Management', 'Virtual Classrooms', 'Assessment Tools', 'Student Analytics'],
      projects: '40+',
      experience: '4+ Years'
    },
    {
      name: 'Real Estate & PropTech',
      description: 'Technology solutions for real estate management and property technology.',
      icon: 'pi pi-home',
      solutions: ['Property Management', 'Virtual Tours', 'Market Analytics', 'Transaction Systems'],
      projects: '30+',
      experience: '3+ Years'
    }
  ];

  processSteps: ProcessStep[] = [
    {
      title: 'Discovery & Strategy',
      description: 'Deep dive into your business requirements, challenges, and objectives to create a comprehensive project strategy.',
      icon: 'pi pi-search',
      deliverables: ['Requirements Analysis', 'Technical Architecture', 'Project Roadmap', 'Risk Assessment']
    },
    {
      title: 'Design & Prototyping',
      description: 'Create user-centered designs and interactive prototypes that validate concepts before development begins.',
      icon: 'pi pi-palette',
      deliverables: ['UI/UX Designs', 'Interactive Prototypes', 'Design System', 'User Journey Maps']
    },
    {
      title: 'Development & Integration',
      description: 'Agile development process with continuous integration and regular client feedback throughout the build phase.',
      icon: 'pi pi-code',
      deliverables: ['Core Development', 'API Integration', 'Quality Assurance', 'Performance Testing']
    },
    {
      title: 'Testing & Quality Assurance',
      description: 'Comprehensive testing across all devices and scenarios to ensure reliability, security, and performance.',
      icon: 'pi pi-check-circle',
      deliverables: ['Automated Testing', 'Security Audit', 'Performance Optimization', 'Bug Resolution']
    },
    {
      title: 'Deployment & Launch',
      description: 'Seamless deployment with monitoring, documentation, and training to ensure successful go-live.',
      icon: 'pi pi-upload',
      deliverables: ['Production Deployment', 'Monitoring Setup', 'Documentation', 'Team Training']
    },
    {
      title: 'Support & Optimization',
      description: 'Ongoing support, maintenance, and continuous improvement based on real-world usage and feedback.',
      icon: 'pi pi-wrench',
      deliverables: ['24/7 Support', 'Performance Monitoring', 'Feature Updates', 'Scaling Solutions']
    }
  ];

  competitiveAdvantages: CompetitiveAdvantage[] = [
    {
      title: 'Proven Track Record',
      description: 'Over 500 successful projects delivered across multiple industries with consistently high client satisfaction rates.',
      icon: 'pi pi-trophy',
      metrics: [
        { value: '500+', label: 'Projects' },
        { value: '98%', label: 'Satisfaction' },
        { value: '25+', label: 'Countries' }
      ]
    },
    {
      title: 'Expert Team',
      description: 'Seasoned professionals with deep expertise in cutting-edge technologies and industry best practices.',
      icon: 'pi pi-users',
      metrics: [
        { value: '50+', label: 'Experts' },
        { value: '5+', label: 'Avg Experience' },
        { value: '20+', label: 'Technologies' }
      ]
    },
    {
      title: 'Agile Methodology',
      description: 'Flexible, iterative approach that adapts to changing requirements and delivers value incrementally.',
      icon: 'pi pi-sync',
      metrics: [
        { value: '2-3', label: 'Week Sprints' },
        { value: '100%', label: 'Transparency' },
        { value: '24/7', label: 'Communication' }
      ]
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control processes ensuring reliable, scalable, and maintainable solutions.',
      icon: 'pi pi-shield',
      metrics: [
        { value: '99.9%', label: 'Uptime' },
        { value: '0', label: 'Critical Bugs' },
        { value: '100%', label: 'Code Coverage' }
      ]
    }
  ];

  successStories: SuccessStory[] = [
    {
      client: 'Global FinTech Corp',
      industry: 'Financial Services',
      solutionType: 'Trading Platform',
      challenge: 'Needed a high-performance trading platform capable of handling millions of transactions per second with real-time market data integration.',
      results: ['250% increase in trading volume', '60% faster transaction processing', '99.9% system uptime achieved'],
      technologies: ['Angular', 'Node.js', 'WebSocket', 'MongoDB', 'Redis']
    },
    {
      client: 'MedTech Innovations',
      industry: 'Healthcare',
      solutionType: 'Telemedicine Platform',
      challenge: 'Required HIPAA-compliant telemedicine solution connecting 50,000+ patients with healthcare providers remotely.',
      results: ['50,000+ patients served', '70% reduction in wait times', '95% patient satisfaction rate'],
      technologies: ['React', 'Python', 'PostgreSQL', 'WebRTC', 'AWS']
    },
    {
      client: 'RetailMax Solutions',
      industry: 'E-Commerce',
      solutionType: 'E-Commerce Platform',
      challenge: 'Modernize legacy e-commerce system with AI-powered recommendations and multi-channel integration.',
      results: ['120% increase in conversion rate', '45% reduction in cart abandonment', '$2M+ additional revenue'],
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Elasticsearch', 'Stripe']
    },
    {
      client: 'Enterprise Systems Ltd',
      industry: 'Manufacturing',
      solutionType: 'CRM Solution',
      challenge: 'Develop scalable CRM system for large enterprise with advanced analytics and workflow automation.',
      results: ['200% improvement in sales efficiency', '85% better customer retention', '$1.5M cost savings'],
      technologies: ['Angular', 'Java Spring', 'PostgreSQL', 'Kubernetes', 'Apache Kafka']
    }
  ];

  technologyCategories = [
    {
      title: 'Frontend Development',
      items: ['React', 'Angular', 'Vue.js', 'TypeScript', 'Next.js', 'Nuxt.js', 'Svelte', 'Tailwind CSS', 'Material-UI', 'Redux', 'GraphQL', 'Webpack']
    },
    {
      title: 'Backend Development',
      items: ['Node.js', 'Python', 'Java', '.NET', 'PHP', 'Go', 'Ruby', 'Express.js', 'Django', 'Spring Boot', 'Laravel', 'FastAPI']
    },
    {
      title: 'Cloud & DevOps',
      items: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Jenkins', 'GitLab CI', 'Terraform', 'Ansible', 'Helm', 'Prometheus', 'Grafana']
    },
    {
      title: 'Database & Storage',
      items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch', 'Cassandra', 'DynamoDB', 'Neo4j', 'InfluxDB', 'SQLite', 'Firebase']
    },
    {
      title: 'AI & Machine Learning',
      items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI API', 'Hugging Face', 'Pandas', 'NumPy', 'Jupyter', 'MLflow', 'Kubeflow', 'LangChain']
    },
    {
      title: 'Security & Infrastructure',
      items: ['OAuth 2.0', 'JWT', 'SSL/TLS', 'VPN', 'Firewalls', 'Load Balancers', 'CDN', 'DNS', 'Monitoring', 'Penetration Testing', 'GDPR Compliance']
    }
  ];

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller,
    private dialogService: DialogService
  ) {}

  ngOnInit() {
    // Component initialization
  }

  scrollToSolutions() {
    const element = document.getElementById('solutions-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // TrackBy functions for performance optimization
  trackByIndex(index: number, item: any): number {
    return index;
  }

  trackByString(index: number, item: string): string {
    return item;
  }

  trackByMetric(index: number, metric: { value: string; label: string; }): string {
    return metric.value + metric.label;
  }

  openConsultationDialog() {
    const ref = this.dialogService.open(ConsultationDialogComponent, {
      header: 'Request a Consultation',
      width: '90%',
      maximizable: true,
      style: { maxWidth: '1200px' },
      contentStyle: { height: '85vh', overflow: 'auto' },
      baseZIndex: 10000,
      dismissableMask: true
    });

    ref.onClose.subscribe((result: any) => {
      if (result && result.action === 'getQuote') {
        this.viewportScroller.scrollToPosition([0, 0]);
        this.router.navigate(['/quote']);
      }
    });
  }

  navigateToContact() {
    this.viewportScroller.scrollToPosition([0, 0]);
    this.router.navigate(['/contact']);
  }

  navigateToQuote() {
    this.viewportScroller.scrollToPosition([0, 0]);
    this.router.navigate(['/quote']);
  }
} 