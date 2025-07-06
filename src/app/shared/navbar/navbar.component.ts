import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CommonModule, ViewportScroller } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ThemeService, Theme } from '../../core/theme.service';
import { QuoteDialogComponent } from '../quote-dialog/quote-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatDialogModule
  ]
})
export class NavbarComponent implements OnInit {
  @Input() drawer!: MatSidenav;
  menuOpen = false;
  currentTheme: Theme = 'light';

  constructor(
    private themeService: ThemeService,
    private dialog: MatDialog,
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit() {
    this.themeService.theme$.subscribe(theme => {
      this.currentTheme = theme;
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  openQuoteDialog() {
    this.viewportScroller.scrollToPosition([0, 0]);
    this.router.navigate(['/quote']);
  }

  openQuoteDialogModal() {
    const dialogRef = this.dialog.open(QuoteDialogComponent, {
      width: '90vw',
      maxWidth: '1200px',
      height: '90vh',
      maxHeight: '90vh',
      panelClass: 'quote-dialog-panel',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Quote dialog closed');
    });
  }
} 