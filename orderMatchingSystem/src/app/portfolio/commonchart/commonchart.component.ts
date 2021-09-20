import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-commonchart',
  templateUrl: './commonchart.component.html',
  styleUrls: ['./commonchart.component.css']
})
export class CommonchartComponent implements OnInit {

  @Input()
  type: any
  @Input()
  data: any
  options: any

  @Input()
  labels: any=[]

  @Input()
  chartdata: any=[]

  @Input()
  title?: string
  constructor() { }

  ngOnInit(): void {

    this.type = 'bar';
    this.data = {
      labels: this.labels,
      datasets: [
        {
          label: this.title,
          data: this.chartdata,
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
