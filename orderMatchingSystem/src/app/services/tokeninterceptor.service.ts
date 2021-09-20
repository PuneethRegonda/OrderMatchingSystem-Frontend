import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TokeninterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: any,next: any){
    let tokenizedRequest = req.clone({
      setHeaders: {
        Authorization: 'Bearer '+ localStorage.getItem('token')
      }
    })

    return next.handle(tokenizedRequest)
  }
}
