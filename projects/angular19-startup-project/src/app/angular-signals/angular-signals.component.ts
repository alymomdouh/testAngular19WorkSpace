import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-angular-signals',
  imports: [],
  templateUrl: './angular-signals.component.html',
  styleUrl: './angular-signals.component.scss'
})
export class AngularSignalsComponent {
  // counter = 0;
  counter = signal(0);
  inCrease() {
    // this.counter++;
    this.counter.set(this.counter() + 1);
  }
}
