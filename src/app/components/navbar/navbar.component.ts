import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  SearchText:string='';
  
  constructor(private dataservices:DataService) { }

  ngOnInit(): void {
  }
    
    onsearch(){
      console.log(this.SearchText);
    this.dataservices.search(this.SearchText);
    }
}
