import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { ICourse } from '../app.component.models';


@Injectable({
  providedIn: 'root'
})

export class CourseService {

  private readonly firebaseUrl = 'https://coding-from-a-to-z-default-rtdb.firebaseio.com';
  //will find data in https://coding-from-a-to-z-default-rtdb.firebaseio.com/courses.json
  constructor(private http: HttpClient) { }

  getCourses(): Observable<ICourse[]> {
    let contentHeader = new HttpHeaders({ "Content-Type": "application/json" });
    //{ headers: contentHeader, observe: 'response' }
    return this.http.get<ICourse>(`${this.firebaseUrl}/courses.json`).pipe(map(
      (courses) => {
        debugger
        return Object.entries(courses).map(([key, value]) => ({
          id: value.id,
          scrambledId: key,
          name: value.name,
          description: value.description,
          category: value.category,
          imageUrl: value.imageUrl,
          lessons: value.lessons ?? [],
          lessonsCount: value.lessons?.length ?? 0,
          longDescription: value.longDescription,
          sequenceNumber: value.sequenceNumber
        }));
      }
    ));
  }
  ///
  getRequest<T>(name: string): Observable<T> {
    return this.http.get<T>(`${this.firebaseUrl}${name}.json`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(errorResponse: HttpErrorResponse): Observable<any> {
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
