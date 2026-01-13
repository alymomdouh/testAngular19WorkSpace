import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, OnInit, QueryList, ViewChildren, computed, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseCardComponent } from '../course-card/course-card.component';
import { FirestoreService } from '../shared/services/firestore.service';
import { Firestore, collection, getDocs } from 'firebase/firestore';
import { coursesData, ICourse } from '../app.component.models';
import { SharedModule } from '../shared/shared.module';
import { CourseService } from '../services/course.service';
import { single } from 'rxjs/internal/operators/single';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CourseCardComponent, SharedModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
  //providers: [Firestore]
})
export class CourseListComponent implements OnInit, AfterViewInit {

  @ViewChildren('card') coursesChildren1!: QueryList<ElementRef<HTMLElement>>;
  @ViewChildren(CourseCardComponent) coursesChildren2!: QueryList<CourseCardComponent>;
  //courses: Array<ICourse> = coursesData;
  courses: Array<ICourse> = [];
  //courseSignal = single<Array<ICourse>>();
  courseSignal = signal<ICourse[]>([]);
  //coursesComputed = computed(() => this.courses);
  //coursesComputed = computed(() => this.courses.map(a => ({ ...a, name: "#" + a.name })));
  coursesComputed = computed(() => {
    if (this.searchText()) {
      return this.courses.filter(c => c.name?.includes(this.searchText().toLowerCase())).map(a => ({ ...a, name: "#" + a.name }));
    } else {
      return this.courses.map(a => ({ ...a, name: "#" + a.name }));
    }
  });
  //  readonly categoryType = CategoryType;
  displedNamesSignal = signal<string[]>(["name", "age", "level"]).asReadonly();
  searchText = signal<string>('');
  //firestore = inject(Firestore);
  private changeDetectorRef = inject(ChangeDetectorRef);
  constructor(
    private firestoreService: FirestoreService,
    private courseService: CourseService,
    private router: Router
  ) {

    /// Run on every changes
    // effect(() => {
    //   // this.courseSignal.set([]);// will give error because enter in infinity loop
    //   // every time make change in signal then then make same change then enter again
    //   console.log('coursesComputed', this.coursesComputed().length);
    // }, { allowSignalWrites: true });
    // allowSignalWrites   not open in infinity loop only one time


    // const effectRef = effect(() => {
    //   // this.courseSignal.set([]);// will give error because enter in infinity loop
    //   // every time make change in signal then then make same change then enter again
    //   console.log('coursesComputed', this.coursesComputed().length);
    // }, { allowSignalWrites: true, manualCleanup: true });
    // // allowSignalWrites   not open in infinity loop only one time
    // effectRef.destroy();

    effect((onCleanup) => {
      // this.courses.set([]);
      console.log('coursesComputed', this.coursesComputed().length);
      onCleanup(() => {
        // clean whatever
        console.log('on cleanup');
      });
    });



  }
  ngAfterViewInit(): void {
    this.coursesChildren2.changes.subscribe((res: QueryList<CourseCardComponent>) => {
      console.log('coursesChildren2', res);
    });
  }

  ngOnInit(): void {
    this.getCourses();
  }
  private getCourses(): void {
    // getDocs(collection(this.firestore, 'courses')).then((response) => {
    //   console.log(response.docs)
    // });
    // this.firestoreService.getAll('courses').subscribe(res => {
    //   console.log('res', res);
    // });
    this.courseService.getCourses().subscribe({
      next: (values: ICourse[]) => {
        debugger
        const sortedCourses = values.sort((a, b) => a.id - b.id);
        this.courses = sortedCourses;
        this.courseSignal.set(sortedCourses);
        this.changeDetectorRef.detectChanges();
        console.log('sortedCourses', sortedCourses);
      },
    });
    // this.courses = coursesData
  }
  ClickMe() {

  }
  navigateToLessons(course: ICourse): void {
    this.router.navigateByUrl(`public/lessons/${course.scrambledId}`)
  }
  UpdateSearchText(value: string) {
    debugger
    this.searchText.set(value);
  }
}
