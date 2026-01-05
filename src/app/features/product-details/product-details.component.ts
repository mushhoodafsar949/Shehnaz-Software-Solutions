import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product, ResponsiveOption } from './product.types';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

// Sub-components
import { OverviewComponent } from './components/overview/overview.component';
import { TechnicalArchitectureComponent } from './components/technical-architecture/technical-architecture.component';
import { DevelopmentProcessComponent } from './components/development-process/development-process.component';
import { SecurityComplianceComponent } from './components/security-compliance/security-compliance.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    RippleModule,
    OverviewComponent,
    TechnicalArchitectureComponent,
    DevelopmentProcessComponent,
    SecurityComplianceComponent
  ],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  product: Product | null = null;
  loading = true;
  error = '';
  activeTab = 0;
  iconError: boolean = false;
  private subscription: Subscription | undefined;

  tabs = [
    { id: 0, label: 'Overview', icon: 'overview' },
    { id: 1, label: 'Architecture', icon: 'architecture' },
    { id: 2, label: 'Process', icon: 'process' },
    { id: 3, label: 'Security', icon: 'security' }
  ];

  responsiveOptions: ResponsiveOption[] = [
    { breakpoint: '1024px', numVisible: 3, numScroll: 1 },
    { breakpoint: '768px', numVisible: 2, numScroll: 1 },
    { breakpoint: '560px', numVisible: 1, numScroll: 1 }
  ];

  private route = inject(ActivatedRoute);
  private router = inject(Router);

  ngOnInit(): void {
    this.loading = true;
    // Use paramMap for better type safety and modern Angular approach
    this.subscription = this.route.paramMap.subscribe((params: ParamMap) => {
      const productId = params.get('id');
      if (!productId || !['healthconnect', 'fintech', 'smartretail'].includes(productId)) {
        this.error = `Invalid product: ${productId || 'unknown'}`;
        this.loading = false;
        return;
      }
      this.loadProduct(productId);
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  setActiveTab(index: number): void {
    this.activeTab = index;
  }

  goBack(): void {
    // Try to go back in history, fallback to services page
    if (window.history.length > 1) {
      this.router.navigate(['/services']);
    } else {
      this.router.navigate(['/']);
    }
  }

  onIconError(event: Event): void {
    this.iconError = true;
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
  }

  getFallbackIcon(): string {
    const iconMap: { [key: string]: string } = {
      'healthconnect': 'pi pi-heart',
      'fintech': 'pi pi-dollar',
      'smartretail': 'pi pi-shopping-cart'
    };
    return iconMap[this.product?.id || ''] || 'pi pi-cog';
  }

  private loadProduct(productId: string): void {
        const basePath = `/assets/product-details/${productId}`;
    
        this.product = {
          id: productId,
          name: this.getProductName(productId),
          description: this.getProductDescription(productId),
          icon: this.getProductIcon(productId),
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
    
        // Debug: Log paths to console for troubleshooting
        if (productId === 'healthconnect') {
          console.log('Loading HealthConnect Pro product');
          console.log('DevOps Pipeline path:', this.product.devopsPipeline);
          console.log('Agile Diagram path:', this.product.agileDiagram);
          console.log('Sprint Workflow path:', this.product.sprintWorkflow);
        }
    
        this.loading = false;
  }

  private getProductName(id: string): string {
    const names: Record<string, string> = {
      healthconnect: 'HealthConnect Pro',
      fintech: 'FinTech Suite',
      smartretail: 'SmartRetail Pro'
    };
    return names[id] || 'Unknown Product';
  }

  private getProductDescription(id: string): string {
    const descriptions: Record<string, string> = {
      healthconnect: 'A comprehensive healthcare management system that revolutionizes patient care through seamless integration of electronic health records, telemedicine, and AI-powered diagnostics.',
      fintech: 'Enterprise financial platform featuring corporate web portal for bulk processing and portfolio management, plus mobile app for stocks, mutual funds, payments, and rewards.',
      smartretail: 'Next-generation retail platform combining inventory management, point of sale, and AI-driven customer analytics for seamless operations.'
    };
    return descriptions[id] || '';
  }

  private getProductIcon(id: string): string {
    const icons: Record<string, string> = {
      healthconnect: 'assets/service-icons/mobile-development.svg', // Healthcare apps are mobile-focused
      fintech: 'assets/service-icons/web-development.svg', // FinTech has web portal
      smartretail: 'assets/service-icons/ui-ux-design.svg' // Retail focuses on UX
    };
    return icons[id] || '';
  }

  private getProductTechnologies(id: string): string[] {
    const techs: Record<string, string[]> = {
      healthconnect: ['Angular', 'Node.js', 'MongoDB', 'TensorFlow', 'WebRTC'],
      fintech: ['Angular', 'Flutter', 'Python', 'PostgreSQL', 'Blockchain'],
      smartretail: ['Vue.js', 'Laravel', 'MySQL', 'TensorFlow', 'Redis']
    };
    return techs[id] || [];
  }

  private getTechDetails(id: string) {
    const details: Record<string, any[]> = {
      healthconnect: [
        { category: 'Frontend', items: ['Angular 17', 'RxJS', 'NgRx', 'PrimeNG', 'WebRTC'] },
        { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'Redis', 'Socket.io'] },
        { category: 'AI/ML', items: ['TensorFlow', 'Python', 'Keras', 'OpenCV'] },
        { category: 'DevOps', items: ['Docker', 'Kubernetes', 'GitHub Actions', 'AWS'] }
      ],
      fintech: [
        { category: 'Web Portal', items: ['Angular', 'RxJS', 'PrimeNG', 'Chart.js'] },
        { category: 'Mobile App', items: ['Flutter', 'Dart', 'Provider', 'Firebase'] },
        { category: 'Backend', items: ['Python', 'FastAPI', 'PostgreSQL', 'Redis'] },
        { category: 'Security', items: ['HSM', 'Blockchain', 'OAuth 2.0', 'JWT'] }
      ],
      smartretail: [
        { category: 'Frontend', items: ['Vue.js', 'Vuex', 'TailwindCSS', 'Chart.js'] },
        { category: 'Backend', items: ['Laravel', 'MySQL', 'Redis', 'RabbitMQ'] },
        { category: 'Analytics', items: ['Apache Kafka', 'Elasticsearch', 'Grafana'] },
        { category: 'IoT', items: ['MQTT', 'Node-RED', 'Edge Computing'] }
      ]
    };
    return details[id] || [];
  }

  private getDevelopmentPractices(id: string) {
    const practices: Record<string, any[]> = {
      healthconnect: [
        { title: 'Test-Driven Development', description: 'Every feature starts with comprehensive test cases. We maintain 85%+ code coverage with unit, integration, and E2E tests.' },
        { title: 'Agile Scrum', description: '2-week sprints with daily standups, sprint planning, reviews, and retrospectives. 95% sprint completion rate.' },
        { title: 'Code Review Process', description: 'Mandatory peer reviews with 2+ approvals, automated linting, and passing CI checks before merge.' },
        { title: 'CI/CD Pipeline', description: 'Automated builds, tests, security scans, and deployments to staging within 15 minutes.' },
        { title: 'Documentation', description: 'Living documentation with Swagger/OpenAPI for APIs and Storybook for UI components.' },
        { title: 'Pair Programming', description: 'Complex features developed through pair programming for knowledge sharing and quality.' }
      ],
      fintech: [
        { title: 'Security-First', description: 'Every feature undergoes threat modeling. OWASP guidelines followed with mandatory security reviews.' },
        { title: 'Microservices', description: 'Loosely coupled services with clear API contracts for independent deployment and scaling.' },
        { title: 'Performance', description: 'Continuous profiling with <100ms API latency targets and <50ms database queries.' },
        { title: 'Feature Flags', description: 'Gradual rollouts with 5% user testing before full deployment and quick rollbacks.' },
        { title: 'Compliance Automation', description: 'Every deployment runs automated PCI-DSS and SOC 2 compliance checks.' },
        { title: 'Disaster Recovery', description: 'Monthly DR drills with 15-minute RTO and 5-minute RPO. Multi-region failover.' }
      ],
      smartretail: [
        { title: 'Edge Computing', description: 'Local processing in each store ensures operations continue even with network issues.' },
        { title: 'IoT Integration', description: 'Seamless integration with barcode scanners, RFID readers, and payment terminals.' },
        { title: 'Real-time Analytics', description: 'Apache Kafka for event streaming with sub-second latency for sales data.' },
        { title: 'Mobile-First', description: 'PWA approach for tablets and phones throughout the store.' }
      ]
    };
    return practices[id] || [];
  }

  private getSecurityFeatures(id: string) {
    const features: Record<string, any[]> = {
      healthconnect: [
        { title: 'End-to-End Encryption', description: 'AES-256 encryption at rest and in transit with TLS 1.3 and perfect forward secrecy.' },
        { title: 'Role-Based Access', description: 'Granular permissions for doctors, nurses, admins with full audit trails.' },
        { title: 'Multi-Factor Auth', description: 'Mandatory 2FA using TOTP, SMS, or hardware keys. Biometric support for mobile.' },
        { title: 'Audit Logging', description: 'Every data access logged with user ID, timestamp, IP, and action. Real-time alerts.' },
        { title: 'Data Anonymization', description: 'Patient data anonymization for research while maintaining HIPAA compliance.' },
        { title: 'Secure API Gateway', description: 'Rate-limited gateway with JWT auth, request validation, and DDoS protection.' }
      ],
      fintech: [
        { title: 'Blockchain Records', description: 'Immutable transaction ledger with cryptographic verification and tamper-proof history.' },
        { title: 'AI Fraud Detection', description: 'Real-time ML models detect anomalies in <100ms with 99.7% accuracy.' },
        { title: 'Hardware Security', description: 'FIPS 140-2 Level 3 certified HSMs with 90-day key rotation.' },
        { title: 'Zero-Trust', description: 'Every request authenticated regardless of origin. Network micro-segmentation.' },
        { title: 'Secure Enclave', description: 'Sensitive calculations in isolated enclaves. Card data never in main memory.' },
        { title: 'Threat Intelligence', description: 'Global threat feed integration. Malicious IPs and attacks blocked automatically.' }
      ],
      smartretail: [
        { title: 'PCI-Compliant', description: 'Level 1 compliant payment gateway. Card numbers never stored locally.' },
        { title: 'Network Segmentation', description: 'POS terminals on separate VLAN with strict firewall rules.' },
        { title: 'Physical Security', description: 'Integration with cameras, access control, and intrusion detection.' },
        { title: 'Access Management', description: 'Unique PIN codes with shift-based access. Manager override for high-value actions.' }
      ]
    };
    return features[id] || [];
  }

  private getComplianceStandards(id: string) {
    const standards: Record<string, any[]> = {
      healthconnect: [
        { name: 'HIPAA', description: 'Full compliance with Health Insurance Portability and Accountability Act. Regular third-party audits.' },
        { name: 'HITECH Act', description: 'Adherence to electronic health records requirements and breach notification.' },
        { name: 'GDPR', description: 'EU data protection compliance including right to erasure and data portability.' },
        { name: 'HL7 FHIR', description: 'Healthcare interoperability through HL7 FHIR R4 standards.' },
        { name: 'SOC 2 Type II', description: 'Annual audit covering security, availability, and confidentiality.' }
      ],
      fintech: [
        { name: 'PCI DSS Level 1', description: 'Highest payment card compliance with annual on-site assessment.' },
        { name: 'SOC 2 Type II', description: 'Comprehensive audit of security controls and availability.' },
        { name: 'ISO 27001', description: 'International standard for information security management.' },
        { name: 'SBP Regulations', description: 'State Bank compliance for digital banking and payments.' },
        { name: 'AML/KYC', description: 'Anti-Money Laundering with automated sanctions screening.' }
      ],
      smartretail: [
        { name: 'PCI DSS', description: 'Secure payment processing with tokenization and encrypted PIN pads.' },
        { name: 'ISO 27001', description: 'Information security certification for all retail operations.' },
        { name: 'GDPR', description: 'Customer data privacy with clear consent mechanisms.' },
        { name: 'FBR Integration', description: 'Federal Board of Revenue compliance for POS invoicing.' }
      ]
    };
    return standards[id] || [];
  }

  private getProductFeatures(id: string) {
    const features: Record<string, any[]> = {
      healthconnect: [
        { title: 'Smart Dashboard', description: 'Real-time insights into patient statistics and system performance', image: '/assets/software-showcase/healthconnect-dashboard.svg' },
        { title: 'Health Records', description: 'Comprehensive patient records with medical history and prescriptions', image: '/assets/software-showcase/healthconnect-patient-records.svg' },
        { title: 'Telemedicine', description: 'Seamless video consultations with real-time communication', image: '/assets/software-showcase/healthconnect-telemedicine.svg' },
        { title: 'AI Analytics', description: 'ML-powered diagnosis assistance and predictive health analytics', image: '/assets/software-showcase/healthconnect-analytics.svg' },
        { title: 'Scheduling', description: 'Intelligent appointment management and provider availability', image: '/assets/software-showcase/healthconnect-calendar.svg' }
      ],
      fintech: [
        { title: 'Corporate Portal', description: 'Bulk processing and portfolio management for enterprises', image: '/assets/product-details/fintech/corporate-dashboard.svg' },
        { title: 'Portfolio Analytics', description: 'Real-time insights into ROI, assets, and risk assessment', image: '/assets/product-details/fintech/web-portfolio-analytics.svg' },
        { title: 'Mobile Trading', description: 'Stocks and mutual funds management on the go', image: '/assets/product-details/fintech/mobile-stocks-funds.svg' },
        { title: 'Rewards System', description: 'Engaging loyalty points, referrals, and gamification', image: '/assets/product-details/fintech/mobile-rewards-spin.svg' },
        { title: 'Secure Payments', description: 'IBFT and international transfers with real-time tracking', image: '/assets/product-details/fintech/mobile-payments-upgrades.svg' }
      ],
      smartretail: [
        { title: 'Inventory Management', description: 'AI-driven stock optimization and demand forecasting', image: '/assets/software-showcase/smartretail-inventory.svg' },
        { title: 'Point of Sale', description: 'Fast, reliable checkout with multiple payment options', image: '/assets/software-showcase/smartretail-pos.svg' },
        { title: 'Customer Analytics', description: 'Real-time behavior analysis and personalization', image: '/assets/software-showcase/smartretail-customer-analytics.svg' },
        { title: 'Supply Chain', description: 'End-to-end visibility and vendor management', image: '/assets/software-showcase/smartretail-supply-chain.svg' }
      ]
    };
    return features[id] || [];
  }

  private getProductScreenshots(id: string) {
    const screenshots: Record<string, any[]> = {
      healthconnect: [
        { url: '/assets/software-showcase/healthconnect-dashboard.svg', title: 'Dashboard' },
        { url: '/assets/software-showcase/healthconnect-patient-records.svg', title: 'Patient Records' },
        { url: '/assets/software-showcase/healthconnect-telemedicine.svg', title: 'Telemedicine' },
        { url: '/assets/software-showcase/healthconnect-analytics.svg', title: 'Analytics' },
        { url: '/assets/software-showcase/healthconnect-calendar.svg', title: 'Calendar' }
      ],
      fintech: [
        { url: '/assets/product-details/fintech/corporate-dashboard.svg', title: 'Corporate Portal' },
        { url: '/assets/product-details/fintech/web-portfolio-analytics.svg', title: 'Portfolio Analytics' },
        { url: '/assets/product-details/fintech/mobile-stocks-funds.svg', title: 'Mobile Trading' },
        { url: '/assets/product-details/fintech/mobile-rewards-spin.svg', title: 'Rewards' },
        { url: '/assets/product-details/fintech/mobile-payments-upgrades.svg', title: 'Payments' }
      ],
      smartretail: [
        { url: '/assets/software-showcase/smartretail-dashboard.svg', title: 'Dashboard' },
        { url: '/assets/software-showcase/smartretail-inventory.svg', title: 'Inventory' },
        { url: '/assets/software-showcase/smartretail-pos.svg', title: 'Point of Sale' },
        { url: '/assets/software-showcase/smartretail-customer-analytics.svg', title: 'Analytics' }
      ]
    };
    return screenshots[id] || [];
  }
}
