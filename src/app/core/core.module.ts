import { NgModule, Optional, SkipSelf } from '@angular/core';

@NgModule({
  providers: [
    // Add core (singleton) services here
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only.');
    }
  }
} 