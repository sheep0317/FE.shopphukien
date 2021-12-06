import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CusHistoryComponent } from './cus-history/cus-history.component';
import { CusManageComponent } from './cus-manage/cus-manage.component';
import { CusProfileComponent } from './cus-profile/cus-profile.component';
import { CusStatComponent } from './cus-stat/cus-stat.component';
import { CustomerComponent } from './customer.component';

const routes: Routes = [
  {
    path:'customer',
    component:CustomerComponent,
    children:[
      {
        path: 'profile',
        component: CusProfileComponent
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
            path: 'history',
            component: CusHistoryComponent
          },
          {
            path: 'stat',
            component: CusStatComponent
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
