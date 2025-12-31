import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../product.types';

@Component({
  selector: 'app-technical-architecture',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technical-architecture.component.html',
  styleUrls: ['./technical-architecture.component.scss']
})
export class TechnicalArchitectureComponent implements OnChanges {
  @Input() product: Product | null = null;
  imageError = false;

  ngOnChanges(changes: SimpleChanges): void {
    // Reset error state when product changes
    if (changes['product'] && changes['product'].currentValue) {
      this.imageError = false;
    }
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    console.error('Failed to load DevOps pipeline image');
    console.error('Attempted path:', this.product?.devopsPipeline);
    console.error('Image element:', img);
    console.error('Image src attribute:', img?.src);
    console.error('Full URL:', img?.src);
    this.imageError = true;
    if (img) {
      img.style.display = 'none';
    }
  }
}

