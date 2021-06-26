import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { get, groupBy, forEach, map, reduce, values } from 'lodash-es';
import * as moment from 'moment';
import Expense from '../../expense.interface';

const MONTH_ARR = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss'],
})
export class LineComponent implements OnInit, OnChanges {
  basicData: any;

  basicOptions: any;

  @Input()
  expenseList: Expense[] = [];

  constructor() {
    this.basicOptions = {
      legend: {
        labels: {
          fontColor: '#495057',
        },
      },
      scales: {
        xAxes: [
          {
            ticks: {
              fontColor: '#495057',
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              fontColor: '#495057',
            },
          },
        ],
      },
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    let categoryGroup = groupBy(
      this.expenseList,
      (expense) => expense.categoryLabel
    );
    let dataset = values(
      map(categoryGroup, (data, label) => {
        let monthGroup = groupBy(data, (expense) =>
          moment(expense.date, 'DD/MM/YYYY').month()
        );
        let dataList = Array(12).fill(0);
        forEach(monthGroup, (value, index) => {
          let totalAmount = reduce(
            value,
            (prev, next) => prev + next.amount,
            0
          );
          dataList[index as unknown as number] = totalAmount;
        });
        return {
          label: label,
          data: dataList,
          borderColor: get(data, '0.categoryColor', 'white'),
        };
      })
    );
    this.basicData = {
      labels: MONTH_ARR,
      datasets: dataset,
    };
  }

  ngOnInit(): void {}
}
