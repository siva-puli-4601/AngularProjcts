import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private adminKey = 'admin';
  private userKey = 'user';

  constructor() { }

  // Add admin data to local storage
  adminAdd(res: any) {
    let adminData = this.getData(this.adminKey);
    adminData.push(res);
    localStorage.setItem(this.adminKey, JSON.stringify(adminData));
  }

  // Add user data to local storage
  userAdd(res: any) {
    let userData = this.getData(this.userKey);
    userData.push(res);
    localStorage.setItem(this.userKey, JSON.stringify(userData));
  }

  // Get admin data from local storage
  adminData() {
    return this.getData(this.adminKey);
  }

  // Get user data from local storage
  userData() {
    return this.getData(this.userKey);
  }

  // Retrieve data based on type (admin or user)
  getData(type: string) {
    const storedData = localStorage.getItem(type);
    return storedData ? JSON.parse(storedData) : [];
  }
  siva:string="user";
  changeType(ele: string){
    console.log(ele);
    this.siva=ele;
  }
  resData()
  {
     console.log("slhdb",this.siva);
    const check=localStorage.getItem(this.siva) || "";
   // const storedData = localStorage.getItem(check);
    return check ? JSON.parse(check) : [];
  }
}
