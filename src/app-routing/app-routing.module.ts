import { NgModule } from '@angular/core';

import { HomeComponent } from '../home/home.component';
import { AboutComponent } from "../about/about.component";
import { RouterModule, Routes } from "@angular/router";
import { ProjectsComponent } from "../projects/projects.component";
import { ProjectSnippetComponent } from "../project-snippet/project-snippet.component";
import { CommonModule } from "@angular/common";
import { ProjectDetailComponent } from "../project-detail/project-detail.component";
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:projectURI', component: ProjectDetailComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent,
    ProjectsComponent,
    ProjectSnippetComponent,
    ProjectDetailComponent,
    PageNotFoundComponent
  ],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
