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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './modules/public/login/login.component';
import { SigninComponent } from './modules/public/signup/signup.component';
import { CustomerModule } from './modules/customer/customer.module';
import { SellerModule } from './modules/seller/seller.module';
import { ResetPasswordComponent } from './modules/public/reset-password/reset-password.component';
import { ForgetPasswordComponent } from './modules/public/forget-password/forget-password.component';
import { HeaderComponent } from './modules/public/header/header.component';
import { FooterComponent } from './modules/public/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProductdetailComponent,
    CustomerComponent,
    SellerComponent,
    CategoryComponent,
    LoginComponent,
    SigninComponent,
    ResetPasswordComponent,
    ForgetPasswordComponent,
    HeaderComponent,
    FooterComponent

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
    SellerModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
