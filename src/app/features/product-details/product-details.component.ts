import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { GalleriaModule } from 'primeng/galleria';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MessageModule } from 'primeng/message';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    TabViewModule,
    GalleriaModule,
    CardModule,
    ChipModule,
    ProgressSpinnerModule,
    MessageModule
  ],
  template: `
    <section class="product-details">
      <div *ngIf="loading" class="loading-container">
        <p-progressSpinner></p-progressSpinner>
        <p>Loading product details...</p>
      </div>

      <div *ngIf="error" class="error-container">
        <p-message severity="error" [text]="error"></p-message>
        <button pButton type="button" label="Go Back" (click)="goBack()" class="p-button-secondary mt-3"></button>
      </div>

      <div *ngIf="!loading && !error" class="product-content">
      <div class="product-header">
        <h1>{{ product?.name }}</h1>
        <p class="description">{{ product?.description }}</p>
        <div class="tech-stack">
          <p-chip *ngFor="let tech of product?.technologies" [label]="tech"></p-chip>
        </div>
      </div>

      <p-tabView>
        <!-- Overview Tab -->
        <p-tabPanel header="Overview">
          <div class="overview-section">
            <div class="product-explanation" *ngIf="product?.id === 'fintech'">
              <h2>Product Overview</h2>
              <p class="explanation-text">
                FinTech Suite is a comprehensive financial technology platform consisting of two main components:
              </p>
              <div class="component-explanation">
                <h3>1. Corporate Web Portal</h3>
                <p>Designed for corporate clients, this Angular-based web application provides enterprise-grade financial management capabilities including bulk transaction processing, comprehensive portfolio views, real-time gains/losses tracking, seamless third-party integrations, and advanced investment management tools.</p>
                
                <h3>2. Mobile Application</h3>
                <p>Built with Flutter for cross-platform compatibility (iOS & Android), the mobile app offers a complete suite of financial services including stocks trading, mutual funds management, rewards & referral programs, spin & win games, advance salary features, account tier upgrades (L1, L2, Ultra, Freelancer), secure payments with IBFT and international transfers, and a comprehensive loyalty points system.</p>
              </div>
            </div>

            <div class="screenshots-section">
              <h2>Product Screenshots</h2>
              <p-galleria [value]="product?.screenshots" [responsiveOptions]="responsiveOptions"
                         [containerStyle]="{ 'max-width': '1200px', 'margin': '0 auto' }" [numVisible]="5">
                <ng-template pTemplate="item" let-item>
                  <div class="screenshot-container">
                    <img [src]="item.url" [alt]="item.title" class="screenshot-image">
                    <div class="screenshot-title">{{ item.title }}</div>
                  </div>
                </ng-template>
                <ng-template pTemplate="thumbnail" let-item>
                  <div class="thumbnail-item">
                    <img [src]="item.url" [alt]="item.title" class="thumbnail-image">
                  </div>
                </ng-template>
              </p-galleria>
            </div>

            <div class="features-section">
              <h2>Key Features</h2>
              <div class="features-grid">
                <p-card *ngFor="let feature of product?.features" styleClass="feature-card">
                  <div class="feature-content">
                    <div class="feature-image-container">
                      <img [src]="feature.image" [alt]="feature.title" class="feature-image" (error)="onImageError($event)">
                    </div>
                    <h3>{{ feature.title }}</h3>
                    <p>{{ feature.description }}</p>
                  </div>
                </p-card>
              </div>
            </div>
          </div>
        </p-tabPanel>

        <!-- Technical Architecture Tab -->
        <p-tabPanel header="Technical Architecture">
          <div class="architecture-section">
            <div class="diagram-container">
              <h2>System Architecture</h2>
              <img [src]="product?.systemArchitecture" alt="System Architecture Diagram">
            </div>

            <div class="diagram-container">
              <h2>DevOps Pipeline</h2>
              <div class="svg-wrapper">
                <img [src]="product?.devopsPipeline" alt="DevOps Pipeline" (error)="onImageError($event)" (load)="onImageLoad($event)" class="diagram-image">
              </div>
            </div>

            <div class="tech-details">
              <h2>Technology Stack</h2>
              <div class="tech-grid">
                <div *ngFor="let tech of product?.techDetails" class="tech-item">
                  <h3>{{ tech.category }}</h3>
                  <ul>
                    <li *ngFor="let item of tech.items">{{ item }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </p-tabPanel>

        <!-- Development Process Tab -->
        <p-tabPanel header="Development Process">
          <div class="process-section">
            <div class="diagram-container">
              <h2>Agile Methodology</h2>
              <div class="svg-wrapper">
                <img [src]="product?.agileDiagram" alt="Agile Process" (error)="onImageError($event)" (load)="onImageLoad($event)" class="diagram-image">
              </div>
            </div>

            <div class="diagram-container">
              <h2>Sprint Workflow</h2>
              <img [src]="product?.sprintWorkflow" alt="Sprint Workflow">
            </div>

            <div class="process-details">
              <h2>Development Practices</h2>
              <div class="practices-grid">
                <p-card *ngFor="let practice of product?.developmentPractices">
                  <h3>{{ practice.title }}</h3>
                  <p>{{ practice.description }}</p>
                </p-card>
              </div>
            </div>
          </div>
        </p-tabPanel>

        <!-- Security & Compliance Tab -->
        <p-tabPanel header="Security & Compliance">
          <div class="security-section">
            <div class="security-features">
              <h2>Security Measures</h2>
              <div class="features-grid">
                <p-card *ngFor="let feature of product?.securityFeatures">
                  <h3>{{ feature.title }}</h3>
                  <p>{{ feature.description }}</p>
                </p-card>
              </div>
            </div>

            <div class="compliance">
              <h2>Compliance Standards</h2>
              <div class="standards-grid">
                <p-card *ngFor="let standard of product?.complianceStandards">
                  <h3>{{ standard.name }}</h3>
                  <p>{{ standard.description }}</p>
                </p-card>
              </div>
            </div>
          </div>
        </p-tabPanel>
      </p-tabView>
      </div>
    </section>
  `,
  styles: [`
    .product-details {
      min-height: 600px;
      position: relative;
    }

    .loading-container,
    .error-container {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;

      p {
        margin-top: 1rem;
        color: var(--text-color-secondary);
      }

      .mt-3 {
        margin-top: 1rem;
      }
    }

    .product-content {
      padding: 4rem 2rem;
      max-width: 1440px;
      margin: 0 auto;

      .product-header {
        text-align: center;
        margin-bottom: 4rem;

        h1 {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          background: linear-gradient(45deg, var(--primary-color), var(--primary-color-text));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .description {
          font-size: 1.25rem;
          color: var(--text-color-secondary);
          max-width: 800px;
          margin: 0 auto 2rem;
        }

        .tech-stack {
          display: flex;
          gap: 0.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }
      }

      .overview-section {
        .product-explanation {
          margin-bottom: 4rem;
          padding: 3rem;
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
          border-radius: 1.5rem;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(26, 35, 126, 0.1);

          h2 {
            color: var(--primary-color);
            margin-bottom: 2rem;
            font-size: 2.5rem;
            font-weight: 700;
            background: linear-gradient(135deg, #1a237e 0%, #3949ab 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .explanation-text {
            font-size: 1.2rem;
            color: var(--text-color-secondary);
            margin-bottom: 2rem;
            line-height: 1.8;
            font-weight: 500;
          }

          .component-explanation {
            background: white;
            padding: 2rem;
            border-radius: 1rem;
            margin-top: 1.5rem;
            border-left: 4px solid var(--primary-color);
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);

            h3 {
              color: var(--primary-color);
              margin-top: 0;
              margin-bottom: 1rem;
              font-size: 1.5rem;
              font-weight: 700;
            }

            p {
              color: var(--text-color-secondary);
              line-height: 1.8;
              margin-bottom: 0;
              font-size: 1.05rem;
            }
          }
        }

        .screenshots-section {
          margin-bottom: 5rem;

          h2 {
            color: var(--text-color);
            margin-bottom: 3rem;
            font-size: 2.5rem;
            text-align: center;
            font-weight: 700;
            background: linear-gradient(135deg, #1a237e 0%, #3949ab 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .screenshot-container {
            text-align: center;
            padding: 2rem;
            background: white;
            border-radius: 1.5rem;
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
            margin-bottom: 2rem;

            .screenshot-image {
              width: 100%;
              max-width: 1100px;
              height: auto;
              border-radius: 1rem;
              box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
              display: block;
              margin: 0 auto;
              transition: transform 0.3s ease;

              &:hover {
                transform: scale(1.02);
              }
            }

            .screenshot-title {
              margin-top: 1.5rem;
              font-weight: 700;
              color: var(--primary-color);
              font-size: 1.3rem;
              padding: 0.75rem 1.5rem;
              background: linear-gradient(135deg, rgba(26, 35, 126, 0.1) 0%, rgba(57, 73, 171, 0.1) 100%);
              border-radius: 0.5rem;
              display: inline-block;
            }
          }

          .thumbnail-item {
            width: 120px;
            height: 72px;
            overflow: hidden;
            border-radius: 0.75rem;
            cursor: pointer;
            border: 3px solid transparent;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

            &:hover {
              border-color: var(--primary-color);
              transform: translateY(-4px);
              box-shadow: 0 8px 20px rgba(26, 35, 126, 0.2);
            }

            .thumbnail-image {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        }

        .features-section {
          h2 {
            color: var(--text-color);
            margin-bottom: 3rem;
            font-size: 2.5rem;
            text-align: center;
            font-weight: 700;
            background: linear-gradient(135deg, #1a237e 0%, #3949ab 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
            align-items: start;
            width: 100%;

            @media (max-width: 768px) {
              grid-template-columns: 1fr;
            }
          }

          :host ::ng-deep .features-grid p-card.feature-card {
            width: 100%;
            display: block;
            
            .p-card {
              width: 100%;
              height: 100%;
              margin: 0;
            }
            
            .p-card-body {
              padding: 0 !important;
              height: 100%;
              display: flex;
              flex-direction: column;
            }

            .p-card-content {
              padding: 0 !important;
              height: 100%;
              display: flex;
              flex-direction: column;
            }
          }

          .feature-card {
            width: 100%;
            height: 100%;
            max-width: 100%;
            display: block;
            background: white;
            border-radius: 1.5rem;
            overflow: hidden;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
            border: 1px solid rgba(26, 35, 126, 0.1);
            box-sizing: border-box;

            &:hover {
              transform: translateY(-8px);
              box-shadow: 0 16px 40px rgba(26, 35, 126, 0.2);
            }

            .feature-content {
              display: flex;
              flex-direction: column;
              height: 100%;
              padding: 2rem;
              flex: 1;
              position: relative;
              width: 100%;
              max-width: 100%;
              box-sizing: border-box;
              overflow: hidden;

              .feature-image-container {
                width: 100%;
                height: 250px;
                max-width: 100%;
                margin-bottom: 1.5rem;
                display: flex;
                align-items: center;
                justify-content: center;
                background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
                border-radius: 1rem;
                overflow: hidden;
                position: relative;
                border: 2px solid rgba(26, 35, 126, 0.1);
                flex-shrink: 0;
                box-sizing: border-box;

                &::before {
                  content: '';
                  position: absolute;
                  top: 0;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  background: linear-gradient(135deg, rgba(26, 35, 126, 0.05) 0%, transparent 100%);
                  pointer-events: none;
                  z-index: 0;
                }

                .feature-image {
                  max-width: 100%;
                  max-height: 100%;
                  width: auto;
                  height: auto;
                  object-fit: contain;
                  object-position: center;
                  padding: 0.5rem;
                  z-index: 1;
                  position: relative;
                  box-sizing: border-box;
                  display: block;
                  margin: 0 auto;
                }
              }

              h3 {
                color: var(--primary-color);
                margin-bottom: 1rem;
                font-size: 1.5rem;
                font-weight: 700;
                line-height: 1.3;
                min-height: 4rem;
                display: flex;
                align-items: flex-start;
              }

              p {
                color: var(--text-color-secondary);
                line-height: 1.8;
                flex: 1;
                font-size: 1.05rem;
                margin: 0;
              }
            }
          }
        }
      }

      .architecture-section,
      .process-section,
      .security-section {
        .diagram-container {
          margin-bottom: 4rem;
          text-align: center;

          h2 {
            margin-bottom: 2rem;
            color: var(--text-color);
          }

          .svg-wrapper {
            width: 100%;
            min-height: 500px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #f8f9fa;
            border-radius: 1rem;
            padding: 2rem;
            border: 2px solid rgba(26, 35, 126, 0.1);
          }

          img.diagram-image {
            max-width: 100%;
            width: 100%;
            height: auto;
            min-height: 400px;
            max-height: 700px;
            border-radius: 0.5rem;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            display: block;
            margin: 0 auto;
            object-fit: contain;
            background: white;
          }
        }

        .tech-grid,
        .practices-grid,
        .standards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }
      }

      :host ::ng-deep {
        .p-tabview-nav {
          justify-content: center;
          margin-bottom: 3rem;
        }

        .p-galleria {
          margin-bottom: 4rem;
        }

        .thumbnail-item {
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
  `]
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  product: any;
  loading = true;
  error = '';
  private subscription: Subscription | undefined;

  private getProductName(productId: string): string {
    switch (productId) {
      case 'healthconnect':
        return 'HealthConnect Pro';
      case 'fintech':
        return 'FinTech Suite';
      case 'smartretail':
        return 'SmartRetail Pro';
      default:
        return 'Unknown Product';
    }
  }

  private getProductDescription(productId: string): string {
    switch (productId) {
      case 'healthconnect':
        return 'A comprehensive healthcare management system that revolutionizes patient care. Our platform seamlessly integrates electronic health records, telemedicine, and AI-powered diagnostics to provide an unparalleled healthcare experience.';
      case 'fintech':
        return 'A comprehensive financial technology platform featuring two powerful components: (1) Corporate Web Portal - A robust web-based dashboard designed for corporate clients, enabling bulk processing, comprehensive portfolio views, gains/losses tracking, third-party integrations, and investment management. (2) Mobile Application - A feature-rich Flutter-based mobile app offering stocks trading, mutual funds, rewards & referrals, spin & win games, advance salary, account tier upgrades (L1, L2, Ultra, Freelancer), secure payments including IBFT and international transfers, and loyalty points system. Built with Angular for web and Flutter for mobile, providing seamless financial management for both businesses and individual users.';
      case 'smartretail':
        return 'A next-generation retail management platform that brings together inventory management, point of sale, and customer analytics. Empower your retail business with AI-driven insights and seamless operations.';
      default:
        return 'Product description not available.';
    }
  }

  private getProductTechnologies(productId: string): string[] {
    switch (productId) {
      case 'healthconnect':
        return ['Angular', 'Node.js', 'MongoDB', 'TensorFlow', 'WebRTC'];
      case 'fintech':
        return ['Angular', 'Flutter', 'Python', 'PostgreSQL', 'TensorFlow', 'Blockchain'];
      case 'smartretail':
        return ['Vue.js', 'Laravel', 'MySQL', 'TensorFlow', 'Redis'];
      default:
        return [];
    }
  }

  private getTechDetails(productId: string): any[] {
    switch (productId) {
      case 'healthconnect':
        return [
          {
            category: 'Frontend',
            items: ['Angular 17', 'RxJS', 'NgRx', 'PrimeNG', 'WebRTC']
          },
          {
            category: 'Backend',
            items: ['Node.js', 'Express', 'MongoDB', 'Redis', 'Socket.io']
          }
        ];
      case 'fintech':
        return [
          {
            category: 'Frontend (Web Portal)',
            items: ['Angular', 'RxJS', 'PrimeNG', 'Chart.js', 'WebSocket', 'RxJS']
          },
          {
            category: 'Mobile App (Flutter)',
            items: ['Flutter', 'Dart', 'Provider', 'HTTP', 'WebSocket', 'Shared Preferences']
          },
          {
            category: 'Backend Services',
            items: ['Python', 'FastAPI', 'Node.js', 'PostgreSQL', 'Redis', 'Celery']
          },
          {
            category: 'Payment Integration',
            items: ['IBFT Gateway', 'International Transfer APIs', 'Payment Processors', 'Secure APIs']
          }
        ];
      case 'smartretail':
        return [
          {
            category: 'Frontend',
            items: ['Vue.js', 'Vuex', 'TailwindCSS', 'Chart.js', 'WebSocket']
          },
          {
            category: 'Backend',
            items: ['Laravel', 'MySQL', 'Redis', 'RabbitMQ', 'WebSocket']
          }
        ];
      default:
        return [];
    }
  }

  private getDevelopmentPractices(productId: string): any[] {
    switch (productId) {
      case 'healthconnect':
        return [
          {
            title: 'Test-Driven Development',
            description: 'Comprehensive testing strategy including unit, integration, and e2e tests'
          },
          {
            title: 'HIPAA Compliance',
            description: 'Strict adherence to healthcare data protection standards'
          }
        ];
      case 'fintech':
        return [
          {
            title: 'Security-First Development',
            description: 'Rigorous security testing and code review processes'
          },
          {
            title: 'Performance Optimization',
            description: 'Continuous monitoring and optimization of trading systems'
          }
        ];
      case 'smartretail':
        return [
          {
            title: 'Edge Computing',
            description: 'Optimized for local processing and offline capabilities'
          },
          {
            title: 'IoT Integration',
            description: 'Seamless integration with retail IoT devices and sensors'
          }
        ];
      default:
        return [];
    }
  }

  private getSecurityFeatures(productId: string): any[] {
    switch (productId) {
      case 'healthconnect':
        return [
          {
            title: 'End-to-End Encryption',
            description: 'Military-grade encryption for all patient data and communications'
          },
          {
            title: 'Access Control',
            description: 'Role-based access control with detailed audit logging'
          }
        ];
      case 'fintech':
        return [
          {
            title: 'Blockchain Security',
            description: 'Immutable transaction records with cryptographic verification'
          },
          {
            title: 'Fraud Detection',
            description: 'AI-powered real-time fraud detection system'
          }
        ];
      case 'smartretail':
        return [
          {
            title: 'Data Protection',
            description: 'Secure handling of customer and transaction data'
          },
          {
            title: 'Physical Security',
            description: 'Integration with store security systems and cameras'
          }
        ];
      default:
        return [];
    }
  }

  private getComplianceStandards(productId: string): any[] {
    switch (productId) {
      case 'healthconnect':
        return [
          {
            name: 'HIPAA Compliance',
            description: 'Fully compliant with healthcare data protection regulations'
          },
          {
            name: 'GDPR Compliance',
            description: 'Meets EU data protection standards'
          }
        ];
      case 'fintech':
        return [
          {
            name: 'PCI DSS',
            description: 'Payment Card Industry Data Security Standard compliant'
          },
          {
            name: 'SOC 2',
            description: 'Service Organization Control 2 certified'
          }
        ];
      case 'smartretail':
        return [
          {
            name: 'PCI Compliance',
            description: 'Secure payment processing standards'
          },
          {
            name: 'ISO 27001',
            description: 'Information security management certification'
          }
        ];
      default:
        return [];
    }
  }

  private getProductFeatures(productId: string): any[] {
    switch (productId) {
      case 'healthconnect':
        return [
          {
            title: 'Comprehensive Dashboard',
            description: 'Centralized healthcare management dashboard providing real-time insights into patient statistics, appointment schedules, and system performance metrics',
            image: '/assets/software-showcase/healthconnect-dashboard.svg'
          },
          {
            title: 'Electronic Health Records',
            description: 'Secure and comprehensive patient records management system with detailed medical history, prescriptions, and treatment plans',
            image: '/assets/software-showcase/healthconnect-patient-records.svg'
          },
          {
            title: 'Telemedicine Integration',
            description: 'Seamless video consultation platform enabling remote patient-doctor interactions with real-time communication and screen sharing capabilities',
            image: '/assets/software-showcase/healthconnect-telemedicine.svg'
          },
          {
            title: 'AI-Powered Analytics',
            description: 'Advanced machine learning algorithms for accurate diagnosis assistance, predictive health analytics, and treatment recommendations',
            image: '/assets/software-showcase/healthconnect-analytics.svg'
          },
          {
            title: 'Appointment Scheduling',
            description: 'Intelligent calendar system for managing appointments, scheduling consultations, and optimizing healthcare provider availability',
            image: '/assets/software-showcase/healthconnect-calendar.svg'
          }
        ];
      case 'fintech':
        return [
          {
            title: 'Corporate Web Portal - Bulk Processing',
            description: 'Enterprise-grade web dashboard for corporate clients featuring bulk transaction processing, comprehensive portfolio views, real-time gains/losses tracking, seamless third-party integrations, and advanced investment management tools. Built with Angular for optimal performance and scalability.',
            image: '/assets/product-details/fintech/corporate-dashboard.svg'
          },
          {
            title: 'Web Portal - Portfolio Analytics',
            description: 'Advanced portfolio analytics dashboard providing comprehensive insights into total assets, active investments, ROI tracking, and risk assessment. Features interactive performance trend charts, asset allocation visualization, and real-time activity monitoring for informed investment decisions.',
            image: '/assets/product-details/fintech/web-portfolio-analytics.svg'
          },
          {
            title: 'Web Portal - Integrations Dashboard',
            description: 'Centralized integrations management dashboard for monitoring and managing all third-party API connections. Track banking APIs, payment gateways, trading platforms, and analytics integrations. Monitor API request activity, bulk processing queues, and integration health status in real-time.',
            image: '/assets/product-details/fintech/web-integrations-dashboard.svg'
          },
          {
            title: 'Web Portal - Gains & Losses Analysis',
            description: 'Comprehensive gains and losses analysis tool providing detailed breakdowns by sector and category. View total gains, losses, and net profit with visual charts. Track performance indicators, win rates, and gain ratios to optimize investment strategies.',
            image: '/assets/product-details/fintech/web-gains-losses.svg'
          },
          {
            title: 'Mobile App - Home Dashboard',
            description: 'User-friendly mobile home dashboard providing quick access to account balance, recent transactions, and quick actions. Features personalized welcome screen, total balance overview with monthly changes, and convenient shortcuts for common operations like send, receive, rewards, and more.',
            image: '/assets/product-details/fintech/mobile-home-dashboard.svg'
          },
          {
            title: 'Mobile App - Stocks & Mutual Funds',
            description: 'Comprehensive mobile application built with Flutter offering stocks trading, mutual funds management, real-time market data, portfolio tracking, and investment analytics. Users can buy/sell stocks, invest in mutual funds, and track their investment performance in real-time. Available on both iOS and Android platforms.',
            image: '/assets/product-details/fintech/mobile-stocks-funds.svg'
          },
          {
            title: 'Mobile App - Rewards & Spin & Win',
            description: 'Engaging user experience with rewards & referral programs, spin & win games, and gamified financial activities. Users earn points through referrals, transactions, and can spin the wheel to win rewards, enhancing user retention and engagement.',
            image: '/assets/product-details/fintech/mobile-rewards-spin.svg'
          },
          {
            title: 'Mobile App - Payments & Account Upgrades',
            description: 'Advanced account tier system (L1, L2, Ultra, Freelancer) with upgrade paths, advance salary features, secure payment processing including IBFT (Inter-Bank Funds Transfer) and international transfers with real-time transaction tracking. Users can upgrade their accounts to unlock higher limits and premium features.',
            image: '/assets/product-details/fintech/mobile-payments-upgrades.svg'
          },
          {
            title: 'Mobile App - Loyalty Points System',
            description: 'Comprehensive loyalty points program where users earn points through transactions, referrals, and activities. Points can be redeemed for vouchers, cashback, and other rewards. Track point history and manage redemptions seamlessly.',
            image: '/assets/product-details/fintech/mobile-loyalty-points.svg'
          }
        ];
      case 'smartretail':
        return [
          {
            title: 'Smart Inventory',
            description: 'AI-driven inventory management and optimization',
            image: '/assets/software-showcase/smartretail-inventory.svg'
          },
          {
            title: 'Customer Analytics',
            description: 'Real-time customer behavior analysis and insights',
            image: '/assets/software-showcase/smartretail-customer-analytics.svg'
          }
        ];
      default:
        return [];
    }
  }
  private getProductScreenshots(productId: string): any[] {
    switch (productId) {
      case 'healthconnect':
        return [
          { url: '/assets/software-showcase/healthconnect-dashboard.svg', title: 'Dashboard' },
          { url: '/assets/software-showcase/healthconnect-patient-records.svg', title: 'Patient Records' },
          { url: '/assets/software-showcase/healthconnect-telemedicine.svg', title: 'Telemedicine' },
          { url: '/assets/software-showcase/healthconnect-analytics.svg', title: 'Analytics' },
          { url: '/assets/software-showcase/healthconnect-calendar.svg', title: 'Calendar' }
        ];
      case 'fintech':
        return [
          { url: '/assets/product-details/fintech/corporate-dashboard.svg', title: 'Corporate Web Portal - Bulk Processing Dashboard' },
          { url: '/assets/product-details/fintech/web-portfolio-analytics.svg', title: 'Web Portal - Portfolio Analytics & Insights' },
          { url: '/assets/product-details/fintech/web-integrations-dashboard.svg', title: 'Web Portal - Third-Party Integrations Dashboard' },
          { url: '/assets/product-details/fintech/web-gains-losses.svg', title: 'Web Portal - Gains & Losses Analysis' },
          { url: '/assets/product-details/fintech/mobile-home-dashboard.svg', title: 'Mobile App - Home Dashboard' },
          { url: '/assets/product-details/fintech/mobile-stocks-funds.svg', title: 'Mobile App - Stocks & Mutual Funds' },
          { url: '/assets/product-details/fintech/mobile-rewards-spin.svg', title: 'Mobile App - Rewards & Spin & Win' },
          { url: '/assets/product-details/fintech/mobile-payments-upgrades.svg', title: 'Mobile App - Payments & Account Upgrades' },
          { url: '/assets/product-details/fintech/mobile-loyalty-points.svg', title: 'Mobile App - Loyalty Points System' }
        ];
      case 'smartretail':
        return [
          { url: '/assets/software-showcase/smartretail-dashboard.svg', title: 'Dashboard' },
          { url: '/assets/software-showcase/smartretail-inventory.svg', title: 'Inventory Management' },
          { url: '/assets/software-showcase/smartretail-pos.svg', title: 'Point of Sale' },
          { url: '/assets/software-showcase/smartretail-customer-analytics.svg', title: 'Customer Analytics' },
          { url: '/assets/software-showcase/smartretail-supply-chain.svg', title: 'Supply Chain' }
        ];
      default:
        return [];
    }
  }

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.loading = true;
    this.error = '';
    this.subscription = this.route.params.subscribe(params => {
      try {
        const productId = params['id'];
        if (!['healthconnect', 'fintech', 'smartretail'].includes(productId)) {
          this.error = `Invalid product ID: ${productId}`;
          this.loading = false;
          return;
        }
        const basePath = `/assets/product-details/${productId}`;
        this.product = {
          id: productId,
          name: this.getProductName(productId),
          description: this.getProductDescription(productId),
          technologies: this.getProductTechnologies(productId),
          features: this.getProductFeatures(productId),
          screenshots: this.getProductScreenshots(productId),
          systemArchitecture: `${basePath}/system-architecture.svg`,
          devopsPipeline: `${basePath}/devops-pipeline.svg`,
          agileDiagram: `${basePath}/agile-process.svg`,
          sprintWorkflow: `${basePath}/sprint-workflow.svg`,
          techDetails: this.getTechDetails(productId),
          developmentPractices: this.getDevelopmentPractices(productId),
          securityFeatures: this.getSecurityFeatures(productId),
          complianceStandards: this.getComplianceStandards(productId)
    };
        console.log('Product loaded:', this.product);
        console.log('DevOps Pipeline path:', this.product.devopsPipeline);
        console.log('Agile Diagram path:', this.product.agileDiagram);
        this.loading = false;
      } catch (err) {
        this.error = 'An error occurred while loading the product details.';
        this.loading = false;
        console.error(err);
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }

  onImageError(event: any) {
    console.error('Image failed to load:', event.target.src);
    const img = event.target;
    // Try to reload with a timestamp to bypass cache
    if (img.src && !img.src.includes('?')) {
      setTimeout(() => {
        img.src = img.src + '?t=' + Date.now();
      }, 100);
    }
  }

  onImageLoad(event: any) {
    console.log('Image loaded successfully:', event.target.src);
  }
}
