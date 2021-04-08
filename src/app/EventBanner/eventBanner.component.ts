import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-event-banner',
  template: `<div *ngIf="showWarning" class="alert alert-warning mt-2 mb-2">General Meetings and Continuing Education meetings will be offered via virtual Go To Meetings every month starting September 2020 for the 2020-2021 year.</div>`,
  styles: [``]
})
export class EventBannerComponent {
  @Input()
  public showWarning = true;
}
