import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, ResponsiveOption, ProductScreenshot } from '../../product.types';

@Component({
  selector: 'app-product-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  @Input() product: Product | null = null;
  @Input() responsiveOptions: ResponsiveOption[] = [];
  
  activeScreenshotIndex = 0;

  getCurrentScreenshot(): ProductScreenshot | undefined {
    if (!this.product?.screenshots || this.product.screenshots.length === 0) {
      return undefined;
    }
    const validIndex = Math.max(0, Math.min(this.activeScreenshotIndex, this.product.screenshots.length - 1));
    return this.product.screenshots[validIndex];
  }

  setActiveScreenshot(index: number): void {
    if (this.product?.screenshots && index >= 0 && index < this.product.screenshots.length) {
      this.activeScreenshotIndex = index;
    }
  }

  nextScreenshot(): void {
    if (this.product?.screenshots && this.product.screenshots.length > 0) {
      this.activeScreenshotIndex = (this.activeScreenshotIndex + 1) % this.product.screenshots.length;
    }
  }

  prevScreenshot(): void {
    if (this.product?.screenshots && this.product.screenshots.length > 0) {
      this.activeScreenshotIndex = this.activeScreenshotIndex === 0 
        ? this.product.screenshots.length - 1 
        : this.activeScreenshotIndex - 1;
    }
  }
}

