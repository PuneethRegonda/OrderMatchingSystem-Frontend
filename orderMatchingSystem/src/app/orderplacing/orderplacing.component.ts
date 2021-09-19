import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Client } from '../models/Client';
import { Custodian } from '../models/Custodian';
import { Result } from '../models/Result';
import { ClientService } from '../services/client.service';
import { CustodianService } from '../services/custodian.service';

@Component({
  selector: 'app-orderplacing',
  templateUrl: './orderplacing.component.html',
  styleUrls: ['./orderplacing.component.css']
})
export class OrderplacingComponent implements OnInit {

  custodianDetails?: Custodian
  clientDetails?: Client
  clientid?: string
  constructor(private clientservice: ClientService,
    private custodianservice: CustodianService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(
      (queryparams: Params) => {
        this.clientid = queryparams['clientid']

        if(typeof this.clientid==="undefined"){
          Swal.fire({
            icon: 'info',
            title: 'Redirecting you',
            text: 'Please select the client you need from the Clients tab'
          })
          this.router.navigate(['/clients'])
        }
        else{
        this.getClientDetails(this.clientid)
        }


      }
    )
  }


  getClientDetails(clientid: string) {

    this.clientservice.getClientDetails(clientid)
    .subscribe((result: Result)=>{

         this.clientDetails = result.data as Client

         this.getCustodian();

    },(error)=>{

      if (error.status = 403) {
        Swal.fire({
          icon: 'error',
          title: 'Oops',
          text: 'Invalid Username or Password'
        })
        this.router.navigate(['/login'])
      }

    })

  }
  
  getCustodian() {
    this.custodianservice.getCustodian().subscribe((result: Result) => {

      this.custodianDetails = result.data as Custodian
      

    }, (error) => {

      if (error.status = 403) {
        Swal.fire({
          icon: 'error',
          title: 'Oops',
          text: 'Invalid Username or Password'
        })
        this.router.navigate(['/login'])
      }


    })

    

  }



}
