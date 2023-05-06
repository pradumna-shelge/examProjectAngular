import { Component } from '@angular/core';
import { result } from 'src/app/data';
import { QestionDataService } from 'src/app/service/qestion-data.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent {
  mark=0;
  out=0;
constructor(){

 let i = result.length;

 this.mark = result[i-1]?.mark;
 this.out = result[i-1]?.out-1;

}
}
