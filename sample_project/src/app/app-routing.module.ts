import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DisplayComponent } from './display/display.component';
import { AuthGuard } from './guards/auth.guard';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: "", component:HomeComponent },
  {path: "login",component:LoginComponent},
  {path: "register",component:RegistrationComponent},
  {path:"display", component:DisplayComponent, resolve:{
    data: AuthGuard
  }},
  {path:"about", component:AboutComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
