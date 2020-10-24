import { Component } from '@angular/core';
import { officers } from "../Configs/officers";

@Component({
  selector: 'app-continuing-education',
  templateUrl: "./ce.template.html",
  styles: [`
  `]
})

export class ContinuingEducationComponent {
  public secretary = officers.filter((officer) => officer.position === "Secretary")[0];
  public constructor() {}
}
