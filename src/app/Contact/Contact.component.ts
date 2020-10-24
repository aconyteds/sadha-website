import { Component } from '@angular/core';
import { officers } from "../Configs/officers";

@Component({
  selector: 'app-contact',
  templateUrl: "./contact.template.html",
  styles: [`
    .contact-sections-container > * {
      margin-top: 3rem;
    }
  `]
})
export class ContactComponent {
  public secretary = officers.filter((officer) => officer.position === "Secretary")[0];
  public constructor() {}
}
