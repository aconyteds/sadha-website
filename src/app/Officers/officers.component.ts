import { Component } from '@angular/core';
import { officers } from "../Configs/officers";
import { Officer } from "../interfaces";
import config from '../Configs/config';

@Component({
  selector: 'app-officers',
  templateUrl: "./officers.template.html",
  styles: [`
  `]
})

export class OfficersComponent {
  public officers: Officer[] = officers;
  public term: string = config.term;
  public constructor() { }
}
