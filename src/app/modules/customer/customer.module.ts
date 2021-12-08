import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CusHistoryComponent } from './cus-history/cus-history.component';
import { CusProfileComponent } from './cus-profile/cus-profile.component';
import { CusManageComponent } from './cus-manage/cus-manage.component';
import { ReactiveFormsModule  } from '@angular/forms';
import { CusCartComponent } from './cus-cart/cus-cart.component';

@NgModule({
  declarations: [
    CusHistoryComponent,
    CusProfileComponent,
    CusManageComponent,
    CusCartComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
