import { NgModule } from '@angular/core';

import { HomeComponent } from '../home/home.component';
import { AboutComponent } from "../about/about.component";
import {RouterModule, Routes} from "@angular/router";
import {ProjectsComponent} from "../projects/projects.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'about', component: AboutComponent },
]

@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent,
    ProjectsComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
