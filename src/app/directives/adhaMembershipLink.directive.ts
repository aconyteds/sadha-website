import { Directive, ElementRef, Renderer2, OnInit} from "@angular/core";
import {LINKS} from "../Configs/links";

@Directive({
  selector: '[appADHAMembershipLink]'
})
export class ADHAMembershipLinkDirective implements OnInit {
  constructor(
    public el: ElementRef,
    public renderer: Renderer2
  ) {
    el.nativeElement.href = LINKS.adhaCreateAccount;
    el.nativeElement.target = "_blank";
    el.nativeElement.title = `Open ADHA Membership page`;
  }

  public ngOnInit() {
    const externalLinkIcon = document.createElement("i");
    externalLinkIcon.className = "ml-1 fas fa-external-link-alt";
    this.renderer.appendChild(this.el.nativeElement, externalLinkIcon);
  }
}
