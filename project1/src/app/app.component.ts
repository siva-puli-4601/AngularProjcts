import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import {Project2Component} from './project2/project2.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MyNewComponentComponent,Project2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project1';
}
