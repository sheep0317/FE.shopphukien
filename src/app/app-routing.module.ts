import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './modules/public/homepage/homepage.component';
import { ProductdetailComponent } from './modules/public/productdetail/productdetail.component';

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
    path:'',
    component:HomepageComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
