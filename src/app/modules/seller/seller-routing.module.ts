import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerComponent } from './seller.component';
import { SlrBillComponent } from './slr-bill/slr-bill.component';
import { SlrManageComponent } from './slr-manage/slr-manage.component';
import { SlrProductlistComponent } from './slr-productlist/slr-productlist.component';

const routes: Routes = [
  {
    path:'seller',
    component:SellerComponent,
    children:[
      {
        path: '',
        redirectTo: 'manage',
        pathMatch: 'full'
      },
      {
        path: 'manage',
        component: SlrManageComponent,
        children:[
          {
            path: '',
            component: SlrProductlistComponent

          },
          {
            path: 'productList',
            component: SlrProductlistComponent
          },
          {
            path: 'bills',
            component: SlrBillComponent
          },
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
