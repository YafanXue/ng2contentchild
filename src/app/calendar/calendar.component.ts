import { variable } from '@angular/compiler/src/output/output_ast';


import { Component, OnInit,ContentChild } from '@angular/core';
import {DaypartComponent} from './../daypart/daypart.component'
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
 
})
export class CalendarComponent implements OnInit {

  constructor() { }
rows=[1,2,3,4,5];
cols=[0,1,2,3,4,5,0];

nday:number=0;

    // for ( i = 0; i < this.monthDays.length; i++ ) {
    //     if (i % 7 == 0) dates.push([]);
    //     dates[dates.length-1].push(monthDays[i]);
    // }


setarray () {
        
}
@ContentChild(DaypartComponent)
daypart:DaypartComponent;
dates = [];
monthDays = [0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,0];
  ngOnInit() {
     
        //for (var v in array) // for acts as a foreach

       for (var i = 0; i < this.monthDays.length; i++ ) {
        if (i % 7 == 0) this.dates.push([]);
        this.dates[this.dates.length-1].push(this.monthDays[i]);
    } 
       
  }
 ngAfterContentInit(){
   this.nday+=1;
   console.log('nday='+this.nday);
   //this.daypart.target=this.nday.toString();
   console.log(this.daypart);
 }
}
class A {
    function () {
        var array = [ 1,2,3,4];        
        for (var v in array) // for acts as a foreach
        { 
            alert(array[v]);
        }
      }
}