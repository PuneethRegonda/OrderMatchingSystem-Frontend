import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navitems?: Array<any>
  companyDetails: any;
  auth: boolean = false


  constructor(private loginservice: LoginService) {

    this.navitems = [
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

    this.companyDetails = {
      name: 'HDFC',
      logo: "https://hdfcbankcareers.hirealchemy.com/img/HDFC-Bank-Logo.a05df558.jpg"
    }



  }



  ngOnInit(): void {

    if (localStorage.getItem('token')) {
      this.auth = true;

    }

    this.loginservice.watchStorage().subscribe((data: string) => {

      if (data == 'set') {
        this.auth = true;
      }
      else if (data == 'remove') {
        this.auth = false
      }
      else if (localStorage.getItem('token')) {
        this.auth = true;

      }

    })

  }

  onlogout() {
    this.loginservice.removeItem('token')
  }

}
