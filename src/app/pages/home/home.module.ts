import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AboutMeModule } from '../../components/about-me/about-me.module';
import { JobProjectsModule } from '../../components/job-projects/job-projects.module';
import { NavbarModule } from '../../components/navbar/navbar.module';
import { PersonalProjectsModule } from '../../components/personal-projects/personal-projects.module';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    AboutMeModule,
    PersonalProjectsModule,
    JobProjectsModule,
    NavbarModule,
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
