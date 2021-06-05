import { Component, OnInit } from '@angular/core';

interface Expense {
  name: string;
  slug: string;
  color: string;
}

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss'],
})
export class ExpensesComponent implements OnInit {
  display: boolean = false;
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

  expenses: Expense[];
  selectedExpense: Expense;
  value: Date;
  constructor() {
    this.expenses = [
      { name: 'Housing ', slug: 'housing', color: 'red' },
      { name: 'Transportation ', slug: 'transport', color: 'orange' },
      { name: 'Food ', slug: 'food', color: 'yellow' },
      { name: 'Utilities ', slug: 'utilities ', color: 'green' },
      { name: 'Insurance', slug: 'insurance', color: 'blue' },
      { name: 'Medical & Healthcare', slug: 'medi_health', color: 'violet' },
      { name: 'Saving', slug: 'saving', color: 'purple' },
      { name: 'Personal Spending', slug: 'spending', color: 'pink' },
      {
        name: 'Recreation & Entertainment',
        slug: 'recreation',
        color: 'brown',
      },
      { name: 'Miscellaneous ', slug: 'miscellaneous ', color: 'gray' },
    ];
  }

  ngOnInit(): void {
    this.expenseList.forEach((expense) => {
      this.expense += expense.amount;
    });
  }

  showDialog() {
    this.display = true;
  }
}
