import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentsComponent } from './students/students.component';
import { ShowStudentComponent } from './show-student/show-student.component';
import { AddEditStudentComponent } from './add-edit-student/add-edit-student.component';
import { ShowStudentsComponent } from './show-students/show-students.component';
import { AddEditStudentsComponent } from './add-edit-students/add-edit-students.component';
import {SharedService} from './shared.service';
import{ HttpClientModule} from '@angular/common/http';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentsSearchComponent } from './students-search/students-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LoginComponent } from './login/login.component';
import { MembershipComponent } from './membership/membership.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ExitComponent } from './exit/exit.component';
import { MembershipOkComponent } from './membership-ok/membership-ok.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentsComponent,
    ShowStudentComponent,
    AddEditStudentComponent,
    ShowStudentsComponent,
    AddEditStudentsComponent,
    DashboardComponent,
    StudentDetailComponent,
    StudentsSearchComponent,
    LoginComponent,
    MembershipComponent,
    ToolbarComponent,
    ExitComponent,
    MembershipOkComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule

  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
