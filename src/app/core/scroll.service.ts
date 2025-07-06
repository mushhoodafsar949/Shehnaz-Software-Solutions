import { Injectable } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  constructor(
    private viewportScroller: ViewportScroller,
    private router: Router
  ) {
    // Automatically scroll to top on every navigation
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.scrollToTop();
      });
  }

  scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  scrollToElement(elementId: string) {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  scrollToPosition(position: [number, number]) {
    this.viewportScroller.scrollToPosition(position);
  }
} 