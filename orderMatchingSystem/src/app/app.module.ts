import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavitemsComponent } from './navitems/navitems.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientCardComponent } from './clients/client-card/client-card.component';
import { OrderplacingComponent } from './orderplacing/orderplacing.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ErrorPageComponentComponent } from './error-page-component/error-page-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { DashboardCardComponent } from './dashboard/dashboard-card/dashboard-card.component';
import { TradehistoryComponent } from './tradehistory/tradehistory.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavitemsComponent,
    LoginComponent,
    DashboardComponent,
    ClientsComponent,
    ClientCardComponent,
    OrderplacingComponent,
    PortfolioComponent,
    ErrorPageComponentComponent,
    DashboardCardComponent,
    TradehistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
