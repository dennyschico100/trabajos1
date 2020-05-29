import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import {HTTP_INTERCEPTORS,HttpHandler,HttpRequest} from '@angular/common/http'

import  {TokenStorageService} from '../Servicios/token-storage.service'

const TOKEN_HEADER_KEY = 'Authorization';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
   
   
    constructor(private token:TokenStorageService ){

    }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        let authReq=req;
        const token =this.token.getToken();
        if(token !=null){
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer' + token) });
        }
        return next.handle(authReq);
    }
    
    /*
    import { HTTP_INTERCEPTORS } from '@angular/common/http';
    import { Injectable } from '@angular/core';
    import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
    import { TokenStorageService } from '../_services/token-storage.service';
    */
    
}

//FOR NODE JS

/*
    const TOKEN_HEADER_KEY = 'x-access-token';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  ...
  intercept(req: HttpRequest, next: HttpHandler) {
    ...
    if (token != null) {
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, token) });
    }
    return next.handle(authReq);
  }
}

*/
export const  AuthInterceptorProvider=[
    {provider:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true }
 ]