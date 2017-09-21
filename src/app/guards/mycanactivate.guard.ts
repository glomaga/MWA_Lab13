import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { DbService } from '../db/db.service';
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
//import { Subscription } from "rxjs/Rx";
@Injectable()
export class MyCanActivateGuard implements CanActivate {
  items;

  constructor(private router: Router,private DbService: DbService) {
    console.log("guard in action ");
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    console.log(route);
    console.log(state);
    console.log("ID " + route.params['id'])
    this.items = this.DbService.getInfo(route.params['id']);
    console.log(this.items);
    if (this.items == undefined) {
         // start a new navigation to redirect to login page
        this.router.navigate(['/error']);
      return false;

    }
    else {
      return true;
    }
    //   return confirm('Are you sure?');
  }
}
