import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";
import { DbService } from '../db/db.service';
import { Router } from "@angular/router";
import { Observable } from "rxjs/Rx";



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  //done = false;

// Read Route parameters from ActivateRoute
  // We will use Observable as wrapper to subscribe to param changes
  private subscription: Subscription;
  id: string;
  items;
  
  constructor(private activatedRoute: ActivatedRoute,private DbService: DbService) {
     // params will return an Observable
    // we need it so we track changes in parameters as this code will be run once at constructor
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => this.id = param['id']
  );

  this.items = this.DbService.getInfo(this.id);
  
  console.log(this.id);
    
  console.log(this.items);
   }

   ngOnDestroy() {
    this.subscription.unsubscribe();
  }




}
