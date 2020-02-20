import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { ElecroinicsComponent } from './elecroinics/elecroinics.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { SellerSignUpComponent } from './seller-sign-up/seller-sign-up.component';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    AccountComponent,
    PagenotfoundComponent,
    HeaderComponent,
    NavBarComponent,
    SubCategoryComponent,
    ElecroinicsComponent,
    LoginComponent,
    SignUpComponent,
    SellerLoginComponent,
    SellerSignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
