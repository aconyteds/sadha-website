import { Component } from '@angular/core';
import { officers } from "../Configs/officers";
import config from "../Configs/config";

@Component({
  selector: 'app-continuing-education',
  templateUrl: "./ce.template.html",
  styles: [`
  `]
})

export class ContinuingEducationComponent {
  public secretary = officers.filter((officer) => officer.position === "Secretary")[0];
  public term: string = config.term;
  public constructor() { }
}
