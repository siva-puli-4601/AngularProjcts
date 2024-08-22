import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TestserviceService } from './testservice.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private service:TestserviceService){}
  title = 'TODOLIST';
todoitem="";
totaltodo:any;
ngOnInit()
{
  this.totaltodo=this.service.getItems();
}
AddItem()
{
  this.service.addTodo(this.todoitem);
  this.todoitem='';
}
ResetItem()
{
  this.todoitem='';
}
Delete(i:any)
{
  this.service.deletetodo(i);
}
}
