import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestserviceService } from '../testservice.service';

@Component({
  selector: 'app-aboutinfo',
  standalone: true,
  imports: [],
  templateUrl: './aboutinfo.component.html',
  styleUrl: './aboutinfo.component.css'
})
export class AboutinfoComponent {
  cursor:any;
    constructor(public route:ActivatedRoute, public service:TestserviceService){}
    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        const id = params.get('id');
        if (id) {
          const id1 = parseInt(id, 10);
          const arr = this.service.getItems();
          this.cursor = arr.filter(item => item.id === id1);
          console.log(this.cursor);
        }
      });
    }
}
