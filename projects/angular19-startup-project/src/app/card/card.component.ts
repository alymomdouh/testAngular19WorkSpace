import { CommonModule } from '@angular/common';
import { Component, inject, Injector, input, TemplateRef } from '@angular/core';
import { CardService } from './card.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers: [CardService]
})
export class CardComponent {

  cardBodyTemp = input<TemplateRef<HTMLElement>>();
  // can make input with type signal
  cardBodyTemp1 = input.required<TemplateRef<HTMLElement>>

  course: { title: string; lessons: number } = {
    title: 'Angular 18 Course',
    lessons: 192
  };


  cardService = inject(CardService);
  injector = inject(Injector);

  cardActionTemp = input<TemplateRef<HTMLElement>>();

}
