import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Buy } from '../models/buy';
import { Client } from '../models/Client';
import { Custodian } from '../models/Custodian';
import { Result } from '../models/Result';
import { Sell } from '../models/Sell';
import { CustodianService } from '../services/custodian.service';
import { PortfolioService } from '../services/portfolio.service';
import  {jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';
import { Instrument } from '../models/Instrument';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {


  custodianDetails?: Custodian
  clientid?: string
  buyDetails?: [Buy]
  sellDetails?: [Sell]
  clientDetails?: Client
  clientInstruments?: any;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private custodianservice: CustodianService,
    private portfolioservice: PortfolioService) { }

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
        this.getCustodian()
        }


      }
      
    )

   
         

  }

  getCustodian() {
    this.custodianservice.getCustodian().subscribe((result: Result) => {

      this.custodianDetails = result.data as Custodian
     
      this.getPortfolio(this.clientid!,this.custodianDetails?.custodianid!)

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

  getPortfolio(clientid: string, custodianid: string) {

    console.log(clientid,custodianid)
     this.portfolioservice.getPortfolio(clientid, custodianid).subscribe((result: any)=>{

       this.clientDetails = result.data.client as Client
       this.buyDetails = result.data.buy as [Buy]
       this.sellDetails = result.data.sell as [Sell]
       this.clientInstruments = result.data.clientInstruments as [Instrument]
       console.log(this.clientDetails,this.buyDetails, this.sellDetails,this.clientInstruments)
       console.log(this.clientInstruments);
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

  saveaspdf() {

    var element = <HTMLElement>document.getElementById("buyselllist")

    html2canvas(element).then((canvas)=>{

      var imgdata = canvas.toDataURL('image/png')
      var doc = new jsPDF();
      var imgheight = canvas.height * 208 / canvas.width

      doc.addImage(imgdata,0,0,208,imgheight)
      doc.save('data.pdf')


    })
  }




}
