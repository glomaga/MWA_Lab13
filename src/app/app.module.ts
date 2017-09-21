import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { myRoutes } from "./app.routes";
import { MyCanActivateGuard } from "./guards/mycanactivate.guard";
import { MyCanDeactivateGuard } from "./guards/mycandeactivate.guard";
import { DbService } from './db/db.service';
import { ErrorComponent } from './error/error.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; //bootstrap
@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    HomeComponent,
    ProfileComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    myRoutes, // add it to imports
    NgbModule.forRoot()
  ],
  //providers: [],
  providers: [DbService,MyCanActivateGuard, MyCanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
