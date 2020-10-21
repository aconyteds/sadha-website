import { Component, Input } from '@angular/core';
import { CEMeetingModel } from "../interfaces";
import { Helpers } from "../utilities";

@Component({
  selector: 'app-ce-meeting',
  template: `
    <div  class="card m-2">
      <div class="card-header bg-success text-white">
        <h3 class="text-center">{{helpers.getFullMonthDate(data.date)}}</h3>
      </div>
      <div class="card-body">
        <p>{{data.title}}</p>
        <p *ngIf="data.description">{{data.description}}</p>
        <div class="row">
          <div class="col">
            <strong>Start: </strong> CE starts at {{helpers.getStandardTime(data.date)}}
          </div>
          <div class="col" *ngIf="data.endDate">
            <strong>End: </strong> CE ends at {{helpers.getStandardTime(data.endDate)}} on {{helpers.getFullMonthDate(data.endDate)}}
          </div>
        </div>
        <div class="row" *ngIf="data.location">
          <div class="col">
            <strong>Location: </strong> {{data.location}}
          </div>
        </div>
        <div class="row">
          <div class="col">
            <strong>Speaker: </strong> {{data.speaker}}
          </div>
        </div>
      </div>
      <div class="card-footer">
        Continuing Education
      </div>
    </div>
  `,
  styles: [`
  `]
})
export class CEMeetingComponent {
  @Input()
  public data: CEMeetingModel;
  public helpers = new Helpers();
  constructor() {}
}
