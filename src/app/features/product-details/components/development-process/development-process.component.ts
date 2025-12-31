import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../product.types';

@Component({
  selector: 'app-development-process',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './development-process.component.html',
  styleUrls: ['./development-process.component.scss']
})
export class DevelopmentProcessComponent implements OnChanges {
  @Input() product: Product | null = null;
  agileImageError = false;
  sprintImageError = false;

  ngOnChanges(changes: SimpleChanges): void {
    // Reset error states when product changes
    if (changes['product'] && changes['product'].currentValue) {
      this.agileImageError = false;
      this.sprintImageError = false;
    }
  }

  onAgileImageError(event: Event): void {
    console.error('Failed to load Agile diagram:', this.product?.agileDiagram);
    this.agileImageError = true;
    const img = event.target as HTMLImageElement;
    if (img) {
      img.style.display = 'none';
    }
  }

  onSprintImageError(event: Event): void {
    console.error('Failed to load Sprint workflow:', this.product?.sprintWorkflow);
    this.sprintImageError = true;
    const img = event.target as HTMLImageElement;
    if (img) {
      img.style.display = 'none';
    }
  }
}

