# TestAngularWorkSpace

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.



##  important Commands 

```

-  ng new testAngularWorkSpace --no-create-application
-  ng g app angular19StartupProject 
-  ng g module App --routing
-  ng new testpprojectwithModules --no-standalone
-  ng g directive directiveName
-  ng g pipe pipeName
-  ng g service product
-  npx -p @angular/cli@18.0.0 ng new testpro18Demo
-ng g m shared
-ng g m shared --flat

```
##  Importants Websites 
- Angular io: https://angular.io/
- Angular Dev: https://angular.dev/
- Node Js: https://nodejs.org/en/download/
- Visual Studio Code: https://code.visualstudio.com/download

Important commands:
- Run this command to install Angular Cli globally: ``` npm install @angular/cli@17.1.1 -g ``` 
- Run this command to check Node version: ``` node -v ```
- Run this command to check Angular version: ``` ng v ```
- Run this command to check NPM version: ``` npm -v ```

##  course Path
###   -[link in youtube](https://www.youtube.com/playlist?list=PLgU7izgeR2lwwNRNY4fYQf3GZawV-EGnW)
  
###   -[link in Udemy](https://www.udemy.com/course/angular-17-the-complete-guide-2024/)
######  Section 1  Getting Start to the Angular  (3)
   1. Introduction to the Angular
   ```
        - Angular io: https://angular.io/
        - Angular Dev: https://angular.dev/
        - Node Js: https://nodejs.org/en/download/
        - Visual Studio Code: https://code.visualstudio.com/download

        Important commands:
        - Run this command to install Angular Cli globally: npm install @angular/cli@17.1.1 -g 
        - Run this command to check Node version: node -v 
        - Run this command to check Angular version: ng v 
        - Run this command to check NPM version: npm -v
   ```
   2. Execution of scripts is disabled on this system
          ```
                Set-ExecutionPolicy RemoteSigned
          ```
  3. Development Environment Setup
  ```
  >>>ng new project-name 
      -style select scss 
       not select ssrand ssg 
  >>ng serve -o 
  >>npm start 

  ```

######  Section 2 Mastering Angular CLI (command-line interface)  (4)
4. What is Angular CLI 

5. Installing Angular CLI
    ```
          In this lesson you will learn how to install Angular CLI.

          - To install the Angular CLI, open a terminal window and run the following command:

          - npm install -g @angular/cli

          - On Windows client computers, the execution of PowerShell scripts is disabled by default. 
          To allow the execution of PowerShell scripts, which is needed for npm global binaries, you must set the following:

          Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

          - npm i -g @angular/cli@18.1 



    ```
6. Angular CLI - Project Creation and Management

7. Angular CLI command-language syntax

 ```
      - scss  
      - no SSR  
      > ng s --port=4201 
      > ng s --port=4201 --open
      > ng s --port=4201 -o
      in pacakge.json in scripts add 
      "start2": "ng serve --port 4201 --open",
      >> npm run start2
      > ng s -o 
      >ng g c home --no-flat 
      >ng g c home --flat 
      >ng g c no-style --inline-style 
      >ng g c no-style -s 
      >ng g c css-copmonent --style=css
      >ng g c no-style --inline-style --inline-template
      >ng g c no-style -s -t
      >ng g c login --prefix  // not add prefix app to component name
      >ng g c login -p  // not add prefix app to component name
      >ng g c login --prefix=auth // add prefix auth to component name

  ``` 

######  Section 3 Understanding Angular Project Structure   (2)
 
8. Understanding Angular Project Structure Part 1

9. Understanding Angular Project Structure Part 2

######  Section 4 Introduction to Angular Framework   (3)
10. Introduction To Angular - Custom HTML Elements, Model vs View (Interpolation)

11. Adding Bootstrap to Your Angular App (A Step-by-Step Guide)
```
> npm i bootstrap
```
12. Why Angular Discover the Core Features of Angular
######  Section 5 Core Features    (14)
13. Sharing data between child and parent components by @Input Decorator
 
14. Sharing data between child and parent components by @Output Decorator

15. Self-closing tags in Angular 16 and later versions

16. Built-in Structural directives - Angular 17 Control Flow Syntax (for Syntax)

17. Angular 17 @for @empty, $index, $count, $even and $odd

18. Understanding Angular 17 @for tracking functions

19. Angular *ngFor Core Directive (Syntax before Angular 17)

