import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestserviceService } from '../testservice.service';

@Component({
  selector: 'app-compoinfo',
  standalone: true,
  imports: [],
  templateUrl: './compoinfo.component.html',
  styleUrl: './compoinfo.component.css'
})
export class CompoinfoComponent {

  constructor(public router:ActivatedRoute,public service:TestserviceService){}
  cursor:any;
  ngOnInit(){
    console.log(1234)
    this.router.paramMap.subscribe(params =>
    {
      let id=params.get('id');
      let name=params.get("name");
      let arr=this.service.getItems();
      console.log(id);
      if(id)
      {
        const id1 = parseInt(id, 10);
      this.cursor=arr.filter(item =>item.id==id1 && item.name==name);
      console.log(this.cursor)
      }
      
    })
  }
}
