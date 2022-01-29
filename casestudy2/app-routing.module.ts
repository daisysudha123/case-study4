import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{ path: 'productdashboard', loadChildren: () => import('./productdashboard/productdashboard.module').then(m => m.ProductdashboardModule) }, { path: 'userdashboard', loadChildren: () => import('./userdashboard/userdashboard.module').then(m => m.UserdashboardModule) },

 {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent}
  // {path:'', component:}



]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
