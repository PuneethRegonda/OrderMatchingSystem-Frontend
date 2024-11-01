import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

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

  auth: boolean = false
  constructor(private loginservice: LoginService) {
      
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

}
