import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, RouterModule, Event } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PrimeNGConfig } from 'primeng/api';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ThemeService } from './core/theme.service';
import { LoadingService } from './core/loading.service';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, FooterComponent, DynamicDialogModule]
})
export class AppComponent implements OnInit, OnDestroy {
  private themeSubscription?: Subscription;
  private routerSubscription?: Subscription;
  isLoading = false;

  constructor(
    private primengConfig: PrimeNGConfig,
    private themeService: ThemeService,
    private loadingService: LoadingService,
    private router: Router
  ) {}

  ngOnInit() {
    // Initialize theme subscription
    this.themeSubscription = this.themeService.theme$.subscribe();

    // Subscribe to loading service
    this.loadingService.loading$.subscribe(loading => {
      this.isLoading = loading;
    });

    // Show loader on initial page load
    this.loadingService.show();

    // Listen to router events for navigation loading
    this.routerSubscription = this.router.events.pipe(
      filter((event: Event): event is NavigationStart | NavigationEnd | NavigationCancel | NavigationError => 
        event instanceof NavigationStart || 
        event instanceof NavigationEnd || 
        event instanceof NavigationCancel || 
        event instanceof NavigationError
      )
    ).subscribe((event: NavigationStart | NavigationEnd | NavigationCancel | NavigationError) => {
      if (event instanceof NavigationStart) {
        this.loadingService.show();
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        // Small delay to ensure smooth transition and allow content to render
        setTimeout(() => {
          this.loadingService.hide();
        }, 400);
      }
    });

    // Hide loader after initial page load (fallback)
    setTimeout(() => {
      if (this.isLoading) {
        this.loadingService.hide();
      }
    }, 1000);
  }

  ngOnDestroy() {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}