import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ServicesComponent } from './services.component';
import { ServicesRoutingModule } from './services-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ServicesRoutingModule,
    ServicesComponent
  ]
})
export class ServicesModule {} 