import { Component, Input } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-teacher-data',
  templateUrl: './teacher-data.component.html',
  styleUrls: ['./teacher-data.component.scss']
})
export class TeacherDataComponent {
   @Input() SearchText:string=''; 
    teacherdata:any[]=[];
    constructor(private httpservice:HttpService,private dataservice:DataService){
        this.httpservice.getteacherdata().subscribe({
              next:(res:any)=>{
                this.teacherdata=res;
                console.log(this.teacherdata);
              },error:(err:any)=>{
                console.log(err);
              }
        })

        this.dataservice.currenttext.subscribe((message) => {
          this.SearchText = message ;
    })
  }
}
