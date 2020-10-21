import { Component, Input } from '@angular/core';
import { MeetingModel } from "../interfaces";
import { Helpers } from "../utilities";

@Component({
  selector: 'app-general-meeting',
  template: `
    <div  class="card m-2">
      <div class="card-header bg-primary text-white">
        <h3 class="text-center">{{helpers.getFullMonthDate(data.date)}}</h3>
      </div>
      <div class="card-body">
        <p>{{data.title}}</p>
        <p *ngIf="data.description">{{data.description}}</p>
        <div class="row">
          <div class="col">
            <strong>Start: </strong> Meeting starts at {{helpers.getStandardTime(data.date)}}
          </div>
        </div>
        <div class="row">
          <div class="col">
            <strong>Location: </strong> {{data.location}}
          </div>
        </div>
      </div>
      <div class="card-footer">
        General Meeting
      </div>
    </div>
  `,
  styles: [`
  `]
})
export class GeneralMeetingComponent {
  @Input()
  public data: MeetingModel;
  public helpers = new Helpers();
  constructor() {}
}
