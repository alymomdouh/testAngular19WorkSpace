import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { ICourse } from '../app.component.models';

@Component({
  selector: 'app-course-card',
  imports: [],
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
