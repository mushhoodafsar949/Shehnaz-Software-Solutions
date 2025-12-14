import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { MessageService } from 'primeng/api';

interface ServiceItem {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  features: string[];
  category: string;
  complexity: string;
  estimatedTime: string;
  selected: boolean;
  quantity: number;
  weekRange: number;
}

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
  providers: [MessageService],
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
export class QuoteComponent implements OnInit {
  quoteForm: FormGroup;
  showCustomRequirements = false;
  isSubmitting = false;

  services: ServiceItem[] = [
    {
      id: 'web-dev',
      name: 'Custom Web Development',
      description: 'Full-stack web applications with modern frameworks and responsive design',
      basePrice: 15000,
      features: ['Responsive design', 'Database integration', 'User authentication', 'API development', 'SEO optimization'],
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
      description: 'Cross-platform mobile applications with native performance',
      basePrice: 25000,
      features: ['iOS & Android support', 'Offline functionality', 'Push notifications', 'App store deployment', 'Analytics integration'],
      category: 'development',
      complexity: 'premium',
      estimatedTime: '12-16 weeks',
      selected: false,
      quantity: 1,
      weekRange: 14
    },
    {
      id: 'cloud-devops',
      name: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and automation solutions',
      basePrice: 20000,
      features: ['Cloud migration', 'CI/CD pipelines', 'Containerization', 'Infrastructure as Code', 'Monitoring & Logging'],
      category: 'infrastructure',
      complexity: 'advanced',
      estimatedTime: '6-8 weeks',
      selected: false,
      quantity: 1,
      weekRange: 7
    },
    {
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by artificial intelligence',
      basePrice: 35000,
      features: ['Custom AI models', 'Data analysis', 'Predictive analytics', 'Natural language processing', 'Computer vision'],
      category: 'ai',
      complexity: 'advanced',
      estimatedTime: '16-20 weeks',
      selected: false,
      quantity: 1,
      weekRange: 18
    },
    {
      id: 'ui-ux',
      name: 'UI/UX Design',
      description: 'User-centered design for exceptional user experiences',
      basePrice: 8000,
      features: ['User research', 'Wireframing', 'Prototyping', 'Visual design', 'Usability testing'],
      category: 'design',
      complexity: 'standard',
      estimatedTime: '4-6 weeks',
      selected: false,
      quantity: 1,
      weekRange: 5
    },
    {
      id: 'ecommerce',
      name: 'E-commerce Platform',
      description: 'Complete online store with payment processing and inventory management',
      basePrice: 22000,
      features: ['Product catalog', 'Payment integration', 'Inventory management', 'Order tracking', 'Admin dashboard'],
      category: 'ecommerce',
      complexity: 'premium',
      estimatedTime: '10-14 weeks',
      selected: false,
      quantity: 1,
      weekRange: 12
    }
  ];

  additionalServices = [
    { id: 'testing', name: 'Quality Assurance & Testing', price: 3000 },
    { id: 'maintenance', name: '6-Month Maintenance & Support', price: 2000 },
    { id: 'training', name: 'Team Training & Documentation', price: 1500 },
    { id: 'security', name: 'Security Audit & Penetration Testing', price: 4000 },
    { id: 'optimization', name: 'Performance Optimization', price: 2500 },
    { id: 'seo', name: 'SEO Optimization Package', price: 1800 },
    { id: 'analytics', name: 'Analytics & Reporting Setup', price: 1200 },
    { id: 'backup', name: 'Automated Backup System', price: 800 }
  ];

  budgetOptions = [
    {label: 'Under $10,000', value: '10k'},
    {label: '$10,000 - $25,000', value: '25k'},
    {label: '$25,000 - $50,000', value: '50k'},
    {label: '$50,000+', value: '50k+'}
  ];

