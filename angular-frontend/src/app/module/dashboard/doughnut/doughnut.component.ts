import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { map, uniq, filter, reduce, find } from 'lodash-es';
import Expense from '../../expense.interface';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.scss'],
})
export class DoughnutComponent implements OnInit, OnChanges {
  height: string;
  width: string;
  data: any;
  options: any;

  @Input()
  expenseList: Expense[] = [];

  constructor() {
    this.height = '70vh';
    this.width = '45vw';
    this.options = {
      title: {
        display: true,
        text: 'Expense by Category',
        fontSize: 16,
      },
      legend: {
        position: 'bottom',
      },
    };
  }
  ngOnChanges(changes: SimpleChanges): void {
    let labelArr = uniq(
      map(this.expenseList, (expense) => expense.categoryLabel)
    );
    let colorArr = map(
      labelArr,
      (label) =>
        find(this.expenseList, (expense) => expense.categoryLabel == label)
          .categoryColor
    );
    this.data = {
      labels: labelArr,
      datasets: [
        {
          data: map(labelArr, (label) =>
            reduce(
              filter(
                this.expenseList,
                (expense) => expense.categoryLabel === label
              ),
              (prev, next) => prev + next.amount,
              0
            )
          ),
          backgroundColor: colorArr,
          hoverBackgroundColor: colorArr,
        },
      ],
    };
  }

  ngOnInit(): void {}
}
