import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TestserviceService } from '../testservice.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  items:any;
  constructor(public route:Router,public service:TestserviceService){}
  ngOnInit()
  {
    this.items=this.service.getItems();
    }

    onClick(id:any)
    {
      this.route.navigate(['/aboutinfo',id]);
    }
}
