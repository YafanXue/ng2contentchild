import { Component, OnInit } from '@angular/core';
import { CalendarComponent} from './../calendar/calendar.component';
import { DaypartComponent} from './../daypart/daypart.component';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
