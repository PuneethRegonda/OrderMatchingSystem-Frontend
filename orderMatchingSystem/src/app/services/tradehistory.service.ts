import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Result } from '../models/Result';
import {url , headers} from '../utils/constants'

@Injectable({
  providedIn: 'root'
})
export class TradehistoryService {

  constructor(private http: HttpClient) { }


  getTradeDetails(custodianid: string) {
    return this.http.get<Result>(`${url}/trade-history/${custodianid}`,{headers: headers})
  }
}
