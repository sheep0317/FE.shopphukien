import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CusAddressComponent } from './cus-address/cus-address.component';
import { CusStatComponent } from './cus-stat/cus-stat.component';
import { CusHistoryComponent } from './cus-history/cus-history.component';


@NgModule({
  declarations: [
    CusAddressComponent,
    CusStatComponent,
    CusHistoryComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
