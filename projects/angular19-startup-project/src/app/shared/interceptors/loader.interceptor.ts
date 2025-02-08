import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, finalize } from 'rxjs';

@Injectable()

export class LoaderInterceptor implements HttpInterceptor {

  constructor(@Inject(DOCUMENT) private document: Document) {}

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>  {
    const loader = this.document.getElementById('loader');
    if (loader) {
      loader.classList.add('loader-container');
      loader.style.removeProperty('display');
    }
    return next.handle(httpRequest).pipe(
      finalize(() => {
        if (loader) {
          loader.classList.remove('loader-container');
          loader.style.display = 'none';
        }
      })
    );
  }
}