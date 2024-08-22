import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-data-card',
  templateUrl: './data-card.component.html',
  styleUrls: ['./data-card.component.scss']
})
export class DataCardComponent {
   @Input() data:any;
   constructor(private httpservice:HttpService){}
   delete(id:any,type:any){
     console.log(id);
     console.log(type);

     if(type=="student"){
       this.httpservice.deletestudentdata(id).subscribe({
        next:(res:any)=>{
          console.log(res);
          console.log("deleted successfully `${id}` ");
          window.location.reload();
        },error:(err:any)=>{
          console.log(err);
        }
       });
     }

    


   }
}
