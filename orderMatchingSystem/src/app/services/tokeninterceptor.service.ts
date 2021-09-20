import { HttpInterceptor, HttpXsrfTokenExtractor } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TokeninterceptorService implements HttpInterceptor{

  constructor(private tokenExtractor: HttpXsrfTokenExtractor) { }

  intercept(req: any,next: any){
    let tokenizedRequest = req.clone({
      setHeaders: {
        Authorization: 'Bearer '+ localStorage.getItem('token')
      }
    })
    // req = req.clone({
    //   setHeaders: {
    //     Authorization: 'Bearer '+ localStorage.getItem('token')
    //   }
    // })

    // let requestMethod: string = req.method;
    // requestMethod = requestMethod.toLowerCase();
    // if (requestMethod && (requestMethod === 'post' ||
    //  requestMethod === 'delete' || requestMethod === 'put')) {
    //   const headerName = 'X-XSRF-TOKEN';
    //   let token = this.tokenExtractor.getToken() as string;
    //   if (token !== null && !req.headers.has(headerName)) {
    //     req = req.clone({headers: req.headers.set(headerName, token)});
    //     tokenizedRequest = req.clone({
    //       setHeaders: {
    //         Authorization: 'Bearer '+ localStorage.getItem('token'),
    //         headerName: token
    //       }
    //     })
    //   }
    // }

    // console.log(req)

    return next.handle(tokenizedRequest)
  }
}
