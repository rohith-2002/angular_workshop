import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private subject = new BehaviorSubject<any>('');
  currenttext = this.subject.asObservable();

  constructor() { }

  search(data:string){
     this.subject.next(data);
  }
}
