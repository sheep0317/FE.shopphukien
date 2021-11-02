import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CusAddressComponent } from './cus-address/cus-address.component';
import { CusStatComponent } from './cus-stat/cus-stat.component';
import { CusHistoryComponent } from './cus-history/cus-history.component';
import { CusCartComponent } from './cus-cart/cus-cart.component';
import { CusProfileComponent } from './cus-profile/cus-profile.component';
import { CusManageComponent } from './cus-manage/cus-manage.component';


@NgModule({
  declarations: [
    CusAddressComponent,
    CusStatComponent,
    CusHistoryComponent,
    CusCartComponent,
    CusProfileComponent,
    CusManageComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
