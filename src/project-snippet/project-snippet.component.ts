import {Component, Input, OnChanges, SimpleChanges} from '@angular/core'
import {Project} from "../project/project";

@Component({
  selector:'app-project-snippet',
  templateUrl:'./project-snippet.component.html',
  styleUrls:['./project-snippet.component.css']
})
export class ProjectSnippetComponent implements OnChanges {
  private _project: Project = Object.assign(new Project(), {})

  @Input()
  set project(value: Project) {
    this._project = value;
  }

  get project(): Project {
    return this._project;
}

  ngOnChanges(changes: SimpleChanges) {
    this.project = changes['project'].currentValue;
  }
}
