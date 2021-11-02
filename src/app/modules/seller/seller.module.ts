import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { SlrManageComponent } from './slr-manage/slr-manage.component';
import { SlrStatComponent } from './slr-stat/slr-stat.component';
import { SlrBillComponent } from './slr-bill/slr-bill.component';
import { SlrProfileComponent } from './slr-profile/slr-profile.component';
import { SlrProductlistComponent } from './slr-productlist/slr-productlist.component';


@NgModule({
  declarations: [
    SlrManageComponent,
    SlrStatComponent,
    SlrBillComponent,
    SlrProfileComponent,
    SlrProductlistComponent
  ],
  imports: [
    CommonModule,
    SellerRoutingModule
  ]
})
export class SellerModule { }
