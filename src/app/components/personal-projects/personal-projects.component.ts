import { Component, OnInit } from '@angular/core';
import { NavbarInterface } from '../modules/interfaces/navbar.interface';

export type ProjectsInterface = NavbarInterface & { image: string, description: string }

@Component({
  selector: 'app-personal-projects',
  templateUrl: './personal-projects.component.html',
  styleUrls: ['./personal-projects.component.scss'],
})
export class PersonalProjectsComponent  implements OnInit {

  constructor() { }

  public projects: ProjectsInterface[] = [
    {
      name: 'Be Green',
      link: 'https://github.com/viniciusmartinsgranso/be-green/',
      image: 'https://be-green-upx.vercel.app/login',
      description: 'Projeto acadêmico realizado para a matéria de UPX - Engenharia Contemporânea.\n' +
        '\n' +
        'Que tem como objetivo a inclusão da sociedade nas informações sobre reciclagem, pontos de coleta, formas de reciclar, o que fazer com seus objetos que são considerados \'lixos\' e como reutilizá-los, além de receber pontos em troca de fazer o bem!\n' +
        'Realizando assim todo um ecossistema sustentabilidade na palma da sua mão.\n' +
        '\n' +
        'Aplicativo feito em Ionic com Angular Framework e atualmente com dados mockados, sendo utilizado o localstorage para o alocamento de informações.'
    },
    {
      name: 'Help Us',
      link: 'https://github.com/viniciusmartinsgranso/help-us/',
      image: 'https://help-us.vercel.app/',
      description: 'Projeto acadêmico realizado para a matéria de UPX - Engenharia Criativa, o App Help Us!\n' +
        'Que tem como objetivo a sociedade compartilhar informações entre a própria sociedade sobre ocorrências da cidade, como incêndios, desmoronamentos e batidas de trânsito.\n' +
        '\n' +
        'Aplicativo feito em Ionic com Angular Framework e atualmente com dados mockados, sendo utilizado o localstorage para o alocamento de informações.'
    },
    {
      name: 'Vinimail',
      link: 'https://github.com/viniciusmartinsgranso/email/',
      image: '',
      description: 'Descrição'
    },
    {
      name: 'Post-It',
      link: 'https://vercel.com/viniciusmartinsgranso/post-it',
      description: 'Projeto criado durante o Bootcamp do LIGA - FACENS no período de 2022.',
      image: '',
    }
  ]

  ngOnInit() {}

}
