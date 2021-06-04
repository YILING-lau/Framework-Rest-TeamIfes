import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  stateOptions: any[];
  default: boolean = true;
  constructor() {}
  ngOnInit(): void {
    this.stateOptions = [
      { label: 'Bar', value: true },
      { label: 'Line', value: false },
    ];
  }
  onChange(obj: any): void {
    this.default = obj.value;
    console.log(this.default);
  }
}
