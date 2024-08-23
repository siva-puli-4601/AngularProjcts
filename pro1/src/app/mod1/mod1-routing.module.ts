import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mod1Component } from './mod1.component';
import { HaiComponent } from './hai/hai.component';

const routes: Routes = [{ path: '', component: Mod1Component },
                          {path:"hai", component: HaiComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mod1RoutingModule { }
