import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TestserviceService } from './testservice.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,HeaderComponent,CommonModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RouterExample';
  items:any;
  constructor(private http:HttpClient,public service: TestserviceService,public auth:AuthService) {
  }
  onClick(){
  this.service.getMobiles();
  }
  getData()
  {
    this.http.get("https://fakestoreapi.com/carts?userId=1").subscribe((data)=>
    {
     this.items = data;
    })
  }

  login(username:any,password:any)
  {
      this.auth.login(username,password);
  }
  Apidata:any;
  getApi(): Observable<any> {
    return this.http.get<any>("https://fakestoreapi.com/carts?userId=1");
  }

  clickEvent()
  {
    this.getApi().subscribe({
      next: (data)=>
      {
        this.Apidata=data;
      },
      error: (error)=>{
        console.log(error);
      }
    }

    )
  }


}


