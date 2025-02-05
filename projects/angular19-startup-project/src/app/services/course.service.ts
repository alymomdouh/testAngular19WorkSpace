import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
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
}
