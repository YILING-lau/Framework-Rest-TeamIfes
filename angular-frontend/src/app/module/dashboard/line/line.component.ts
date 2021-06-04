import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss'],
})
export class LineComponent implements OnInit {
  basicData: any;

  basicOptions: any;

  constructor() {}

  ngOnInit(): void {
    this.basicData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'A',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#FF6384',
        },
        {
          label: 'B',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#36A2EB',
        },
        {
          label: 'c',
          data: [50, 12, 47, 30, 20, 9, 18],
          fill: false,
          borderColor: '#FFCE56',
        },
      ],
    };

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
}
