import { Component } from '@angular/core';
import { TestserviceService } from '../testservice.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  
  constructor(public route:ActivatedRoute){}
  ngOnInit()
  {
    console.log(this.route.snapshot.data);
  }
}
