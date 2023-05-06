import { Injectable } from '@angular/core';
import { TIME } from '../Exam/time';

@Injectable({
  providedIn: 'root'
})
export class TimepaseService {
time={} as TIME;
private flag= false;
  constructor() { 
   
  }
  

  set(value: TIME){
  this.time = value;
  this.flag = true;
  console.log(this.time);

  }

  getTime(){
    console.log(this.time);
    
    return this.time;
  }
  isLogin(){
    return this.flag;
  }
  logout(){
    this.flag = false;
  }
}

