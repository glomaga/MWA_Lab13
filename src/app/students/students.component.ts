import { Component, OnInit } from '@angular/core';
import { DbService } from '../db/db.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  value = '';
  items = [];

  constructor(private DbService: DbService) { }

  ngOnInit() {
    this.items = this.DbService.getData().slice(0);
  }

}