20. How to migrate to Angular 17's Updated Control Flow Syntax

```
>ng g @angular/core:control-flow
-- then select project path 
--select y or n 
```
21. Angular @if else syntax

22. Angular *ngIf Directive and the Elvis Operator

23. Angular *ngClass Core Directive - Learn All Features

24. Angular *ngStyle Core Directive - When to use it and Why

25. Angular @switch syntax

26. Angular *ngSwitch Core Directive Explained (Syntax Prior to v17)
   
######  Section 6 Angular Built-In Pipes   (3)
27. Angular Built-In Pipes Part 1 - Transforming Data Using Pipes

28. Angular Built-In Pipes Part 2 - Transforming Data Using Pipes
 
29. Understanding AsyncPipe
######  Section 7 Component Lifecycle Hook   (8)
30. Component Lifecycle Hook -1 ngOnChanges

31. Component Lifecycle Hook -2 OnInit

32. Component Lifecycle Hook -3 DoCheck

33. Component Lifecycle Hook -4 AfterContentInit

34. Component Lifecycle Hook -5 AfterContentChecked

35. Component Lifecycle Hook -6 AfterViewInit

36. Component Lifecycle Hook -7 AfterViewChecked

37. Component Lifecycle Hook - OnDestroy
######  Section 8 Angular Routing  (9)
 
38. Angular Routing - Essential Concepts

39. Control navigation with UI elements

40. Angular Routing - Implementing Redirect & Wildcard notation (404) Pages

41. Angular Routing Parameters - Required Parameters

42. Accessing Angular Route Params - All Access Methods

43. How to Use @Input() to Read Angular Route Parameters - New Feature from v16

44. How to Use Angular Query Parameters - Part 1

45. How to Use Angular Query Parameters and QueryParamsHandling - Part 2

46. Understanding Angular Nesting Routes

```
> npm i @angular/fire
>npm i firebase

``` 
######  Section 9 Angular Dependency Injection (DI)   (1)
 47. Understanding Angular Dependency Injection (DI) and Injectable Service
######  Section 10  Learn Angular HTTP (5)
48. Understanding communicating with backend services using HTTP
 
49. Understanding Angular Singleton Service - Wrapper Service

50. Angular HTTP client - Handle request errors

51. Angular HTTP - Intercept requests and responses - Part 1

52. Angular HTTP - Intercept requests and responses - Part 2 
######  Section 11 Angular Sharing Modules  (1)
53. Understanding Angular Sharing Modules
```
>ng g m shared --flat 
```
######  Section 12  Angular Forms (10) 
54. Introduction to forms in Angular

55. Angular Template-driven Form - Mutable Form - Part 1

56. Angular Template-driven Form - Mutable Form - Part 2

57. Angular Template-driven Form - Track control states

  54-       63- 
######  Section 13 Translate Angular App with ngx-translate  (7)
  64-     70- 
14 Reactive Form in Depth 7

######  Section 19: ResolveFn vs Resolve (Deprecated) 
```
  96-Angular Routing ResolveFn vs Resolve (Deprecated)
  // may be put in guards folder and can be put in new folder called resolvers
  - ng g resolver resolvers/course 
  // video not completed yet
```
##### Section 20: Angular Decorators (Metadata Properties and Scope)
```
 ###  97 - @ViewChild Decorator (Metadata Properties and Scope)
to make parent component to access child component 
Scope   only the parent can access child component what about if child component contain inside it child component or nested 
here can not access it .it is only one level . 
also query only first matching item. 
```
### 98. Understating @ViewChildren Decorator
```
same like ViewChild  but here not track only first item it track all matching items.

```
###  99. Understating @ContentChild Decorator

```
to enter or pass elements or content from parent to child component
work only with first matching item 
```

###

```
to access content or list of content and can also access nested childs 
```

##### Section 21: How to upgrade an Angular app to a specific or latest version

### 101. How to upgrade an Angular app to a specific or latest version

```
types of upgrade
1- major upgrade into big number   like from 7 to 8 or 9
2- menu  small number like from 7.1 to 7.3 

commands 

>ng update 
> npm outdated 

```
help tool like [Angular Update guide](https://angular.dev/update-guide)

[change log](https://github.com/angular/angular/blob/main/CHANGELOG.md)


##### Section 22: Deploy Angular App

### 102. How to build your first Angular app

```
>ng build
```
