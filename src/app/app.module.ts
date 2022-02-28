import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { AppRoutingModule } from "../app-routing/app-routing.module";
import { ScullyLibModule } from '@scullyio/ng-lib';
import {FooterComponent} from "../footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
