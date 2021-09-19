import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  clientid?: string
  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(
      (queryparams: Params)=>{
          this.clientid = queryparams['clientid']

          console.log(this.clientid);
      }
    )

  }

}
