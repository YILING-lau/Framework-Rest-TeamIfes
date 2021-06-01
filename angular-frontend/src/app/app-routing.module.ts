import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { ExpensesComponent } from './module/expenses/expenses.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'expenses', component: ExpensesComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
