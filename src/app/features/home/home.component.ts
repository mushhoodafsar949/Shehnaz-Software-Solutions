import { Component, OnInit, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { PerformanceService } from '../../core/performance.service';
import { environment } from '../../../environments/environment';

// PrimeNG Imports
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RippleModule } from 'primeng/ripple';
import { ChipModule } from 'primeng/chip';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { DividerModule } from 'primeng/divider';
import { SoftwareShowcaseComponent } from './software-showcase.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
    trigger('slideInRight', [
      transition(':enter', [
        style({ transform: 'translateX(60px)', opacity: 0 }),
        animate('800ms 300ms cubic-bezier(.35,0,.25,1)', style({ transform: 'none', opacity: 1 }))
      ])
    ]),
    trigger('scaleIn', [
      transition(':enter', [
        style({ transform: 'scale(0.8)', opacity: 0 }),
        animate('700ms 200ms cubic-bezier(.35,0,.25,1)', style({ transform: 'scale(1)', opacity: 1 }))
      ])
    ]),
    trigger('staggerList', [
      transition('* => *', [
        animate('600ms cubic-bezier(.35,0,.25,1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('bounceIn', [
      transition(':enter', [
        style({ transform: 'scale(0.3)', opacity: 0 }),
        animate('800ms 400ms cubic-bezier(.68,-0.55,.265,1.55)', style({ transform: 'scale(1)', opacity: 1 }))
      ])
    ]),
    trigger('fadeInUp', [
      transition(':enter', [
        style({ transform: 'translateY(60px)', opacity: 0 }),
        animate('1000ms 500ms cubic-bezier(.35,0,.25,1)', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ]),
    trigger('pulse', [
      transition(':enter', [
        animate('2000ms ease-in-out', keyframes([
          style({ transform: 'scale(1)', offset: 0 }),
          style({ transform: 'scale(1.05)', offset: 0.5 }),
          style({ transform: 'scale(1)', offset: 1 })
        ]))
      ])
    ])
  ],
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    RippleModule,
    ChipModule,
    CarouselModule,
    TagModule,
    DividerModule,
    SoftwareShowcaseComponent
  ]
})
export class HomeComponent implements OnInit, AfterViewInit {
  ceoImagePath = '../../../assets/home/mushhood.png';
  imageLoaded = false;
  imageError = false;

  features = [
    {
      icon: 'pi pi-bolt',
      title: 'Innovation',
      description: 'Cutting-edge solutions using the latest technologies'
    },
    {
      icon: 'pi pi-chart-line',
      title: 'Growth',
      description: 'Scalable solutions that grow with your business'
    },
    {
      icon: 'pi pi-cog',
      title: 'Efficiency',
      description: 'Optimized processes and automated workflows'
    },
    {
      icon: 'pi pi-fast-forward',
      title: 'Speed',
      description: 'Fast development and deployment cycles'
    }
  ];

  services = [
    {
      icon: 'pi pi-desktop',
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge frameworks'
    },
    {
      icon: 'pi pi-cloud',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and DevOps automation'
    },
    {
      icon: 'pi pi-shield',
      title: 'Security',
      description: 'Enterprise-grade security and compliance solutions'
    },
    {
      icon: 'pi pi-chart-bar',
      title: 'Analytics',
      description: 'Data-driven insights and business intelligence'
    }
  ];

  technologies = [
    { name: 'React', category: 'Frontend' },
    { name: 'Angular', category: 'Frontend' },
    { name: 'Vue.js', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: 'Java', category: 'Backend' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Kubernetes', category: 'DevOps' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'TensorFlow', category: 'AI/ML' }
  ];

  processSteps = [
    {
      icon: 'pi pi-search',
      title: 'Discovery',
      description: 'Understanding your business needs and goals'
    },
    {
      icon: 'pi pi-palette',
      title: 'Design',
      description: 'Creating user-centered designs and prototypes'
    },
    {
      icon: 'pi pi-code',
      title: 'Development',
      description: 'Agile development with continuous integration'
    },
    {
      icon: 'pi pi-check-circle',
      title: 'Testing',
      description: 'Comprehensive QA and security testing'
    },
    {
      icon: 'pi pi-upload',
      title: 'Deployment',
      description: 'Seamless launch with monitoring and support'
    }
  ];

  testimonials = [
    {
      quote: 'Nest Tech AI Solutions delivered our platform ahead of schedule and exceeded all expectations. Their team is truly world-class.',
      author: 'Sarah Johnson',
      company: 'TechStart Inc.',
      rating: 5
    },
    {
      quote: 'The best software partner we have ever worked with. Their cloud migration expertise helped us scale 10x faster than expected.',
      author: 'Ahmed Rahman',
      company: 'FinTech Solutions',
      rating: 5
    },
    {
      quote: 'Their analytics platform transformed our decision-making process. ROI was achieved within the first quarter.',
      author: 'Priya Sharma',
      company: 'DataCorp',
      rating: 5
    }
  ];

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller,
    private performanceService: PerformanceService
  ) {}

  ngOnInit(): void {
    this.performanceService.markStart('home-component-init');
  }

  ngAfterViewInit(): void {
    this.performanceService.markEnd('home-component-init');
    
    if (!environment.production) {
      setTimeout(() => {
        this.performanceService.reportPerformance();
      }, 2000);
    }
  }
  
  onImageError(event: Event) {
    console.error('Failed to load CEO image:', (event.target as HTMLImageElement).src);
    this.imageError = true;
    (event.target as HTMLElement).style.display = 'none';
  }
  
  onImageLoad(event: Event) {
    console.log('CEO image loaded successfully');
    this.imageLoaded = true;
  }
  
  navigateToServices() {
    this.viewportScroller.scrollToPosition([0, 0]);
    this.router.navigate(['/services']);
  }
  
  navigateToQuote() {
    this.viewportScroller.scrollToPosition([0, 0]);
    this.router.navigate(['/quote']);
  }

  trackByTech(index: number, tech: any): string {
    return tech.name;
  }
}