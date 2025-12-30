export interface ICourse {
  id: number;
  name?: string;
  scrambledId?: string;
  description: string;
  longDescription: string;
  category: CategoryType;
  lessonsCount: number;
  imageUrl: string;
  sequenceNumber?: number;
  lessons?: any[]
}
export interface ICourseVm {
  id: number;
  name: string;
  icon: string;
}
export enum CategoryType {
  beginners = 1,
  intermediate = 2,
  advanced = 3,
  other
}
export const coursesData: Array<ICourse> = [
  {
    id: 1,
    description: 'Angular 17 for beginners',
    imageUrl: 'assets/images/angular_for_beginners.png',
    lessonsCount: 70,
    longDescription: `This course will give you a practical hands-on introduction to the Angular framework.
        After taking this course you will feel very comfortable navigating the code of an existing Angular
        application and finding your way around, and you will know how to build your own custom components.`,
    category: CategoryType.beginners
  },
  {
    id: 2,
    description: 'RxJs',
    imageUrl: 'assets/images/rxjs.PNG',
    lessonsCount: 40,
    longDescription: `We will then write our own Observable from first principles:
        we will implement our own HTTP observable that will allow us to handle backend HTTP
        requests while supporting error handling and cancellation.`,
    category: CategoryType.intermediate
  },
  {
    id: 3,
    description: 'NgRx',
    imageUrl: 'assets/images/ngrx.PNG',
    lessonsCount: 48,
    longDescription: `In this course, we are going to take a small existing application that is
        built without any state management. We are going to understand what are the consequences of not
        doing state management by identifying some problems that the application has in its initial form.`,
    category: CategoryType.advanced
  },
  {
    id: 4,
    description: 'Angular Forms In Depth',
    imageUrl: 'assets/images/angular_forms_in_depth.PNG',
    lessonsCount: 48,
    longDescription: `At the end of the course, you will have learned everything that you need to know for
        designing and developing complex data entry forms, that are both maintainable and user-friendly. You will
        be able to implement all sorts of commonly needed form validation rules, including the most advanced scenarios.
        You will feel comfortable using both template-driven and reactive forms, and you will know when to use each and why.`,
    category: CategoryType.advanced
  },
  {
    id: 5,
    description: 'Angular Unit Test',
    imageUrl: 'assets/images/angular_unit_test.PNG',
    lessonsCount: 48,
    longDescription: `With this course, you will feel comfortable writing Angular tests for multiple types of services
        and components. You will know not only the multiple Jasmine and Angular testing utilities available, but you will
        also know when to use them and why. You will be familiar with Angular testing best practices, and you will know
        how to write useful tests that don't take a lot of time to write and that contribute a lot for the long term
        health of your project.`,
    category: CategoryType.other
  },
  {
    id: 6,
    description: 'Bootstrap 5',
    imageUrl: 'assets/images/bootstrap_5.png',
    lessonsCount: 48,
    longDescription: `Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass,
        utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins.`,
    category: CategoryType.beginners
  }
];
