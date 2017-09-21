import { RouterModule, Routes } from "@angular/router";

import { StudentsComponent } from './students/students.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

import { ProfileComponent } from './profile/profile.component';

import { MyCanActivateGuard } from "./guards/mycanactivate.guard";
import { MyCanDeactivateGuard } from "./guards/mycandeactivate.guard";

const MY_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'students', component: StudentsComponent },
   { path: 'students/profile/:id', component: ProfileComponent, canActivate:[MyCanActivateGuard], canDeactivate: [MyCanDeactivateGuard]  },
   { path: 'error', component: ErrorComponent },
   { path: '**', redirectTo: '/' }
    // {
    //     path: 'students', component: StudentsComponent, children: [
    //         { path: 'profile/:id', component: ProfileComponent }
    //     ]
    // }

];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
