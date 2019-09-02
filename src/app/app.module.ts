import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AmplifyAngularModule, AmplifyService, AmplifyModules } from 'aws-amplify-angular';
import Auth from '@aws-amplify/auth';
import Interactions from '@aws-amplify/interactions';
import Storage from '@aws-amplify/storage';

import { AuthComponent } from './auth/auth.component';
import { DeptComponent } from './dept/dept.component';
import { AddDeptComponent } from './add-dept/add-dept.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { EmpComponent } from './emp/emp.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DeptComponent,
    AddDeptComponent,
    AddEmpComponent,
    EmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAngularModule,
    ReactiveFormsModule,
  ],
  providers: [{
    provide: AmplifyService,
    useFactory: () => {
      return AmplifyModules({
        Auth,
        Storage,
        Interactions
      });
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
