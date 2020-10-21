import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from "./Home/home.component";
import { SponsorComponent } from "./Sponsor/sponsor.component";
import { MembershipComponent } from "./Membership/membership.component";
import { ContactComponent } from "./Contact/Contact.component";
import { ContinuingEducationComponent } from "./ContinuingEducation/ce.component";
import { LegislationComponent } from "./Legislation/legislation.component";
import { LinksComponent } from "./Links/links.component";
import { OfficersComponent } from "./Officers/officers.component";
import { MeetingsComponent } from "./Meetings/meetings.component";
import { ProjectComponent } from "./Projects/projects.component";
import { CEMeetingComponent } from "./EventCalendar/continuingEducation.component";
import { GeneralMeetingComponent } from "./EventCalendar/generalMeeting.component";
import { ProjectMeetingComponent } from "./EventCalendar/projectMeeting.component";
import { EventCalendarComponent } from "./EventCalendar/eventCalendar.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SponsorComponent,
    MembershipComponent,
    ContactComponent,
    ContinuingEducationComponent,
    LegislationComponent,
    LinksComponent,
    OfficersComponent,
    MeetingsComponent,
    ProjectComponent,
    CEMeetingComponent,
    GeneralMeetingComponent,
    ProjectMeetingComponent,
    EventCalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
