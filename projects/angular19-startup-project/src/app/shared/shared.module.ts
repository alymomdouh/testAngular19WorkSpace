import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyDataComponent } from './components/empty-data/empty-data.component';

const comonents = [
  EmptyDataComponent
];
const modules = [
  CommonModule
];
@NgModule({
  declarations: comonents,
  imports: modules,
  exports: [
    ...comonents,
    ...modules
  ]
})
export class SharedModule { }
