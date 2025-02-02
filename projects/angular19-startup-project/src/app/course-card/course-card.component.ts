import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { CategoryType, ICourse } from '../app.component.models';
import { NgStyle } from '@angular/common';
// import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-course-card',
  imports: [
    // NgIf, //use with old if
    // NgClass //use with old ngClass or can add CommonModule
    // NgStyle
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

  // to view or access enum in html element
  //get CategoryType() { return CategoryType }
  CategoryType = CategoryType
}
