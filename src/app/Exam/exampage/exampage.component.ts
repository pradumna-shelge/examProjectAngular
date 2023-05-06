import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ANSWER, QUESTION, TIME } from '../time';
import { TimepaseService } from 'src/app/service/timepase.service';
import { QestionDataService } from 'src/app/service/qestion-data.service';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

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
questions:QUESTION[]|undefined;
p = new Date();
timer:any;
answer=[{}as ANSWER];
constructor( private route:Router,private ser : TimepaseService,private service:QestionDataService){



this.service.get().subscribe((questions:QUESTION[]) =>{
this.questions= questions;
this.questions.forEach(e=>{

  this.answer.push({
    Id: e.Id,
    status:false,
  })
})

console.log(this.answer);

})
console.log(this.answer);
this.time=this.ser.getTime()
this.hour=this.time.hour;
this.min=this.time.minute;
this.sec=this.time.second;
this.functionNr1();


}
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
 let c =0 ;
 let out = this.answer?.length 

 this.answer?.forEach(e=>{
  if(e.status){
    c++;
    console.log("exam")
  }
 })
if(out)
 this.service.answer(c,out);
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

answerCheck(id:number,ans:String){
let answer =""
this.questions?.forEach(e=>{
  if(id == e.Id){
      
      answer = e.Ans;
    }
  })
  if(answer === ans){
    if(this.answer){
      this.answer.forEach(e=>{
      console.log(answer == ans)
      if(id == e.Id){
        console.log(id)
        e.status =true
      }
    })
    }
  }
}


}
