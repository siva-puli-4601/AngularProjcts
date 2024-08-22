import { Component } from '@angular/core';
import { TestserviceService } from '../testservice.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-category',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  public val:any;
  constructor(public route:ActivatedRoute, public service:TestserviceService){}
  ngOnInit()
  {
    this.route.queryParamMap.subscribe(params =>
    {
      let cat=params.get('cat');
      if(cat)
      {
        this.val=this.service.getItems().filter(item => item.cat==cat);
      }
      else
      {
        this.val=this.service.getItems();
      }
      console.log(this.val);

    }
    )
  }
}
