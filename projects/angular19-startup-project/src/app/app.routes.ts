import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseListComponent } from './course-list/course-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];
