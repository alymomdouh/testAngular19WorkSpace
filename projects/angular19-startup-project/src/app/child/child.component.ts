import { AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';
import { CourseNameDirective } from '../shared/directives/course-name.directive';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements AfterContentInit {

  // value inside ContentChild  will only set after AfterContentInit
  @ContentChild('content') content!: ElementRef<HTMLElement>;
  // default static: false that to make update value in ngAfterContentInit so can read value in ngAfterContentInit
  @ContentChild('content', { static: false }) content1!: ElementRef<HTMLElement>;
  // static: true that to make update value in ngOnInit so can read value in ngOnInit before detection change
  @ContentChild('content', { static: true }) content2!: ElementRef<HTMLElement>;

  ngOnInit(): void {
    console.log("content1 ngOnInit", this.content1?.nativeElement.textContent);
  }
  ngAfterContentInit(): void {
    //throw new Error('Method not implemented.');
    if (this.content) {
      console.log(this.content.nativeElement.textContent);
      this.content.nativeElement.style.color = 'red';
    }
  }

  // example of using ContentChildren decorator to access the content children directives
  // this as default will not acces nested content children directives
   @ContentChildren(CourseNameDirective) courseNames!: QueryList<CourseNameDirective>;
  // example of using ContentChildren decorator to access the content children directives
  @ContentChildren(CourseNameDirective, { descendants: true }) courseNamesNested!: QueryList<CourseNameDirective>;
  get gettopcontent() {
    return this.courseNames.map(c => c.name).join(', ');
  }
  get getNestedContent() {
    return this.courseNamesNested.map(c => c.name).join(', ');
  }

}
