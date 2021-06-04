import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss'],
})
export class ExpensesComponent implements OnInit {
  expense: number = 0;
  expenseList: Array<{
    code: number;
    category: string;
    date: string;
    amount: number;
  }> = [
    {
      code: 1,
      category: 'A',
      date: '02/06/2021',
      amount: 120.0,
    },
    {
      code: 2,
      category: 'B',
      date: '02/06/2021',
      amount: 33.0,
    },
    {
      code: 3,
      category: 'C',
      date: '02/06/2021',
      amount: 27.0,
    },
    {
      code: 4,
      category: 'A',
      date: '02/06/2021',
      amount: 10.0,
    },
  ];
  constructor() {}

  ngOnInit(): void {
    this.expenseList.forEach((expense) => {
      this.expense += expense.amount;
    });
  }
}
