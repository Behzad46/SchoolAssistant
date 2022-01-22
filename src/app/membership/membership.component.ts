import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import {AppComponent} from '../app.component';
import{Location} from '@angular/common'
import {SharedService} from '../shared.service';
import { AuthService } from  '../auth.service';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss']
})
export class MembershipComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted  =  false;
  ActiveModal:boolean=true;
  ActiveModalOk:boolean=false;
  Username:string;
  Password:string;
  Name:string;
  Family:string;
  Email:string;

  constructor(private authService: AuthService,private service:SharedService,private location:Location, private formBuilder: FormBuilder,public ActiveRoot:AppComponent) {
    this.ActiveRoot.Activated=false;
   }

  ngOnInit(): void {
    this.loginForm  =  this.formBuilder.group({
      name: [''],
      family: [''],
      email: ['',Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
}
get formControls() { return this.loginForm.controls; }

login(){
  
  console.log(this.loginForm.value);
  this.isSubmitted = true;
  if(this.loginForm.invalid){
    return;
  }
    this.Username=this.authService.Member(this.loginForm.value).username.trim(),
    this.Password=this.authService.Member(this.loginForm.value).password.trim(),
    this.Name=this.authService.Member(this.loginForm.value).name.trim(),
    this.Family=this.authService.Member(this.loginForm.value).family.trim(),
    this.Email=this.authService.Member(this.loginForm.value).email.trim(),
  this.isSubmitted = true;
  if(this.loginForm.invalid){
    return;
  }
  if(this.Email==""){
    return;
   }
    this.ActiveModal=false;
    this.ActiveModalOk=true;
}
  onClose(){
    this.location.back();

  }
}
