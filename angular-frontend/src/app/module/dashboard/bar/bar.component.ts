import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
})
export class BarComponent implements OnInit {
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
          backgroundColor: '#FF6384',
        },
        {
          label: 'B',
          data: [28, 48, 40, 19, 86, 27, 90],
          backgroundColor: '#36A2EB',
        },
        {
          label: 'c',
          data: [50, 12, 47, 30, 20, 9, 18],
          backgroundColor: '#FFCE56',
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
