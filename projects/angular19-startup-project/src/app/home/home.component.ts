import { KeyValue } from '@angular/common';
import { Component } from '@angular/core';

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
}