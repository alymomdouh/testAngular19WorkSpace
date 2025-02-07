import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';

import { ICourse, coursesData } from '../app.component.models';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss',
  standalone: true,
  imports: []
})
export class CourseDetailsComponent implements OnInit {

  course!: ICourse;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    console.log('snapshot.params', id);
    const courseId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('snapshot.paramMap', courseId);

    this.activatedRoute.params.subscribe((res: Params) => {
      console.log('params', res['id'], typeof (res['id']));
    });

    this.activatedRoute.paramMap.subscribe((res: ParamMap) => {
      console.log('paramMap', res.get('id'));
      const courseId = Number(res.get('id'));
      this.course = this.getCourse(courseId);
    });

  }

  getNext(): void {
    this.router.navigate([`/course-details/${5}`]);
  }

  private getCourse(courseId: number): ICourse {
    return coursesData.find(c => c.id === courseId)!;
  }
}
