import { Project } from "../project/project";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class ProjectDataService {
  _projects: Project[] = [];
  _featuredProjects: Project[] = [];

  constructor() {
    fetch('./assets/projects.json').then(
      response => {
        return response.json();
      }
    ).then(
      jsonData => {
        jsonData.forEach(
          (element: Object) => {
            console.log(element)
            const project = new Project(element);
            this._projects.push(project);
            if (project) {
              this._featuredProjects.push(project);
            }
          }
        )
      }
    );
  }

  getProjects() {
    return this._projects;
  }

  getFeaturedProjects() {
    return this._featuredProjects;
  }
}
