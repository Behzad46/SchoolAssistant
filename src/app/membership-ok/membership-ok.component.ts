import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import {AppComponent} from '../app.component';
import{Location} from '@angular/common'
import {SharedService} from '../shared.service';
import { AuthService } from  '../auth.service';
import{MembershipComponent} from '../membership/membership.component';

@Component({
  selector: 'app-membership-ok',
  templateUrl: './membership-ok.component.html',
  styleUrls: ['./membership-ok.component.scss']
})
export class MembershipOkComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted  =  false;
  ActiveModal:boolean=true;
  ActiveLog:boolean=false;
  Usern:string;
  Pass:string;
  PasswordsList:any=[];

  Subject:string="کد برای عضویت در سیستم";
  Body:string="";
  rand:number;

  constructor(private authService: AuthService,private service:SharedService
    ,private location:Location, private formBuilder: FormBuilder
    ,public ActiveRoot:AppComponent,private member:MembershipComponent) {
    this.ActiveRoot.Activated=false;
   }

  ngOnInit(): void {
    this.loginForm  =  this.formBuilder.group({
      confirm: ['', Validators.required],
    });
    this.rand=Math.floor(Math.random()*10000);
    var valE={
      to:this.member.Email.trim(),
      subject:this.Subject,
      body:"لطفا کد دریافتی را وارد کنید:"+`${this.rand}`,
     };
     this.service.SendEmail(valE).subscribe(res=>{
       alert("کد تائید، به آدرس شما ارسال شد");
     });
}
  get formControls() { return this.loginForm.controls; }
  login(){
  
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
  var val={
      Username:this.member.Username.trim(),
      Password:this.member.Password.trim(),
      Name:this.member.Name.trim(),
      Family:this.member.Family.trim(),
      Email:this.member.Email.trim(),
  
     };
     if (this.rand==this.authService.Member(this.loginForm.value).confirm){
      this.service.addpass(val).subscribe(res=>{
        // alert('خوش آمدید');
        // this.onClose();
      });
       this.Usern="'"+this.member.Username.trim()+"'";
       this.Pass="'"+this.member.Password.trim()+"'";
       alert(`${this.member.Name.trim()} ${this.member.Family.trim()} خوش آمدید.`);
       this.Passwords(this.Usern,this.Pass);
       this.isSubmitted = true;
        if(this.loginForm.invalid){
          return;
        }
            this.ActiveModal=false;
            this.ActiveLog=true;
      }else{
        alert("کد وارد شده معتبر نمی باشد!!!")
      }
  }
  Passwords(e1:string,e2:string) {
    return this.PasswordsList=this.service.getpass(e1,e2).subscribe((data)=>{
     this.PasswordsList=data;
   });
 } 
   onClose(){
      this.location.back();
  
    }
  
}
