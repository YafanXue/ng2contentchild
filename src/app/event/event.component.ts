import { DisplayProcessor } from 'jasmine-spec-reporter/built/main';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
@Input() holidayname:string;
imgsrc:string;
  constructor() { }
 display(name:string,imgurl:string){
   this.holidayname=name;
   this.imgsrc=imgurl;
 }
  ngOnInit() {
    console.log('name='+this.holidayname);
  }

}
