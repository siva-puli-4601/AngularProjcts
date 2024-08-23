import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public ser:ServiceService){}
  value:boolean = false;
  ngOnInit() {


   
    // Safely check for the key in localStorage
    const savedState = localStorage.getItem('islogin');

    this.value = savedState === 'true'; // Default to false if key is not found

  
} 
  logOut()
  {
    localStorage.removeItem('mail');
    localStorage.removeItem('password');
    localStorage.removeItem('islogin');
    this.value=false;
  }

 
}


