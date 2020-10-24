import { Component } from '@angular/core';
import { officers } from "../Configs/officers";
import { Officer } from "../interfaces";

@Component({
  selector: 'app-officers',
  templateUrl: "./officers.template.html",
  styles: [`
  `]
})

export class OfficersComponent {
  public officers: Officer[] = officers;
  public constructor() {}
}
