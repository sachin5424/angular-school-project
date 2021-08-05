import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path:"",
    component:DashboardComponent
  },
  {
    path:"add",
    loadChildren:()=>import('./add-class/add-class.module').then(m=>m.AddClassModule)
  },
  {
    path:"classes",
    loadChildren:()=>import('./classes/classes.module').then(m=>m.ClassesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
