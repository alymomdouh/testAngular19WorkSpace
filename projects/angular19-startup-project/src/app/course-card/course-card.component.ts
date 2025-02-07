import { Component, DoCheck, EventEmitter, Input, input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
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
export class CourseCardComponent implements OnChanges, OnInit, DoCheck {

  /**
     * Responds when Angular sets or resets data-bound input properties.
     * not in ouput and when call from outside not from inside
     * The method receives a `SimpleChanges` object of current and previous property values.
     * Called before `ngOnInit()` and whenever one or more data-bound input properties change.
     * @param changes - The changed properties.
     */
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes on CourseCardComponent : ', changes);
    // log results   // will call one time when component first open
    // course: SimpleChange {previousValue: undefined, currentValue: {…}, firstChange: true}
    // index: SimpleChange {previousValue: undefined, currentValue: 0, firstChange: true}
  }
  /**
   * Lifecycle hook that is called after data-bound properties of a directive are initialized.
   * Initialize the component and log the course ID to the console.
   */
  ngOnInit(): void {
    console.log('ngOnInit on CourseCardComponent : ', this.course.id);
  }
  /**
   * A lifecycle hook that is called during every change detection run.
   * This method is invoked after Angular has checked the component's content and its children.
   * Use this hook to detect and act upon changes that Angular can't or won't detect on its own.
   *call one time after ngOnInit  then call every time after ngOnChanges
   * @remarks
   * This method is called frequently, so any heavy processing inside this method can affect performance.
   *
   * @example
   */
  ngDoCheck(): void {
    console.log('ngDoCheck on CourseCardComponent :in course Id ', this.course.id);
  }


  // @Input() title!: string;
  @Input({ required: true }) course: ICourse = {} as ICourse;
  @Input({ required: true }) index!: number;
  @Output() viewCourseEvent = new EventEmitter<ICourse>();
  name = "viewCourse";
  viewCourse(): void {
    this.viewCourseEvent.emit(this.course);
    console.log('viewCourse clicked! for output component');
    this.index = 100;
    this.name = "update name"
  }

  // to view or access enum in html element
  //get CategoryType() { return CategoryType }
  CategoryType = CategoryType
}
