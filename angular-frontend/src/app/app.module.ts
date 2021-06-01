import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ExpensesComponent } from './module/expenses/expenses.component';
import { DashboardComponent } from './module/dashboard/dashboard.component';

import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { NavbarComponent } from './common/navbar/navbar.component';
import { ChartModule } from 'primeng/chart';
import 'chart.js/dist/Chart.min.js';
@NgModule({
  declarations: [
    AppComponent,
    ExpensesComponent,
    DashboardComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    SharedModule,
    CardModule,
    ChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
