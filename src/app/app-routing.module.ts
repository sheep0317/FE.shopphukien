import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './modules/public/homepage/homepage.component';
import { ProductdetailComponent } from './modules/public/productdetail/productdetail.component';
import { ForgetPasswordComponent } from './modules/public/forget-password/forget-password.component';
import { ResetPasswordComponent } from './modules/public/reset-password/reset-password.component';
const routes: Routes = [
  {
    path: 'homepage',
    redirectTo:'/homepage',
    pathMatch: 'full'
  },
  {
    path: 'customer',
    redirectTo:'/customer',
    pathMatch: 'full'
  },
  {
    path: 'manager',
    redirectTo:'/manager',
    pathMatch: 'full'
  },
  {
    path: 'reset-password',
    component: ForgetPasswordComponent,
    pathMatch: 'full'
  },
  {
    path: 'reset-password/:token',
    component: ResetPasswordComponent,
    pathMatch: 'full'
  },
  {
    path:'',
    component:HomepageComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
