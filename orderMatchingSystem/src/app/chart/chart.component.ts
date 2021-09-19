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

    this.type = 'bar';
    this.data = {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          label: "My First dataset",
          data: [65, 59, 80, 81, 56, 55],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
        }
      ]
    };
    this.options = {
      responsive: true,
      maintainAspectRatio: false,
     
    };
  }

}
