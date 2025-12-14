import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'product/:id',
    loadComponent: () => import('./features/product-details/product-details.component').then(c => c.ProductDetailsComponent)
  },
  {
    path: '',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./features/services/services.module').then(m => m.ServicesModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./features/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'quote',
    loadChildren: () => import('./features/quote/quote.module').then(m => m.QuoteModule)
  },
  {
    path: 'feedback',
    loadComponent: () => import('./features/feedback/feedback.component').then(c => c.FeedbackComponent)
  }
];
