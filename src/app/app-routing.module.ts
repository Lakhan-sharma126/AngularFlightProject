import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlightlistComponent } from './flightlist/flightlist.component';
import { LoginComponent } from './login/login.component';
import { NormalorderComponent } from './normalorder/normalorder.component';
import { OrderComponent } from './order/order.component';
import { PiechartComponent } from './piechart/piechart.component';
import { PremiumorderComponent } from './premiumorder/premiumorder.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path:'dashboard',component: DashboardComponent},
  { path:'flightlist',component:FlightlistComponent},
  { path:'customer',component:CustomerComponent},
  {path:'piechart',component:PiechartComponent},
  { path:'order',component:OrderComponent,
  children: [
    { path: '', redirectTo: 'normalOrder', pathMatch: 'full' },
    { path: 'normalOrder', component:   NormalorderComponent},
    { path: 'premiumOrder', component:  PremiumorderComponent},
    
   
  ]},
  {path: 'feedback', loadChildren: () => import('./feedback-module/feedback-module.module').then(m => m.FeedbackModuleModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
