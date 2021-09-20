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


