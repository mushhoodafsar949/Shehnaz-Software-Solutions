import { Component } from '@angular/core';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SmartServiceLogoComponent } from './smart-service-logo.component';
import { ConsultationDialogComponent } from '../../shared/consultation-dialog/consultation-dialog.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatDialogModule, SmartServiceLogoComponent],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('900ms 200ms cubic-bezier(.35,0,.25,1)', style({ opacity: 1 }))
      ])
    ]),
    trigger('slideUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('600ms 300ms cubic-bezier(.35,0,.25,1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('scaleIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('600ms 400ms cubic-bezier(.35,0,.25,1)', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class ServicesComponent {
  services = [
    {
      title: 'Custom Software Development',
      desc: 'Bespoke web and mobile solutions tailored to your business goals, built with the latest technologies and best practices.',
      features: [
        'Full-stack web & mobile apps',
        'Enterprise-grade architecture',
        'API & third-party integrations',
        'Agile, transparent delivery',
        'Ongoing support & scaling'
      ],
      icon: 'developer_mode'
    },
    {
      title: 'Cloud & DevOps Solutions',
      desc: 'Modernize your infrastructure with secure, scalable cloud and DevOps automation for faster, safer deployments.',
      features: [
        'Cloud migration & optimization',
        'CI/CD pipelines & automation',
        'Containerization (Docker, K8s)',
        'Serverless & microservices',
        '24/7 monitoring & support'
      ],
      icon: 'cloud_queue'
    },
    {
      title: 'UI/UX & Product Design',
      desc: 'User-centered design for delightful, intuitive digital experiences that drive engagement and results.',
      features: [
        'User research & journey mapping',
        'Wireframes & interactive prototypes',
        'UI kits & design systems',
        'Usability testing',
        'Branding & visual identity'
      ],
      icon: 'design_services'
    },
    {
      title: 'Data & Analytics',
      desc: 'Unlock business insights with advanced analytics, dashboards, and AI-powered solutions.',
      features: [
        'Business intelligence dashboards',
        'Big data processing',
        'Machine learning & AI integration',
        'Data visualization',
        'ETL & data warehousing'
      ],
      icon: 'bar_chart'
    }
  ];

  trustPoints = [
    {
      icon: 'assets/services/trust-expert.svg',
      title: 'Proven Expertise',
      desc: 'Decades of combined experience delivering complex projects for global clients across multiple industries.'
    },
    {
      icon: 'assets/services/trust-secure.svg',
      title: 'Security & Compliance',
      desc: 'Enterprise-grade security, privacy, and compliance at every step with SOC 2, GDPR, and HIPAA standards.'
    },
    {
      icon: 'assets/services/trust-partner.svg',
      title: 'True Partnership',
      desc: 'Transparent, collaborative process with a focus on your business outcomes and long-term success.'
    },
    {
      icon: 'assets/services/trust-support.svg',
      title: 'Ongoing Support',
      desc: 'Dedicated support and continuous improvement, long after launch with 24/7 monitoring and maintenance.'
    },
    {
      icon: 'assets/services/trust-innovate.svg',
      title: 'Innovation Focus',
      desc: 'Cutting-edge technologies and methodologies to keep your business ahead of the competition.'
    },
    {
      icon: 'assets/services/trust-quality.svg',
      title: 'Quality Assurance',
      desc: 'Rigorous testing and quality control processes ensuring reliable, scalable, and maintainable solutions.'
    }
  ];

  clientLogos = [
    'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/9/96/Samsung_Logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png'
  ];

  processSteps = [
    { title: 'Discovery & Analysis', desc: 'We listen, analyze, and define your unique needs through comprehensive requirements gathering.' },
    { title: 'Strategy & Planning', desc: 'Crafting detailed roadmaps and technical architecture aligned with your business goals.' },
    { title: 'Design & Prototyping', desc: 'Creating user-centric, beautiful solutions with interactive prototypes and design systems.' },
    { title: 'Development & Testing', desc: 'Agile, transparent, and high-quality engineering with continuous testing and feedback.' },
    { title: 'Deployment & Launch', desc: 'Seamless deployment and go-live support with comprehensive documentation and training.' },
    { title: 'Growth & Optimization', desc: 'Continuous improvement, scaling, and optimization based on real-world performance data.' }
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

  testimonials = [
    {
      quote: 'Nest Tech Solutions delivered our platform ahead of schedule and exceeded all expectations. Their team is truly world-class.',
      author: 'Sarah Johnson',
      company: 'TechStart Inc.',
      photo: 'assets/home/testimonial1.jpg'
    },
    {
      quote: 'The best software partner we have ever worked with. Their cloud migration expertise helped us scale 10x faster than expected.',
      author: 'Ahmed Rahman',
      company: 'FinTech Solutions',
      photo: 'assets/home/testimonial2.jpg'
    },
    {
      quote: 'Their analytics platform transformed our decision-making process. ROI was achieved within the first quarter.',
      author: 'Priya Sharma',
      company: 'DataCorp',
      photo: 'assets/home/testimonial3.jpg'
    }
  ];

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller,
    private dialog: MatDialog
  ) {}

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

  navigateToContact() {
    this.viewportScroller.scrollToPosition([0, 0]);
    this.router.navigate(['/contact']);
  }

  navigateToQuote() {
    this.viewportScroller.scrollToPosition([0, 0]);
    this.router.navigate(['/quote']);
  }
} 