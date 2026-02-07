import { booleanAttribute, Component, input, model, signal, Signal } from '@angular/core';

@Component({
  selector: 'app-child-board',
  standalone: true,
  imports: [],
  templateUrl: './child-board.component.html'
})
export class ChildBoardComponent {

  disabled = input(false);// input signal not accept set or update
  disabledCorrect: Signal<boolean> = input(false);// input signal not accept set or update
  //checked = model<boolean>();// model input signal accept set or update not required
  checked = model.required<boolean>();// model input signal accept set or update required
  isChecked = false;
  counter = signal(0);// signal
  toggle(): void {
    this.counter.set(1);
    // this.disabled.set(!this.disabled());// // Wrong Code
    // this.disabled() = !this.disabled(); // Wrong Code
    //this.disabledCorrect.set(!this.disabledCorrect());// Wrong Code
    this.isChecked = !this.isChecked;
    this.checked.set(!this.checked());
  }

}
