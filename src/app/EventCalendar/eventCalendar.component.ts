import { Component, Input, OnInit } from '@angular/core';
import { MeetingModel, CEMeetingModel, ProjectModel } from "../interfaces";
import { Helpers } from "../utilities";
import {meetings as MeetingList} from "../Configs/meetings";

@Component({
  selector: 'app-event-calendar',
  templateUrl: "./eventCalendar.template.html",
  styles: [`
    .clickable-card {
      cursor: pointer;
      text-decoration: none;
      color: inherit;
      position: relative;
      height: 100%;
      width: 100%;
      display:inline-block;
    }

    .clickable-card .fa-external-link-alt {
      position: absolute;
      top: 1rem;
      right: 1rem;
      color: white;
    }
  `]
})

export class EventCalendarComponent implements OnInit {
  @Input()
  public startDate = new Date();
  @Input()
  public endDate!: Date;
  @Input()
  public allowFiltering = true;
  @Input()
  public selectedType = "all";
  public meetingTypes = [{
    label: "Events",
    value: "general",
    style: "primary"
  }, {
    label: "Continuing Education",
    value: "ce",
    style: "success"
  }, {
    label: "Service Projects",
    value: "project",
    style: "info"
  }, {
    label: "All",
    value: "all",
    style: "dark"
  }];
  public meetings: (MeetingModel | CEMeetingModel | ProjectModel)[] = [];
  public showingMeetings: (MeetingModel | CEMeetingModel | ProjectModel)[] = [];
  public helpers = new Helpers();
  public constructor() {
  }

  public ngOnInit() {
    this.meetings = [];
    MeetingList.forEach((item: any) => {
      const currDate = new Date(item.date);
      if (currDate >= this.startDate && (this.endDate ? currDate < this.endDate : true)) {
        switch (item.type) {
          case "project":
            this.meetings.push(new ProjectModel(
              new Date(item.date),
              item.type,
              item.title,
              item.description,
              item.location,
              item.organizers,
              item.endDate ? new Date(item.endDate) : null,
              item.link,
              item.imageUrl,
              item.subtitle,
              item.file
            ));
            break;
          case "ce":
            this.meetings.push(new CEMeetingModel(
              new Date(item.date),
              item.type,
              item.title,
              item.description,
              item.location,
              item.speaker,
              item.endDate ? new Date(item.endDate) : null,
              item.link,
              item.imageUrl,
              item.subtitle
            ));
            break;
          case "general":
          default:
            this.meetings.push(new MeetingModel(
              new Date(item.date),
              item.type,
              item.title,
              item.description,
              item.location,
              item.endDate ? new Date(item.endDate) : null,
              item.link,
              item.imageUrl,
              item.subtitle
            ));
        }
      }
    });
    this.meetings = this.meetings.sort((a: MeetingModel, b: MeetingModel) => a.date > b.date ? 1 : -1);
    this.filterMeetings(this.selectedType);
  }

  public filterMeetings(filterType: string) {
    this.selectedType = filterType;
    if (filterType === 'all') {
      this.showingMeetings = this.meetings;
    } else {
      this.showingMeetings = this.meetings.filter((currMeeting: (MeetingModel | CEMeetingModel | ProjectModel)) => {
        return currMeeting.type === filterType;
      });
    }
  }
}
