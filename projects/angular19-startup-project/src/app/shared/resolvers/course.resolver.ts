import { ResolveFn } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { inject } from '@angular/core';
import { ICourse } from '../../app.component.models';

export const courseResolver: ResolveFn<ICourse> = (route, state) => {
  const courseService = inject(CourseService);
  //return true;
  const id = route.paramMap.get('id');
  if (id === null) {
    // You can return a redirect command or throw as per your logic
    // Example: return { redirectTo: '/not-found' } as RedirectCommand;
    throw new Error("Course ID is missing in route parameters");
  }
  return courseService.getCourseById(id);
};
