import { Project } from "../project/project";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class ProjectDataService {
  _projects: Project[] = [];
  _featuredProjects: Project[] = [];
  notLoaded: boolean = true;

  constructor() {
    fetch('./assets/projects.json').then(
      response => {
        return response.json();
      }
    ).then(
      jsonData => {
        jsonData.forEach(
          (element: Object) => {
            const project = new Project(element);
            this._projects.push(project);
            if (project.featured) {
              this._featuredProjects.push(project);
            }
          }
        )

        this.notLoaded = false;
      }
    );
  }

  getProject(uri: string) {
    return this._projects.find(project => project.uri === uri);
  }

  getProjects() {
    return this._projects;
  }

  getFeaturedProjects() {
    return this._featuredProjects;
  }
}
