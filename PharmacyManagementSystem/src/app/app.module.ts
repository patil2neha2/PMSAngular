import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { SupplierComponent } from './components/supplier/supplier.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { SupplierformComponent } from './components/supplier/supplierform/supplierform.component';
import { FormsModule } from '@angular/forms';
import { NgToastModule } from 'ng-angular-popup';
import { DrugComponent } from './components/drug/drug.component';
import { DrugdisplayComponent } from './components/drugdisplay/drugdisplay.component';
import { CartComponent } from './components/cart/cart.component';
import { DashboardadminComponent } from './components/dashboardadmin/dashboardadmin.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { DrugformComponent } from './components/drug/drugform/drugform.component';
import { OrderComponent } from './components/order/order.component';
import { OrderdetailsComponent } from './components/orderdetails/orderdetails.component';
import { SalesreportComponent } from './components/salesreport/salesreport.component';








@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SupplierComponent,
    SupplierformComponent,
    DrugComponent,
    DrugdisplayComponent,
    CartComponent,
    DashboardadminComponent,
    DrugformComponent,
    OrderComponent,
    OrderdetailsComponent,
    SalesreportComponent

    
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgToastModule
    
    
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass : TokenInterceptor,
    multi : true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
