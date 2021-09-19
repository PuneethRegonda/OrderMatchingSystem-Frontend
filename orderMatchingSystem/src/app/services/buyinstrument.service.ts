import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url, headers } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class BuyinstrumentService {

  constructor(private http: HttpClient) { }

  buyOrder(data: any) {

    return this.http.post(`${url}/buyinstruments`,data,{headers: headers})

  }
}
