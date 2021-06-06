import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { get, map } from 'lodash-es';
import { AuthenticationService } from 'src/app/core/auth/auth.service';
import { environment } from 'src/environments/environment';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import Expense from '../expense.interface';

interface ExpenseCategory {
  name: string;
  slug: string;
  color: string;
}

interface ExpenseEntry {
  userId: String;
  categoryId: String;
  amount: number;
  timestamp: number;
}

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss'],
})
export class ExpensesComponent implements OnInit {
  expenseEntryForm!: FormGroup;
  display: boolean = false;
  totalExpense: number = 0;
  expenseList: Expense[] = [];

  expenseCategoryList: ExpenseCategory[] = [];
  selectedCategory!: ExpenseCategory;

  constructor(
    private authenticationService: AuthenticationService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getAllCategories();
    this.getExpenses();
  }

  initForm() {
    this.expenseEntryForm = new FormGroup({
      category: new FormControl(null, Validators.required),
      date: new FormControl(null, Validators.required),
      amount: new FormControl(null, Validators.required),
    });
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
          this.totalExpense = this.expenseList.reduce(
            (prev, next) => prev + next.amount,
            0
          );
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });
        }
      });
  }

  getAllCategories() {
    return this.httpClient
      .get(`${environment.apiUrl}/category/get-all-category`)
      .subscribe((response: any) => {
        if (get(response, 'success', false)) {
          let data = get(response, 'data', []);
          this.expenseCategoryList = map(data, (expenseCategory) => ({
            name: get(expenseCategory, 'label', '-'),
            slug: get(expenseCategory, 'id', 'N/A'),
            color: get(expenseCategory, 'color', 'white'),
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

  createExpense(requestBody: ExpenseEntry) {
    return this.httpClient
      .post(`${environment.apiUrl}/expenses-info/create`, requestBody)
      .subscribe((response: any) => {
        this.getExpenses();
      });
  }

  onSubmit() {
    if (this.expenseEntryForm?.valid ?? false) {
      let userId = this.authenticationService.currentUserValue.id;
      let formValue = this.expenseEntryForm?.value;

      let requestBody: ExpenseEntry = {
        userId: userId,
        categoryId: get(formValue, 'category.slug'),
        amount: get(formValue, 'amount'),
        timestamp: (get(formValue, 'date') as Date).getTime(),
      };

      this.display = false;
      this.expenseEntryForm.reset();
      this.createExpense(requestBody);
    }
  }

  onDelete(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        return this.httpClient
          .post(`${environment.apiUrl}/expenses-info/delete/${id}`, {})
          .subscribe((response: any) => {
            this.getExpenses();
            Swal.fire('Deleted!', 'Expense deleted.', 'success');
          });
      }
      return undefined;
    });
  }

  showDialog() {
    this.display = true;
  }
}
