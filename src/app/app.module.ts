import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { CalOverviewComponent } from './cal-overview/cal-overview.component';
import { NewEventComponent } from './new-event/new-event.component';
import { EventComponent } from './event/event.component';

import {ProgressBarModule} from 'primeng/progressbar';
import {TabViewModule} from 'primeng/tabview';
import {ScheduleModule} from 'primeng/schedule';

import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {MenuModule} from 'primeng/menu';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {GrowlModule} from 'primeng/growl';

import {MessageService} from 'primeng/components/common/messageservice';
import {CheckboxModule} from 'primeng/checkbox';
import { MyeventsComponent } from './myevents/myevents.component';



const appRoutes: Routes = [
  { path: 'event', component: EventComponent },
  { path: 'newevent',      component: NewEventComponent },
  { path: '',      component: CalOverviewComponent },
  { path: 'myevents', component: MyeventsComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    CalOverviewComponent,
    NewEventComponent,
    EventComponent,
    MyeventsComponent,
  ],
  imports: [
    CheckboxModule,
    ScheduleModule,
    GrowlModule,
    BrowserAnimationsModule,
    MenuModule,
    ButtonModule,
    CardModule,
    TabViewModule,
    ProgressBarModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }




