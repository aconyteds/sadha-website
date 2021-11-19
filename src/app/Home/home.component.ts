import { Component } from '@angular/core';
import {officers} from "../Configs/officers";

@Component({
  selector: 'app-home',
  templateUrl: "./home.template.html",
  styles: [`
  `]
})

export class HomeComponent {
  public endDate = new Date(new Date().setDate(new Date().getDate() + 30));
  public secretary = officers.filter((officer) => officer.position === "Secretary")[0];
  public showRDHStudyClubLink: boolean;
  public constructor() {
    this.showRDHStudyClubLink = new Date() < new Date('1/1/22');
  }
}
