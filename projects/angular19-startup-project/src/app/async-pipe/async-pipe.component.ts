import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CourseCardComponent } from '../course-card/course-card.component';
import { ICourse } from '../app.component.models';
import { Observable, tap } from 'rxjs';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-async-pipe',
  imports: [CourseCardComponent, CommonModule],
  templateUrl: './async-pipe.component.html',
  styleUrl: './async-pipe.component.scss'
})
export class AsyncPipeComponent implements OnInit {
  courses: ICourse[] = [];
  courses$!: Observable<ICourse[]>;

  constructor(public courseService: CourseService) { }

  ngOnInit(): void {
    this.getCourses();
  }

  private getCourses(): void {
    //this.courses$ = this.courseService.getCourses() ;
    this.courses$ = this.courseService.getCourses().pipe(tap(courses => courses.sort((a, b) => a.sequenceNumber - b.sequenceNumber)));
    // this.courses$.subscribe(courses => this.courses = courses);
    // this.courseService.getCourses().subscribe(courses => this.courses = courses.sort((a,b) => a.sequenceNumber - b.sequenceNumber));

    // this.courseService.getCourses().subscribe(courses => this.courses = courses.sort((a,b) => a.sequenceNumber - b.sequenceNumber));
    // this.courseService.getCourses().subscribe((courses) => {
    //   this.courses = courses
    // });
  }
}

