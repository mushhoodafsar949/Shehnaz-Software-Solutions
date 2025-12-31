import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ThemeService } from './core/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterModule, NavbarComponent, FooterComponent, DynamicDialogModule]
})
export class AppComponent implements OnInit, OnDestroy {
  private themeSubscription?: Subscription;

  constructor(
    private primengConfig: PrimeNGConfig,
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    // Initialize theme subscription
    this.themeSubscription = this.themeService.theme$.subscribe();
  }

  ngOnDestroy() {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }
}