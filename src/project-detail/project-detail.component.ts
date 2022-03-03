import { Component, OnInit } from '@angular/core'
import { ProjectDataService } from "../project-data/project-data.service";
import { Project } from "../project/project";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector:'app-home',
  templateUrl:'./project-detail.component.html',
  styleUrls:['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  project: Project | undefined;
  article: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private projectDataService: ProjectDataService
  ) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const projectURI = String(routeParams.get('projectURI'));
    this.waitForLoad(projectURI);

    fetch('../assets/projects/spotify_history.html')
      .then(response => response.text())
      .then(text => {
        this.article = text;
      });
  }

  waitForLoad(uri: string) {
    if (this.projectDataService.notLoaded) {
      console.log("waiting");
      setTimeout(() => this.waitForLoad(uri), 100);
    } else {
      this.project = this.projectDataService.getProject(uri);
    }
  }
}
