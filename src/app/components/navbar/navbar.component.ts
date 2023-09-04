import { Component, OnInit } from '@angular/core';
import { NavbarInterface } from '../modules/interfaces/navbar.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  constructor() { }

  public navbarList: NavbarInterface[] = [
    {
      link: '/home#about',
      name: 'Sobre mim'
    },
    {
      link: '/home#private',
      name: 'Projetos pessoais'
    },
    {
      link: '/home#job',
      name: 'Projetos profissionais'
    },
  ]

}
