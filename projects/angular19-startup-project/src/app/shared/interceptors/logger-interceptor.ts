import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, finalize, tap } from 'rxjs';

@Injectable()

export class LoggerInterceptor implements HttpInterceptor {

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>  {
    return next.handle(httpRequest).pipe(
      tap({
        next: (event) => {
          if (event instanceof HttpResponse) {
            console.log(`%cHttpResponse Data: Status: ${event.status} - Status Text: ${event.statusText}`, 'color: green');
            console.log('HttpResponse Data', event.body);
          }
        },
        error: (error) => {
          if (error instanceof HttpErrorResponse) {
            console.error('HttpErrorResponse occurred:', error);
          }
        }
      }),
      finalize(() => {
        console.log('%cRequest completed.', 'color: green');
      })
    );
  }
}

