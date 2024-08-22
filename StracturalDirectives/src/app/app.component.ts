import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { PipetestPipe } from "./pipetest.pipe";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TestComponent, PipetestPipe],
  template: `
       <div [ngSwitch]="color">
        <div *ngSwitchCase="'red'">this is red</div>
        <div *ngSwitchCase="'green'">this is green</div>
        <div *ngSwitchCase="'blue'">this is blue</div>
        <div *ngSwitchDefault>this is {{color}}</div>
       </div>

       <div *ngFor="let color of colors">
         <h1>{{color}}</h1>
       </div>

      
<div *ngFor="let it of cat">
  <!-- <div *ngFor="let x of it.items">
    <h1>{{ x }}</h1>
  </div> -->
  <h1>{{it.name}}</h1>
  <!-- <ul>
    <li *ngFor="let item of it.items">{{item}}</li>
  </ul> -->
</div>

<h1>{{massage}}</h1>
<app-test (childEvent)="massage=$event" [paraentData]="'hello child'"></app-test>

<h1>{{age | pipetest:wish}}</h1>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public hashError = true;
  title = 'StracturalDirectives';
  public status = "first";
  public check = true;
  color="black";
  public colors=["red","blue"];
public massage="";
  public cat=[
    {name:'John', age:30, city:'New York'},
    {name:"siva",age:40,city:"annavarm"},
    {name:'john', age:30, city:'New York'}
  ]

  public age=28;
  public wish="siva";
}
