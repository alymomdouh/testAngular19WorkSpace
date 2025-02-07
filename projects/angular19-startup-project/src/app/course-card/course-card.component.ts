import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { CategoryType, ICourse } from '../app.component.models';
import { CommonModule } from '@angular/common';
import { ChildViewComponent } from '../child-view/child-view.component';
// import { NgStyle  } from '@angular/common';
// import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
// import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-course-card',
  imports: [
    CommonModule,
    ChildViewComponent
    // NgIf, //use with old if
    // NgClass //use with old ngClass or can add CommonModule
    // NgStyle
    //NgSwitch, NgSwitchCase, NgSwitchDefault// with old way for ngSwitch
  ],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent implements OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked {
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
    console.log(`%c ngOnInit .on CourseCardComponent :in course Id ${this.course.id}`, 'color:red');
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
    console.log(`%c ngDoCheck.on CourseCardComponent :in course Id ${this.course.id}`, 'color:green');
  }

  /**
   * Lifecycle hook that is called after Angular has fully initialized
   * all content of the component's view.
   *
   * This method is called once after the first `ngAfterContentChecked`.
   *
   * Use this hook to perform any additional initialization tasks that
   * require the content to be fully initialized.
   *
   * In this implementation, it logs the course ID to the console.
   */
  ngAfterContentInit(): void {
    console.log(`%c ngAfterContentInit.on CourseCardComponent :in course Id ${this.course.id}`, 'color:yellow');
  }

  /**
   * Lifecycle hook that is called after the default change detector has completed checking all of the component's content.
   * This method is called after ngAfterContentInit and every subsequent ngDoCheck.
   * It is invoked each time the content of the component has been checked.
   */
  ngAfterContentChecked(): void {
    console.log(`%c ngAfterContentChecked on CourseCardComponent :in course Id ${this.course.id}`, 'color:blue');
  }
  @ViewChild(ChildViewComponent) childView!: ChildViewComponent;
  /**
   * Lifecycle hook that is called after a component's view and all sub childern component has been fully initialized.
   * This method is invoked only once when the view is initialized.
   * It is a good place to perform any additional initialization tasks that require the view to be fully rendered.
   *
   * In this implementation, it logs a message to the console with the title of the child view.
   */
  ngAfterViewInit(): void {
    console.log(`%c ngAfterViewInit.on CourseCardComponent :in childView title ${this.childView?.ChildTitle}`, 'color:yellow');
  }

  /**
   * Lifecycle hook that is called after the component's view has been checked by the Angular change detection mechanism.
   * This method is invoked after Angular has finished checking the component's view and its child views.
   * It is a good place to perform any post-checking operations or to log information about the view state.
   * IT Called one time after ngAfterViewInit   then every time after ngAfterContentChecked
   */
  ngAfterViewChecked(): void {
    console.log(`%c ngAfterViewChecked.on CourseCardComponent :in childView title ${this.childView?.ChildTitle}`, 'color:brown');
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
