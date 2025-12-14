import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { ConsultationDialogComponent } from '../../shared/consultation-dialog/consultation-dialog.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { ChipModule } from 'primeng/chip';
import { RippleModule } from 'primeng/ripple';
import { TagModule } from 'primeng/tag';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  icon: string;
  skills: string[];
  linkedinUrl?: string;
  image?: string;
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

interface CompanyTimeline {
  year: string;
  title: string;
  description: string;
  icon: string;
  metrics?: string[];
}

interface CompanyCulture {
  title: string;
  description: string;
  icon: string;
  practices: string[];
}

interface RoadmapItem {
  period: string;
  title: string;
  description: string;
  icon: string;
  goals: string[];
}

interface Achievement {
  title: string;
  year: string;
  description: string;
  icon: string;
  metrics?: string[];
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [DialogService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    CarouselModule,
    ChipModule,
    RippleModule,
    TagModule,
    DynamicDialogModule
  ],
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
    trigger('slideInLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-60px)', opacity: 0 }),
        animate('800ms 300ms cubic-bezier(.35,0,.25,1)', style({ transform: 'none', opacity: 1 }))
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
export class AboutComponent implements OnInit, OnDestroy {
  
  companyTimeline: CompanyTimeline[] = [
    {
      year: '2019',
      title: 'Foundation & Vision',
      description: 'Nest Tech Solutions was founded with a vision to revolutionize digital transformation. Started as a small team of passionate developers with big dreams.',
      icon: 'pi pi-flag',
      metrics: ['5 Team Members', 'First Office', 'Vision Established']
    },
    {
      year: '2020',
      title: 'First Major Breakthrough',
      description: 'Landed our first enterprise client and delivered a transformative e-commerce platform that increased their revenue by 300%. This marked our entry into serious business.',
      icon: 'pi pi-trophy',
      metrics: ['50+ Projects', '10 Team Members', 'Enterprise Clients']
    },
    {
      year: '2021',
      title: 'Global Expansion',
      description: 'Expanded operations internationally, serving clients across 15+ countries. Established our reputation for delivering world-class solutions on time and within budget.',
      icon: 'pi pi-globe',
      metrics: ['15+ Countries', '25 Team Members', 'Global Recognition']
    },
    {
      year: '2022',
      title: 'Innovation Leadership',
      description: 'Launched our AI/ML division and cloud-native solutions practice. Became industry leaders in cutting-edge technology adoption and implementation.',
      icon: 'pi pi-cog',
      metrics: ['AI/ML Division', 'Cloud Expertise', 'Tech Innovation']
    },
    {
      year: '2023',
      title: 'Industry Recognition',
      description: 'Received multiple industry awards and certifications. Achieved ISO certification and became an AWS Advanced Partner, validating our commitment to excellence.',
      icon: 'pi pi-star',
      metrics: ['ISO Certified', 'AWS Partner', 'Industry Awards']
    },
    {
      year: '2024',
      title: 'Scaling New Heights',
      description: 'Crossed 500+ successful projects milestone. Established centers of excellence for emerging technologies and strengthened our global delivery capabilities.',
      icon: 'pi pi-chart-line',
      metrics: ['500+ Projects', '50+ Team Members', 'Centers of Excellence']
    }
  ];

