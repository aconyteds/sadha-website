import { Component } from '@angular/core';
import { config } from '../Configs/config';
import { officers } from "../Configs/officers";

@Component({
  selector: 'app-meetings',
  templateUrl: "./meetings.template.html",
  styles: [``]
})

export class MeetingsComponent {
  public secretary = officers.filter((officer) => officer.position === "Secretary")[0];
  public term: string = config.term;
  public constructor() {
  }
}
