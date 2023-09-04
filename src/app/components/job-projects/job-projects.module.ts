import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { JobProjectsComponent } from './job-projects.component';



@NgModule({
  declarations: [
    JobProjectsComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
  ],
  exports: [
    JobProjectsComponent
  ]
})
export class JobProjectsModule { }