  companyCulture: CompanyCulture[] = [
    {
      title: 'Innovation First',
      description: 'We foster a culture of continuous innovation, encouraging creative thinking and embracing emerging technologies to solve complex challenges.',
      icon: 'pi pi-lightbulb',
      practices: ['Hackathons', 'Innovation Lab', 'R&D Time', 'Tech Talks']
    },
    {
      title: 'Collaborative Excellence',
      description: 'Teamwork and collaboration are at our core. We believe great solutions emerge when diverse minds work together towards common goals.',
      icon: 'pi pi-users',
      practices: ['Cross-functional Teams', 'Peer Reviews', 'Knowledge Sharing', 'Mentorship']
    },
    {
      title: 'Continuous Learning',
      description: 'We invest in our people through continuous learning opportunities, certifications, and skill development programs to stay ahead of the curve.',
      icon: 'pi pi-book',
      practices: ['Training Programs', 'Certifications', 'Conferences', 'Online Learning']
    },
    {
      title: 'Work-Life Balance',
      description: 'We promote a healthy work-life balance with flexible working arrangements, wellness programs, and supportive team environment.',
      icon: 'pi pi-heart',
      practices: ['Flexible Hours', 'Remote Work', 'Wellness Programs', 'Team Events']
    },
    {
      title: 'Quality Obsession',
      description: 'Quality is non-negotiable. We maintain the highest standards in everything we do, from code quality to client communication.',
      icon: 'pi pi-shield',
      practices: ['Code Reviews', 'Testing Standards', 'Quality Gates', 'Best Practices']
    },
    {
      title: 'Client Success',
      description: 'Our clients\' success is our success. We go above and beyond to ensure every project delivers exceptional value and measurable results.',
      icon: 'pi pi-thumbs-up',
      practices: ['Client Focus', 'Success Metrics', 'Regular Check-ins', 'Feedback Loops']
    }
  ];

  roadmapItems: RoadmapItem[] = [
    {
      period: 'Q1 2025',
      title: 'AI-Powered Solutions',
      description: 'Launch comprehensive AI and machine learning solutions division with focus on predictive analytics and automation.',
      icon: 'pi pi-android',
      goals: ['AI Lab Setup', 'ML Model Development', 'Automation Tools', 'Predictive Analytics']
    },
    {
      period: 'Q2 2025',
      title: 'Global Market Expansion',
      description: 'Establish regional offices in North America and Europe to better serve our growing international client base.',
      icon: 'pi pi-globe',
      goals: ['US Office', 'European Hub', 'Regional Teams', 'Local Partnerships']
    },
    {
      period: 'Q3 2025',
      title: 'Next-Gen Platform',
      description: 'Develop proprietary development platform combining low-code capabilities with enterprise-grade security and scalability.',
      icon: 'pi pi-desktop',
      goals: ['Platform Development', 'Low-Code Tools', 'Security Framework', 'Scalability Features']
    },
    {
      period: 'Q4 2025',
      title: 'Sustainability Initiative',
      description: 'Launch green technology initiative focusing on carbon-neutral solutions and sustainable software development practices.',
      icon: 'pi pi-leaf',
      goals: ['Green Tech', 'Carbon Neutral', 'Sustainable Practices', 'Environmental Impact']
    }
  ];

  achievements: Achievement[] = [
    {
      title: 'ISO 27001 Certification',
      year: '2023',
      description: 'Achieved ISO 27001 certification for information security management, demonstrating our commitment to data protection and security.',
      icon: 'pi pi-shield',
      metrics: ['Security Standards', 'Data Protection', 'Risk Management']
    },
    {
      title: 'AWS Advanced Partner',
      year: '2023',
      description: 'Became an AWS Advanced Consulting Partner, validating our cloud expertise and ability to deliver enterprise-grade solutions.',
      icon: 'pi pi-cloud',
      metrics: ['Cloud Expertise', 'Enterprise Solutions', 'AWS Certified']
    },
    {
      title: 'Tech Innovation Award',
      year: '2023',
      description: 'Received the Technology Innovation Award for our groundbreaking AI-powered healthcare solution that improved patient outcomes by 40%.',
      icon: 'pi pi-trophy',
      metrics: ['Innovation Excellence', 'Healthcare Impact', '40% Improvement']
    },
    {
      title: 'Client Satisfaction Excellence',
      year: '2024',
      description: 'Achieved 98% client satisfaction rate with zero project failures, maintaining our reputation for reliable delivery.',
      icon: 'pi pi-star',
      metrics: ['98% Satisfaction', 'Zero Failures', 'Reliable Delivery']
    },
    {
      title: 'Top Employer Recognition',
      year: '2024',
      description: 'Recognized as Top Employer in Tech by leading industry publications for our exceptional workplace culture and employee benefits.',
      icon: 'pi pi-users',
      metrics: ['Top Employer', 'Great Culture', 'Employee Benefits']
    },
    {
      title: '500+ Projects Milestone',
      year: '2024',
      description: 'Successfully delivered over 500 projects across 25+ countries, establishing ourselves as a global technology partner.',
      icon: 'pi pi-chart-line',
      metrics: ['500+ Projects', '25+ Countries', 'Global Reach']
    }
  ];
  
