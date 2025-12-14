import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { DialogService } from 'primeng/dynamicdialog';
import { QuoteDialogComponent } from '../quote-dialog/quote-dialog.component';
import { ThemeService } from '../../core/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    RippleModule
  ],
  providers: [DialogService],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isScrolled = false;
  currentTheme = 'light';
  menuOpen = false;
  private themeSubscription?: Subscription;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    if (window.innerWidth > 960) {
      this.menuOpen = false;
    }
  }

  constructor(
    private dialogService: DialogService,
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    this.themeSubscription = this.themeService.theme$.subscribe(theme => {
      this.currentTheme = theme;
    });
  }

  ngOnDestroy() {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  openQuoteDialog() {
    this.dialogService.open(QuoteDialogComponent, {
      header: 'Get a Quote',
      width: '90%',
      maximizable: true,
      style: { maxWidth: '1200px' },
      contentStyle: { height: '85vh', overflow: 'auto' },
      baseZIndex: 10000,
      dismissableMask: true
    });
    this.closeMenu();
  }
}