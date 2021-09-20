import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Custodian } from '../models/Custodian';
import { Result } from '../models/Result';
import { TradeHistory } from '../models/TradeHistory';
import { CustodianService } from '../services/custodian.service';
import { TradehistoryService } from '../services/tradehistory.service';

@Component({
  selector: 'app-tradehistory',
  templateUrl: './tradehistory.component.html',
  styleUrls: ['./tradehistory.component.css']
})
export class TradehistoryComponent implements OnInit {

  custodianDetails?: Custodian
  tradeDetails?: [TradeHistory]

  constructor(private tradehistory: TradehistoryService,
    private router: Router,
    private custodianservice: CustodianService) { }

  ngOnInit(): void {
  
    this.getCustodian();


  }

  getCustodian() {
    this.custodianservice.getCustodian().subscribe((result: Result) => {

      this.custodianDetails = result.data as Custodian
      this.getTradeDetails(this.custodianDetails.custodianid)


      

    }, (error) => {

      if (error.status = 403) {
        Swal.fire({
          icon: 'error',
          title: 'Oops',
          text: 'Invalid Username or Password'
        })
        this.router.navigate(['/login'])
      }
      else{
        Swal.fire({
          icon: 'error',
          text: error.error.message
        })
      }


    })

  }
  

  getTradeDetails(custodianid: string) {

     this.tradehistory.getTradeDetails(custodianid).subscribe((result: Result)=>{

        this.tradeDetails=result.data as [TradeHistory]
      
     },(error)=>{

            if(error.status==403){
              Swal.fire({
                icon: 'error',
                title: 'Invalid username or password'
              })
              this.router.navigate(['/login'])
            }
            else{
              Swal.fire({
                icon: 'error',
                text: error.error.message
              })
            }



     })

  }

}
