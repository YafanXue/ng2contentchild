import { Component, ContentChild, Input, OnInit, Output } from '@angular/core';
import { EventComponent} from './../event/event.component';
@Component({
  selector: 'app-daypart',
  templateUrl: './daypart.component.html',
  styleUrls: ['./daypart.component.css']

})
export class DaypartComponent  implements OnInit{

  constructor() { }
@ContentChild(EventComponent)
childevent:EventComponent;
// @ContentChild(EventComponent) eventC: EventComponent;

//holidays=[14,29];
holidays=[{id:14,name:"Valentine's Day",url:"http://localhost/ng2contentchild/assets/img/free-vector-valentine-day-icon_101898_Valentine_Day_Icon.png"},
{id:29,name:"Youth Day",url:"http://localhost/ng2contentchild/assets/img/stock-vector-international-youth-day-greeting-card-and-poster-design-423307660.jpg"}]
@Input() target:string;
thisday:string;
// @Output() thedate:string=(this.monthDays[this.thisday]);
i:number=0;


  ngOnInit() {
    //this.i=Number.parseInt( this.target);
    var m=this.holidays.find(obj=>obj.id===Number.parseInt(this.target));
    if(m!=undefined){
      this.i=m.id;
      console.log('i='+this.i.toString());
      console.log('m='+m.name);
      this.childevent.display(m.name,m.url);
    }


  }

}

