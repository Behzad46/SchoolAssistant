import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import{Location} from '@angular/common';

@Component({
  selector: 'app-exit',
  templateUrl: './exit.component.html',
  styleUrls: ['./exit.component.scss']
})
export class ExitComponent implements OnInit {

  constructor(private location:Location,public ActiveRoot:AppComponent) { 
    this.ActiveRoot.l1off=true;
    this.ActiveRoot.l1on=false;
    this.ActiveRoot.l2off=true;
    this.ActiveRoot.l2on=false;
    this.ActiveRoot.logiName="";
    this.ActiveRoot.logiFamily="";
    this.ActiveRoot.ActivatedMenu=false;
    this.location.go("");
}

  ngOnInit(): void {
}

}
