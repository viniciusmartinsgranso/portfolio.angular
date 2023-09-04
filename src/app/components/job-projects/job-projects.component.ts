import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ProjectsModalsComponent } from '../modals/projects-modals/projects-modals.component';
import { ProjectsModalsModule } from '../modals/projects-modals/projects-modals.module';
import { JobProjectsEnum } from '../modules/enums/job-projects.enum';
import { ProjectsInterface } from '../personal-projects/personal-projects.component';

@Component({
  selector: 'app-job-projects',
  templateUrl: './job-projects.component.html',
  styleUrls: ['./job-projects.component.scss'],
})
export class JobProjectsComponent {

  constructor(
    private readonly router: Router,
    private readonly modalController: ModalController,
  ) { }

  public projects: ProjectsInterface[] = [
    {
      name: JobProjectsEnum.TERREX,
      link: '/terrex',
      description: 'RAWR',
      image: 'assets/images/Gengar.jpg',
    },
    {
      name: JobProjectsEnum.SAMA,
      link: '/Sama',
      description: 'Sistema de ensino',
      image: 'assets/images/Gengar.jpg',
    },
    {
      name: JobProjectsEnum.WEC,
      link: '/wec',
      description: 'Webkkkkkbos',
      image: 'assets/images/Gengar.jpg',
    },
    {
      name: JobProjectsEnum.UQR,
      link: '/uqr',
      description: 'Sistema de Ensino',
      image: '',
    },
    {
      name: JobProjectsEnum.SAND,
      link: '/sandbox',
      description: 'Sandbox',
      image: '',
    },
  ];

  public async onOpenProject(project: ProjectsInterface): Promise<void> {
    const prjModal = await this.modalController.create({
      mode: 'md',
      component: ProjectsModalsComponent,
      cssClass: 'background-profile-modal',
      componentProps: {
        project
      }
    });
    await prjModal.present();
  }

}
