import { Injectable, ElementRef, NgZone } from '@angular/core';
import { Observable, Subject, fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

interface IntersectionObserverConfig {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

@Injectable({
  providedIn: 'root'
})
export class IntersectionObserverService {
  private observers = new Map<string, IntersectionObserver>();
  private subjects = new Map<string, Subject<IntersectionObserverEntry[]>>();

  constructor(private ngZone: NgZone) {}

  // Create an intersection observer for lazy loading
  createLazyLoadObserver(config: IntersectionObserverConfig = {}): Observable<IntersectionObserverEntry[]> {
    const observerId = this.generateObserverId(config);
    
    if (this.subjects.has(observerId)) {
      return this.subjects.get(observerId)!.asObservable();
    }

    const subject = new Subject<IntersectionObserverEntry[]>();
    this.subjects.set(observerId, subject);

    this.ngZone.runOutsideAngular(() => {
      const observer = new IntersectionObserver((entries) => {
        this.ngZone.run(() => {
          subject.next(entries);
        });
      }, {
        root: config.root || null,
        rootMargin: config.rootMargin || '50px',
        threshold: config.threshold || 0.1
      });

      this.observers.set(observerId, observer);
    });

    return subject.asObservable();
  }

  // Observe an element for intersection
  observe(element: ElementRef | Element, config: IntersectionObserverConfig = {}): Observable<IntersectionObserverEntry[]> {
    const observerId = this.generateObserverId(config);
    const observer$ = this.createLazyLoadObserver(config);
    
    const observer = this.observers.get(observerId);
    if (observer) {
      const targetElement = element instanceof ElementRef ? element.nativeElement : element;
      observer.observe(targetElement);
    }

    return observer$;
  }

  // Unobserve an element
  unobserve(element: ElementRef | Element, config: IntersectionObserverConfig = {}): void {
    const observerId = this.generateObserverId(config);
    const observer = this.observers.get(observerId);
    
    if (observer) {
      const targetElement = element instanceof ElementRef ? element.nativeElement : element;
      observer.unobserve(targetElement);
    }
  }

  // Create viewport visibility observer
  createViewportObserver(threshold: number = 0.5): Observable<IntersectionObserverEntry[]> {
    return this.createLazyLoadObserver({
      rootMargin: '0px',
      threshold: threshold
    });
  }

  // Create scroll spy observer for navigation
  createScrollSpyObserver(): Observable<IntersectionObserverEntry[]> {
    return this.createLazyLoadObserver({
      rootMargin: '-20% 0px -35% 0px',
      threshold: 0
    });
  }

  // Advanced: Create performance-optimized observer with debouncing
  createOptimizedObserver(
    elements: (ElementRef | Element)[],
    callback: (visibleElements: Element[]) => void,
    debounceMs: number = 100
  ): () => void {
    const observer$ = this.createLazyLoadObserver({
      rootMargin: '20px',
      threshold: [0, 0.25, 0.5, 0.75, 1]
    });

    const subscription = observer$.pipe(
      debounceTime(debounceMs),
      distinctUntilChanged((prev, curr) => 
        prev.length === curr.length && 
        prev.every((entry, index) => entry.isIntersecting === curr[index]?.isIntersecting)
      )
    ).subscribe(entries => {
      const visibleElements = entries
        .filter(entry => entry.isIntersecting)
        .map(entry => entry.target);
      
      callback(visibleElements);
    });

    // Observe all elements
    elements.forEach(element => {
      this.observe(element);
    });

    // Return cleanup function
    return () => {
      subscription.unsubscribe();
      elements.forEach(element => {
        this.unobserve(element);
      });
    };
  }

  // Cleanup all observers
  cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.subjects.forEach(subject => subject.complete());
    this.observers.clear();
    this.subjects.clear();
  }

  private generateObserverId(config: IntersectionObserverConfig): string {
    return JSON.stringify({
      rootMargin: config.rootMargin || '50px',
      threshold: config.threshold || 0.1,
      hasRoot: !!config.root
    });
  }
}
