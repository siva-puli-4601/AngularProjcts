import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestserviceService {

  constructor() { }
getMobiles(){
  
  console.log("hello world from mss");
}

getItems()

{
  return [
    {id: 1, name: "item1",cat:"man"},
    {id: 2, name: "item2",cat:"man"},
    {id: 3, name: "item3",cat:"female"}
  
    ]
}
}
