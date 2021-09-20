import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Client } from '../models/Client';
import { Custodian } from '../models/Custodian';
import { ClientService } from '../services/client.service';
import { CustodianService } from '../services/custodian.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Result } from '../models/Result';
import { Instrument } from '../models/Instrument';
import { InstrumentService } from '../services/instrument.service';
import { BuyinstrumentService } from '../services/buyinstrument.service';
import { SellinstrumentService } from '../services/sellinstrument.service';

@Component({
  selector: 'app-orderc',
  templateUrl: './orderc.component.html',
  styleUrls: ['./orderc.component.css']
})
export class OrdercComponent implements OnInit {
  custodianDetails?: Custodian
  clientDetails?: Client
  clientid?: string
  allInstruments?: [Instrument]
  selectedInstrument?: Instrument
  minquantity?: number

  direction: Array<any>;
  order: FormGroup;
  orderplacing: any;
  orderplace: any;
  constructor(private clientservice: ClientService,
    private custodianservice: CustodianService,
    private router: Router,
    private route: ActivatedRoute,
    private instrumentservice: InstrumentService,
    private buyservice: BuyinstrumentService,
    private sellService: SellinstrumentService) {
   
    this.direction = ['Buy', 'Sell'];
    this.order = new FormGroup({
      clientid: new FormControl("",[

      ]),
      clientname: new FormControl("",[]),
      instrumentname: new FormControl("",[]),
      price: new FormControl("", [
        Validators.required,
        Validators.pattern(/^[0-9]+(\.[0-9]+)?$/)
      ]),
      facevalue: new FormControl("",[]),
      direction: new FormControl("",[]),
      expiry: new FormControl("",[]),
      quantity: new FormControl("", [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
      ])
    });

  }
 
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
        //  console.log(this.clientDetails)
         this.getAllInstruments();

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

  getAllInstruments(){

    this.instrumentservice.getAllInstruments().subscribe((result: Result)=>{

      this.allInstruments = result.data as [Instrument]

      console.log(this.allInstruments[0].instrumentname)


    },(error)=>{

      if(error.status == 403){
        Swal.fire({
          icon: 'error',
          text: 'Invalid Username or password'
        })
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

  handleDropdownchange(event: any) {

    let i: number;
       this.allInstruments?.forEach((element: any,index: any)=>{
         if(element.instrumentname==event.target.value) {
           i = index;
           this.selectedInstrument = element
          }
       })

  }

  handleSubmit() {

    let total = this.order.controls['quantity'].value * this.order.controls['price'].value

    let quantity  = this.order.controls['quantity'].value
    console.log(this.selectedInstrument)

    if((quantity%this.selectedInstrument?.minquanity!)!=0){

      Swal.fire({
        icon: 'error',
        text: "Quantity should be multiples of "+this.selectedInstrument?.minquanity
      })

      return;

    }

    if(total>this.clientDetails?.balance!){

         Swal.fire({
           icon: 'error',
           text: "Client's balance is less than the total amount needed for your purchase, please input less amount"
         })

         return;

    }

    var data ={
      clientid: this.clientDetails,
      instrumentid: this.selectedInstrument,
      price: this.order.controls['price'].value,
      quantity: this.order.controls['quantity'].value,
      createdate: new Date(),
      isactive: true
    }

    if(this.order.controls['direction'].value==='Buy'){

      this.buyservice.buyOrder(data).subscribe((d)=>{

           Swal.fire({
             icon: 'success',
             title: 'Order Placed successfully'
           })

           this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/orderplacing']);
          });

      },(error)=>{


        Swal.fire({
          icon: 'error',
          title: error.error.message
        })


      })

    }
    else{

      alert("sell");
      this.sellService.sellOrder(data).subscribe((d)=>{

        Swal.fire({
          icon: 'success',
          title: 'Order placed successfully'
        })

        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/orderplacing']);
        });
        

      },(error)=>{

        Swal.fire({
          icon: 'error',
          title: error.error.message
        })

      })

    }

  }

}