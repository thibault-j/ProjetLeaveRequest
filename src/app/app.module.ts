import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {PanelMenuModule, MenuItem} from 'primeng/primeng';
import {DataTableModule, DialogModule} from 'primeng/primeng';
import {CalendarModule} from 'primeng/primeng';
import {SelectButtonModule} from 'primeng/primeng';

import {AppComponent} from './app.component';
import {HeaderComponent} from './widget/header/header.component';
import {LeaveRequestComponent} from './widget/leaveRequest/leave-request.component';
import {HomeComponent} from './widget/home/home.component';
import {SharedDataService} from './service/shared-data.service';

import {RouterModule} from '@angular/router';
import {ROUTES} from './app.route';
import {ApiPersonService} from './service/api-person.service';
import {ApiLeaveRequestService} from './service/api-leave-request.service';
import {HttpModule} from '@angular/http';
import {ListRequestsComponent} from './widget/listRequests/list-requests.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeaveRequestComponent,
    HomeComponent,
    ListRequestsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    PanelMenuModule,
    CalendarModule,
    SelectButtonModule,
    DataTableModule,
    DialogModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [SharedDataService, ApiPersonService, ApiLeaveRequestService],
  bootstrap: [AppComponent]
})


export class AppModule { }
