import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public ser:ServiceService){}

  islogin:boolean = false;

  profilePic:any = null;
  dropdownVisible=false;
  value:boolean = false;
  username:any;
  profile:any;
  ngOnInit() {
    // Safely check for the key in localStorage
    const savedState = localStorage.getItem('islogin');
    this.value = savedState === 'true'; // Default to false if key is not foun
    if(savedState==="true")
    {
      this.islogin=true;
      this.username=localStorage.getItem('username');
      this.profile=localStorage.getItem('profile');
      this.profilePic=this.profile;
    }
  
}
toggleDropdown()
{
  this.dropdownVisible=true;
} 
  logOut()
  {
    localStorage.removeItem('mail');
    localStorage.removeItem('password');
    localStorage.removeItem('islogin');
    this.value=false;
  }

 
}


