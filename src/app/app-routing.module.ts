import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from "./auth/auth.component";
import { DeptComponent } from "./dept/dept.component";
import { EmpComponent } from "./emp/emp.component";
import { AddDeptComponent } from "./add-dept/add-dept.component";
import { AddEmpComponent } from "./add-emp/add-emp.component";


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
    path: "emp",
    component: EmpComponent
  },
  {
    path: "emp/add",
    component: AddEmpComponent
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
