import { KeyValue } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { ICourse, ICourseVm } from '../app.component.models';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly courses: Array<KeyValue<string, string>> = [
    {
      key: 'fa-solid fa-hourglass-half text-success',
      value: 'Angular 17 For Beginners',
    },
    {
      key: 'fa-solid fa-hourglass-start text-info',
      value: 'Angular For Intermediate',
    },
    {
      key: 'fa-solid fa-hourglass-start text-danger',
      value: 'Signals',
    },
    {
      key: 'fa-solid fa-hourglass-start text-danger',
      value: 'RxJs',
    },
    {
      key: 'fa-solid fa-hourglass-start text-danger',
      value: 'NgRx',
    },
    {
      key: 'fa-solid fa-hourglass-start text-danger',
      value: 'Angular Forms In Depth',
    },
    {
      key: 'fa-solid fa-hourglass-start text-danger',
      value: 'Reactive Angular',
    },
    {
      key: 'fa-solid fa-hourglass-start text-danger',
      value: 'Angular Material',
    },
    {
      key: 'fa-solid fa-hourglass-start text-danger',
      value: 'Service Worker & PWA',
    },
    {
      key: 'fa-solid fa-hourglass-start text-danger',
      value: 'Server Side Rendering (SSR)',
    },
    {
      key: 'fa-solid fa-hourglass-start text-danger',
      value: 'Hydration',
    },
    {
      key: 'fa-solid fa-hourglass-start text-danger',
      value: 'Best Practices',
    },
    {
      key: 'fa-solid fa-hourglass-start text-danger',
      value: 'Angular Unit Test',
    },
    {
      key: 'fa-solid fa-hourglass-start text-danger',
      value: 'Firebase',
    },
    {
      key: 'fa-solid fa-hourglass-start text-danger',
      value: 'Angular Animation',
    },
    {
      key: 'fa-solid fa-hourglass-start text-danger',
      value: 'Bootstrap 5',
    },
    {
      key: 'fa-solid fa-hourglass-start text-danger',
      value: 'Tailwind Css',
    }
  ];
  readonly newcoursesList: Array<ICourseVm> = [
    {
      id: 1,
      icon: 'fa-solid fa-hourglass-half text-success',
      name: 'Angular 17 For Beginners',
    },
    {
      id: 2,
      icon: 'fa-solid fa-hourglass-start text-danger',
      name: 'RxJs',
    },
    {
      id: 3,
      icon: 'fa-solid fa-hourglass-start text-danger',
      name: 'NgRx',
    },
    {
      id: 4,
      icon: 'fa-solid fa-hourglass-start text-danger',
      name: 'Angular Forms In Depth',
    },
    {
      id: 5,
      icon: 'fa-solid fa-hourglass-start text-danger',
      name: 'Angular Unit Test',
    },
    {
      id: 6,
      icon: 'fa-solid fa-hourglass-start text-danger',
      name: 'Bootstrap 5',
    },
    {
      id: 7,
      icon: 'fa-solid fa-hourglass-start text-info',
      name: 'Angular For Intermediate',
    },
    {
      id: 8,
      icon: 'fa-solid fa-hourglass-start text-danger',
      name: 'Signals',
    },
    {
      id: 9,
      icon: 'fa-solid fa-hourglass-start text-danger',
      name: 'Reactive Angular',
    },
    {
      id: 10,
      icon: 'fa-solid fa-hourglass-start text-danger',
      name: 'Angular Material',
    },
    {
      id: 11,
      icon: 'fa-solid fa-hourglass-start text-danger',
      name: 'Service Worker & PWA',
    },
    {
      id: 12,
      icon: 'fa-solid fa-hourglass-start text-danger',
      name: 'Server Side Rendering (SSR)',
    },
    {
      id: 13,
      icon: 'fa-solid fa-hourglass-start text-danger',
      name: 'Hydration',
    },
    {
      id: 14,

      icon: 'fa-solid fa-hourglass-start text-danger',
      name: 'Best Practices',
    },
    {
      id: 15,
      icon: 'fa-solid fa-hourglass-start text-danger',
      name: 'Firebase',
    },
    {
      id: 16,
      icon: 'fa-solid fa-hourglass-start text-danger',
      name: 'Angular Animation',
    },
    {
      id: 17,
      icon: 'fa-solid fa-hourglass-start text-danger',
      name: 'Tailwind Css',
    }
  ];
  @Input() id = '';
  coursesSignal = signal<Array<ICourseVm>>(this.newcoursesList);

}
