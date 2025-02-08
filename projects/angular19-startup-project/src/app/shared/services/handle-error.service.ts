import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandleErrorService {

  logErrorResponse(errorResponse: HttpErrorResponse): Observable<any> {
    // Client -side errors
    if (errorResponse.status === 0) {
      console.log(`A client side error occurred: ${errorResponse.status} - ${errorResponse.error}`);
    } else {
      // Back-end errors
      console.log(`A back-end error occurred: ${errorResponse.status} - ${errorResponse.error}`);
    }
    return throwError(() => new Error('Something bad happened, please try again later'))
  }
}
