import { Component, OnInit,Input } from '@angular/core';
import {AppComponent} from '../app.component';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { AuthService } from  '../auth.service';
import {SharedService} from '../shared.service';
import{Location} from '@angular/common'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  isSubmitted  =  false;
  ActiveModal:boolean=true;
  ActiveInvalidUser:boolean=false;
  UserName:string;
  Password:string;
  PasswordsList:any=[];

  constructor(private location:Location,private service:SharedService,private authService: AuthService,private formBuilder: FormBuilder,public ActiveRoot:AppComponent) {
    this.ActiveRoot.Activated=false;
   }
 
  ngOnInit(): void {
      this.loginForm  =  this.formBuilder.group({
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
   this.UserName=this.authService.login(this.loginForm.value).username;
   this.Password=this.authService.login(this.loginForm.value).password;
   
   this.UserName="'"+this.UserName.trim()+"'"
   this.Password="'"+this.Password.trim()+"'"
   this.Passwords(this.UserName,this.Password)
   this.isSubmitted = true;
   if(this.loginForm.invalid){
     return;
   }
    this.ActiveInvalidUser=true;
  }
  
  onClose(){
    this.location.back();

  }
  onHide(){
    this.ActiveModal=false;
    this.location.go("");

  }
  Passwords(e1:string,e2:string) {
     return this.PasswordsList=this.service.getpass(e1,e2).subscribe((data)=>{
      this.PasswordsList=data;
    });
  } 
}

