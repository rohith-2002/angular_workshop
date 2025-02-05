import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
     path:'',
     component:RegisterComponent
  },{
    path:'dashboard',
    component:DashboardComponent,
    children:[
      {
        path:'student',
        component:DashboardComponent
      },{
        path:'teacher',
        component:DashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