  teamMembers: TeamMember[] = [
    {
      name: 'Mir Mushhood Afsar',
      role: 'CEO & Founder',
      description: 'Visionary leader with 5+ years of experience in full-stack development and business strategy. Passionate about creating innovative solutions that drive business growth and digital transformation.',
      icon: 'pi pi-user',
      skills: ['Strategic Leadership', 'Digital Transformation', 'Business Development', 'Full-Stack Development', 'Team Building', 'Client Relations'],
      linkedinUrl: 'https://www.linkedin.com/in/mushhood-afsar/',
      image: 'assets/home/Mushhood2.jpg'
    },
    {
      name: 'Anayat Ullah',
      role: 'Co-founder & VP Sales',
      description: 'Strategic business development leader focused on growth, client relationships, and market expansion. Drives revenue growth through innovative sales strategies and strategic partnerships.',
      icon: 'pi pi-briefcase',
      skills: ['Business Development', 'Strategic Sales', 'Client Relationship Management', 'Market Analysis', 'Partnership Development', 'Revenue Growth'],
      linkedinUrl: 'https://www.linkedin.com/in/anayat-ullah-8647b7162/',
      image: 'assets/Team/Anayat.jpeg'
    },
    {
      name: 'Jahanzaib Sohail',
      role: 'CTO',
      description: 'Expert iOS developer and technology strategist with extensive experience in mobile app architecture and development. Leads our technical innovation and mobile excellence initiatives.',
      icon: 'pi pi-mobile',
      skills: ['iOS Development', 'Mobile Architecture', 'Technical Strategy', 'Team Leadership', 'Innovation Management', 'Product Development'],
      linkedinUrl: 'https://www.linkedin.com/in/jahanzeb-sohail-047/',
      image: 'assets/Team/Jahanzaib.jpeg'
    },
    {
      name: 'Abbas Raza',
      role: 'Head of DevOps & Infrastructure',
      description: 'DevOps specialist with deep expertise in cloud infrastructure, automation, and deployment pipelines. Ensures scalable, secure, and efficient development operations.',
      icon: 'pi pi-cloud',
      skills: ['AWS Cloud', 'DevOps Automation', 'Infrastructure Management', 'Security Implementation', 'Scalability Design', 'CI/CD Pipelines'],
      linkedinUrl: 'https://www.linkedin.com/in/abbas-raza-564b57b2/',
      image: 'assets/Team/Abbas.jpeg'
    },
    {
      name: 'Muhammad Usama',
      role: 'Lead Mobile Developer',
      description: 'Cross-platform mobile development expert specializing in Flutter and React Native. Creates beautiful, high-performance mobile applications for both iOS and Android platforms.',
      icon: 'pi pi-mobile',
      skills: ['Flutter Development', 'Cross-Platform Mobile', 'UI/UX Implementation', 'Performance Optimization', 'Mobile Testing', 'App Store Deployment'],
      linkedinUrl: 'https://www.linkedin.com/in/muhammad-usama-330044212/',
      image: 'https://ui-avatars.com/api/?name=Muhammad+Usama&size=400&background=166534&color=ffffff&font-size=0.35&bold=true&format=png'
    }
  ];

