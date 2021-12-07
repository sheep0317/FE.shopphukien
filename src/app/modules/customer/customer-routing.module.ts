import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CusCartComponent } from './cus-cart/cus-cart.component';
import { CusHistoryComponent } from './cus-history/cus-history.component';
import { CusManageComponent } from './cus-manage/cus-manage.component';
import { CusOrderdetailComponent } from './cus-orderdetail/cus-orderdetail.component';
import { CusProfileComponent } from './cus-profile/cus-profile.component';
import { CustomerComponent } from './customer.component';

const routes: Routes = [
  {
    path:'customer',
    component:CustomerComponent,
    children:[
      {
        path: 'profile',
        component: CusProfileComponent,
        
      },
      {
        path: '',
        component: CusProfileComponent
      },
      {
        path: 'manage',
        component: CusManageComponent,
        children:[
          {
            path: '',
            redirectTo: 'history',
            pathMatch: 'full'
          },
          {
            path: 'history',
            component: CusHistoryComponent
          },
          {
            path: 'history/:id',
            component: CusOrderdetailComponent
          },
          {
            path: 'cart',
            component: CusCartComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
