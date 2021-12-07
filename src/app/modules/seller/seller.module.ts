import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { SellerRoutingModule } from './seller-routing.module';
import { SlrManageComponent } from './slr-manage/slr-manage.component';
import { SlrBillComponent } from './slr-bill/slr-bill.component';
import { SlrProductlistComponent } from './slr-productlist/slr-productlist.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SlrManageComponent,
    SlrBillComponent,
    SlrProductlistComponent
  ],
  imports: [
    CommonModule,
    SellerRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ]
})
export class SellerModule { }
