import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseListComponent } from './course-list/course-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { courseDepResolver } from './shared/resolvers/course-dep.resolver';
import { courseResolver } from './shared/resolvers/course.resolver';

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
    component: CourseDetailsComponent,
    //resolve: { courseDataResult: courseDepResolver }
    resolve: { courseDataResult: courseResolver }
  },
  {
    path: 'course',
    component: CourseDetailsComponent
  },
  {
    path: 'account',
    component: AccountComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '', redirectTo: '/account/login', pathMatch: 'full' }
    ]
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
