import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ProfileComponent } from '../modals/profile/profile.component';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {

  constructor(
    private readonly modalController: ModalController,
    protected readonly router: Router,
  ) { }

  public technologies: string[] = [
    'assets/images/Angular.png', 'assets/images/CSharp.png', 'assets/images/Python.png', 'assets/images/PHP.png', 'assets/images/JS.png', 'assets/images/Jenkins.png', 'assets/images/aws.png'
  ];

  public bio: string = 'Olá! Sou o Vinícius Martins Granso e atualmente trabalho com desenvolvimento WEB, sendo utilizado Angular Framework para criação de sites e aplicativos. ' +
    'Atualmente quase 2 anos no LIGA - FACENS já fiz parte do desenvolvimento de alguns projetos tanto mobile quanto WEB.';

  public async onOpenProfileModal(): Promise<void> {
    const modal = await this.modalController.create({
      component: ProfileComponent,
      mode: 'md',
      cssClass: 'background-profile-modal'
    });

    await modal.present();
  }

}
