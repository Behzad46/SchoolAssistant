import { Component } from '@angular/core';
import{Location} from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Students';
  public Activated:boolean=true;
  public ActivatedMenu:boolean=false;
  public l1on:boolean=false;
  public l1off:boolean=true;
  public l2on:boolean=false;
  public l2off:boolean=true;

  public logiName:string;
  public logiFamily:string;

  constructor(private location:Location) { 
  }

  onBack(){
    this.Activated=true;
    this.location.back();
  }
}
