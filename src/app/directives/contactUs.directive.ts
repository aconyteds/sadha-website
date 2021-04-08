import { Directive, ElementRef } from "@angular/core";
import { officers } from "../Configs/officers";

@Directive({
  selector: '[appContactUs]'
})
export class ContactUsDirective {
  public secretary = officers.filter((officer) => officer.position === "Secretary")[0];
  constructor(public el: ElementRef) {
    el.nativeElement.href = `mailto:${this.secretary.email}`;
    el.nativeElement.title = `Email ${this.secretary.name} - SADHA ${this.secretary.position}`;
  }
}
