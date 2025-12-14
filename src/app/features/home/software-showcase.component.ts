import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ChipModule } from 'primeng/chip';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-software-showcase',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    RippleModule,
    ChipModule,
    CardModule,
    TagModule
  ],
  template: `
    <section class="software-showcase" @fadeIn>
      <div class="showcase-container">
        <div class="showcase-item" *ngFor="let software of softwareList; let i = index" 
             [class.reverse]="i % 2 === 1"
             @slideIn>
          <div class="content-side">
            <h2>{{software.name}}</h2>
            <p class="description">{{software.description}}</p>
            <div class="tech-stack">
              <p-chip *ngFor="let tech of software.technologies" [label]="tech"></p-chip>
            </div>
            <div class="features">
              <div class="feature" *ngFor="let feature of software.features">
                <i class="pi pi-check-circle"></i>
                <span>{{feature}}</span>
              </div>
            </div>
            <div class="stats">
              <div class="stat">
                <span class="value">{{software.users}}+</span>
                <span class="label">Active Users</span>
              </div>
              <div class="stat">
                <span class="value">{{software.rating}}</span>
                <span class="label">User Rating</span>
              </div>
            </div>
            <button pButton pRipple type="button" 
                    label="Learn More" 
                    class="p-button-outlined"
                    (click)="router.navigate(['/product', software.id])"></button>
          </div>
          <div class="image-side">
            <div class="image-grid">
              <div class="image-item" *ngFor="let svg of software.svgs">
                <img [src]="svg" [alt]="software.name + ' illustration'" class="svg-image" (error)="onImageError(svg)">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .software-showcase {
      padding: 8rem 2rem;
      background: var(--surface-ground);
      overflow: hidden;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, 
          rgba(var(--primary-color-rgb), 0), 
          rgba(var(--primary-color-rgb), 0.2), 
          rgba(var(--primary-color-rgb), 0));
      }
    }

    .showcase-container {
      max-width: 1440px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }

    .showcase-item {
      display: flex;
      align-items: center;
      gap: 4rem;
      margin-bottom: 8rem;
      min-height: 600px;

      &.reverse {
        flex-direction: row-reverse;

        .content-side {
          padding-left: 0;
          padding-right: 4rem;
        }
      }

      @media (max-width: 1024px) {
        flex-direction: column;
        gap: 2rem;
        margin-bottom: 4rem;

        &.reverse {
          flex-direction: column;

          .content-side {
            padding-right: 0;
          }
        }
      }
    }

    .content-side {
      flex: 1;
      padding-left: 4rem;

      @media (max-width: 1024px) {
        padding-left: 0;
        text-align: center;
      }

      h2 {
        font-size: 3rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
        background: linear-gradient(45deg, var(--primary-color), var(--primary-color-text));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .description {
        font-size: 1.25rem;
        line-height: 1.6;
        color: var(--text-color-secondary);
        margin-bottom: 2rem;
      }

      .tech-stack {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 2rem;

        @media (max-width: 1024px) {
          justify-content: center;
        }
      }

      .features {
        margin-bottom: 2rem;

        .feature {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;

          @media (max-width: 1024px) {
            justify-content: center;
          }

          i {
            color: var(--primary-color);
            margin-right: 1rem;
          }

          span {
            color: var(--text-color);
            font-size: 1.1rem;
          }
        }
      }

      .stats {
        display: flex;
        gap: 3rem;
        margin-bottom: 2rem;

        @media (max-width: 1024px) {
          justify-content: center;
        }

        .stat {
          text-align: center;

          .value {
            display: block;
            font-size: 2.5rem;
            font-weight: 600;
            color: var(--primary-color);
            margin-bottom: 0.5rem;
          }

          .label {
            color: var(--text-color-secondary);
            font-size: 1rem;
          }
        }
      }
    }

    .image-side {
      flex: 1;
      min-height: 600px;
      position: relative;

      .image-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 3rem;
        padding: 3rem;
        position: relative;

        @media (max-width: 1024px) {
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        .image-item {
          aspect-ratio: 16/9;
          background: var(--surface-card);
          border-radius: 1.5rem;
          padding: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          position: relative;
          overflow: hidden;
          cursor: pointer;

          &:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          }

          &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0));
            z-index: 1;
          }

          .svg-image {
            width: 100%;
            height: 100%;
            z-index: 2;
            object-fit: contain;
            filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
          }

          &:first-child {
            grid-column: 1 / -1;
            grid-row: 1;
            aspect-ratio: 2/1;

            .svg-image {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }
        }
      }
    }
  `],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('900ms 200ms cubic-bezier(.35,0,.25,1)', style({ opacity: 1 }))
      ])
    ]),
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100px)' }),
        animate('900ms 200ms cubic-bezier(.35,0,.25,1)', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class SoftwareShowcaseComponent {
  constructor(public router: Router) {}

  ngOnInit() {
    // Log SVG paths to verify they're correct
    this.softwareList.forEach(software => {
      console.log('Loading SVGs for:', software.name);
      software.svgs.forEach(svg => console.log('SVG path:', svg));
    });
  }

  onImageError(svg: string) {
    console.error('Failed to load SVG:', svg);
  }
  softwareList = [
    {
      id: 'healthconnect',
      name: 'HealthConnect Pro',
      description: 'A comprehensive healthcare management system that revolutionizes patient care. Our platform seamlessly integrates electronic health records, telemedicine, and AI-powered diagnostics to provide an unparalleled healthcare experience.',
      features: [
        'Real-time patient monitoring',
        'AI-assisted diagnosis',
        'Secure health records management',
        'Integrated billing system'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'TensorFlow', 'WebRTC'],
      users: '50,000',
      rating: '4.8',
      svgs: [
        'assets/software-showcase/healthconnect-dashboard.svg',
        'assets/software-showcase/healthconnect-patient-records.svg',
        'assets/software-showcase/healthconnect-telemedicine.svg',
        'assets/software-showcase/healthconnect-analytics.svg',
        'assets/software-showcase/healthconnect-calendar.svg'
      ]
    },
    {
      id: 'fintech',
      name: 'FinTech Suite',
      description: 'A comprehensive financial technology platform featuring a corporate web portal for bulk processing, portfolio management, and analytics, plus a feature-rich mobile application for individual users. Empowering businesses and consumers with advanced financial tools.',
      features: [
        'Corporate web dashboard for bulk processing',
        'Portfolio management & investment tracking',
        'Mobile app with stocks & mutual funds',
        'Rewards, referrals & loyalty programs',
        'Advance salary & account upgrades',
        'Secure payments & international transfers'
      ],
      technologies: ['Angular', 'Flutter', 'Python', 'PostgreSQL', 'Node.js', 'Redis'],
      users: '75,000',
      rating: '4.9',
      svgs: [
        'assets/product-details/fintech/corporate-dashboard.svg',
        'assets/product-details/fintech/mobile-stocks-funds.svg',
        'assets/product-details/fintech/web-portfolio-analytics.svg',
        'assets/product-details/fintech/mobile-rewards-spin.svg',
        'assets/product-details/fintech/mobile-payments-upgrades.svg'
      ]
    },
    {
      id: 'smartretail',
      name: 'SmartRetail Pro',
      description: 'A next-generation retail management platform that brings together inventory management, point of sale, and customer analytics. Empower your retail business with AI-driven insights and seamless operations.',
      features: [
        'Smart inventory tracking',
        'AI-powered analytics',
        'Customer behavior insights',
        'Automated reordering'
      ],
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'TensorFlow', 'Redis'],
      users: '30,000',
      rating: '4.7',
      svgs: [
        'assets/software-showcase/smartretail-dashboard.svg',
        'assets/software-showcase/smartretail-inventory.svg',
        'assets/software-showcase/smartretail-pos.svg',
        'assets/software-showcase/smartretail-customer-analytics.svg',
        'assets/software-showcase/smartretail-supply-chain.svg'
      ]
    }
  ];
}