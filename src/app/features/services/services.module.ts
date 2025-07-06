import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ServicesComponent } from './services.component';

const routes: Routes = [
  { path: '', component: ServicesComponent }
];

@NgModule({
  // declarations: [ServicesComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes), ServicesComponent]
})
export class ServicesModule {} 