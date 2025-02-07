import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [RouterModule]
})
export class HeaderComponent {

  data = {
    courseName: 'Angular for Beginner Course!',
    lessonName: 'Learn Angular 17 in Arabic | #35- Accessing Angular Route Params - All Access Methods'
  };

  isNavbarFixed = false;

  @HostListener('window:scroll', ['$event']) onScroll() {
    if (window.scrollY > 50) {
      this.isNavbarFixed = true;
    } else {
      this.isNavbarFixed = false;
    }
  }
}
