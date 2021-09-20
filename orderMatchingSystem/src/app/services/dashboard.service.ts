import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Result } from '../models/Result';
import { url } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getDashboardItems(custodianid: string) {

    return this.http.get<Result>(`${url}/dashboard/${custodianid}`)

  }
}
