import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthService } from '../guards/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.auth.getAccessToken() != null) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.auth.getAccessToken()}`,
        },
      });
    }
    return next.handle(request);
  }
}
