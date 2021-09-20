import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url,headers } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class SellinstrumentService {

  constructor(private http: HttpClient) { }

  sellOrder(data: any) {

    return this.http.post(`${url}/sellinstruments`,data,{headers: headers})

  }
}
