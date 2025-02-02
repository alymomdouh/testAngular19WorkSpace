import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from './course-card/course-card.component';
import { CategoryType, ICourse } from './app.component.models';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CourseCardComponent,
    NgFor
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular19StartupProject';


  readonly courses: Array<ICourse> = [
    {
      id: 1,
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

}
