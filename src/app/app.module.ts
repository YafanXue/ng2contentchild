import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import{ AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import {CalendarComponent} from './calendar/calendar.component';
import { DaypartComponent} from './daypart/daypart.component';
import { MasterComponent } from './master/master.component';
import { EventComponent } from './event/event.component';




@NgModule({
  declarations: [
    AppComponent,
    
    MasterComponent,
    
    CalendarComponent,
    DaypartComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