  timelineOptions = [
    {label: '1-3 months', value: '3m'},
    {label: '3-6 months', value: '6m'},
    {label: '6-12 months', value: '12m'},
    {label: '12+ months', value: '12m+'}
  ];

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService
  ) {
    this.quoteForm = this.fb.group({
      customRequirements: [''],
      budget: ['', Validators.required],
      timeline: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
      phone: ['']
    });
  }

  ngOnInit() {
    this.services.forEach(service => {
      this.quoteForm.addControl(service.id, this.fb.control(false));
      this.quoteForm.addControl(`${service.id}_quantity`, this.fb.control(1));
      this.quoteForm.addControl(`${service.id}_weeks`, this.fb.control(service.weekRange));
    });

    this.additionalServices.forEach(service => {
      this.quoteForm.addControl(service.id, this.fb.control(false));
    });
  }

  getComplexityColor(complexity: string): string {
    switch (complexity) {
      case 'standard': return '#22c55e';
      case 'premium': return '#8b5cf6';
      case 'advanced': return '#3b82f6';
      default: return 'var(--primary-color)';
    }
  }

  getComplexityIcon(complexity: string): string {
    switch (complexity) {
      case 'standard': return 'pi pi-check-circle';
      case 'premium': return 'pi pi-star';
      case 'advanced': return 'pi pi-bolt';
      default: return 'pi pi-info-circle';
    }
  }

  calculateTotal(): number {
    const subtotal = this.getSubtotal();
    const discount = this.getDiscount();
    return subtotal - discount;
  }

  getSubtotal(): number {
    let total = 0;
    this.services.forEach(service => {
      if (this.quoteForm.get(service.id)?.value) {
        const quantity = this.quoteForm.get(`${service.id}_quantity`)?.value || 1;
        total += service.basePrice * quantity;
      }
    });

    this.additionalServices.forEach(service => {
      if (this.quoteForm.get(service.id)?.value) {
        total += service.price;
      }
    });

    return total;
  }

  getDiscount(): number {
    const selectedCount = this.getSelectedServices().length;
    const subtotal = this.getSubtotal();
    
    // Apply bundle discounts
    if (selectedCount >= 3) {
      return Math.floor(subtotal * 0.15); // 15% discount for 3+ services
    } else if (selectedCount >= 2) {
      return Math.floor(subtotal * 0.10); // 10% discount for 2+ services
    }
    
    return 0;
  }

  getDiscountPercentage(): number {
    const selectedCount = this.getSelectedServices().length;
    if (selectedCount >= 3) return 15;
    if (selectedCount >= 2) return 10;
    return 0;
  }

  getSelectedServices(): ServiceItem[] {
    return this.services.filter(service => 
      this.quoteForm.get(service.id)?.value
    );
  }

  getSelectedAdditionalServices() {
    return this.additionalServices.filter(service => 
      this.quoteForm.get(service.id)?.value
    );
  }

  getServiceQuantity(serviceId: string): number {
    return this.quoteForm.get(`${serviceId}_quantity`)?.value || 1;
  }

  getServiceWeeks(serviceId: string): number {
    return this.quoteForm.get(`${serviceId}_weeks`)?.value || 1;
  }

  generateProposal(): void {
    if (this.calculateTotal() > 0) {
      // In a real app, this would generate and download a PDF proposal
      this.messageService.add({
        severity: 'info',
        summary: 'Proposal Generation',
        detail: 'Detailed proposal will be sent to your email within 24 hours.',
        life: 5000
      });
    }
  }

  onSubmit() {
    if (this.quoteForm.valid && this.calculateTotal() > 0) {
      this.isSubmitting = true;
      
      // Simulate API call with quote data
      const quoteData = {
        services: this.getSelectedServices(),
        additionalServices: this.getSelectedAdditionalServices(),
        total: this.calculateTotal(),
        formData: this.quoteForm.value,
        timestamp: new Date()
      };
      
      console.log('Quote Data:', quoteData); // For development
      
      setTimeout(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Quote Request Submitted Successfully!',
          detail: 'Our team will review your requirements and send a detailed proposal within 24 hours.',
          life: 6000
        });
        this.isSubmitting = false;
        
        // Reset form after successful submission
        // this.resetForm();
      }, 2000);
    } else if (this.calculateTotal() === 0) {
      this.messageService.add({
        severity: 'warn',
        summary: 'No Services Selected',
        detail: 'Please select at least one service to get a quote.',
        life: 4000
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Form Incomplete',
        detail: 'Please fill in all required fields correctly.',
        life: 4000
      });
    }
  }

  resetForm(): void {
    this.quoteForm.reset();
    this.services.forEach(service => {
      this.quoteForm.get(service.id)?.setValue(false);
      this.quoteForm.get(`${service.id}_quantity`)?.setValue(1);
      this.quoteForm.get(`${service.id}_weeks`)?.setValue(service.weekRange);
    });
    this.additionalServices.forEach(service => {
      this.quoteForm.get(service.id)?.setValue(false);
    });
  }
}