import { 
  Directive, 
  ElementRef, 
  Input, 
  OnInit, 
  OnDestroy, 
  Renderer2,
  NgZone 
} from '@angular/core';
import { IntersectionObserverService } from '../../core/intersection-observer.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appLazyLoad]',
  standalone: true
})
export class LazyLoadDirective implements OnInit, OnDestroy {
  @Input('appLazyLoad') src: string = '';
  @Input() placeholder: string = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB2aWV3Qm94PSIwIDAgMSAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmNWY1ZjUiLz48L3N2Zz4=';
  @Input() fadeInDuration: number = 300;

  private subscription?: Subscription;
  private isLoaded = false;

  constructor(
    private elementRef: ElementRef<HTMLImageElement>,
    private renderer: Renderer2,
    private intersectionObserver: IntersectionObserverService,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.setupLazyLoading();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.intersectionObserver.unobserve(this.elementRef);
  }

  private setupLazyLoading(): void {
    const img = this.elementRef.nativeElement;
    
    // Set initial placeholder
    this.renderer.setAttribute(img, 'src', this.placeholder);
    this.renderer.setStyle(img, 'transition', `opacity ${this.fadeInDuration}ms ease-in-out`);
    this.renderer.setStyle(img, 'opacity', '0.7');

    // Create intersection observer
    this.subscription = this.intersectionObserver
      .observe(this.elementRef, {
        rootMargin: '50px',
        threshold: 0.1
      })
      .subscribe(entries => {
        const entry = entries.find(e => e.target === img);
        
        if (entry?.isIntersecting && !this.isLoaded) {
          this.loadImage();
        }
      });
  }

  private loadImage(): void {
    if (this.isLoaded || !this.src) return;

    this.isLoaded = true;
    const img = this.elementRef.nativeElement;

    // Create a new image to preload
    const imageLoader = new Image();
    
    imageLoader.onload = () => {
      this.ngZone.run(() => {
        // Fade out placeholder
        this.renderer.setStyle(img, 'opacity', '0');
        
        setTimeout(() => {
          // Set actual source and fade in
          this.renderer.setAttribute(img, 'src', this.src);
          this.renderer.setStyle(img, 'opacity', '1');
          
          // Remove loading class if exists
          this.renderer.removeClass(img, 'lazy-loading');
          this.renderer.addClass(img, 'lazy-loaded');
          
          // Stop observing once loaded
          this.intersectionObserver.unobserve(this.elementRef);
        }, 50);
      });
    };

    imageLoader.onerror = () => {
      this.ngZone.run(() => {
        // Handle error - keep placeholder or show error state
        this.renderer.addClass(img, 'lazy-error');
        console.warn(`Failed to load image: ${this.src}`);
      });
    };

    // Start loading
    this.renderer.addClass(img, 'lazy-loading');
    imageLoader.src = this.src;
  }
}
