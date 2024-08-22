import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpclient:HttpClient) { }

  poststudentdata(data:any){
    return this.httpclient.post("http://localhost:3000/students",data);
  }
  postteacherdata(data:any){
    return this.httpclient.post("http://localhost:3000/teachers",data);
  }

  getstudentdata(){
    return this.httpclient.get("http://localhost:3000/students");
  }
  getteacherdata(){
    return this.httpclient.get("http://localhost:3000/teachers");
  }

  deletestudentdata(id:any){
    return this.httpclient.delete("http://localhost:3000/students/"+id);
  }
  deleteteacherdata(id:any){
    return this.httpclient.delete("http://localhost:3000/teachers/"+id);
  }

}
