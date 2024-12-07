import { Component } from '@angular/core';
import { officers } from '../Configs/officers';

@Component({
  selector: 'app-home',
  templateUrl: './home.template.html',
  styleUrls: ['./home.styles.scss'],
})
export class HomeComponent {
  public endDate = new Date(new Date().setDate(new Date().getDate() + 90));
  public secretary = officers.filter(
    (officer) => officer.position === 'Secretary'
  )[0];
  public showRDHStudyClubLink: boolean;
  public showRaffleContest: boolean;
  public constructor() {
    this.showRDHStudyClubLink = new Date() < new Date('1/1/22');
    this.showRaffleContest = new Date() < new Date('3/3/2025');
  }
}
