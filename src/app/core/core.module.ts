import { NgModule, Optional, SkipSelf } from '@angular/core';
import { PerformanceService } from './performance.service';
import { ScrollService } from './scroll.service';
import { ThemeService } from './theme.service';
import { IntersectionObserverService } from './intersection-observer.service';

@NgModule({
  providers: [
    PerformanceService,
    ScrollService,
    ThemeService,
    IntersectionObserverService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only.');
    }
  }
} 