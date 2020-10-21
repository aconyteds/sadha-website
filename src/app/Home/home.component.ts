import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: "./home.template.html",
  styles: [`
  `]
})

export class HomeComponent {
  public endDate = new Date(new Date().setDate(new Date().getDate() + 30));
  public constructor() {}
}
