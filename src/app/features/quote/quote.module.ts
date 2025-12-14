import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuoteComponent } from './quote.component';

// PrimeNG Imports
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SliderModule } from 'primeng/slider';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { TooltipModule } from 'primeng/tooltip';
import { AccordionModule } from 'primeng/accordion';
import { DividerModule } from 'primeng/divider';
import { ProgressBarModule } from 'primeng/progressbar';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [QuoteComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: QuoteComponent }
    ]),
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    SelectButtonModule,
    CheckboxModule,
    RadioButtonModule,
    SliderModule,
    CardModule,
    ChipModule,
    TooltipModule,
    AccordionModule,
    DividerModule,
    ProgressBarModule,
    RippleModule,
    ToastModule,
    InputNumberModule,
    DropdownModule
  ],
  providers: [MessageService]
})
export class QuoteModule { }