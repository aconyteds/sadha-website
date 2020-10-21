import { Component, Input } from '@angular/core';
import { ProjectModel } from "../interfaces";
import { Helpers } from "../utilities";

@Component({
  selector: 'app-project-meeting',
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
            <strong>Start: </strong> CE starts at {{helpers.getStandardTime(data.date)}}
          </div>
        </div>
        <div class="row">
          <div class="col">
            <strong>Location: </strong> {{data.location}}
          </div>
        </div>
        <ul class="list-group" *ngIf="data.organizers.length > 0">
          <li class="list-group-item active">Organizer{{data.organizers.length > 1?"s":""}}</li>
          <li class="list-group-item" *ngFor="let organizer of data.organizers">{{organizer.name}}</li>
        </ul>
      </div>
      <div class="card-footer">
        Continuing Education
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
