import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Input } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.scss']
})
export class StudentDataComponent {
  @Input() SearchText:string='';
  studentdata:any[]=[];
  constructor(private httpservice:HttpService,private dataservice:DataService){
      this.httpservice.getstudentdata().subscribe({
            next:(res:any)=>{
              this.studentdata=res;
              console.log(this.studentdata);
            },error:(err:any)=>{
              console.log(err);
            }
      });
      this.dataservice.currenttext.subscribe((message) => {
        this.SearchText =message ;
  });
  }




}
