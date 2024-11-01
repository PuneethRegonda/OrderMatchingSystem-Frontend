import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Result } from '../models/Result';
import { url } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {

  constructor(private http: HttpClient) { }

  getAllInstruments() {
    return this.http.get<Result>(`${url}/instruments`)
  }
}
