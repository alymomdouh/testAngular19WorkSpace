import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { CommonModule } from '@angular/common';
import { CourseNameDirective } from '../shared/directives/course-name.directive';
import { SingleSlotComponent } from '../single-slot/single-slot.component';

@Component({
  selector: 'app-explanation',
  imports: [ChildComponent, CommonModule, CourseNameDirective, SingleSlotComponent],
  templateUrl: './explanation.component.html',
  styleUrl: './explanation.component.scss'
})
export class ExplanationComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
    console.log("title ngOnInit", this.title);// will give undefined
    console.log("child ngOnInit", this.child);// will give undefined
  }

  ngAfterViewInit(): void {
    console.log("title ngAfterViewInit", this.title);
    console.log("child ngAfterViewInit", this.child);

    //throw new Error('Method not implemented.');
  }
  isVisible = false;
  // the value set inside ViewChild after detected change function run and that after view init
  //static: false   that default and mean it will run and set value after ngAfterViewInit and change dection
  @ViewChild('title', { static: false }) title!: ElementRef<HTMLElement>;
  // static: true that to make update value in ngOnInit so can read value in ngOnInit
  @ViewChild('child', { static: true }) child!: ElementRef<HTMLElement>;
  // to access or read only ElementRef
  @ViewChild('child', { static: true, read: ElementRef }) child2!: ElementRef<HTMLElement>;
  // other way to access the component by name
  @ViewChild(ChildComponent, { static: true, read: ElementRef }) child3!: ChildComponent;



  showNested = false;
  toggleNested() {
    this.showNested = !this.showNested;
  }
}
