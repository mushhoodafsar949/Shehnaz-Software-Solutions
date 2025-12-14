import { NgModule } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { serverRoutes } from './app.routes.server';

@NgModule({
  imports: [BrowserModule],
  providers: [provideServerRendering(withRoutes(serverRoutes))],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
