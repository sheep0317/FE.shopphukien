import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CusHistoryComponent } from './cus-history/cus-history.component';
import { CusProfileComponent } from './cus-profile/cus-profile.component';
import { CusManageComponent } from './cus-manage/cus-manage.component';
import { ReactiveFormsModule  } from '@angular/forms';
import { CusOrderdetailComponent } from './cus-orderdetail/cus-orderdetail.component';
import { CusCartComponent } from './cus-cart/cus-cart.component';

@NgModule({
  declarations: [
    CusHistoryComponent,
    CusProfileComponent,
    CusManageComponent,
    CusOrderdetailComponent,
    CusCartComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
