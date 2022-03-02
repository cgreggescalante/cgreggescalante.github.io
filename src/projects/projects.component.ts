import {Component} from '@angular/core'
import {ProjectDataService} from "../project-data/project-data.service";

@Component({
  selector:'app-about',
  templateUrl:'./projects.component.html',
  styleUrls:['./projects.component.css']
})
export class ProjectsComponent {
  constructor(
    private projectDataService: ProjectDataService
  ) { }

  get projects() {
    return this.projectDataService.getProjects();
  }
}
