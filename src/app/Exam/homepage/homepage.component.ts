import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { TimepaseService } from 'src/app/service/timepase.service';
import { TIME } from '../time';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

constructor(private route:Router,private ser:TimepaseService){}

  navigate(hour:string,min:string,sec:string){


    let time:TIME = {
      hour:Number(hour),
      minute:Number(min),
      second:Number(sec)
    }
if(time.hour == 0&& time.minute==0 && time.second==0){
  alert("Please select time");
}
else{

  console.log("set"+hour+" "+min+" "+sec);
  
  this.ser.set(time)
  this.route.navigate(['./examPage'])
}
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }
}
