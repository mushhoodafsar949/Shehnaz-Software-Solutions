import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-smart-service-logo',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template:`<ng-container [ngSwitch]="service">
      <!-- Custom Software Development: Laptop with code brackets -->
      <svg *ngSwitchCase="'Custom Software Development'" width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="dev-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#1976d2"/>
            <stop offset="100%" stop-color="#42a5f5"/>
          </linearGradient>
        </defs>
        <rect x="10" y="10" width="80" height="80" rx="22" fill="url(#dev-gradient)"/>
        <rect x="28" y="32" width="44" height="24" rx="4" fill="#fff"/>
        <rect x="32" y="36" width="36" height="16" rx="2" fill="#e3eafc"/>
        <rect x="24" y="60" width="52" height="6" rx="2" fill="#fff"/>
        <text x="50" y="48" text-anchor="middle" font-size="16" font-family="monospace" fill="#1976d2">{{ '{' }} {{ '}' }}</text>
      </svg>
      <!-- Cloud & DevOps Solutions: Use Material Icon 'cloud' to match home page -->
      <mat-icon *ngSwitchCase="'Cloud & DevOps Solutions'" style="font-size:64px;color:#1976d2;">cloud</mat-icon>
      <!-- UI/UX & Product Design: Pen tool and layout grid -->
      <svg *ngSwitchCase="'UI/UX & Product Design'" width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="uiux-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#1976d2"/>
            <stop offset="100%" stop-color="#42a5f5"/>
          </linearGradient>
        </defs>
        <rect x="10" y="10" width="80" height="80" rx="22" fill="url(#uiux-gradient)"/>
        <rect x="28" y="28" width="44" height="44" rx="8" fill="#fff"/>
        <rect x="36" y="36" width="12" height="12" rx="2" fill="#e3eafc"/>
        <rect x="52" y="36" width="12" height="12" rx="2" fill="#e3eafc"/>
        <rect x="36" y="52" width="12" height="12" rx="2" fill="#e3eafc"/>
        <rect x="52" y="52" width="12" height="12" rx="2" fill="#e3eafc"/>
        <polygon points="50,28 54,44 46,44" fill="#1976d2"/>
        <circle cx="50" cy="44" r="3" fill="#ff6b35"/>
      </svg>
      <!-- Data & Analytics -->
      <svg *ngSwitchCase="'Data & Analytics'" width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="data-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#1976d2"/>
            <stop offset="100%" stop-color="#42a5f5"/>
          </linearGradient>
        </defs>
        <rect x="10" y="10" width="80" height="80" rx="22" fill="url(#data-gradient)"/>
        <rect x="32" y="60" width="8" height="16" rx="2" fill="#fff"/>
        <rect x="46" y="48" width="8" height="28" rx="2" fill="#fff"/>
        <rect x="60" y="36" width="8" height="40" rx="2" fill="#fff"/>
        <circle cx="36" cy="60" r="3" fill="#ff6b35"/>
        <circle cx="50" cy="48" r="3" fill="#ff6b35"/>
        <circle cx="64" cy="36" r="3" fill="#ff6b35"/>
      </svg>
      <!-- TRUST: Proven Expertise (Material icon to match home page) -->
      <mat-icon *ngSwitchCase="'Proven Expertise'" style="font-size:64px;color:#1976d2;">verified</mat-icon>
      <!-- TRUST: Security & Compliance (Material icon to match home page) -->
      <mat-icon *ngSwitchCase="'Security & Compliance'" style="font-size:64px;color:#1976d2;">security</mat-icon>
      <!-- TRUST: True Partnership (Material icon to match home page) -->
      <mat-icon *ngSwitchCase="'True Partnership'" style="font-size:64px;color:#1976d2;">handshake</mat-icon>
      <!-- TRUST: Ongoing Support (Material icon) -->
      <mat-icon *ngSwitchCase="'Ongoing Support'" style="font-size:64px;color:#1976d2;">support</mat-icon>
      <!-- TRUST: Innovation Focus (Material icon) -->
      <mat-icon *ngSwitchCase="'Innovation Focus'" style="font-size:64px;color:#1976d2;">lightbulb</mat-icon>
      <!-- TRUST: Quality Assurance (Material icon) -->
      <mat-icon *ngSwitchCase="'Quality Assurance'" style="font-size:64px;color:#1976d2;">verified</mat-icon>
      <!-- Default -->
      <svg *ngSwitchDefault width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="default-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#1976d2"/>
            <stop offset="100%" stop-color="#42a5f5"/>
          </linearGradient>
        </defs>
        <rect x="5" y="5" width="90" height="90" rx="22" fill="url(#default-gradient)"/>
        <text x="50" y="60" text-anchor="middle" fill="#fff" font-size="38" font-family="'Poppins', sans-serif" font-weight="700" letter-spacing="-2">3S</text>
      </svg>
    </ng-container>`,
  styles: [`:host { display: flex; align-items: center; justify-content: center; } svg { display: block; } mat-icon { display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }`]
})
export class SmartServiceLogoComponent {
  @Input() service = '';
} 