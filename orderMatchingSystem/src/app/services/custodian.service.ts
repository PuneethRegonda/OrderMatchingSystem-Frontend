import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Result } from '../models/Result';
import {url } from '../utils/constants'

@Injectable({
  providedIn: 'root'
})
export class CustodianService {

  constructor(private http: HttpClient) { }

  headerDict={
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Authorization': 'Bearer '+sessionStorage.getItem('token')
  }

  headers =  new HttpHeaders(this.headerDict);

  getCustodian() {
     return this.http.get<Result>(`${url}/custodian/getuser`,{headers: this.headerDict});
  }
}
