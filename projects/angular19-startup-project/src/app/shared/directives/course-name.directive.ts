import { Directive, Input } from '@angular/core';

@Directive({
  selector: 'dir-course-name',
  standalone: true
})
export class CourseNameDirective {

  @Input({ required: true }) name!: string;

  constructor() { }

}
