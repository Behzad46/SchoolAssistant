import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import{SharedService} from '../shared.service';
import{AppComponent} from '../app.component';



@Component({
  selector: 'app-show-student',
  templateUrl: './show-student.component.html',
  styleUrls: ['./show-student.component.scss']
})
export class ShowStudentComponent implements OnInit {

  constructor(private service:SharedService,public ActiveRoot:AppComponent) { }

  StudentsList:any[];
  public ModalTitle="";
  public ActivatedAddEditStudents:boolean=false;
  public ActivatedDetailStudent:boolean=false;
  public IdDetail="";
  Stus:any;
  public Active:boolean=true;

  StudentsIdFilter:string="";
  StudentsNameFilter:string="";
  StudentsListWithoutFilter:any=[];


  ngOnInit(): void {
    this.refreshStudentList();
    this.ActiveRoot.Activated=false;
    this.Active=this.ActiveRoot.ActivatedMenu;
  }

  addClick(): void{
    this.Stus={
      Id:0,
      Name:"",
      EnName:"",
      Grade:0,
      PhotoFileName:"",
      DateOfJoining:""
    }
    this.ModalTitle="مشخصات دانش آموز را وارد کنید";
    this.ActivatedAddEditStudents=true;
  }

  closeClick(){
    this.ActivatedAddEditStudents=false;
    this.refreshStudentList();
  }  

  editClick(item){
    this.Stus=item;
    this.ModalTitle="مشخصات دانش آموز را اصلاح کنید";
    this.ActivatedAddEditStudents=true;

  }

  deleteClick(item){
    if(confirm("برای حذف اطمینان دارید??")){
      this.service.deleteStudents(item.Id).subscribe(data=>{
        alert(data.toString())
        this.refreshStudentList();
      })
    }

  }

  refreshStudentList(){
    return this.service.getStudentsList().subscribe(data=>{
      this.StudentsList=data;
      this.StudentsListWithoutFilter=data;
    });

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
  show(itemshow){
    alert(itemshow);
  }

}


