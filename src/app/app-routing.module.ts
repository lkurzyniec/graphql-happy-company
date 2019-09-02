import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from "./auth/auth.component";
import { DeptComponent } from "./dept/dept.component";
import { AddDeptComponent } from "./add-dept/add-dept.component";


const routes: Routes = [
  {
    path: "dept",
    component: DeptComponent
  },
  {
    path: "dept/add",
    component: AddDeptComponent
  },
  {
    path: "",
    component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
