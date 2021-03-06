import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductdetailComponent } from './modules/public/productdetail/productdetail.component';
import { ForgetPasswordComponent } from './modules/public/forget-password/forget-password.component';
import { ResetPasswordComponent } from './modules/public/reset-password/reset-password.component';
import { HomepageRoutingModule } from './modules/public/homepage/homepage-routing.module';
import { CustomerRoutingModule } from './modules/customer/customer-routing.module';
import { SellerRoutingModule } from './modules/seller/seller-routing.module';
import { PageNotFoundComponent } from './modules/public/page-not-found/page-not-found.component';
const routes: Routes = [
  {
    path: 'homepage',
    redirectTo:'/homepage',
    pathMatch: 'full',
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
    redirectTo:'/homepage',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo:'/404',
  },
  {
    path: '404',
    component: PageNotFoundComponent
  }
  
];

@NgModule({
  imports: 
  [
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' }),
    HomepageRoutingModule,
    CustomerRoutingModule,
    SellerRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
