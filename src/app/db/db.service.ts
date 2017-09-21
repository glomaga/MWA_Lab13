import { Injectable } from '@angular/core';

@Injectable()
export class DbService {
  //private data: string[] = ["1","2","3"];

  private data= [
    {
      "id":'1',
      "name":"Asaad Saad",
      "stuID":'1234',
      "email":"asaad@mum.edu"
     },
     {
      "id":'2',
      "name":"Gloria Gallego",
      "stuID":'4231',
      "email":"ggallego@mum.edu"
     },
     {
      "id":'3',
      "name":"Gina Peralta",
      "stuID":'67886',
      "email":"gperalta@mum.edu"
     }
    ];

  constructor() { }
  getData() {
    return this.data;
}

getInfo(input: string) {
  return this.data.filter(function(item) {
    return item.id === input;
  })[0];
}

}
