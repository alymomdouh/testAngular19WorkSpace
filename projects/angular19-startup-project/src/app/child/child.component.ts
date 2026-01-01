import { AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';
import { console } from 'inspector';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements AfterContentInit {

  // value inside ContentChild  will only set after AfterContentInit
  @ContentChild('content') content!: ElementRef<HTMLElement>;
  // default static: false that to make update value in ngAfterContentInit so can read value in ngAfterContentInit
  @ContentChild('content', { static: false }) content1!: ElementRef<HTMLElement>;
  // static: true that to make update value in ngOnInit so can read value in ngOnInit before detection change
  @ContentChild('content', { static: true }) content2!: ElementRef<HTMLElement>;

  ngOnInit(): void {
    console.log("content1 ngOnInit", this.content1?.nativeElement.textContent);
  }
  ngAfterContentInit(): void {
    //throw new Error('Method not implemented.');
    if (this.content) {
      console.log(this.content.nativeElement.textContent);
      this.content.nativeElement.style.color = 'red';
    }
  }
}
