import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TIME } from '../time';
import { TimepaseService } from 'src/app/service/timepase.service';

@Component({
  selector: 'app-exampage',
  templateUrl: './exampage.component.html',
  styleUrls: ['./exampage.component.css']
})
export class ExampageComponent {
time:TIME;
hour:number=0;
min:number=0;
sec:number=0;

constructor( private route:Router,private ser : TimepaseService){
this.time=this.ser.getTime()
this.hour=this.time.hour;
this.min=this.time.minute;
this.sec=this.time.second;
  this.functionNr1();

}

p = new Date();
timer:any;
functionNr1() {
      this.p.setHours(this.hour, this.min, this.sec);
  console.log("Hello from functionNr1 before setTimeout in code");
  this.timer =setInterval (() => {
       this.fun();
    }, 1000);

  console.log("Hello from functionNr1 after setTimeout in code");

}

fun(){
this.p.setMilliseconds(-1000);

this.sec = this.p.getSeconds();
this.min = this.p.getMinutes();
this.hour = this.p.getHours();
if(this.sec == 0 && this.min == 0 && this.hour == 0 ){
this.navigate('/ThankPage')
}
}


navigate(url:string){
  clearInterval(this.timer);
  this.ser.logout();
  alert("Exam Ended");
  this.route.navigate([url])
}

emergy(){

  if(this.hour == 0 && this.min == 0 && this.sec < 10){
    return 'red';
  }
  return 'black';
}
}
