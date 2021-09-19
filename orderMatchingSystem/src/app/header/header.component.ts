import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navitems?: Array<any>
  companyDetails:any;

  constructor() { 

    this.navitems=[
      {
        link: "login",
        text: "LOGIN"
      },
      {
        link: "dashboard",
        text: "Dashboard"
      },
      {
        link: "clients",
        text: "Clients"
      },
      {
        link: "orderplacing",
        text: "OrderPlacing"
      },
      {
        link: "portfolio",
        text: "Portfolio"
      }
    ]

    this.companyDetails={
      name:'HDFC',
      logo:"https://hdfcbankcareers.hirealchemy.com/img/HDFC-Bank-Logo.a05df558.jpg"
  }

  }

  ngOnInit(): void {



  }

}
