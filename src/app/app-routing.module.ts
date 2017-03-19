// import { CalendarComponent } from './calendar/calendar.component';
import {CalendarComponent} from './calendar/calendar.component'
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
const routes: Routes = [

  { path: '', component: CalendarComponent,

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    enableTracing: false
  })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
