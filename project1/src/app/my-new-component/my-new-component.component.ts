import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-new-component',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello</h1>
    <h1>Hello {{name}}</h1>
    <!-- <h1 class="dist">Hello world from</h1> -->
    <h1 [class]="textClass">Hello MSS</h1>
    <h1 [ngClass]="dist">hai puli</h1>
    <h1 [style.color]="hasError ? 'yellow' : 'orange'">lucky</h1>
    <h1 [style]="colors">india</h1>
    <h1 [ngStyle]="colors">country</h1>
    <input type="text" (blur)="changeUsername($event)" />
    <input type="password" (blur)="changePassword($event)" />
    <h1>{{username}}</h1>
    <h1>{{password}}</h1>
  `,
  styles: [`
    .text-success {
      color: red;
    }
    .text-danger {
      color: green;
    }
    .text-special {
      font-style: italic;
    }
  `]
})
export class MyNewComponentComponent {
  public textClass = "text-success";
  public hasError = true;
  public color = "pink";
  public colors = {
    color: "green",
    fontStyle: "italic"
  };
  public dist = {
    "text-success": true,
    "text-danger": false,
    "text-special": true
  };
  public name = "siva";
  
  public username = "hello";
  public password = "hello";

  changeUsername(event: FocusEvent) {
    const target = event.target as HTMLInputElement;
    this.username = target.value;
    console.log(this.username);
  }

  changePassword(event: FocusEvent) {
    const target = event.target as HTMLInputElement;
    this.password = target.value;
    console.log(this.password);
  }
}
