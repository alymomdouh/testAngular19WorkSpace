import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-advanced-core-features',
  imports: [CommonModule],
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
