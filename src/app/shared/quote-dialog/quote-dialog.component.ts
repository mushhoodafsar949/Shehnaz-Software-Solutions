import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
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
}

interface PricingTier {
  name: string;
  multiplier: number;
  features: string[];
}

@Component({
  selector: 'app-quote-dialog',
  templateUrl: './quote-dialog.component.html',
  styleUrls: ['./quote-dialog.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
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
    MatSelectModule
  ]
})
export class QuoteDialogComponent implements OnInit {
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
      features: ['All features', '24/7 support', '1 year warranty', 'Custom integrations', 'Dedicated team']
    }
  ];
  selectedTier: PricingTier = this.pricingTiers[1]; // Default to Professional
  projectTimeline: string = '3-6 months';
  discountPercentage: number = 0;
  showDiscountInput: boolean = false;

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
      quantity: 1
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
      quantity: 1
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
      quantity: 1
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
      quantity: 1
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
      quantity: 1
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
      quantity: 1
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
      quantity: 1
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
      quantity: 1
    }
  ];

  constructor(
    public dialogRef: MatDialogRef<QuoteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    this.themeService.theme$.subscribe(theme => {
      this.currentTheme = theme;
    });
  }

  toggleService(service: ServiceItem) {
    service.selected = !service.selected;
    this.updateSelectedServices();
  }

  updateSelectedServices() {
    this.selectedServices = this.services.filter(service => service.selected);
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

  close() {
    this.dialogRef.close();
  }
} 