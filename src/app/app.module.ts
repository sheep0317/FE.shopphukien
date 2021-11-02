import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './modules/public/homepage/homepage.component';
import { HomepageModule } from './modules/public/homepage/homepage.module';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './modules/public/login/login.component';
import { SigninComponent } from './modules/public/signup/signup.component';
import { CustomerModule } from './modules/customer/customer.module';
import { SellerModule } from './modules/seller/seller.module';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProductdetailComponent,
    CustomerComponent,
    SellerComponent,
    CategoryComponent,
    FilterCategoryComponent,
    LoginComponent,
    SigninComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomepageRoutingModule,
    CustomerRoutingModule,
    SellerRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HomepageModule,
    CustomerModule,
    SellerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
