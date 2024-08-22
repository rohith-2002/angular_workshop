import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  regdata!:FormGroup;
  constructor(private fb:FormBuilder,private httpservice:HttpService,private router:Router){}
  ngOnInit(): void {
    this.regdata= this.fb.group({
      Name:["",[Validators.required,Validators.minLength(3)]],
      Email:["",[Validators.required,Validators.email]],
      role:["",[Validators.required]],
      city:["",[Validators.required]],
      state:["",[Validators.required]],
      pin:["",[Validators.required,Validators.minLength(6),Validators.maxLength(6)]],
  
    })
  }

  handelRegister(){
    if(this.regdata.invalid)return ;
    console.log(this.regdata.value);
    const type=this.regdata.value.role;
    console.log(type);
    if(type=="student"){
      this.httpservice.poststudentdata(this.regdata.value).subscribe(()=>{
        next:()=>{console.log("success");}
        console.log("success");
        this.router.navigate(['/dashboard']);
      })
    }
    if(type=="teacher"){
      this.httpservice.postteacherdata(this.regdata.value).subscribe(()=>{
        next:()=>{console.log("success");}
        console.log("success");
        this.router.navigate(['/dashboard']);
      })
    }
    
  }

}
