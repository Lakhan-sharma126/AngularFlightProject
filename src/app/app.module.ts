import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { TestpipePipe } from './testpipe.pipe';
import { HighlightDirective } from './highlight.directive';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger'; 
import { HttpClientModule } from '@angular/common/http';
import { FlightlistComponent } from './flightlist/flightlist.component';
import { CustomerComponent } from './customer/customer.component';
import { CostmrComponent } from './costmr/costmr.component';
import { OrderComponent } from './order/order.component';
import { FooterComponent } from './footer/footer.component';
import { NormalorderComponent } from './normalorder/normalorder.component';
import { PremiumorderComponent } from './premiumorder/premiumorder.component';
import { FeedbackModuleModule } from './feedback-module/feedback-module.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PiechartComponent } from './piechart/piechart.component';
import {ChartModule} from 'primeng/chart';
import { PaymanentComponent } from './paymanent/paymanent.component';
import { FlightbookComponent } from './flightbook/flightbook.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    TestpipePipe,
    HighlightDirective,
    FlightlistComponent,
    CustomerComponent,
    CostmrComponent,
    OrderComponent,
    FooterComponent,
    NormalorderComponent,
    PremiumorderComponent,
    PiechartComponent,
    PaymanentComponent,
    FlightbookComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    ReactiveFormsModule,
    AppRoutingModule,
    // FeedbackModuleModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    LoggerModule.forRoot({serverLoggingUrl: '/users/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR}),
    HttpClientModule
  ],
  exports:[
    // FeedbackModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
