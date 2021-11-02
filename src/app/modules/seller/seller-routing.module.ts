import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerComponent } from './seller.component';
import { SlrBillComponent } from './slr-bill/slr-bill.component';
import { SlrManageComponent } from './slr-manage/slr-manage.component';
import { SlrProductlistComponent } from './slr-productlist/slr-productlist.component';
import { SlrProfileComponent } from './slr-profile/slr-profile.component';
import { SlrStatComponent } from './slr-stat/slr-stat.component';

const routes: Routes = [
  {
    path:'seller',
    component:SellerComponent,
    children:[
      {
        path: 'profile',
        component: SlrProfileComponent
      },
      {
        path: '',
        component: SlrProfileComponent
      },
      {
        path: 'manage',
        component: SlrManageComponent,
        children:[
          {
            path: 'productList',
            component: SlrProductlistComponent
          },
          {
            path: 'bills',
            component: SlrBillComponent
          },{
            path: 'stat',
            component: SlrStatComponent
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
export class SellerRoutingModule { }
