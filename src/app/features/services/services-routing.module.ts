import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./services.component').then(m => m.ServicesComponent)
  },
  {
    path: ':id',
    loadComponent: () => import('./service-detail/service-detail.component').then(m => m.ServiceDetailComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }