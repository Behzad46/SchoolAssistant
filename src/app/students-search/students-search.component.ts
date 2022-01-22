import { Component, OnInit } from '@angular/core';
import { Observable, Subject,of} from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-students-search',
  templateUrl: './students-search.component.html',
  styleUrls: ['./students-search.component.scss']
})
export class StudentsSearchComponent implements OnInit {

  
//  students$!: Observable<any[]>;

//  private searchTerms=new Subject<string>();

//  constructor(private service:SharedService) { }
//  search(term:string): void {
//    this.searchTerms.next(term);
    
//  }
//  ngOnInit(): void {
//    this.students$=this.searchTerms.pipe(
//      debounceTime(300),
//      distinctUntilChanged(),
//      switchMap((term:String)=>this.service.searchStudents(String(term).trim())),
//    );
//  }

StudentsList:any[];

StudentsNameFilter:string="";
StudentsListWithoutFilter:any=[];
ActivatedFilter:boolean=false;

constructor(private service:SharedService) { }
  
ngOnInit(): void {
  this.refreshStudentList();
}

refreshStudentList(){
  return this.service.getStudentsList().subscribe(data=>{
    this.StudentsList=data;
    this.StudentsListWithoutFilter=data;
  });

}
FilterFn(){
  var StudentsNameFilter=this.StudentsNameFilter;
  this.ActivatedFilter=true;
  if (!StudentsNameFilter.trim()){
    this.ActivatedFilter=false;
    return of([]);
  }
  this.StudentsList=this.StudentsListWithoutFilter.filter(function(el){
    return el.Name.toString().toLowerCase().includes(
        StudentsNameFilter.toString().trim().toLowerCase()
      )
    });
  }




}
