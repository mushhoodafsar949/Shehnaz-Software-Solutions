import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerformanceService {
  private performanceMetrics: Map<string, number> = new Map();

  constructor() {
    this.initializePerformanceObserver();
  }

  private initializePerformanceObserver() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            this.performanceMetrics.set('LCP', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            const fidEntry = entry as any; // Cast to handle processingStart property
            this.performanceMetrics.set('FID', fidEntry.processingStart - entry.startTime);
          }
          if (entry.entryType === 'layout-shift') {
            const currentCLS = this.performanceMetrics.get('CLS') || 0;
            this.performanceMetrics.set('CLS', currentCLS + (entry as any).value);
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
    }
  }

  // Measure Core Web Vitals
  getCoreWebVitals(): Promise<{ LCP: number; FID: number; CLS: number }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          LCP: this.performanceMetrics.get('LCP') || 0,
          FID: this.performanceMetrics.get('FID') || 0,
          CLS: this.performanceMetrics.get('CLS') || 0
        });
      }, 2000); // Wait 2 seconds to collect metrics
    });
  }

  // Measure custom performance metrics
  markStart(label: string): void {
    performance.mark(`${label}-start`);
  }

  markEnd(label: string): number {
    performance.mark(`${label}-end`);
    performance.measure(label, `${label}-start`, `${label}-end`);
    
    const measure = performance.getEntriesByName(label)[0];
    return measure.duration;
  }

  // Get page load time
  getPageLoadTime(): number {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    return navigation.loadEventEnd - navigation.fetchStart;
  }

  // Get first contentful paint
  getFirstContentfulPaint(): number {
    const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
    return fcpEntry ? fcpEntry.startTime : 0;
  }

  // Memory usage (if available)
  getMemoryUsage(): any {
    return (performance as any).memory ? {
      usedJSHeapSize: (performance as any).memory.usedJSHeapSize,
      totalJSHeapSize: (performance as any).memory.totalJSHeapSize,
      jsHeapSizeLimit: (performance as any).memory.jsHeapSizeLimit
    } : null;
  }

  // Report performance to console (for development)
  reportPerformance(): void {
    console.group('🚀 Performance Metrics');
    console.log('Page Load Time:', this.getPageLoadTime().toFixed(2), 'ms');
    console.log('First Contentful Paint:', this.getFirstContentfulPaint().toFixed(2), 'ms');
    
    const memory = this.getMemoryUsage();
    if (memory) {
      console.log('Memory Usage:', {
        used: (memory.usedJSHeapSize / 1024 / 1024).toFixed(2) + ' MB',
        total: (memory.totalJSHeapSize / 1024 / 1024).toFixed(2) + ' MB'
      });
    }

    this.getCoreWebVitals().then(vitals => {
      console.log('Core Web Vitals:', {
        LCP: vitals.LCP.toFixed(2) + ' ms',
        FID: vitals.FID.toFixed(2) + ' ms',
        CLS: vitals.CLS.toFixed(4)
      });
      console.groupEnd();
    });
  }
}
