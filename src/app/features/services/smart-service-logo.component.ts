import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-smart-service-logo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [ngSwitch]="service" class="service-logo">
      <ng-container *ngSwitchCase="'Cloud & DevOps Solutions'">
        <i class="pi pi-cloud" style="font-size:64px;color:var(--primary-color)"></i>
      </ng-container>
      <ng-container *ngSwitchCase="'Proven Expertise'">
        <i class="pi pi-verified" style="font-size:64px;color:var(--primary-color)"></i>
      </ng-container>
      <ng-container *ngSwitchCase="'Security & Compliance'">
        <i class="pi pi-shield" style="font-size:64px;color:var(--primary-color)"></i>
      </ng-container>
      <ng-container *ngSwitchCase="'True Partnership'">
        <i class="pi pi-users" style="font-size:64px;color:var(--primary-color)"></i>
      </ng-container>
      <ng-container *ngSwitchCase="'Ongoing Support'">
        <i class="pi pi-comments" style="font-size:64px;color:var(--primary-color)"></i>
      </ng-container>
      <ng-container *ngSwitchCase="'Innovation Focus'">
        <i class="pi pi-bolt" style="font-size:64px;color:var(--primary-color)"></i>
      </ng-container>
      <ng-container *ngSwitchCase="'Quality Assurance'">
        <i class="pi pi-check-circle" style="font-size:64px;color:var(--primary-color)"></i>
      </ng-container>
      <ng-container *ngSwitchDefault>
        <i class="pi pi-star" style="font-size:64px;color:var(--primary-color)"></i>
      </ng-container>
    </div>
  `,
  styles: [`
    :host { 
      display: flex; 
      align-items: center; 
      justify-content: center; 
    } 
    .service-logo { 
      display: flex; 
      align-items: center; 
      justify-content: center; 
      width: 100%; 
      height: 100%; 
    }
    i { 
      display: flex; 
      align-items: center; 
      justify-content: center; 
      width: 100%; 
      height: 100%; 
    }
  `]
})
export class SmartServiceLogoComponent {
  @Input() service: string = '';
}