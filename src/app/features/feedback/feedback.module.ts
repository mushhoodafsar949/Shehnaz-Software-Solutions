import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { FeedbackComponent } from './feedback.component';
import { FeedbackService } from './feedback.service';

const routes: Routes = [
  { path: '', component: FeedbackComponent }
];

@NgModule({
  declarations: [FeedbackComponent],
  imports: [CommonModule, SharedModule, FormsModule, RouterModule.forChild(routes)],
  providers: [FeedbackService]
})
export class FeedbackModule {} 