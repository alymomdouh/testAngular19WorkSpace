import { Injectable } from '@angular/core';
import { Observable, first, map } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private angularFirestore: AngularFirestore) { }

  getAll<T>(collectionName: string): Observable<Array<T>> {
    return this.angularFirestore.collection(collectionName).snapshotChanges().pipe(
      map(snaps => this.convertSnaps<T>(snaps)),
      first()
    );
  }

  // loadAllCourses(): Observable<Course[]> {
  //   return this.db.collection(
  //       'courses',
  //           ref=> ref.orderBy("seqNo")
  //       )
  //       .snapshotChanges()
  //       .pipe(
  //           map(snaps => convertSnaps<Course>(snaps)),
  //           first());
  // }

  private convertSnaps<T>(snaps: any): Array<T> {
    return <T[]>snaps.map((snap: any) => {
      return {
        id: snap.payload.doc.id,
        ...snap.payload.doc.data()
      };

    });
  }
}
