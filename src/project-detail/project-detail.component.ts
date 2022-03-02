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

  constructor(
    private route: ActivatedRoute,
    private projectDataService: ProjectDataService
  ) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const projectURI = String(routeParams.get('projectURI'));
    console.log(projectURI);
    this.project = this.projectDataService.getProject(projectURI);
    console.log(this.project);
  }
}
