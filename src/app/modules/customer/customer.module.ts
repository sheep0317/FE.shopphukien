import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CusStatComponent } from './cus-stat/cus-stat.component';
import { CusHistoryComponent } from './cus-history/cus-history.component';
import { CusProfileComponent } from './cus-profile/cus-profile.component';
import { CusManageComponent } from './cus-manage/cus-manage.component';
import { ReactiveFormsModule  } from '@angular/forms';

@NgModule({
  declarations: [
    CusStatComponent,
    CusHistoryComponent,
    CusProfileComponent,
    CusManageComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
