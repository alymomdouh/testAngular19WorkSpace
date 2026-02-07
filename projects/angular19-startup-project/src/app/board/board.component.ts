import { Component } from '@angular/core';

import { ChildBoardComponent } from './child-board/child-board.component';


@Component({
  selector: 'app-board',
  standalone: true,
  imports: [ChildBoardComponent],
  templateUrl: './board.component.html'
})
export class BoardComponent {

  canCheck = false;

  onCheckedChanged(value: boolean): void {
    console.log('value', value);
  }

}
