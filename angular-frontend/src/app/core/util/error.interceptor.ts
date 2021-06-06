import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2'

import { AuthenticationService } from '../auth/auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        if (err.status === 403) {
          this.authenticationService.logout();
          Swal.fire({
            icon: 'error',
            title: 'Invalid Session',
            text: 'Your session is invalid, please try logging in again',
            didClose: () => location.reload(true),
          });
        }

        const error = err.error.message || err.statusText;
        return throwError(error);
      })
    );
  }
}
