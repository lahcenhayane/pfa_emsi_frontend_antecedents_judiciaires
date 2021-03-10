import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountService } from './services/account.service';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {

  constructor(private account:AccountService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders:{
        Authorization: `Bearer ${this.account.getToken()}` 
      }
    })
    return next.handle(request);
  }
}
