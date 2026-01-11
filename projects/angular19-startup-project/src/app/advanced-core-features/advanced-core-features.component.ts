import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CardActionsComponent } from '../card-actions/card-actions.component';

@Component({
  selector: 'app-advanced-core-features',
  imports: [CommonModule, NgTemplateOutlet, CardComponent, CardActionsComponent],
  templateUrl: './advanced-core-features.component.html',
  styleUrl: './advanced-core-features.component.scss'
})
export class AdvancedCoreFeaturesComponent {
  @ViewChild('lessonTempRef', { static: true }) template!: TemplateRef<HTMLElement>;
  @ViewChild('container', { static: true, read: ViewContainerRef }) container!: ViewContainerRef;

  title = 'ng-container';

  lessons: string[] = ['ng-container', 'ng-template'];

  show = false;

  loadTemplate(): void {
    this.container.createEmbeddedView(this.template);
  }
}
