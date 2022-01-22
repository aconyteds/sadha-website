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
        <div *ngIf="!!data.imageUrl" class="row justify-content-center">
          <div class="col-auto">
            <img [src]="data.imageUrl" width="100%">
          </div>
        </div>
        <p>{{data.title}}</p>
        <p *ngIf="!!data.subtitle"><strong>{{data.subtitle}}</strong></p>
        <p *ngIf="data.description">{{data.description}}</p>
        <div class="row">
          <div class="col" *ngIf="helpers.getStandardTime(data.date) !== '0:00 A.M.'">
            <strong>Start: </strong> {{helpers.getStandardTime(data.date)}}
          </div>
          <div class="col" *ngIf="helpers.getStandardTime(data.date) === '0:00 A.M.'">
            <strong>Starts: </strong> {{helpers.getFullMonthDate(data.date)}}
          </div>
          <div class="col" *ngIf="data.endDate">
            <strong>Ends: </strong> {{helpers.getFullMonthDate(data.endDate)}}
            <span *ngIf="helpers.getStandardTime(data.endDate) !== '0:00 A.M.'">@ {{helpers.getStandardTime(data.endDate)}}</span>
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
  constructor() { }
}
