import { Component } from '@angular/core';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
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
    trigger('staggerList', [
      transition('* => *', [
        animate('600ms cubic-bezier(.35,0,.25,1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('bounceIn', [
      transition(':enter', [
        style({ transform: 'scale(0.3)', opacity: 0 }),
        animate('800ms 400ms cubic-bezier(.68,-0.55,.265,1.55)', style({ transform: 'scale(1)', opacity: 1 }))
      ])
    ]),
    trigger('fadeInUp', [
      transition(':enter', [
        style({ transform: 'translateY(60px)', opacity: 0 }),
        animate('1000ms 500ms cubic-bezier(.35,0,.25,1)', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ]),
    trigger('pulse', [
      transition(':enter', [
        animate('2000ms ease-in-out', keyframes([
          style({ transform: 'scale(1)', offset: 0 }),
          style({ transform: 'scale(1.05)', offset: 0.5 }),
          style({ transform: 'scale(1)', offset: 1 })
        ]))
      ])
    ])
  ],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule]
})
export class HomeComponent {
  ceoImagePath = '../../../assets/home/mushhood.png';
  imageLoaded = false;
  imageError = false;
  
  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {}
  
  onImageError(event: any) {
    console.error('Failed to load CEO image:', event.target.src);
    this.imageError = true;
    event.target.style.display = 'none';
  }
  
  onImageLoad(event: any) {
    console.log('CEO image loaded successfully');
    this.imageLoaded = true;
  }
  
  navigateToServices() {
    this.viewportScroller.scrollToPosition([0, 0]);
    this.router.navigate(['/services']);
  }
  
  navigateToQuote() {
    this.viewportScroller.scrollToPosition([0, 0]);
    this.router.navigate(['/quote']);
  }
} 