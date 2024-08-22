import { Component } from '@angular/core';
import { mapToCanActivateChild, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import path from 'path';
import { AboutComponent } from './about/about.component';
import { AboutinfoComponent } from './aboutinfo/aboutinfo.component';
import { CompoinfoComponent } from './compoinfo/compoinfo.component';
import { CategoryComponent } from './category/category.component';
import { About1Component } from './about1/about1.component';
import { About2Component } from './about2/about2.component';
import { AuthService } from './auth.service';
import { dashGuard } from './guards/dash.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Dashboard12Component } from './dashboard12/dashboard12.component';
import { dash1Guard } from './guards/dash1.guard';
import { checkGuard } from './guards/check.guard';
import { dash2Guard } from './guards/dash2.guard';
export const routes: Routes = [
    {
        path: "", component: HomeComponent,canDeactivate:[checkGuard]

    },
    
    {
      path:"dash",
      canActivate:[dashGuard],
      children:[

      {
        path:"",
        component:DashboardComponent
      },
      {
        path:"",
        canActivateChild:[dash1Guard],
      children:[
       
        {
            path:"dash1", component:Dashboard1Component
        },
        {
            path:"dash2", component:Dashboard12Component
        }
        
      ]
    }
    ]

    },
    {
        path:"about", component:AboutComponent,canActivate:[AuthService],resolve:{
            data:dash2Guard

        },

        children:[
            {
                path:"about1",component:About1Component
            },
            {
                path:"about2", component:About2Component
            }
        ]
    },
    {
        path:"aboutinfo/:id", component:AboutinfoComponent
    },
    {
      path:"compoinfo/:id/:name", component:CompoinfoComponent
    },
    {
     path:"products", component:CategoryComponent
    }
    
];
