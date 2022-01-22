import { Component, OnInit,Input } from '@angular/core';
import{Location} from '@angular/common';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() Name:string="";
  @Input() Family:string="";

  constructor(private location:Location,public ActiveRoot:AppComponent) { }

  ngOnInit(): void {
    if (this.Name.trim()===""){
      this.ActiveRoot.l1off=true;
      this.ActiveRoot.l1on=false;
      this.ActiveRoot.l2off=true;
      this.ActiveRoot.l2on=false;
      this.ActiveRoot.ActivatedMenu=false;
    }else{
    this.ActiveRoot.l1off=false;
    this.ActiveRoot.l1on=true;
    this.ActiveRoot.l2off=false;
    this.ActiveRoot.l2on=true;
    this.ActiveRoot.Activated=true;
    this.ActiveRoot.ActivatedMenu=true;
   }
    this.ActiveRoot.logiName=this.Name;
    this.ActiveRoot.logiFamily=this.Family;
    this.onBack();
  }

  onBack(){
    this.location.back();
  }
}
