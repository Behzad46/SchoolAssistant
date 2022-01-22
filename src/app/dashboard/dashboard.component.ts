import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared.service';
import {AppComponent} from '../app.component';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  StudentList:any[];
  public Active:boolean=true;

  constructor(private service:SharedService,public ActiveRoot:AppComponent) { }

  ngOnInit(): void {
    this.refreshStudentList();
    this.ActiveRoot.Activated=false;
    this.Active=this.ActiveRoot.ActivatedMenu;

  }

  refreshStudentList(){
    return this.service.getStudentsList().subscribe(data=>{
      this.StudentList=data.sort((a,b)=>{return a.Grade<b.Grade ? 1:(a.Grade>b.Grade ? -1 : 0);}).slice(0,5);
    });
    
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['قبلی', 'بعدی'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  /*slidesStore = [
    {
      id:1,
      src:'http://localhost:9351/Photos/Carousel_1.jpg',
      alt:'Image_1',
      title:'Image_1'
    },
    {
      id:2,
      src:'http://localhost:9351/Photos/Carousel_2.jpg',
      alt:'Image_2',
      title:'Image_3'
    },
    {
      id:3,
      src:'http://localhost:9351/Photos/Carousel_4.jpg',
      alt:'Image_3',
      title:'Image_3'
    },
    {
      id:4,
      src:'http://localhost:9351/Photos/Carousel_5.jpg',
      alt:'Image_4',
      title:'Image_4'
    },
    {
      id:5,
      src:'http://localhost:9351/Photos/qa.png',
      alt:'Image_5',
      title:'Image_5'
    }
  ]*/
}
