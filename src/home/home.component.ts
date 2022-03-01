import { Component } from '@angular/core'
import { Project } from "../project/project";

@Component({
  selector:'app-home',
  templateUrl:'./home.component.html',
  styleUrls:['./home.component.css']
})
export class HomeComponent {
  featuredProjects = [
    new Project(1, "title", "description", ""),
    new Project(2, "other title", "different description", ""),
    new Project(3, "another title", "more description", "")
  ];
}
