import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyDataComponent } from './components/empty-data/empty-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material.module';

const comonents = [
  EmptyDataComponent
];
const modules = [
  CommonModule,
  MaterialModule,
  FormsModule,
  ReactiveFormsModule
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
