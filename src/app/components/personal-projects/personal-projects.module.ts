import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalProjectsComponent } from './personal-projects.component';



@NgModule({
  declarations: [
    PersonalProjectsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PersonalProjectsComponent
  ]
})
export class PersonalProjectsModule { }
