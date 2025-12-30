import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseCardComponent } from '../course-card/course-card.component';
import { FirestoreService } from '../shared/services/firestore.service';
import { Firestore, collection, getDocs } from 'firebase/firestore';
import { coursesData, ICourse } from '../app.component.models';
import { SharedModule } from '../shared/shared.module';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CourseCardComponent, SharedModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss',
  //providers: [Firestore]
})
export class CourseListComponent implements OnInit {

  courses: Array<ICourse> = coursesData;
  //firestore = inject(Firestore);
  constructor(
    private firestoreService: FirestoreService,
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    // getDocs(collection(this.firestore, 'courses')).then((response) => {
    //   console.log(response.docs)
    // });
    // this.firestoreService.getAll('courses').subscribe(res => {
    //   console.log('res', res);
    // });
    this.courseService.getCourses().subscribe({
      next: (values: ICourse[]) => {
        this.courses = values;
      },
    });
    // this.courses = coursesData
  }
}
