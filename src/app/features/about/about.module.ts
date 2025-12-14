import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';

// PrimeNG Imports
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { ChipModule } from 'primeng/chip';
import { RippleModule } from 'primeng/ripple';
import { TagModule } from 'primeng/tag';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AboutComponent }
    ]),
    AboutComponent
  ]
})
export class AboutModule { }