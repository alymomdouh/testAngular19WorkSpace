import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseListComponent } from './course-list/course-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CourseDetailsComponent } from './course-details/course-details.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'course-list',
    component: CourseListComponent
  },
  {
    path: 'course-details/:id',
    component: CourseDetailsComponent
  },
  {
    path: 'course',
    component: CourseDetailsComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];
