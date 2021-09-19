import { Component, OnInit } from '@angular/core';
import { Result } from '../models/Result';
import Swal from 'sweetalert2'
import { CustodianService } from '../services/custodian.service';
import { Custodian } from '../models/Custodian';
import { ClientService } from '../services/client.service';
import { Client } from '../models/Client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  cardDetails?: [Client];
  custodianDetails?: Custodian

  constructor(private custodianservice: CustodianService,
    private clientservice: ClientService) { }

  ngOnInit(): void {

    this.custodianservice.getCustodian().subscribe((result: Result)=>{

        this.custodianDetails=result.data as Custodian

        this.getAllClients()

    },(error)=>{

         if(error.status = 403){
             Swal.fire({
               icon: 'error',
               title: 'Oops',
               text: 'Invalid Username or Password'
             })
         }


    })

  }


  getAllClients() {

    this.clientservice.getAllClients(this.custodianDetails?.custodianid!)
    .subscribe((result: Result)=>{

         this.cardDetails = result.data as [Client]

         console.log(this.cardDetails)

    },(error)=>{

      if(error.status = 403){
        Swal.fire({
          icon: 'error',
          title: 'Oops',
          text: 'Invalid Username or Password'
        })
    }

    })

  }

}