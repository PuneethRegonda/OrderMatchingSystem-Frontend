import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorPageComponentComponent } from './error-page-component/error-page-component.component';
import { AuthGaurd } from './Gaurds/AuthGaurd';
import { LoginComponent } from './login/login.component';
import { OrderplacingComponent } from './orderplacing/orderplacing.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'clients', component: ClientsComponent, canActivate: [AuthGaurd]},
  {path: 'portfolio', component: PortfolioComponent,canActivate: [AuthGaurd]},
  {path: 'dashboard',component: DashboardComponent, canActivate: [AuthGaurd]},
  {path: 'orderplacing', component: OrderplacingComponent, canActivate: [AuthGaurd]},
  {path: 'not-found', component: ErrorPageComponentComponent, data: {'message': 'Page Not Found'}},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }