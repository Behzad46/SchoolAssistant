import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from '../shared.service';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {

  constructor(private location:Location,private route:ActivatedRoute,private service:SharedService) { }

  @Input() Stu:any;
  Id:string;
  Name:string;
  EnName:string;
  Grade:string;
  DateOfJoining:string;
  PhotoFileName:string;
  Photo:string;

  students:any[];
  StudentsList:any[];

  ngOnInit(): void {
    this.loadStudent();
  }

  loadStudent(){
    this.Photo=this.service.PhotoUrl;
    const id= this.route.snapshot.paramMap.get('id');
    return  this.service.getstudent(Number(id)).subscribe(data=>{
        this.students=data;
        this.Id=this.Stu.Id;
        this.Name=this.Stu.Name;
        this.EnName=this.Stu.EnName;
        this.Grade=this.Stu.Grade;
        this.PhotoFileName=this.Stu.PhotoFileName;
        this.DateOfJoining=this.Stu.DateOfJoining;
      });
  }

  updateStudents(item):void{
    var val={Id:item.Id,
      Name:item.Name.trim(),
      enName:item.EnName.trim(),
      Grade:item.Grade,
      DateOfJoining:item.DateOfJoining,
      PhotoFileName:item.PhotoFileName
     };
          this.service.updateStudents(val).subscribe(res=>{
            alert(res.toString());
            this.location.back();
    });

  }

  onClose(){
    this.location.back();
  }
}
