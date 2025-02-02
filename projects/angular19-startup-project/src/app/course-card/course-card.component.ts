import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { ICourse } from '../app.component.models';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-course-card',
  imports: [
    NgIf //use with old if
  ],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent {

  // @Input() title!: string;
  @Input({ required: true }) course: ICourse = {} as ICourse;
  //@Input({ required: true }) index!: number;
  @Output() viewCourseEvent = new EventEmitter<ICourse>();

  viewCourse(): void {
    this.viewCourseEvent.emit(this.course);
  }
}
