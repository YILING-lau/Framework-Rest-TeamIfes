import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ExpensesComponent } from './module/expenses/expenses.component';
import { DashboardComponent } from './module/dashboard/dashboard.component';

import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SharedModule } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { NavbarComponent } from './common/navbar/navbar.component';
import { ChartModule } from 'primeng/chart';
import { LoginComponent } from './module/login/login.component';
import { RegisterComponent } from './module/register/register.component';
import 'chart.js/dist/Chart.min.js';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from 'src/app/core/util/error.interceptor';
import { JwtInterceptor } from 'src/app/core/util/jwt.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { DoughnutComponent } from './module/dashboard/doughnut/doughnut.component';
import { LineComponent } from './module/dashboard/line/line.component';
import { BarComponent } from './module/dashboard/bar/bar.component';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
@NgModule({
  declarations: [
    AppComponent,
    ExpensesComponent,
    DashboardComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    DoughnutComponent,
    LineComponent,
    BarComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    SelectButtonModule,
    SharedModule,
    CardModule,
    TableModule,
    ChartModule,
    DialogModule,
    BrowserAnimationsModule,
    DropdownModule,
    CalendarModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
