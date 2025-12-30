import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';

import { ICourse, coursesData } from '../app.component.models';
import { debug } from 'node:console';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss',
  standalone: true,
  imports: []
})
export class CourseDetailsComponent implements OnInit {

  course!: ICourse;
  @Input() id: string = '';

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    // static ways
    // const id = this.activatedRoute.snapshot.params['id'];
    // console.log('snapshot.params', id);
    // const courseId = this.activatedRoute.snapshot.paramMap.get('id');
    // console.log('snapshot.paramMap', courseId);
    //withComponentInputBinding
    // if (this.id) {
    //   this.course = this.getCourse(+this.id);
    // }
    // dynamic ways it lessons to any changes
    // this.activatedRoute.params.subscribe((res: Params) => {
    //   console.log('params', res['id'], typeof (res['id']));
    // });

    // this.activatedRoute.paramMap.subscribe((res: ParamMap) => {
    //   console.log('paramMap', res.get('id'));
    //   const courseId = Number(res.get('id'));
    //   this.course = this.getCourse(courseId);
    // });
    // this.activatedRoute.queryParams.subscribe(res => {
    //   console.log('queryParams', res['id']);
    //   this.course = this.getCourse(+this.id);
    // });

    // if id come in queryParams
    // this.activatedRoute.queryParamMap.subscribe(res => {
    //   console.log('queryParams', res.get('id'));
    //   this.course = this.getCourse(Number(res.get('id')));
    // });

    // if id come in url guery as course/1
    // this.activatedRoute.data.subscribe(res => {
    //   console.log(res);
    //   this.course = res['courseDataResult'];
    // });
    this.activatedRoute.data.subscribe(({ courseDataResult }) => {
      this.course = courseDataResult;
    });
  }

  getNext(): void {
    debugger
    // this.router.navigate([`/course-details/${5}`]);
    // this.router.navigate([`course`], { queryParams: { id: this.course.id + 1 } });
    // default is queryParamsHandling:'replace'  // it replace old all queryParams  with all new queryParams
    // queryParamsHandling: 'merge'     leave old queryParams  and merge with it new queryParams
    // queryParamsHandling: 'preserve'
    this.router.navigate([`course`], { queryParams: { courseId: this.course.id + 1, name: 'test ahmed' }, queryParamsHandling: 'merge' });
  }

  goToHome(): void {
    this.router.navigate(['home'], { queryParams: { id: this.course.id }, queryParamsHandling: 'preserve' });
  }
  private getCourse(courseId: number): ICourse {
    return coursesData.find(c => c.id === courseId)!;
  }
}
