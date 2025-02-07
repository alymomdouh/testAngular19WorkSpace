import { Component } from '@angular/core';

@Component({
  selector: 'app-child-view',
  imports: [],
  templateUrl: './child-view.component.html',
  styleUrl: './child-view.component.scss'
})
export class ChildViewComponent {
  readonly ChildTitle = "ChildViewComponent";
}
