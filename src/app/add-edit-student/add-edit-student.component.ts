import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from '../shared.service';
import {Location} from '@angular/common'

@Component({
  selector: 'app-add-edit-student',
  templateUrl: './add-edit-student.component.html',
  styleUrls: ['./add-edit-student.component.scss']
})
export class AddEditStudentComponent implements OnInit {

  constructor(private service:SharedService,private location:Location) { }

    @Input() Stu:any;
    Id:string;
    Name:string;

  ngOnInit(): void {
    this.Id=this.Stu.Id;
    this.Name=this.Stu.Name;
  }
  addStudent(): void{
    var val={Id:this.Id,
             Name:this.Name.trim()};
          this.service.addStudent(val).subscribe(res=>{
            alert(res.toString());
            this.onClose();
    });

  }
  updateStudent():void{
    var val={Id:this.Id,
             Name:this.Name.trim()};
          this.service.updateStudent(val).subscribe(res=>{
            alert(res.toString());
            this.onClose();
    });

  }
  onClose(){
    this.location.back();
  }
}
