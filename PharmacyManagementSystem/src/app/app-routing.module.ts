import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { SupplierComponent } from './components/supplier/supplier.component';
import { DrugComponent } from './components/drug/drug.component';
import { DrugdisplayComponent } from './components/drugdisplay/drugdisplay.component';
import { CartComponent } from './components/cart/cart.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardadminComponent } from './components/dashboardadmin/dashboardadmin.component';
import { SupplierformComponent } from './components/supplier/supplierform/supplierform.component';
import { OrderComponent } from './components/order/order.component';
import { OrderdetailsComponent } from './components/orderdetails/orderdetails.component';
import { SalesreportComponent } from './components/salesreport/salesreport.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  
  
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'supplier',
    component:SupplierComponent,canActivate:[AuthGuard]
  },
  {
    path:'supplierform',
    component:SupplierformComponent
  },
  {
    path:'drug',
    component:DrugComponent,canActivate:[AuthGuard]
  },
  {
    path:'drugdisplay',
    component:DrugdisplayComponent,canActivate:[AuthGuard]
  },
  {
    path:'cart',
    component:CartComponent,canActivate:[AuthGuard]
  },
  {
    path:'dashboard',
    component:DashboardadminComponent
  },
  {
    path:'order',
    component:OrderComponent,canActivate:[AuthGuard]
  },
  {
    path:'orderdetails',
    component:OrderdetailsComponent,canActivate:[AuthGuard]
  },
  {
    path:'salesreport',
    component:SalesreportComponent,canActivate:[AuthGuard]
  }
 
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
