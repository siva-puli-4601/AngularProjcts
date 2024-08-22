import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestserviceService {

  constructor() { }

  items=["siva"];
  addTodo(ele: string)
  {
    this.items.push(ele);
  }
  deletetodo(i:any)
  {
    this.items.splice(i,1);
  }
  getItems()
  {
    return this.items;
  }
}
