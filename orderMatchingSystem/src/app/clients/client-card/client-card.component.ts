import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.css']
})
export class ClientCardComponent implements OnInit {

  number="12000"

  @Input()
  clientDetails?: any ={

    clientid: '',
    transactionlimit: ''

  }

  constructor() { }

  ngOnInit(): void {



  }

}
