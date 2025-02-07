import { Component, EventEmitter, Input, input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CategoryType, ICourse } from '../app.component.models';
// import { NgStyle  } from '@angular/common';
// import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
// import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-course-card',
  imports: [
    // NgIf, //use with old if
    // NgClass //use with old ngClass or can add CommonModule
    // NgStyle
    //NgSwitch, NgSwitchCase, NgSwitchDefault// with old way for ngSwitch
  ],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent implements OnChanges {

  ngOnChanges(changes: SimpleChanges): void {

    console.log('changes on CourseCardComponent : ', changes);
    // log results   // will call one time when component first open
    // course: SimpleChange {previousValue: undefined, currentValue: {…}, firstChange: true}
    // index: SimpleChange {previousValue: undefined, currentValue: 0, firstChange: true}
  }




  // @Input() title!: string;
  @Input({ required: true }) course: ICourse = {} as ICourse;
  @Input({ required: true }) index!: number;
  @Output() viewCourseEvent = new EventEmitter<ICourse>();

  viewCourse(): void {
    this.viewCourseEvent.emit(this.course);
  }

  // to view or access enum in html element
  //get CategoryType() { return CategoryType }
  CategoryType = CategoryType
}
