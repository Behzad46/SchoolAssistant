import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentsComponent} from './students/students.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ExitComponent } from './exit/exit.component';
import { MembershipComponent } from './membership/membership.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';

const routes: Routes = [
  //{path: '' ,redirectTo: 'login',pathMatch: 'full'},
  {path: 'exit' ,component:ExitComponent},
  {path: 'login' ,component:LoginComponent},
  {path: 'membership' ,component:MembershipComponent},
  {path: 'dashboard' ,component:DashboardComponent},
  {path:'students',component:StudentsComponent},
  {path: 'detail/:id' ,component:StudentDetailComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
