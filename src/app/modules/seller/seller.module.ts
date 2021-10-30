import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { SlrManageComponent } from './slr-manage/slr-manage.component';
import { SlrStatComponent } from './slr-stat/slr-stat.component';
import { SlrBillComponent } from './slr-bill/slr-bill.component';


@NgModule({
  declarations: [
    SlrManageComponent,
    SlrStatComponent,
    SlrBillComponent
  ],
  imports: [
    CommonModule,
    SellerRoutingModule
  ]
})
export class SellerModule { }
