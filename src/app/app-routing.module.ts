import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
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

const routes: Routes = [{
    path: "sponsor",
    pathMatch: "full",
    component: SponsorComponent
  }, {
    path: "membership",
    pathMatch: "full",
    component: MembershipComponent
  }, {
    path: "meetings",
    pathMatch: "full",
    component: MeetingsComponent
  }, {
    path: "officers",
    pathMatch: "full",
    component: OfficersComponent
  }, {
    path: "continuingEducation",
    pathMatch: "full",
    component: ContinuingEducationComponent
  }, {
    path: "links",
    pathMatch: "full",
    component: LinksComponent
  }, {
    path: "legislation",
    pathMatch: "full",
    component: LegislationComponent
  }, {
    path: "contact",
    pathMatch: "full",
    component: ContactComponent
  }, {
    path: "projects",
    pathMatch: "full",
    component: ProjectComponent
  }, {
    path: "**",
    pathMatch: "full",
    component: HomeComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
