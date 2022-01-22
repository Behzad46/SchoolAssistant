import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl="http://localhost:9351/api";
  readonly PhotoUrl="http://localhost:9351/Photos/";
  readonly EmailUrl="http://localhost:9351/api/Email/sendemail";

  constructor(private http:HttpClient) { }

  getStudentList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Student');
  }
  addStudent(val:any){
    return this.http.post(this.APIUrl+'/Student',val);
  }
  updateStudent(val:any){
    return this.http.put(this.APIUrl+'/Student',val);
  }
  deleteStudent(val:any){
    return this.http.delete(this.APIUrl+'/Student/'+val);
  }
  getStudentsList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Students');
  }
  addStudents(val:any){
    return this.http.post(this.APIUrl+'/Students',val);
  }
  updateStudents(val:any){
    return this.http.put(this.APIUrl+'/Students',val);
  }
  deleteStudents(val:any){
    return this.http.delete(this.APIUrl+'/Students/'+val);
  }
  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Students/SaveFile',val);
  }
  getAllStudentName():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Students/GetAllStudentName');
  }
  getstudent(val:number):Observable<any[]>{
    const url=`${this.APIUrl+'/Students/Getstudent'}?id=${val}`
    return this.http.get<any>(url);
  }
  searchStudents(term:string): Observable<any[]>{
    if (!term.trim()){
      return of([]);
    }
    return this.http.get<any[]>(`${this.APIUrl+'/Students/GetstudentSearchName'}/?names=${term.trim()}`);
  }


  getpass(val1:string,val2:string):Observable<any[]>{
    const url=`${this.APIUrl+'/Passwords/Getpass'}?usernames=${val1.trim()}&passwords=${val2.trim()}`
    return this.http.get<any>(url);
  }
  addpass(val:any){
    return this.http.post(this.APIUrl+'/Passwords',val);
  }
  SendEmail(val:any){
    return this.http.post(this.EmailUrl,val);
  }
}


