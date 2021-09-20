import { HttpHeaders } from "@angular/common/http";
import { LoginService } from "../services/login.service";

export let url = 'http://localhost:8080';

let headerDict={
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Authorization': 'Bearer '+localStorage.getItem('token')
}

export let headers =  new HttpHeaders(headerDict);


export class Constant{

  url: string='http://localhost:8080'

//   let url = 'http://localhost:8080';

  t?: string
  headers: any



//  let headers =  new HttpHeaders(headerDict);

  constructor(private login: LoginService){
  
  }
  get() {

    this.t = localStorage.getItem('token') as string
    let headerDict={
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Authorization': 'Bearer '+this.t
    }

    this.headers=new HttpHeaders(headerDict)
    this.login.watchStorage().subscribe((data: string)=>{

      if(data=='changed'){
       
        this.t = localStorage.getItem('token') as string
        let headerDict={
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Authorization': 'Bearer '+this.t
        }
        this.headers=new HttpHeaders(headerDict)

      }

    })    
  

  }
}



