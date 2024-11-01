import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Result } from '../models/Result';
import {url } from '../utils/constants'

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }


  getAllClients(custodianid: string) {

    return this.http.get<Result>(`${url}/client/all/${custodianid}`)

  }

  getClientDetails(clientid: string) {
    return this.http.get<Result>(`${url}/client/${clientid}`);
  }

 
}
