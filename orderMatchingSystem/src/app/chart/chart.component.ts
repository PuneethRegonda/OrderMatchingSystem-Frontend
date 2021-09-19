import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'angular2-chartjs';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {


  type: any
  data: any
  options: any
  constructor() { }

  ngOnInit(): void {



    this.type = 'line';
this.data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};
this.options = {
  responsive: true,
  maintainAspectRatio: false
};
  }

}
