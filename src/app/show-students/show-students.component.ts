import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import{SharedService} from '../shared.service';
import { StudentComponent } from '../student/student.component';

@Component({
  selector: 'app-show-students',
  templateUrl: './show-students.component.html',
  styleUrls: ['./show-students.component.scss']
})
export class ShowStudentsComponent implements OnInit {

  constructor(private service:SharedService) {
    
   }

  StudentsList:any[];
  public ModalTitle="";
  ActivatedAddEditStudents:boolean=false;
  Stus:any;

  StudentsIdFilter:string="";
  StudentsNameFilter:string="";
  StudentsListWithoutFilter:any=[];


  ngOnInit(): void {
    this.refreshStudentsList();
  }

  addClick(): void{
    this.Stus={
      Id:0,
      Name:"",
      enName:"",
      Grade:0,
      PhotoFileName:""
    }
    this.ModalTitle="Add Students";
    this.ActivatedAddEditStudents=true;
  }

  closeClick(){
    this.ActivatedAddEditStudents=false;
    this.refreshStudentsList();
  }  

  editClick(item){
    this.Stus=item;
    this.ModalTitle="Edit Students";
    this.ActivatedAddEditStudents=true;

  }

  deleteClick(item){
    if(confirm("Are you sure??")){
      this.service.deleteStudents(item.Id).subscribe(data=>{
        alert(data.toString())
        this.refreshStudentsList();
      })
    }

  }

  refreshStudentsList(){
    return this.service.getStudentsList().subscribe(data=>{
      this.StudentsList=data;
    });

  }
  show(itemshow){
    alert(itemshow);
  }

  FilterFn(){
    var StudentsIdFilter=this.StudentsIdFilter;
    var StudentsNameFilter=this.StudentsNameFilter;

    this.StudentsList=this.StudentsListWithoutFilter.filter(function(el){
      return el.Id.toString().toLowerCase().includes(
        StudentsIdFilter.toString().trim().toLowerCase()
        )&&
        el.Name.toString().toLowerCase().includes(
          StudentsNameFilter.toString().trim().toLowerCase()
        )
      });
    }
    sortResult(prop,asc){
      this.StudentsList=this.StudentsListWithoutFilter.sort(function(a,b){
        if(asc){
           return(a[prop]>b[prop])?1 :((a[prop]<b[prop]) ?-1:0);
        }
        else{
           return(b[prop]>a[prop])?1 :((b[prop]<a[prop]) ?-1:0);
        }  

      })
  }


}
