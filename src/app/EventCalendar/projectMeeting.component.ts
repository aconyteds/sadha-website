import { Component, Input } from '@angular/core';
import { ProjectModel } from "../interfaces";
import { Helpers } from "../utilities";

@Component({
  selector: 'app-project-meeting',
  template: `
    <div  class="card m-2">
      <div class="card-header bg-success text-white">
        <h3 class="text-center">{{helpers.getFullMonthDate(data.date)}} <span *ngIf="data.endDate"> - {{helpers.getFullMonthDate(data.endDate)}}</span></h3>
      </div>
      <div class="card-body">
        <div *ngIf="!!data.imageUrl" class="row justify-content-center">
          <div class="col-auto">
            <img [src]="data.imageUrl" width="100%">
          </div>
        </div>
        <p>{{data.title}}</p>
        <p *ngIf="data.subtitle"><strong>{{data.subtitle}}</strong></p>
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
        <div class="row">
          <div class="col">
            <strong>Location: </strong> {{data.location}}
          </div>
        </div>
        <ul class="list-group" *ngIf="data.organizers?.length > 0">
          <li class="list-group-item active">Organizer{{data.organizers.length > 1?"s":""}}</li>
          <li class="list-group-item" *ngFor="let organizer of data.organizers">{{organizer.name}}</li>
        </ul>
      </div>
      <div class="card-footer">
        <div class="row justify-content-between">
          <div class="col-auto">
            Community Service
          </div>
          <div class="col-auto" *ngIf="data.file">
            <a [href]="data.file.link" target="_blank">{{data.file.name}}</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
  `]
})
export class ProjectMeetingComponent {
  @Input()
  public data: ProjectModel;
  public helpers = new Helpers();
  constructor() {}
}
