import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Result } from '../models/Result';
import { url } from '../utils/constants'

@Injectable({
  providedIn: 'root'
})
export class CustodianService {

  constructor(private http: HttpClient) { }

  getCustodian() {
    return this.http.get<Result>(`${url}/custodian/getuser`);
  }
}
