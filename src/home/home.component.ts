import { Component } from '@angular/core'
import {ProjectDataService} from "../project-data/project-data.service";

@Component({
  selector:'app-home',
  templateUrl:'./home.component.html',
  styleUrls:['./home.component.css']
})
export class HomeComponent {
  constructor(
    private projectDataService: ProjectDataService
  ) { }

  get featuredProjects() {
    return this.projectDataService.getFeaturedProjects()
  }
}
