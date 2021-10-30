import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './modules/public/homepage/homepage.component';
import { ProductdetailComponent } from './modules/public/productdetail/productdetail.component';
import { CustomerComponent } from './modules/customer/customer.component';
import { SellerComponent } from './modules/seller/seller.component';
import { HomepageRoutingModule } from './modules/public/homepage/homepage-routing.module';
import { CustomerRoutingModule } from './modules/customer/customer-routing.module';
import { SellerRoutingModule } from './modules/seller/seller-routing.module';
import { CategoryComponent } from './modules/public/category/category.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterCategoryComponent } from './modules/public/filter-category/filter-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProductdetailComponent,
    CustomerComponent,
    SellerComponent,
    CategoryComponent,
    FilterCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomepageRoutingModule,
    CustomerRoutingModule,
    SellerRoutingModule,
    HttpClientModule,
  
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
