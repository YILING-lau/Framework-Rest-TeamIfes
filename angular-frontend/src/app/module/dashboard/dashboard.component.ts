import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { get, map, isEmpty } from 'lodash-es';
import { AuthenticationService } from 'src/app/core/auth/auth.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import Expense from '../expense.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  stateOptions: any[];
  expenseList: Expense[] = [];
  default: boolean = true;

  constructor(
    private httpClient: HttpClient,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.stateOptions = [
      { label: 'Bar', value: true },
      { label: 'Line', value: false },
    ];
    this.route.params.subscribe((param) => this.getExpenses());
  }
  onChange(obj: any): void {
    this.default = obj.value;
  }

  getExpenses() {
    let userId = this.authenticationService.currentUserValue.id;
    return this.httpClient
      .get(`${environment.apiUrl}/expenses-info/userId/${userId}`)
      .subscribe((response: any) => {
        if (get(response, 'success', false)) {
          let data = get(response, 'data', []);
          this.expenseList = map(data, (expense) => ({
            id: get(expense, 'id', '-'),
            categoryColor: get(expense, 'categoryColor', 'white'),
            categoryLabel: get(expense, 'categoryLabel', 'N/A'),
            date: get(expense, 'date', 'N/A'),
            amount: get(expense, 'amount', '-'),
          }));
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });
        }
      });
  }

  get isExpenseListEmpty() {
    return isEmpty(this.expenseList);
  }
}
