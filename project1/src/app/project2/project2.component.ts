import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-project2',
  standalone: true,
  imports: [FormsModule],
  template: `
            <input #username type="text" />
            <input #password type="password" />
            <button (click)="login(username.value,password.value)">Login</button>
            <input [(ngModel)]="name" type="text"  />
            <h1>name is {{name}}</h1>

            <input [(ngModel)]="uname" type="text" />
            <input [(ngModel)]="upass" type="text" />

            <h1>{{uname}}   {{upass}}
            </h1>
            `,
  styleUrl: './project2.component.css'
})
export class Project2Component {
  public name=""
  // function(event:any)
  // {
  //   this.name=event.target.value
  //   console.log(name) 
  // }
  login(username: string, password: string)
  {
    console.log(username)
    console.log(password)
  }
  public uname="";
  public upass="";
}
