import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css']
})
export class DashboardCardComponent implements OnInit {

  @Input()
  cardcounts: any ={
    name: '',
    value: undefined
  }
  
  constructor() {


  }

  ngOnInit(): void {


  }

}
