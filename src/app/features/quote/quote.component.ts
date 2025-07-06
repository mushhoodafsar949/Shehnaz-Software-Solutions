import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule, Router } from '@angular/router';
import { ThemeService, Theme } from '../../core/theme.service';

interface ServiceItem {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  features: string[];
  category: 'development' | 'design' | 'consulting' | 'maintenance';
  complexity: 'basic' | 'standard' | 'premium';
  estimatedTime: string;
  selected: boolean;
  quantity: number;
  weekRange: number;
}

interface PricingTier {
  name: string;
  multiplier: number;
  features: string[];
  includesAllServices?: boolean;
}

@Component({
  selector: 'app-quote-page',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
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
    trigger('fadeInUp', [
      transition(':enter', [
        style({ transform: 'translateY(60px)', opacity: 0 }),
        animate('1000ms 500ms cubic-bezier(.35,0,.25,1)', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ])
  ],
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatChipsModule,
    MatProgressBarModule,
    MatTooltipModule,
    FormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule,
    MatExpansionModule,
    RouterModule
  ]
})
export class QuoteComponent implements OnInit {
  currentTheme: Theme = 'light';
  selectedServices: ServiceItem[] = [];
  pricingTiers: PricingTier[] = [
    {
      name: 'Basic',
      multiplier: 1.0,
      features: ['Standard features', 'Basic support', '3 months warranty']
    },
    {
      name: 'Professional',
      multiplier: 1.5,
      features: ['Advanced features', 'Priority support', '6 months warranty', 'Performance optimization']
    },
    {
      name: 'Enterprise',
      multiplier: 2.2,
      features: ['All features', '24/7 support', '1 year warranty', 'Custom integrations', 'Dedicated team'],
      includesAllServices: true
    }
  ];
  selectedTier: PricingTier = this.pricingTiers[1]; // Default to Professional
  projectTimeline: string = '3-6 months';
  discountPercentage: number = 0;
  showDiscountInput: boolean = false;
  customRequirements: string = '';
  showCustomRequirements: boolean = false;

  services: ServiceItem[] = [
    {
      id: 'web-dev',
      name: 'Custom Web Development',
      description: 'Full-stack web applications with modern frameworks',
      basePrice: 15000,
      features: ['Responsive design', 'Database integration', 'User authentication', 'API development'],
      category: 'development',
      complexity: 'standard',
      estimatedTime: '8-12 weeks',
      selected: false,
      quantity: 1,
      weekRange: 10
    },
    {
      id: 'mobile-app',
      name: 'Mobile App Development',
      description: 'Cross-platform mobile applications',
      basePrice: 25000,
      features: ['iOS & Android support', 'Offline functionality', 'Push notifications', 'App store deployment'],
      category: 'development',
      complexity: 'premium',
      estimatedTime: '12-16 weeks',
      selected: false,
      quantity: 1,
      weekRange: 14
    },
    {
      id: 'ecommerce',
      name: 'E-commerce Platform',
      description: 'Complete online shopping solutions',
      basePrice: 20000,
      features: ['Payment integration', 'Inventory management', 'Order processing', 'Analytics dashboard'],
      category: 'development',
      complexity: 'premium',
      estimatedTime: '10-14 weeks',
      selected: false,
      quantity: 1,
      weekRange: 12
    },
    {
      id: 'ui-ux',
      name: 'UI/UX Design',
      description: 'User interface and experience design',
      basePrice: 8000,
      features: ['Wireframing', 'Prototyping', 'User research', 'Design system'],
      category: 'design',
      complexity: 'standard',
      estimatedTime: '4-6 weeks',
      selected: false,
      quantity: 1,
      weekRange: 5
    },
    {
      id: 'api-dev',
      name: 'API Development',
      description: 'RESTful and GraphQL API services',
      basePrice: 12000,
      features: ['REST/GraphQL APIs', 'Documentation', 'Testing suite', 'Rate limiting'],
      category: 'development',
      complexity: 'standard',
      estimatedTime: '6-8 weeks',
      selected: false,
      quantity: 1,
      weekRange: 7
    },
    {
      id: 'cloud-migration',
      name: 'Cloud Migration',
      description: 'Legacy system migration to cloud platforms',
      basePrice: 18000,
      features: ['AWS/Azure/GCP setup', 'Data migration', 'Security configuration', 'Performance optimization'],
      category: 'consulting',
      complexity: 'premium',
      estimatedTime: '8-12 weeks',
      selected: false,
      quantity: 1,
      weekRange: 10
    },
    {
      id: 'maintenance',
      name: 'Maintenance & Support',
      description: 'Ongoing maintenance and technical support',
      basePrice: 5000,
      features: ['Bug fixes', 'Security updates', 'Performance monitoring', '24/7 support'],
      category: 'maintenance',
      complexity: 'basic',
      estimatedTime: 'Ongoing',
      selected: false,
      quantity: 1,
      weekRange: 52
    },
    {
      id: 'consulting',
      name: 'Technical Consulting',
      description: 'Expert technical guidance and strategy',
      basePrice: 3000,
      features: ['Architecture review', 'Technology selection', 'Best practices', 'Code review'],
      category: 'consulting',
      complexity: 'basic',
      estimatedTime: '2-4 weeks',
      selected: false,
      quantity: 1,
      weekRange: 3
    }
  ];

  constructor(
    private themeService: ThemeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.themeService.theme$.subscribe(theme => {
      this.currentTheme = theme;
    });
  }

  toggleService(service: ServiceItem) {
    service.selected = !service.selected;
    this.updateSelectedServices();
    this.updateProjectTimeline();
  }

  updateSelectedServices() {
    this.selectedServices = this.services.filter(service => service.selected);
  }

  updateProjectTimeline() {
    if (this.selectedServices.length === 0) {
      this.projectTimeline = '3-6 months';
      return;
    }

    const maxWeeks = this.getMaxWeeks();
    if (maxWeeks <= 4) {
      this.projectTimeline = '1-4 weeks';
    } else if (maxWeeks <= 12) {
      this.projectTimeline = '1-3 months';
    } else if (maxWeeks <= 24) {
      this.projectTimeline = '3-6 months';
    } else if (maxWeeks <= 36) {
      this.projectTimeline = '6-9 months';
    } else {
      this.projectTimeline = '9+ months';
    }
  }

  getServicePrice(service: ServiceItem): number {
    return service.basePrice * this.selectedTier.multiplier * service.quantity;
  }

  getSubtotal(): number {
    return this.selectedServices.reduce((total, service) => {
      return total + this.getServicePrice(service);
    }, 0);
  }

  getDiscountAmount(): number {
    return (this.getSubtotal() * this.discountPercentage) / 100;
  }

  getTotal(): number {
    return this.getSubtotal() - this.getDiscountAmount();
  }

  getTotalFormatted(): string {
    return this.formatCurrency(this.getTotal());
  }

  getMaxWeeks(): number {
    if (this.selectedServices.length === 0) return 0;
    return Math.max(...this.selectedServices.map(s => s.weekRange));
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  }

  getCategoryIcon(category: string): string {
    const icons: { [key: string]: string } = {
      development: 'code',
      design: 'palette',
      consulting: 'psychology',
      maintenance: 'build'
    };
    return icons[category] || 'code';
  }

  getComplexityColor(complexity: string): string {
    const colors: { [key: string]: string } = {
      basic: '#4caf50',
      standard: '#2196f3',
      premium: '#ff9800'
    };
    return colors[complexity] || '#2196f3';
  }

  updateWeekRange(service: ServiceItem, event: any): void {
    // Extract the value from the event
    const value = event.value !== undefined ? event.value : event;
    service.weekRange = value;
    this.updateProjectTimeline();
  }

  onTierChange(tier: PricingTier) {
    this.selectedTier = tier;
    this.showCustomRequirements = tier.name === 'Enterprise';
    
    // If Enterprise is selected, auto-select all services
    if (tier.includesAllServices) {
      this.services.forEach(service => {
        service.selected = true;
      });
      this.updateSelectedServices();
      this.updateProjectTimeline();
    }
  }

  downloadPDF() {
    // Simulate PDF download
    console.log('Downloading PDF quote...');
    // In a real implementation, you would generate and download a PDF
    alert('PDF download started! (Simulated)');
  }

  downloadExcel() {
    // Simulate Excel download
    console.log('Downloading Excel quote...');
    // In a real implementation, you would generate and download an Excel file
    alert('Excel download started! (Simulated)');
  }

  contactUs() {
    // Navigate to contact page
    this.router.navigate(['/contact']);
  }

  toggleCustomRequirements() {
    this.showCustomRequirements = !this.showCustomRequirements;
  }
}