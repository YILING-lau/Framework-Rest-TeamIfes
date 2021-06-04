import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.scss'],
})
export class DoughnutComponent implements OnInit {
  height: string;
  width: string;
  data: any;
  data1: any;
  options: any;

  constructor() {
    this.height = '70vh';
    this.width = '45vw';
    this.data = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    };
    this.options = {
      title: {
        display: true,
        text: 'My Title',
        fontSize: 16,
      },
      legend: {
        position: 'bottom',
      },
    };
  }

  update(event: Event) {
    let arr = [...Array(3)].map(() => Math.floor(Math.random() * 300));
    console.log('Went here => ', arr);
    this.data = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: arr,
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    };
    this.options = {
      title: {
        display: true,
        text: 'My Title',
        fontSize: 16,
      },
      legend: {
        position: 'bottom',
      },
    };
  }

  ngOnInit(): void {}
}
