import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navitems',
  templateUrl: './navitems.component.html',
  styleUrls: ['./navitems.component.css']
})
export class NavitemsComponent implements OnInit {

  @Input()
  navitems: any ={
    link: '',
    text: ''
  }
  constructor() {
      
  }

  ngOnInit(): void {
  }

}
