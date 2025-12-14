import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// PrimeNG Imports
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SelectButtonModule } from 'primeng/selectbutton';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipModule } from 'primeng/chip';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TooltipModule } from 'primeng/tooltip';
import { PanelMenuModule } from 'primeng/panelmenu';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { InputNumberModule } from 'primeng/inputnumber';
import { AccordionModule } from 'primeng/accordion';
import { DividerModule } from 'primeng/divider';
import { SliderModule } from 'primeng/slider';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { MessageService, ConfirmationService } from 'primeng/api';

// Components
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ConsultationDialogComponent } from './consultation-dialog/consultation-dialog.component';
import { QuoteDialogComponent } from './quote-dialog/quote-dialog.component';

const PRIMENG_MODULES = [
  ButtonModule,
  RippleModule,
  MenuModule,
  MenubarModule,
  CardModule,
  DialogModule,
  DynamicDialogModule,
  InputTextModule,
  InputTextareaModule,
  SelectButtonModule,
  RadioButtonModule,
  CheckboxModule,
  ChipModule,
  ProgressBarModule,
  ProgressSpinnerModule,
  TooltipModule,
  PanelMenuModule,
  StepsModule,
  ToastModule,
  InputNumberModule,
  AccordionModule,
  DividerModule,
  SliderModule,
  CarouselModule,
  TagModule
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ...PRIMENG_MODULES,
    NavbarComponent,
    FooterComponent,
    ConsultationDialogComponent,
    QuoteDialogComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ...PRIMENG_MODULES,
    NavbarComponent,
    FooterComponent,
    ConsultationDialogComponent,
    QuoteDialogComponent
  ],
  providers: [
    MessageService,
    ConfirmationService
  ]
})
export class SharedModule { }