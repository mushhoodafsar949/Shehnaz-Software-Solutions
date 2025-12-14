import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { TagModule } from 'primeng/tag';
import { trigger, transition, style, animate } from '@angular/animations';

interface ProjectExample {
  title: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  imageUrl: string;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
}

interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  projects: ProjectExample[];
  features: string[];
  technologies: string[];
  icon: string;
}

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    RippleModule,
    CardModule,
    ChipModule,
    TagModule
  ],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms cubic-bezier(0.35, 0, 0.25, 1)', 
          style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ServiceDetailComponent implements OnInit {
  serviceId: string = '';
  service!: ServiceDetail;

  // Sample project data - this would typically come from a service
  serviceDetails: { [key: string]: ServiceDetail } = {
    'web-development': {
      id: 'web-development',
      title: 'Web Development',
      description: 'Build powerful, responsive web applications with modern frameworks and cutting-edge technologies.',
      icon: 'web-development',
      technologies: ['React', 'Angular', 'Vue.js', 'Node.js', 'TypeScript'],
      features: [
        'Frontend development (React, Angular, Vue.js)',
        'Backend development (Node.js, Python, .NET)',
        'Progressive Web Apps (PWAs)',
        'E-commerce solutions',
        'CMS & custom portals',
        'Performance optimization'
      ],
      projects: [
        {
          title: 'E-commerce Platform Transformation',
          description: 'Complete redesign and development of a modern e-commerce platform for a leading retail brand.',
          challenge: 'The client needed to modernize their outdated e-commerce platform that was struggling with performance issues and couldn\'t handle their growing customer base.',
          solution: 'We developed a scalable, React-based frontend with a Node.js backend, implementing modern e-commerce features and optimizing for performance.',
          results: [
            '40% increase in conversion rate',
            '60% improvement in page load times',
            '300% increase in mobile sales',
            'Seamless integration with inventory management'
          ],
          technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'AWS'],
          imageUrl: 'assets/project-examples/ecommerce-dashboard.svg',
          testimonial: {
            quote: 'The new platform has transformed our business. The performance improvements and modern features have directly contributed to our growth.',
            author: 'Sarah Johnson',
            position: 'CTO, RetailCo'
          }
        }
      ]
    },
    'mobile-development': {
      id: 'mobile-development',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
      icon: 'mobile-development',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
      features: [
        'iOS native development (Swift)',
        'Android native development (Kotlin)',
        'Cross-platform apps (React Native, Flutter)',
        'App Store optimization',
        'Mobile UI/UX design',
        'Push notifications & analytics'
      ],
      projects: [
        {
          title: 'Health & Fitness Tracking App',
          description: 'A comprehensive fitness tracking application with social features and AI-powered recommendations.',
          challenge: 'Create a cross-platform fitness app that provides personalized workout plans and seamlessly syncs with various fitness devices.',
          solution: 'Developed using Flutter for cross-platform compatibility, with Firebase backend for real-time data sync and ML Kit for workout analysis.',
          results: [
            '1M+ downloads across iOS and Android',
            '4.8 average rating on both app stores',
            '85% user retention rate after 3 months',
            'Featured in App Store\'s "Apps We Love"'
          ],
          technologies: ['Flutter', 'Firebase', 'ML Kit', 'Google Fit API', 'HealthKit'],
          imageUrl: 'assets/project-examples/fitness-app.svg',
          testimonial: {
            quote: 'The app has exceeded our expectations in every way. The team\'s attention to detail and technical expertise is evident in the final product.',
            author: 'Michael Chen',
            position: 'Founder, FitTech'
          }
        }
      ]
    },
    'cloud-devops': {
      id: 'cloud-devops',
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and DevOps automation for faster, more reliable software delivery.',
      icon: 'cloud-devops',
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
      features: [
        'Cloud migration (AWS, Azure, GCP)',
        'CI/CD pipeline automation',
        'Containerization (Docker, Kubernetes)',
        'Infrastructure as Code',
        'Monitoring & logging',
        'Security & compliance'
      ],
      projects: [
        {
          title: 'Cloud Migration & DevOps Transformation',
          description: 'Complete cloud migration and DevOps implementation for a financial services company.',
          challenge: 'Modernize legacy infrastructure and implement automated deployment pipelines while ensuring zero downtime.',
          solution: 'Implemented infrastructure as code using Terraform, containerized applications with Kubernetes, and set up automated CI/CD pipelines.',
          results: [
            '99.99% system uptime achieved',
            'Deployment time reduced from days to minutes',
            '40% reduction in infrastructure costs',
            'Automated security compliance checks'
          ],
          technologies: ['AWS', 'Kubernetes', 'Terraform', 'Jenkins', 'Prometheus'],
          imageUrl: 'assets/project-examples/cloud-architecture.svg',
          testimonial: {
            quote: 'The cloud migration has revolutionized our development process. We\'re now able to deploy faster and more reliably than ever before.',
            author: 'David Wilson',
            position: 'Head of Engineering, FinServ Inc.'
          }
        }
      ]
    }
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.serviceId = params['id'];
      this.service = this.serviceDetails[this.serviceId];
    });
  }
}
