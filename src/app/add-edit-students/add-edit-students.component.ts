import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from '../shared.service';
import {Location} from '@angular/common'
import {ShowStudentComponent} from '../show-student/show-student.component';

@Component({
  selector: 'app-add-edit-students',
  templateUrl: './add-edit-students.component.html',
  styleUrls: ['./add-edit-students.component.scss']
})
export class AddEditStudentsComponent implements OnInit {

  constructor(private service:SharedService,private location:Location,public modalt:ShowStudentComponent) { }

  @Input() Stus:any;
  Id:string;
  Name:string;
  EnName:string;
  Grade:string;
  DateOfJoining:string;
  PhotoFileName:string;
  PhotoFilePath:string;
  ModalTitle:string;

  Studentslist:any=[];
  Studentlist:any=[];
  
  ngOnInit(): void {
    this.loadStudentsList();
    this.ModalTitle=this.modalt.ModalTitle;

  }

  loadStudentsList(){
    this.service.getAllStudentName().subscribe((data:any)=>{
      this.Studentslist=data;
      this.Id=this.Stus.Id;
      this.Name=this.Stus.Name;
      this.EnName=this.Stus.EnName;
      this.Grade=this.Stus.Grade;
      this.DateOfJoining=this.Stus.DateOfJoining;
      this.PhotoFileName=this.Stus.PhotoFileName;
      this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
      })
    }

  addStudents(): void{
    
        var val={Id:this.Id,
             Name:this.Name.trim(),
             EnName:this.EnName.trim(),
             Grade:this.Grade,
             PhotoFileName:this.PhotoFileName,
             DateOfJoining:this.DateOfJoining

            };
          this.service.addStudents(val).subscribe(res=>{
            alert(res.toString());
            this.onClose();
    });

  }
  updateStudents():void{
      var val={Id:this.Id,
      Name:this.Name.trim(),
      enName:this.EnName.trim(),
      Grade:this.Grade,
      PhotoFileName:this.PhotoFileName,
      DateOfJoining:this.DateOfJoining
     };
          this.service.updateStudents(val).subscribe(res=>{
            alert(res.toString());
            this.onClose();
    });

  }

  upLoadPhoto(event){
    var file=event.target.files[0];

    const formData:FormData=new FormData;
    formData.append('uploadedFile',file,file.name);

    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.PhotoFileName=data.toString();
      this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
    })

  }

  StudentList(){
    return this.service.getStudentList().subscribe(data=>{
      this.Studentlist=data;
    });

  }
  onClose(){
    this.modalt.ActivatedAddEditStudents=false;
    this.modalt.refreshStudentList();
  }
}
