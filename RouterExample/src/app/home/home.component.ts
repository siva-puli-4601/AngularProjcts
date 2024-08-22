import { Component } from '@angular/core';
import { TestserviceService } from '../testservice.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public isDirty=true;
  public items:any;
  constructor(public service:TestserviceService)
  {

  }
  ngOnInit()
  {
  this.items=this.service.getItems();
  }
}
