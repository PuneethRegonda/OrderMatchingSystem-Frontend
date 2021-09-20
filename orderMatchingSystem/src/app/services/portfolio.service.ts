import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Result } from '../models/Result';
import { url } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) { }

  getPortfolio(clientid: string, custodianid: string) {

    return this.http.get<Result>(`${url}/portfolio/${clientid}/${custodianid}`)

  }


}
