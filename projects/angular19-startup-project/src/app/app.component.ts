import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from './course-card/course-card.component';
import { CategoryType, ICourse } from './app.component.models';
import { CommonModule } from '@angular/common';
import { timer } from 'rxjs';
//import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
// import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CourseCardComponent,
    //AsyncPipeComponent,
    //NgForOf  //use with old ngFor
    CommonModule // for uses all pipes and directives
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnChanges, OnInit {

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes on AppComponent : ', changes);
    // will not call this function and not print anything
  }

  ngOnInit(): void {
    console.log('ngOnInit on AppComponent : ');
    ///  timer(3000).subscribe(() => this.data.CourseName = 'Angular 17 for beginners');
    timer(3000).subscribe(() => this.courses.map(c => c.name = c.name + " Update"));
    //timer(8000).subscribe(() => this.title = 'Update Angular 17 Course Title');
  }


  title = 'angular19StartupProject';


  readonly courses: Array<ICourse> = [
    {
      id: 1,
      sequenceNumber: 1,
      name: 'Angular 17 for beginners',
      description: 'Angular 17 for beginners',
      // imageUrl: 'assets/images/angular_for_beginners.png',
      imageUrl: 'assets/images/angular_for_beginners.png',
      lessonsCount: 70,
      longDescription: `This course will give you a practical hands-on introduction to the Angular framework.
          After taking this course you will feel very comfortable navigating the code of an existing Angular
          application and finding your way around, and you will know how to build your own custom components.`,
      category: CategoryType.beginners
    },
    {
      id: 2,
      sequenceNumber: 2,
      name: 'RxJs',
      description: 'RxJs',
      imageUrl: 'assets/images/rxjs.PNG',
      lessonsCount: 40,
      longDescription: `We will then write our own Observable from first principles:
          we will implement our own HTTP observable that will allow us to handle backend HTTP
          requests while supporting error handling and cancellation.`,
      category: CategoryType.intermediate
    },
    {
      id: 3,
      sequenceNumber: 3,
      name: 'NgRx',
      description: 'NgRx',
      imageUrl: 'assets/images/ngrx.PNG',
      lessonsCount: 48,
      longDescription: `In this course, we are going to take a small existing application that is
          built without any state management. We are going to understand what are the consequences of not
          doing state management by identifying some problems that the application has in its initial form.`,
      category: CategoryType.advanced
    }
  ];

  beginnerCourse = this.courses[0];
  rxjscourse = this.courses[1];
  ngrxcourse = this.courses[2];

  onCourseClicked(course: ICourse): void {
    console.log('on course clicked!', course.description);
  }
  trackCourse(index: number, course: ICourse): number {
    return course.id
  }

  data = {
    CourseName: 'Course Name to test pipe',
    CourseDescription: 'Course Description Course Description Course Description Course Description v Course Description Course Description Course Description',
  }
  today = new Date();
}
