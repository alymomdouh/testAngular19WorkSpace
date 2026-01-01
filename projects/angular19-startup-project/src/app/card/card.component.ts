import { CommonModule } from '@angular/common';
import { Component, input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  cardBodyTemp = input<TemplateRef<HTMLElement>>();
  // can make input with type signal
  cardBodyTemp1 = input.required<TemplateRef<HTMLElement>>

  course: { title: string; lessons: number } = {
    title: 'Angular 18 Course',
    lessons: 192
  };
}
