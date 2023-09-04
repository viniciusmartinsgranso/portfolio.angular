import { Component, Input, OnInit } from '@angular/core';
import { ProjectsInterface } from '../../personal-projects/personal-projects.component';

@Component({
  selector: 'app-projects-modals',
  templateUrl: './projects-modals.component.html',
  styleUrls: ['./projects-modals.component.scss'],
})
export class ProjectsModalsComponent  implements OnInit {

  constructor() { }

  @Input()
  public project!: ProjectsInterface;

  public ngOnInit(): void {
  }
}