  projects: Project[] = [
    {
      name: 'FinTech Trading Platform',
      category: 'FinTech',
      description: 'A comprehensive trading platform with real-time market data, advanced charting, and automated trading capabilities. Built for institutional and retail traders.',
      icon: 'pi-chart-line',
      budget: '$150K - $300K',
      timeline: '8-12 months',
      teamSize: '6-8 developers',
      impact: [
        'Increased trading volume by 250%',
        'Reduced transaction processing time by 60%',
        'Enhanced user engagement by 180%',
        'Achieved 99.9% uptime reliability'
      ],
      techStack: ['Angular', 'Node.js', 'WebSocket', 'MongoDB', 'Redis', 'Docker', 'AWS']
    },
    {
      name: 'HealthConnect Telemedicine',
      category: 'Healthcare',
      description: 'A HIPAA-compliant telemedicine platform connecting patients with healthcare providers through secure video consultations and medical record management.',
      icon: 'pi-heart',
      budget: '$200K - $400K',
      timeline: '10-14 months',
      teamSize: '8-10 developers',
      impact: [
        'Served 50,000+ patients remotely',
        'Reduced appointment wait time by 70%',
        'Improved patient satisfaction by 95%',
        'Streamlined medical record access'
      ],
      techStack: ['React', 'Python', 'PostgreSQL', 'WebRTC', 'Socket.IO', 'AWS', 'Docker']
    },
    {
      name: 'SmartRetail E-Commerce',
      category: 'E-Commerce',
      description: 'An AI-powered e-commerce platform with personalized recommendations, inventory management, and multi-channel sales integration.',
      icon: 'pi-shopping-cart',
      budget: '$100K - $250K',
      timeline: '6-10 months',
      teamSize: '5-7 developers',
      impact: [
        'Increased conversion rate by 120%',
        'Reduced cart abandonment by 45%',
        'Improved inventory turnover by 80%',
        'Generated $2M+ in additional revenue'
      ],
      techStack: ['Vue.js', 'Laravel', 'MySQL', 'Elasticsearch', 'Redis', 'Stripe', 'GCP']
    },
    {
      name: 'Enterprise CRM Solution',
      category: 'Enterprise',
      description: 'A scalable CRM system designed for large enterprises with advanced analytics, workflow automation, and multi-team collaboration features.',
      icon: 'pi-users',
      budget: '$300K - $500K',
      timeline: '12-18 months',
      teamSize: '10-12 developers',
      impact: [
        'Improved sales efficiency by 200%',
        'Enhanced customer retention by 85%',
        'Automated 70% of routine tasks',
        'Reduced operational costs by $1.5M annually'
      ],
      techStack: ['Angular', 'Java Spring', 'PostgreSQL', 'Kubernetes', 'Apache Kafka', 'Microservices']
    }
  ];

  teamCarouselResponsive = [
    {
      breakpoint: '1024px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1
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

  ngOnDestroy() {
    // Cleanup if needed
  }

  scrollToHistory() {
    const element = document.getElementById('history-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToTeam() {
    const element = document.getElementById('team-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  getProjectSeverity(category: string): "success" | "info" | "secondary" | "contrast" | "warning" | "danger" | undefined {
    switch (category) {
      case 'FinTech': return 'success';
      case 'Healthcare': return 'info';
      case 'E-Commerce': return 'warning';
      case 'Enterprise': return 'secondary';
      default: return 'secondary';
    }
  }

  onImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    if (target) {
      target.style.display = 'none';
      const fallback = target.nextElementSibling as HTMLElement;
      if (fallback) {
        fallback.style.display = 'flex';
      }
    }
  }

  navigateToServices() {
    this.viewportScroller.scrollToPosition([0, 0]);
    this.router.navigate(['/services']);
  }

  // TrackBy functions for optimized *ngFor loops
  trackByMemberIndex(index: number, member: TeamMember): number {
    return index;
  }

  trackByProjectIndex(index: number, project: Project): number {
    return index;
  }

  trackByString(index: number, item: string): string {
    return item;
  }

  openConsultationDialog() {
    this.dialogService.open(ConsultationDialogComponent, {
      header: 'Request a Consultation',
      width: '90%',
      maximizable: true,
      style: { maxWidth: '1200px' },
      contentStyle: { height: '85vh', overflow: 'auto' },
      baseZIndex: 10000,
      dismissableMask: true
    }).onClose.subscribe(result => {
      if (result && result.action === 'getQuote') {
        this.viewportScroller.scrollToPosition([0, 0]);
        this.router.navigate(['/quote']);
      }
    });
  }
}