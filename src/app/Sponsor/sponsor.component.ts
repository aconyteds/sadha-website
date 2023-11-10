import { Component } from '@angular/core';

interface Sponsor {
  title: string;
  subTitle: string;
  image: string;
  url: string;
}
@Component({
  selector: 'app-sponsor',
  templateUrl: "./sponsor.template.html",
  styles: [`
  `]
})
export class SponsorComponent {
  public sponsors: Sponsor[] = [{
    title: "Dental Partners",
    subTitle: "FOR ALL YOUR EMPLOYMENT NEEDS",
    image: "./assets/dentalPartners.jpg",
    url: "https://dentalpartnersllc.com/"
  }];
  public constructor() {}
}
