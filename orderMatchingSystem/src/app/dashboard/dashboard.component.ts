import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Custodian } from '../models/Custodian';
import { Dashboard } from '../models/dashboard';
import { LastTrade } from '../models/lastTrade';
import { Result } from '../models/Result';
import { TradeHistory } from '../models/TradeHistory';
import { CustodianService } from '../services/custodian.service';
import { DashboardService } from '../services/dashboard.service';
import  {jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  custodianDetails?: Custodian
  lastTrade?: LastTrade
  sellTrades?: number
  buyTrades?: number
  totalTrades?: number
  clientsCount?: number
  dash?: Dashboard
  data?: any

  constructor(private dashboardservice: DashboardService,
    private custodianservice: CustodianService,
    private router: Router) { }

  ngOnInit(): void {

    this.getCustodian();
    
  }

  
  getCustodian() {
    this.custodianservice.getCustodian().subscribe((result: Result) => {

      this.custodianDetails = result.data as Custodian
      this.getDashboardData(this.custodianDetails.custodianid);
      

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
  

  getDashboardData(custodianid: string) {

    var x : any={
      buyTrades: '',
      clientsCount: '',
      sellTrades: '',
      totalTrades: '',
      lastTrade: ''
    }

    this.dashboardservice.getDashboardItems(custodianid).subscribe((result: Result)=>{

         this.dash = result.data as Dashboard
         this.buyTrades = +this.dash.buyTrades
         this.clientsCount=+this.dash.clientsCount
         this.sellTrades =+this.dash.sellTrades
         this.totalTrades=+this.dash.totalTrades
         this.lastTrade=this.dash.lastTrade as LastTrade
         this.data=[
           {
             name: 'BuyTrades',
             value: this.buyTrades
           },
           {
             name: 'SellTrades',
             value: this.sellTrades
           },
           {
             name: 'TotalTrades',
             value: this.totalTrades
           },
           {
             name: 'ClientsCounts',
             value: this.clientsCount
           }
         ]

        //  console.log(this.dash)
        //  console.log(this.lastTrade, this.buyTrades, this.sellTrades, this.totalTrades, this.clientsCount)

    },(error)=>{

      if(error.status==404){
        Swal.fire({
          icon: 'question',
          text: 'Selected Custodian Id Details Not Found'
        })
      }
      else if(error.status ==403){
        Swal.fire({
          icon: 'error',
          text: 'Invalid username or password'
        })

        this.router.navigate(['/login'])
      }

    })

  }

  saveaspdf() {

    var element = <HTMLElement>document.getElementById("tradehistorytable")

    html2canvas(element).then((canvas)=>{

      var imgdata = canvas.toDataURL('image/png')
      var doc = new jsPDF();
      var imgheight = canvas.height * 208 / canvas.width

      doc.addImage(imgdata,0,0,208,imgheight)
      doc.save('data.pdf')


    })



  }

}
