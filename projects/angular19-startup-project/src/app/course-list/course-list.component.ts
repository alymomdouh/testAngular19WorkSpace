import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseCardComponent } from '../course-card/course-card.component';
import { FirestoreService } from '../shared/services/firestore.service';
import { Firestore, collection, getDocs } from 'firebase/firestore';
import { courses, ICourse } from '../app.component.models';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss',
  //providers: [Firestore]
})
export class CourseListComponent implements OnInit {

  readonly courses: Array<ICourse> = courses;
  //firestore = inject(Firestore);
  constructor(private firestoreService: FirestoreService) { }

  ngOnInit(): void {
    // getDocs(collection(this.firestore, 'courses')).then((response) => {
    //   console.log(response.docs)
    // });
    this.firestoreService.getAll('courses').subscribe(res => {
      console.log('res', res);
    });
  }
}
