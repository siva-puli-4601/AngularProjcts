import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { checkEmail,checkPassword } from './loginvalues';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ReactiveForm:any;

  constructor(private fb: FormBuilder,private route:Router,private ser:ServiceService,private dataser:DataService) {}

  ngOnInit() {
    this.ReactiveForm = this.fb.group({
      email: ["", [Validators.required, checkEmail(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      password: ["", [Validators.required, checkPassword(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]]
    });
  }

  onSubmit() {
   
    const mail = this.ReactiveForm.get('email')?.value;
    const pass = this.ReactiveForm.get('password')?.value;
    
    const admin = this.dataser.adminData().find((data: { email: any; password: any; })=> {
      return data.email === mail && data.password === pass;
    });

    const user = this.dataser.userData().find((data: { email: any; password: any; })=> {
      return data.email === mail && data.password === pass;
    });
      
    if(admin) {
      localStorage.setItem("mail", mail);
      localStorage.setItem("password", pass);
      localStorage.setItem("islogin","true");
      localStorage.setItem("type","admin");
      this.ser.setLogin(true);
      this.dataser.changeType("admin");
      alert("login passed");
      this.route.navigate(['/display']);
    }
    else if(user)
      {
        localStorage.setItem("mail", mail);
        localStorage.setItem("password", pass);
        localStorage.setItem("islogin","true");
        localStorage.setItem("type","user");
        this.ser.setLogin(true);
        this.dataser.changeType("user");
        alert("login passed");
        this.route.navigate(['/display']);
      } 
    else {
      alert("Invalid credentials");
    }
  }
}

