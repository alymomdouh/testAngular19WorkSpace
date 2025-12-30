// that old type of resolver
import { ActivatedRouteSnapshot, MaybeAsync, RedirectCommand, Resolve, RouterStateSnapshot } from "@angular/router";
import { ICourse } from "../../app.component.models";
import { Injectable } from "@angular/core";
import { CourseService } from "../../services/course.service";

@Injectable({
  providedIn: 'root'
})
export class courseDepResolver implements Resolve<ICourse> {
  constructor(private courseService: CourseService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<ICourse | RedirectCommand> {
    const id = route.paramMap.get('id');
    if (id === null) {
      // You can return a redirect command or throw as per your logic
      // Example: return { redirectTo: '/not-found' } as RedirectCommand;
      throw new Error("Course ID is missing in route parameters");
    }
    return this.courseService.getCourseById(id);
    // throw new Error("Method not implemented.");
  }
}
