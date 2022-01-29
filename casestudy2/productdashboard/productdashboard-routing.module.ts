import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductdashboardComponent } from './productdashboard.component';

const routes: Routes = [{ path: '', component: ProductdashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductdashboardRoutingModule { }
