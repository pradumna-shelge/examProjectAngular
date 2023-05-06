import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MARK, QUESTION } from '../Exam/time';
import { result } from '../data';

@Injectable({
  providedIn: 'root'
})
export class QestionDataService {
private url = '/assets/question.json';


  constructor(private http:HttpClient) { }


  get(){
    return this.http.get<QUESTION[]>(this.url)
  }


  answer(marks:number,out:number){

 console.log(marks,out);

 result.push({
  mark:marks,
  out:out
 })

  }
}
