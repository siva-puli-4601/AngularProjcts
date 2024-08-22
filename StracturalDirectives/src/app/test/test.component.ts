import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  template:`
    <h1>{{name | lowercase}}</h1>
    <h1>{{name | uppercase}}</h1>
    <h1>{{name | titlecase}}</h1>

    <h1>{{ 10 | currency:"Rs" }}</h1>
    <h1>{{ 0.25 | percent }}</h1>

    <h1>{{data}}</h1>
    <h1>Child</h1>

    <button (click)="fireEvent()">Click</button>
  `,
  styleUrl: './test.component.css'
})
export class TestComponent {
  @Input("paraentData") public data: any;
  @Output() public childEvent=new EventEmitter();
  fireEvent()
  {
    this.childEvent.emit("hello MSS");
  }

  public name="sivareddy _puli";
}
