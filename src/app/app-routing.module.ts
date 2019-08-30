import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from "./auth/auth.component";
import { DeptComponent } from "./dept/dept.component";


const routes: Routes = [
  {
    path: "dept",
    component: DeptComponent
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
