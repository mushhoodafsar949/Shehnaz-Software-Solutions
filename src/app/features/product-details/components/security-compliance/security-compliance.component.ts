import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../product.types';

@Component({
  selector: 'app-security-compliance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './security-compliance.component.html',
  styleUrls: ['./security-compliance.component.scss']
})
export class SecurityComplianceComponent {
  @Input() product: Product | null = null;
}

